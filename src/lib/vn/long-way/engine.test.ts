import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { describe, test } from "node:test";
import { fileURLToPath } from "node:url";
import { autoplay, createRuntime, prepareScript, readMeter, type Script } from "./engine.ts";
import { emphasize, plainText } from "./text.ts";

const storyPath = fileURLToPath(
  new URL("../../../../public/vn/long-way/story.json", import.meta.url),
);
const artRoot = fileURLToPath(new URL("../../../../public/vn/long-way/", import.meta.url));

function loadStory(): Script {
  return prepareScript(JSON.parse(readFileSync(storyPath, "utf8")));
}

describe("emphasis", () => {
  test("renders italic and bold as text, not asterisks", () => {
    assert.equal(plainText("Ride *that*? With **him**."), "Ride that? With him.");
    const spans = emphasize("a *b* and **c**");
    assert.deepEqual(
      spans.map((span) => [span.text, span.italic, span.bold]),
      [
        ["a ", false, false],
        ["b", true, false],
        [" and ", false, false],
        ["c", false, true],
      ],
    );
  });
});

describe("script rules", () => {
  test("effects apply before an option's own conditions, and a later background clears a CG", () => {
    const script = prepareScript({
      start: "s",
      meters: [
        { id: "trust", initial: 0 },
        { id: "affection", initial: 0 },
        { id: "banter", initial: 0 },
        { id: "pride", initial: 0 },
      ],
      derived: {
        heart: {
          sum: [{ var: "trust" }, { var: "affection" }, { floor_div: [{ var: "banter" }, 2] }],
        },
      },
      flags: [
        { id: "took_deal", initial: false },
        { id: "ready", initial: false },
      ],
      endings: [
        {
          id: "hollow",
          title: "Hollow",
          priority: 1,
          cond: { flag: "took_deal" },
          entry: "hollow",
        },
        {
          id: "true",
          title: "True",
          priority: 2,
          cond: { var: "pride", op: ">=", value: 0 },
          entry: "true",
        },
      ],
      assets: { bg_a: "art/bg/a.png", cg_a: "art/cg/a.png" },
      chapters: [
        {
          id: "c1",
          number: 1,
          title: "One",
          scenes: [
            {
              id: "s",
              steps: [
                { type: "bg", id: "bg_a" },
                { type: "cg", id: "cg_a" },
                { type: "narrate", text: "Start." },
                { type: "bg", id: "bg_b" },
                { type: "say", speaker: "zizzy", expression: "smile", text: "Hello." },
                {
                  type: "choice",
                  id: "C1",
                  prompt: "Pick",
                  options: [
                    {
                      key: "A",
                      label: "Trust",
                      effects: { meters: { trust: 1, banter: 3 }, flags: {} },
                      steps: [
                        { type: "narrate", text: "Trusted." },
                        {
                          type: "if",
                          cond: { var: "trust", op: ">=", value: 1 },
                          then: [
                            { type: "say", speaker: "pony", expression: "smile", text: "Already." },
                          ],
                          else: [{ type: "say", speaker: "pony", text: "Not yet." }],
                        },
                      ],
                    },
                    {
                      key: "B",
                      label: "Deal",
                      effects: { flags: { took_deal: true } },
                      steps: [{ type: "narrate", text: "Dealt." }],
                    },
                    {
                      key: "C",
                      label: "Hidden",
                      cond: { flag: "took_deal" },
                      steps: [{ type: "narrate", text: "Nope." }],
                    },
                  ],
                },
                {
                  type: "set",
                  flags: {
                    ready: {
                      and: [{ var: "trust", op: ">=", value: 1 }, { not: { flag: "took_deal" } }],
                    },
                  },
                },
                { type: "jump", target: "end" },
              ],
            },
            {
              id: "end",
              steps: [
                { type: "narrate", text: "End scene." },
                {
                  type: "if",
                  cond: { ending: "hollow" },
                  then: [{ type: "jump", target: "hollow" }],
                  else: [
                    {
                      type: "if",
                      cond: { ending: "true" },
                      then: [{ type: "jump", target: "true" }],
                      else: [],
                    },
                  ],
                },
              ],
            },
            {
              id: "hollow",
              steps: [
                { type: "narrate", text: "Hollow end." },
                { type: "ending", id: "hollow", title: "Hollow" },
              ],
            },
            {
              id: "true",
              steps: [
                { type: "narrate", text: "True end." },
                { type: "ending", id: "true", title: "True" },
              ],
            },
          ],
        },
      ],
    });

    assert.equal(script.assets.bg_a, "art/bg/a.webp");
    const opened = createRuntime(script);
    assert.equal(opened.beat.kind === "line" && opened.beat.text, "Start.");
    assert.equal(opened.runtime.cg, "cg_a");
    assert.equal(opened.runtime.bg, "bg_a");

    const trusted = autoplay(script, { C1: "A" });
    assert.equal(trusted.beat.kind === "ending" && trusted.beat.id, "true");
    assert.equal(trusted.runtime.flags.ready, true);
    assert.equal(readMeter(script, trusted.runtime, "heart"), 2);
    assert.equal(trusted.runtime.cg, null);
    assert.ok(trusted.runtime.log.some((line) => line.text === "Already."));
    assert.equal(trusted.runtime.seenCg.includes("cg_a"), true);

    let hidden = true;
    const dealt = autoplay(
      script,
      { C1: "B" },
      {
        onChoice(choice) {
          hidden = choice.options.some((option) => option.key === "C");
        },
      },
    );
    assert.equal(hidden, false);
    assert.equal(dealt.beat.kind === "ending" && dealt.beat.id, "hollow");
    assert.equal(dealt.runtime.flags.ready, false);
  });
});

describe("The Long Way Round", () => {
  const script = loadStory();

  test("ships webp art for every asset the script names", () => {
    assert.equal(script.chapters.length, 11);
    assert.equal(script.sceneIndex.size, 97);
    assert.equal(Object.keys(script.assets).length, 70);
    assert.equal(
      Object.values(script.assets).filter((rel) => rel.startsWith("spicy/")).length,
      11,
    );
    for (const [id, rel] of Object.entries(script.assets)) {
      assert.equal(rel.endsWith(".webp"), true, id);
      const file = `${artRoot}${rel.replace(/^art\//, "")}`;
      assert.equal(existsSync(file), true, file);
    }
  });

  test("reaches each of the four endings", () => {
    const routes: {
      id: string;
      title: string;
      picks: Record<string, string>;
      heart: number;
      trust: number;
    }[] = [
      {
        id: "true",
        title: "The Long Way Round",
        heart: 10,
        trust: 8,
        picks: {
          C1: "B",
          C2: "A",
          C3: "B",
          C4: "A",
          C5: "B",
          C6: "A",
          C7a: "A",
          C7: "C",
          C8: "A",
          C9: "B",
          C10: "A",
        },
      },
      {
        id: "good",
        title: "Second Place",
        heart: 6,
        trust: 1,
        picks: {
          C1: "A",
          C2: "A",
          C3: "A",
          C4: "A",
          C5: "A",
          C6: "B",
          C7a: "A",
          C7: "A",
          C8: "B",
          C9: "A",
          C10: "A",
        },
      },
      {
        id: "bittersweet",
        title: "Separate Roads",
        heart: 2,
        trust: 2,
        picks: {
          C1: "A",
          C2: "A",
          C3: "A",
          C4: "C",
          C5: "C",
          C6: "B",
          C7a: "B",
          C7: "B",
          C8: "A",
          C9: "C",
          C10: "C",
        },
      },
      {
        id: "hollow",
        title: "The Trophy",
        heart: 3,
        trust: 1,
        picks: {
          C1: "A",
          C2: "A",
          C3: "A",
          C4: "A",
          C5: "A",
          C6: "B",
          C7a: "B",
          C7: "B",
          C8: "C",
          C9: "C",
          C10: "B",
        },
      },
    ];

    for (const route of routes) {
      let chars = 0;
      let c10: string[] = [];
      const played = autoplay(script, route.picks, {
        onLine(line) {
          chars += line.text.length;
        },
        onChoice(choice) {
          if (choice.id === "C10") c10 = choice.options.map((option) => option.key);
        },
      });
      assert.equal(played.beat.kind, "ending", route.id);
      if (played.beat.kind !== "ending") continue;
      assert.equal(played.beat.id, route.id);
      assert.equal(played.beat.title, route.title);
      assert.equal(played.runtime.cursor.sceneId.startsWith(`ch11_end_${route.id}`), true);
      assert.equal(readMeter(script, played.runtime, "trust"), route.trust, route.id);
      assert.equal(readMeter(script, played.runtime, "heart"), route.heart, route.id);
      assert.equal(played.runtime.chapter.number, 11);
      assert.ok(chars > 100000, `${route.id} read ${chars} characters`);
      assert.ok(played.runtime.seenCg.includes("cg_ch01_hat_draw"));
      const endingCg: Record<string, string> = {
        true: "cg_ch11_true_summit_kiss",
        good: "cg_ch11_good_finish",
        bittersweet: "cg_ch11_bitter_ferry",
        hollow: "cg_ch11_hollow_trophy",
      };
      assert.ok(played.runtime.seenCg.includes(endingCg[route.id]), route.id);
      if (route.id === "hollow") assert.deepEqual(c10, ["A", "B", "C"]);
      else assert.deepEqual(c10, ["A", "C"]);
    }
  });

  test("the low-heart finish is bittersweet, and the high route checks affection before C9", () => {
    const quiet = autoplay(script, {
      C1: "A",
      C2: "B",
      C3: "A",
      C4: "C",
      C5: "C",
      C6: "B",
      C7a: "B",
      C7: "B",
      C8: "A",
      C9: "C",
      C10: "A",
    });
    assert.equal(quiet.beat.kind === "ending" && quiet.beat.id, "bittersweet");
    assert.ok(readMeter(script, quiet.runtime, "heart") <= 4);

    const high = autoplay(script, {
      C1: "A",
      C2: "A",
      C3: "B",
      C4: "A",
      C5: "A",
      C6: "A",
      C7a: "A",
      C7: "B",
      C8: "A",
      C9: "A",
      C10: "A",
    });
    assert.equal(high.runtime.flags.high_route_eligible, true);
    assert.equal(high.runtime.flags.high_route, true);

    const lateAffection = autoplay(script, {
      C1: "A",
      C2: "A",
      C3: "B",
      C4: "A",
      C5: "C",
      C6: "A",
      C7a: "A",
      C7: "B",
      C8: "A",
      C9: "A",
      C10: "A",
    });
    assert.equal(lateAffection.runtime.flags.high_route_eligible, false);
    assert.equal(lateAffection.runtime.flags.high_route, false);
    assert.equal(readMeter(script, lateAffection.runtime, "affection"), 3);

    const declined = autoplay(script, {
      C1: "A",
      C2: "A",
      C3: "B",
      C4: "A",
      C5: "A",
      C6: "A",
      C7a: "A",
      C7: "B",
      C8: "A",
      C9: "C",
      C10: "A",
    });
    assert.equal(declined.runtime.flags.high_route_eligible, true);
    assert.equal(declined.runtime.flags.high_route, false);
  });
});

describe("The Long Way Round extra scenes", () => {
  const script = loadStory();

  test("keeps each extra scene on its own route", () => {
    const seen = (picks: Record<string, string>) =>
      autoplay(script, picks).runtime.seenCg.filter((id) => id.startsWith("cg_spicy_"));

    const truth = autoplay(script, {
      C1: "B",
      C2: "A",
      C3: "B",
      C4: "A",
      C5: "B",
      C6: "A",
      C7a: "A",
      C7: "C",
      C8: "A",
      C9: "B",
      C10: "A",
    });
    assert.equal(truth.beat.kind === "ending" && truth.beat.id, "true");
    assert.equal(readMeter(script, truth.runtime, "trust"), 8);
    assert.equal(readMeter(script, truth.runtime, "heart"), 10);
    for (const id of [
      "cg_spicy_ch11_guesthouse_window",
      "cg_spicy_ch11_ferry_morning",
      "cg_spicy_ch11t_quilt_morning",
      "cg_spicy_ch11t_top_of_stairs",
    ]) {
      assert.equal(truth.runtime.seenCg.includes(id), true, id);
    }
    assert.equal(truth.runtime.seenCg.includes("cg_spicy_ch09_divider_down"), false);
    assert.equal(truth.runtime.seenCg.includes("cg_spicy_ch11g_landing_kiss"), false);

    const high = seen({
      C1: "A",
      C2: "A",
      C3: "B",
      C4: "A",
      C5: "A",
      C6: "A",
      C7a: "A",
      C7: "B",
      C8: "A",
      C9: "A",
      C10: "A",
    });
    assert.equal(high.includes("cg_spicy_ch09_divider_down"), true);
    assert.equal(high.includes("cg_spicy_ch09_predawn_tangle"), true);

    const good = seen({
      C1: "A",
      C2: "A",
      C3: "A",
      C4: "A",
      C5: "A",
      C6: "B",
      C7a: "A",
      C7: "A",
      C8: "B",
      C9: "A",
      C10: "A",
    });
    assert.equal(good.includes("cg_spicy_ch11g_landing_kiss"), true);
    assert.equal(good.includes("cg_spicy_ch11g_morning_quilt"), true);
    assert.equal(good.includes("cg_spicy_ch09_divider_down"), false);
    assert.equal(good.includes("cg_spicy_ch11_guesthouse_window"), false);

    assert.deepEqual(
      seen({
        C1: "A",
        C2: "A",
        C3: "A",
        C4: "A",
        C5: "A",
        C6: "B",
        C7a: "B",
        C7: "B",
        C8: "C",
        C9: "C",
        C10: "B",
      }),
      [],
    );
    assert.deepEqual(
      seen({
        C1: "A",
        C2: "A",
        C3: "A",
        C4: "C",
        C5: "C",
        C6: "B",
        C7a: "B",
        C7: "B",
        C8: "A",
        C9: "C",
        C10: "C",
      }),
      [],
    );
  });
});
