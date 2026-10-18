import type { Scene, Story } from "./types";

const scenes = [
  {
    "id": "a-door",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The hill road gives up just after dark. Zizzy comes through on the last of it, snow on her hat and none of it polite."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "You didn't lock it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I heard your boots from the sink. A lock felt like a dare."
      },
      {
        "speaker": "narrator",
        "text": "The lamp over the sink has been awake longer than anyone in the house. It makes a small honest circle and ignores the rest."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The ferry is gone. Giraffy knows. He just hasn't used a voice for it yet."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Then we are not walking anyone anywhere tonight."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "We are boiling water and telling the truth in pieces. That is the whole plan I have."
      },
      {
        "speaker": "narrator",
        "text": "She looks at the chair. A dark coat is folded on the seat, and it is not the one still dripping off her shoulders."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "That isn't mine."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "It's Bruno's. You wore it to the shop and left the weather in the pocket."
      },
      {
        "speaker": "narrator",
        "text": "Outside, the step is already losing its shape. The hinge ticks as the cold works on the door."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "If the road is shut, they will come here. All of them. We should say so before the kettle gets ideas."
      }
    ],
    "choices": [
      {
        "label": "Put the kettle on first.",
        "goto": "a-kettle-first"
      },
      {
        "label": "Watch the lane.",
        "goto": "a-lane"
      }
    ]
  },
  {
    "id": "a-kettle-first",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pony feeds the stove like it has been patient on purpose. The kettle takes the flame without applause."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Two cups is a wish. Six is a fact. I'll wash the ones we hid."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "You talk about dishes when a night gets bigger than the room."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Dishes have edges. The night doesn't. I start where my hands know the work."
      },
      {
        "speaker": "narrator",
        "text": "Steam ghosts the window over the stove. For a moment the snow looks farther away than it is."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Leave a cup out for Fenn. He'll count them and be hurt if the number is wrong."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "He can be hurt by arithmetic. It's one of his better qualities."
      },
      {
        "speaker": "narrator",
        "text": "A boot scuffs the step, then stops, as if the person attached to it is deciding whether the house is ready."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "That's not Bruno. Bruno apologizes to the door before he opens it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then it's Fenn, and he is already sorry about the snow on his shoes."
      }
    ],
    "choices": [
      {
        "label": "Let him in.",
        "goto": "a-fenn"
      }
    ],
    "next": "a-fenn"
  },
  {
    "id": "a-lane",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They stand in the doorway instead of at the stove. The lane is a white argument between the houses."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "One streetlamp. It looks embarrassed to be the only one working."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Giraffy filled it last week. He said a dark lane makes people invent errands."
      },
      {
        "speaker": "narrator",
        "text": "Footprints come up from the hill and lose their nerve halfway. Whoever made them turned around."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Those are small. Pia, or Clover walking in Pia's shadow."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "They share a shadow on purpose. It's rude to mention and worse to ignore."
      },
      {
        "speaker": "narrator",
        "text": "Another set, newer, comes straight on. The person is not hurrying. Hurrying is how you fall."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Fenn. He walks like the ground has to give permission."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Good. If Fenn is out, he has already checked who else is."
      },
      {
        "speaker": "narrator",
        "text": "The kettle, neglected, ticks on the stove behind them. Pony hears it and pretends he doesn't, for three more breaths."
      }
    ],
    "choices": [
      {
        "label": "Go back in before he knocks.",
        "goto": "a-fenn"
      }
    ],
    "next": "a-fenn"
  },
  {
    "id": "a-fenn",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Fenn comes in without a speech. Snow slides off his hood and dots the tile like it means to stay."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The hill is shut past the bend. I counted two lanterns still lit and one that quit."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Hello to you too."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Hello. I did the useful part first. The polite part is glad you're both upright."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Cup's going to exist in a minute. Don't start the audit until it does."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Pia and Clover are ten minutes back. They were arguing about a note and trying not to slip."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy's ears go still. The coat on the chair suddenly has a pocket with a private life."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "What note."
      },
      {
        "speaker": "fenn",
        "expression": "tense",
        "text": "I didn't read it. Pia did, or she read the shape of it. She gets proud about shapes."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then we will let her arrive with her own mouth. Sit. Your cuffs are a weather report."
      },
      {
        "speaker": "narrator",
        "text": "Fenn sits where he can see the door and the kettle at the same time. He looks like a man who has decided both might need him."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Giraffy is on the pier. He has a jar and no match, which is a sentence I don't like."
      }
    ],
    "choices": [
      {
        "label": "Wait for the others.",
        "goto": "a-pair"
      }
    ],
    "next": "a-pair"
  },
  {
    "id": "a-pair",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pia and Clover arrive as one weather system. Pia shakes her hat. Clover shakes the argument off her sleeves and fails."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "We should have waited at the shop. He said he was only going to the shop."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "The shop closed an hour ago. Waiting there would have been a performance for a locked door."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Shoes off or the tile files a complaint. Cups are real now."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "You always lead with porcelain. It's disarming and you know it."
      },
      {
        "speaker": "narrator",
        "text": "Clover sees the coat. Her face does the thing faces do when a fact sits down without being invited."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "That's his. He hates being discussed while his coat can hear."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I borrowed it. The letter in it is older than tonight. If we're going to be careful, let's be careful out loud."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "I saw the first line. I didn't mean to become a person who saw it. The pocket was open like a mouth."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Then we don't make you repeat it until he is here to own the coat."
      },
      {
        "speaker": "narrator",
        "text": "The kettle sings, late and proud. For a second everyone is grateful to have a noise that isn't a decision."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Pour hers first. She walked in from the hill like the hill was late, not her."
      }
    ],
    "choices": [
      {
        "label": "Ask about Giraffy.",
        "goto": "a-giraffy"
      }
    ],
    "next": "a-giraffy"
  },
  {
    "id": "a-giraffy",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The next knock is polite enough to be Giraffy. He comes in with a cold jar hugged to his coat and snow in his curls."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The pier is still a pier. The path to it is becoming a suggestion."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Match?"
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "I left them. On purpose, and then not on purpose. I don't like lighting one before I know the name."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You and your names. The water will take a flame without a biography."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The water takes everything. That's why the name matters before it goes."
      },
      {
        "speaker": "narrator",
        "text": "He sets the jar on the table as if it might listen. Fenn looks at it, then at the door, then at the empty hook where Bruno's scarf should be."
      },
      {
        "speaker": "fenn",
        "expression": "tense",
        "text": "Bruno isn't with his coat. Say that plainly so we stop walking around it."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "He was behind us at the corner. Then he wasn't. I thought he stopped to be brave in private."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Brave and lost look the same from the back. I don't like either one in this snow."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The road is shut, not the lane. If he is between the shop and here, he is cold and being an idiot with dignity."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I'll go back out if someone says the word. I already have the jar. It can be a reason."
      }
    ],
    "choices": [
      {
        "label": "Wait with the lamp in the window.",
        "goto": "a-wait"
      },
      {
        "label": "Go as far as the lamp post.",
        "goto": "a-watch"
      }
    ]
  },
  {
    "id": "a-wait",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They move the lamp to the window. It throws a square of yellow onto the snow, small as a promise and about as sturdy."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "If he can see the house, he can be angry at us later for not coming. Anger is warm."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "Anger is also how people fall into ditches because they were composing the speech."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I have composed that speech. It ends with 'you left your coat,' which is not my best work."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Sit. The couch holds three and a grievance. Fenn can have the arm."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I'll stand. Standing sees the lane. Sitting sees everyone's face, and those are loud."
      },
      {
        "speaker": "narrator",
        "text": "Giraffy stays by the jar. He turns it a quarter inch every minute, a habit with nowhere to go."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "I don't like a light that asks someone to arrive. It feels like a debt."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Then call it a kitchen doing what kitchens do. He knows this window."
      },
      {
        "speaker": "narrator",
        "text": "Time stretches the way it does when a door might open. The clock in the hall ticks like it is taking a side."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "If he isn't here by the time the kettle cools, I am going, speech or no speech."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Deal. I'll keep it from cooling out of spite."
      }
    ],
    "choices": [
      {
        "label": "Hear the step.",
        "goto": "a-knock"
      }
    ],
    "next": "a-knock"
  },
  {
    "id": "a-watch",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Fenn and Zizzy go as far as the streetlamp. The snow eats their footprints almost as fast as they make them."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Don't call his name unless you want the whole lane to know we're frightened."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "I am not frightened. I am annoyed in a coat that isn't even his."
      },
      {
        "speaker": "narrator",
        "text": "Under the lamp the snow looks gold. Beyond it, the lane is just a guess with fences."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Annoyed is allowed. Just don't march. Marching is how the hill wins."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "You counted lanterns. Count him. Where would Bruno stop if he didn't want to be seen stopping?"
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The pier. He thinks water is a private room. It isn't. It only pretends."
      },
      {
        "speaker": "narrator",
        "text": "A figure comes around the baker's fence, shoulders up, hands buried, walking like the snow is a conversation he is losing."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "There. Don't wave like a rescue. He'll never forgive the wave."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I'll wave like a neighbor. Neighbors get to live."
      },
      {
        "speaker": "narrator",
        "text": "Bruno sees them and stops. The stop lasts as long as a man needs to put his face back on."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Come on. Your coat started a rumor."
      }
    ],
    "choices": [
      {
        "label": "Bring him in.",
        "goto": "a-knock"
      }
    ],
    "next": "a-knock"
  },
  {
    "id": "a-knock",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Bruno stands on the mat like it might reject him. Snow melts out of his hair and into his collar.",
        "still": "welcome"
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "I was coming back. The water got loud, and then the lane got loud, and I let them take turns."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "You are late. The coat was on time. We have decided to forgive the coat first."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "That's fair. The coat has always had better manners."
      },
      {
        "speaker": "narrator",
        "text": "Pia does not hug him. She takes his cuffs and turns them right-side out, which is its own kind of welcome."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Your pocket had a letter in it. I saw the first line. I am telling you before the room tells you worse."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "That letter isn't mine. Zizzy, you put it there when the coat was yours for the afternoon."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "I know what I wrote. I didn't know the coat would attend a meeting about it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Nobody reads the rest tonight unless the person who wrote it says the night is for that."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Good. One unnamed thing at a time. I already brought mine in a jar."
      },
      {
        "speaker": "narrator",
        "text": "The room exhales. Seven people, one stove, and the understanding that the road will not be a way out before morning."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I'll take the sad cup. Someone should."
      }
    ],
    "choices": [
      {
        "label": "Make the room fit.",
        "goto": "a-small"
      }
    ],
    "next": "a-small"
  },
  {
    "id": "a-small",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Coats go on hooks until the hooks give up and the chair becomes a second hook. The room learns their shapes."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "If everyone talks at once, the kettle wins. One voice, then the next. We have hours. That is the problem and the gift."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I can go quiet. I have been practicing on the pier."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "You can go quiet after you eat. Quiet on an empty stomach becomes drama."
      },
      {
        "speaker": "narrator",
        "text": "Pony finds bread, butter, and a jar of something that used to be fruit. He sets them down like a treaty."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Some of us should sit where the lamp is kinder. This kitchen is getting proud of how full it is."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I'll stay by the stove. If I leave, someone will decide things without the person who wanted to wait."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "That is not a reason. It is a fear wearing a reason's coat. You can still take it to the other room."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I don't mind a wall. Walls don't ask who the lantern is for."
      },
      {
        "speaker": "narrator",
        "text": "The choice is not a vote so much as a drift. Half the night leans toward the crowded table. Half toward the room where the lamp can be a smaller country."
      }
    ],
    "choices": [
      {
        "label": "Keep everyone in the kitchen.",
        "goto": "k-cups"
      },
      {
        "label": "Let half of them have the lamp room.",
        "goto": "r-lamp"
      }
    ]
  },
  {
    "id": "k-cups",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They stay. Knees knock. The table becomes a shore and the cups are little boats that do not go anywhere."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "First cup is Zizzy's. She came in looking like the road had opinions."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Second is Bruno's. Late people get tea or they get stories told about them. Tea is kinder."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'll take kinder. I have had a sufficient amount of story for one pier."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Third is Clover, or she will supervise everyone else's sipping and call it care."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "I supervise because none of you notice when you are cold until you are sharp."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Fourth can be mine. I'll drink it slowly and pretend that is a personality."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I don't need fifth. The jar is enough company."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The jar is not a guest. You are. Cup. Both hands. No speeches until the first swallow."
      },
      {
        "speaker": "narrator",
        "text": "They drink. The room gets quieter in the way a room does when warmth starts doing its job."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "All right. Bruno. The shop. Tell it without making yourself the villain or the hero. We don't have chairs for either."
      }
    ],
    "next": "k-shop"
  },
  {
    "id": "k-shop",
    "background": "table",
    "lines": [
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "The shop had the matches Giraffy forgot and the bread Pony didn't ask for. I bought both. Then I stood outside and didn't come home."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "You can say you bought my matches. You don't have to look like you stole them."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I look like that when I am about to say something true. It's a medical condition."
      },
      {
        "speaker": "narrator",
        "text": "He turns the cup. The chip on the rim finds his thumb as if they have met before."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "The house was going to be full. I am good at full rooms for about twenty minutes. After that I become a coat on a chair."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "So you became a man on a pier instead. That is not an improvement. That is weather."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "The water doesn't ask follow-up questions. You do. I wanted a few minutes of not owing anyone an answer."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "You can have minutes. You don't get to vanish inside them. We are not a room that enjoys guessing."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Speak for yourself. I enjoy guessing. I am trying to retire."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Retirement starts after the bread. Eat. True things land better on a stomach."
      },
      {
        "speaker": "narrator",
        "text": "They eat. Butter on cold bread tastes like a decision to stay. Outside, the lane fills in their earlier courage."
      }
    ],
    "next": "k-note"
  },
  {
    "id": "k-note",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pia sets her cup down in a square of stove-light. She looks at the coat, then at Zizzy, then at her own hands."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "The first line said you were writing it before you knew if you were coming back. I shouldn't know that. I do."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Then you know the part I was worst at. The rest is messier and slightly braver."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "We can leave the rest in the pocket. A first line is not a confession. It is a doorway."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "Doorways are how people fall in. I would like fewer doorways until morning."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The letter exists whether we stare at it or not. Staring is optional. Pretending we didn't hear Pia is not."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I carried it all evening and didn't know. That's a stupid kind of loyalty. I'm sorry to both of you."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You were loyal to a pocket. There are worse religions."
      },
      {
        "speaker": "narrator",
        "text": "Giraffy almost smiles. It happens mostly in his eyes, where smiles go when a mouth is busy being careful."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I have a name I am not saying either. If hers can wait, mine can wait. Fair is fair, even when it is inconvenient."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Fair and inconvenient is this house's family motto. I'll embroider it if we survive the night."
      }
    ],
    "next": "k-rule"
  },
  {
    "id": "k-rule",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Clover stands, because some rules need a person's full height. The stove ticks behind her like a clerk."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "My rule is small. We don't read what wasn't handed to us. We don't make a person perform their worst paragraph for an audience."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "Your rule is kind. It is also how secrets become mold. I have lived in houses like that."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "And I have lived in houses where kindness meant opening every drawer. I didn't sleep there."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I wrote it. I get the drawer. If I hand it over, that's me. If I don't, you can be annoyed and still pass the bread."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Annoyed and buttered is my preferred guest."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Then the rule for tonight is Zizzy's, not ours. We can survive one night of not being the committee."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I resign from the committee. I was never sworn in."
      },
      {
        "speaker": "narrator",
        "text": "The argument does not end. It sits down, which is a different kind of ending, and better for the furniture."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Fine. Her drawer. But if you hover over that pocket, Pia, I will put a cup on your hand."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "A cup is not a punishment. You have lost your touch."
      }
    ],
    "next": "k-road"
  },
  {
    "id": "k-road",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Fenn goes to the window and comes back with a report he didn't want to enjoy having."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The lamp post is a rumor now. If the snow keeps this pace, the lane forgets the hill by midnight."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "The pier won't forget. Water doesn't take snow the same way. The jars I left will ice over if nobody turns them."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Jars can wait. People are the crop we're growing tonight."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "A frozen jar cracks. I don't like the sound it will make in the morning when this is supposed to be over."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Then we put it on the list under 'letter' and 'Bruno's talent for vanishing.' A list makes a night feel employed."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I am honored to be a bullet point."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Don't joke your way off the list. You scared me. I get to say that once, and then I'll be decent."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "Once is fair. I scared me too. The water was louder than my reasons. That's not a compliment to the water."
      },
      {
        "speaker": "narrator",
        "text": "Pia touches his sleeve, brief as a receipt. He nods. The room allows the nod to be the whole apology."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Employed nights still need a second round. I'll wash. Giraffy, you dry. You can't brood with a towel in your hands. I've checked."
      }
    ],
    "next": "k-sink"
  },
  {
    "id": "k-sink",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Zizzy ends up at the sink beside Pony because the room rearranged itself while they were being brave. Their elbows share a truce."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You don't have to tell me the second line."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "I know. That's why it's sitting in my mouth like a stone I might spit out anyway."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Spit it out later, if you want a witness. Not a jury. I have never looked good in a jury."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You look like a man who would bring the jury tea and apologize to the defendant."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "That is devastatingly accurate. I'm choosing to be flattered."
      },
      {
        "speaker": "narrator",
        "text": "The water runs warm. Outside, someone laughs once \u2014 Pia, bright and unwilling \u2014 and the house seems to remember it is a house."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If I had not come back, the letter would have been the last of me in your kitchen. I hated that sentence after I wrote it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then it is a bad sentence, and you are here to outlive it. That's a better plot."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Don't get literary over the dishes."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Too late. The sponge has heard things."
      }
    ],
    "next": "k-jar"
  },
  {
    "id": "k-jar",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Giraffy dries the jar instead of a plate. He is gentle with it, which gives him away."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "You can say a piece of the name. Not the whole thing. Pieces are how this night has agreed to work."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "It's for someone who used to meet me at the last post. Not a romance. Don't make your eyebrows do that."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "My eyebrows have a life. I don't control them. Go on."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "They took a job past the river. They said they'd write when the job had a chair. The chair happened. The writing didn't."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "A sibling."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "You always get there without making it a show. Yes. Older. Better at leaving than I am."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Leaving is a skill with a cost. I can invoice them if you want."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Don't. If the jar goes in the water, it's me saying the walk home still has a light on it. Not a summons."
      },
      {
        "speaker": "narrator",
        "text": "Fenn nods, which is a whole conversation for him. The towel is damp. The name, unfinished, sits more comfortably than it did."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Then we are all walking around with unsent things. Good. I was starting to feel dramatic alone."
      }
    ],
    "next": "k-hour"
  },
  {
    "id": "k-hour",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "An hour goes missing the way hours do in a warm room. The bread is a theory. The snow is a fact with a promotion."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "If we are going to the pier, we go before the lane decides it is a field."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "I can lead. I just came from there. I know which boards lie."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "You can lead if someone who is not you is allowed to tell you to turn around."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Hire Fenn. He tells the truth like he's returning a library book."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Accepted. We turn around when I say the footprints aren't worth it. No debate on the ice."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "And if some of us stay, the kettle doesn't get to feel abandoned. I see you, Pony."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I am a transparent man. It's the glasses."
      },
      {
        "speaker": "narrator",
        "text": "The jar is back in Giraffy's hands. The letter is still a rectangle in a pocket. Both can survive another hour, or neither can. The room is about to choose."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Say it, then. All of us down to the water, or the house keeps two."
      }
    ],
    "choices": [
      {
        "label": "Everyone to the pier.",
        "goto": "d-lane"
      },
      {
        "label": "Zizzy and Pony stay.",
        "goto": "s-house"
      }
    ]
  },
  {
    "id": "r-lamp",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Half of them take the lamp room. The couch is a small country with strict borders. Fenn remains in the doorway like a customs officer."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Zizzy, Bruno, Giraffy, with me. Pia and Clover can have the kitchen and their argument. Fenn floats."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I don't float. I occupy thresholds. It's a calling."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I'll take the floor. Couches make me feel like I owe a story."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I owe several. The floor is still available if you want to share the debt."
      },
      {
        "speaker": "narrator",
        "text": "The lamp is lower here. Faces go softer. The window shows snow arriving sideways, busy and rude."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "This room is where people say the thing they practiced. I can hear us about to do it."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Then we practice badly. Badly is warmer."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "I should start, since I am the one who made the house imagine a drowning."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "We're not imagining. We're remembering the version where you didn't knock. Don't dress it up."
      },
      {
        "speaker": "narrator",
        "text": "She says it from the doorway, coat still on, and then goes back to the kitchen as if the sentence can walk itself the rest of the way."
      }
    ],
    "next": "r-couch"
  },
  {
    "id": "r-couch",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "In the kitchen, Pia and Clover discover the bread at the same time and negotiate it like diplomats."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "You can be angry that I looked. You don't get to be angry that the sentence exists."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "I am angry that a pocket became a stage. He is shy in ways he won't advertise."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Bruno is shy the way a drum is shy. He hopes if he stands still we will forget the noise he is capable of."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "That is mean and exact. I hate how useful you are."
      },
      {
        "speaker": "narrator",
        "text": "They eat standing up. Crumbs gather in the cuff of Pia's cardigan. Clover picks them off without commenting, which is love if you know the dialect."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I won't repeat the line in there. Zizzy should be the one to put it in the room, if it goes in at all."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Thank you. I'll still watch you. Watching is not the same as not trusting. It is cousin to it."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Cousins are allowed at this party. The hill closed. Standards have dropped."
      },
      {
        "speaker": "narrator",
        "text": "From the lamp room, Bruno's voice rises and falls, not the words, just the shape of a man trying to be worth the walk back."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "If he makes himself small in there, I'm going in. Small is how he disappears without moving."
      }
    ],
    "next": "r-floor"
  },
  {
    "id": "r-floor",
    "background": "room",
    "lines": [
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I bought the matches and the bread and then I stood where the pier turns. I told myself I was checking the jars. I was checking whether I could be missed."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "You can be missed. Congratulations. It feels terrible. Welcome."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "You are not a gentle welcome committee."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I left once in a letter. I don't get to throw stones. I get to throw bread rolls. Different sport."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Nobody here is scoring your absence. We are only glad the water stayed a view and not a headline."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The jars are still out. If you were checking them, you did it without a match. That's not checking. That's haunting a dock."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "Haunting is fair. I didn't want to come in and be the large sad fact on the couch."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The couch is taken by nobody's fact. Sit higher. The floor is making you poetic."
      },
      {
        "speaker": "narrator",
        "text": "Bruno moves to the arm of the couch. His boots leave a dark kiss on the rug. Nobody scolds it. The rug has had worse nights."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "For the record, you were missed at minute six. I counted. It did not improve after that."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Minute six. I'll embroider that too, under Pony's motto."
      }
    ],
    "next": "r-stand"
  },
  {
    "id": "r-stand",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Giraffy does not sit. He holds the wall up with one shoulder and the jar with both hands."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "If we go out, we go for the jars, not for my family news. I don't want a procession."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Everything tonight is accidentally a procession. Look at us. We can't cross a room without forming a committee."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The committee brought snacks. History will be kind."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "My older sibling took a job past the river. They were supposed to write when there was a chair. There is a chair. There isn't a letter. I don't want that to become the group's project."
      },
      {
        "speaker": "narrator",
        "text": "The lamp pops, a small private thunder. Everyone lets the sentence sit until it cools."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Then it isn't a project. It's a fact we carry so you don't have to carry it alone across the ice."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "You are better at this when you stop trying to vanish. Write that down somewhere you won't lose it."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "We'll go if the lane allows. Not as a procession. As people who don't want to hear glass crack at dawn."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "And the other letter stays a pocket, unless I say otherwise. I am saying otherwise is not now."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Now is tea and the next honest thing. The honest thing can be small. Small still counts after midnight."
      }
    ],
    "next": "r-almost"
  },
  {
    "id": "r-almost",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pony almost says the second line of Zizzy's letter. He feels it in his mouth and swallows it like a pit."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "You were about to be careful in the wrong direction."
      },
      {
        "speaker": "pony",
        "expression": "tense",
        "text": "I know the shape of the next sentence. Pia isn't the only one who saw a shape. The coat lived on my chair."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Then say you know a shape, not the words. Words are mine until I spend them."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I know a shape. It scared you. It scared me. We are both still in the room. That is the whole review."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "A kind review. Most of mine are shorter and worse."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I carried the shape all evening. I vote we stop calling it a shape and start calling it a later."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Later has a curfew. If later becomes never, someone in this room will do something noble and disastrous."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Then appoint a guard. Fenn loves a curfew."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Appointed. The letter gets a morning, not a mob."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy's shoulders drop a fraction. Pony sees it and has the sense not to mention a fraction."
      }
    ],
    "next": "r-doorway"
  },
  {
    "id": "r-doorway",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Fenn occupies the doorway until the doorway becomes his post. Kitchen light behind him, lamp light in front."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Pia says the lane is thickening. Clover says she will go if we are not back-minded by the time her cup cools."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Tell Clover her cup is a legal instrument and I respect it."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I can hear you. These walls are suggestions."
      },
      {
        "speaker": "narrator",
        "text": "She leans into the frame opposite Fenn. For a moment the house has two sentries and both of them are trying not to smile."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Giraffy, if your jars matter, say they matter above a whisper. Whispers make me stage a rescue."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "They matter. Not more than Bruno's stupid pier. Not less than the letter. I'm tired of ranking hurts."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Then we stop ranking. We put boots on, or we don't, together. I am tired of being the only clock."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "You are an excellent clock. Annoying. Accurate."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "I'll allow accurate."
      },
      {
        "speaker": "narrator",
        "text": "The decision walks into the room before anyone votes. Snow ticks the glass, impatient, already campaigning."
      }
    ],
    "next": "r-round"
  },
  {
    "id": "r-round",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They tell one small story each, a toll for the couch. No one is allowed a moral."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I once boiled the kettle dry because I was reading. The kettle forgave me. I haven't."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I once wrote a letter and hid it in a coat that wasn't mine. The coat is in your kitchen. End of moral."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I once thought a pier was a private room. The pier disagreed in front of witnesses."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I once learned a match is a promise. I keep forgetting the promise and remembering the match."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I once counted someone's delay in minutes. It did not make them come faster. It made me ruder and more right."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I once read a first line that wasn't mine. I am still deciding if honesty after the fact is a species of theft."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I once waited so well that the person I waited for thought I didn't mind. I mind. I am saying so in a small story, which is cheating, but it's my turn."
      },
      {
        "speaker": "narrator",
        "text": "The lamp approves, or at least keeps shining, which is all the approval a lamp has."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Toll paid. Now the night wants a body of work. Pier, or this room until the bread is a legend."
      }
    ],
    "next": "r-gutter"
  },
  {
    "id": "r-gutter",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The lamp gutters. Pony's hand is there before the room can become a superstition. The flame stands up again, a little embarrassed."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Wick's thirsty. Not an omen. I refuse omens before dawn."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You refuse them and then do exactly what an omen would have recommended."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "That's called having a plan with better branding."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "If the lane is going to close, it will close while we are being charming. I would rather be cold and done."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'll walk first. Fenn says turn around, we turn around. Clover, you can hate the plan and still come, or hate it and keep the kettle honest."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I'll come if Zizzy stays or goes on purpose. No drifting. Drifting is how letters get written."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Then on purpose: either we all go see the water, or Pony and I keep the house from listening to itself."
      },
      {
        "speaker": "narrator",
        "text": "Hats are looked at. Boots are judged. The night, which has been patient for a whole act, leans in."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Choose while the lamp is behaving. I don't want to do this in the dark version of the room."
      }
    ],
    "choices": [
      {
        "label": "Everyone to the pier.",
        "goto": "d-lane"
      },
      {
        "label": "Zizzy and Pony stay.",
        "goto": "s-house"
      }
    ]
  },
  {
    "id": "d-lane",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They go out in a knot. The lane takes their heat personally. The streetlamp does what it can, which is one gold circle and no promises."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Single file where the ruts are. If you step out to be noble, you will meet a ditch."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I have met ditches. They never write back."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The pier is left at the mill, then straight until the boards complain. Bruno, you don't get to be first."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I will be second and intolerable about it."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy walks with her chin down, counting breaths the way Fenn counts minutes. Clover has a hand near Bruno's sleeve and does not quite take it."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "If you stop to be private, say 'private,' don't just vanish. I am learning your tricks and I hate the syllabus."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "Private. I'll use the word. I don't want to need it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The house is locked to the wind, not to us. I checked the lamp. It will look like a mistake if we are late, and that is fine."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You and your lamps. Come on. The snow is editing the road while we talk."
      },
      {
        "speaker": "narrator",
        "text": "They pass the baker's fence. Somewhere a dog thinks about barking and decides the night is already too much work."
      }
    ],
    "next": "d-dark"
  },
  {
    "id": "d-dark",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Past the lamp the lane becomes a rumor they have agreed to believe. Fenn's voice is the rope."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Left. Not that left. The left that still has a fence."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "I can smell the river. That's either guidance or a threat."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Both. Most useful things are both."
      },
      {
        "speaker": "narrator",
        "text": "Bruno slips, catches himself, and laughs once so the slip won't become a story with a moral. Clover does not laugh. She files it."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "That was an audition for a broken wrist. Walk like you want morning."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I want morning. I also want to arrive without a lecture. I see that the second one is ambitious."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Lectures are how she says she already pictured the hospital. Take the compliment."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Mill's ahead. I can hear the wheel housing ticking. If we can hear it, we are not lost. We are only cold."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Not lost is my favorite address."
      },
      {
        "speaker": "narrator",
        "text": "The mill shows itself as a darker dark. Beyond it, water slaps the pilings like a slow applause nobody earned."
      }
    ],
    "next": "d-pier"
  },
  {
    "id": "d-pier",
    "background": "dock",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The pier is still a pier, which feels like a favor. Jars bump the pilings, some dark, one still holding a coal of someone else's evening."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Three of mine. One of them is already wearing a lid of ice."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Don't lean. The board with the pale nail is a liar. Bruno, that means you specifically."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I know that board. We have met. It won."
      },
      {
        "speaker": "narrator",
        "text": "Wind comes off the water with a clean, unkind smell. The town's spire is a sketch. The mill windows are shut."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "It's beautiful in the way empty things are. I don't trust it."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "You don't have to trust it. You have to not fall in. A lower bar. My favorite kind."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Light the one that will crack, and then we leave. This is not a vigil. I refuse a vigil."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "No vigil. A chore. I am capable of chores."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Matches are in my inner pocket because Bruno's are a damp tragedy. Giraffy, your hands. I'll shield."
      },
      {
        "speaker": "narrator",
        "text": "They crouch, a ridiculous congregation, shoulders making a chapel against the wind."
      }
    ],
    "next": "d-light"
  },
  {
    "id": "d-light",
    "background": "dock",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The match flares. For a second every face is honest and orange. Giraffy tips the flame into the jar.",
        "still": "lanterns"
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "There. It doesn't need a speech. It needs not to be dropped."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I'll hold the dropping. You hold the meaning. Division of labor."
      },
      {
        "speaker": "narrator",
        "text": "The jar takes the light the way a room takes a guest it was pretending not to expect. It goes onto the water and does not go out."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Looks like a street, if a street could float and mind its own business."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Don't get poetic. Your lips are blue. Poetic blue is still blue."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I stood there. That plank. I am telling you so the plank doesn't get to be a secret."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "I see it. It is a plank. You are a person. We are ranking them correctly this time."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Correct ranking. I'll allow the night a point."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "If someone asks who it's for, I might answer. I might not. Don't make it the toll for going home."
      }
    ],
    "choices": [
      {
        "label": "Ask him, gently.",
        "goto": "d-ask"
      },
      {
        "label": "Leave the name in the jar.",
        "goto": "d-leave"
      }
    ]
  },
  {
    "id": "d-ask",
    "background": "dock",
    "lines": [
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Not a toll. A question you can drop. Who gets the light, Giraffy?"
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "My sibling. The one with the chair and no letter. If the jar gets there, good. If it drowns, also good. I tried with my hands."
      },
      {
        "speaker": "narrator",
        "text": "The flame bobbing between the pilings looks small enough to be forgiven for any failure of navigation."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Trying with your hands is the whole job. The river can do the commute."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I won't ask their name. Names make me write letters, and this group is at capacity."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Capacity is a kind word for us."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "If they come back through this town, the pier will still be here, lying about which boards are safe. I'll warn them."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "You will warn them from the land. I am adding that clause."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Clause accepted by the cold. We should be moving before my knees file a separate complaint."
      },
      {
        "speaker": "narrator",
        "text": "Giraffy watches the jar until it is a dot. He is the one who turns away first, which is its own kind of trust."
      }
    ],
    "next": "d-stood"
  },
  {
    "id": "d-leave",
    "background": "dock",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Nobody asks. The jar goes under the mill's shadow and comes out the other side still lit, which is more than most plans manage."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Thank you for not making it a scene."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "We are already a scene. We just declined a second one. Growth."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The ice on the other two can wait until daylight. I'm not sending anyone onto the slick boards for a maybe."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "Agreed. I have used up my slick-board privileges."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "You never had privileges. You had friends. Different paperwork."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I'm framing that. Not literally. My pockets are full of other people's sentences already."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Home. The lamp is doing its impression of patience, and I don't want to see the impression crack."
      },
      {
        "speaker": "narrator",
        "text": "They turn their backs on the water. The one lit jar keeps their secret without offering a receipt."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "It can be for the walk home. That name fits in my mouth. I'll use it if anyone gets nosy on the lane."
      }
    ],
    "next": "d-stood"
  },
  {
    "id": "d-stood",
    "background": "dock",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Before they leave the boards, Bruno stops where he stopped earlier. He puts his hands in his pockets so they won't do anything symbolic."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "This is the spot. It felt like a room. It was a plank and a bad idea. I am demoting it."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Demoted to plank. The plank accepts. Walk."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If you need a room, use the kitchen. It gossips, but it has a floor that isn't a lie."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "A gossiping floor. I'm strangely sold."
      },
      {
        "speaker": "narrator",
        "text": "Clover steps where he was, not to copy him, but to prove the spot is ordinary. Her ears flick in the wind. She nods, satisfied, which is as much blessing as the pier is getting."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Ordinary. Good. I can leave ordinary things behind without visiting them in my head all night."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Then we are done being brave. Brave is a short season. Walking is the rest of the year."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Quote that and I'll deny I was here."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I already memorized it. Sorry. Hazard of a quiet mouth."
      }
    ],
    "next": "d-cold"
  },
  {
    "id": "d-cold",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The walk back is meaner. Snow has edited the lane into fewer options. Fenn does not narrate every step now. He just puts his boots in the right places and trusts them to imitate."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "My glasses are a rumor. Someone describe the fence."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Fence is on your left, shoulder height, then a gap, then the lamp if it still likes us."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I see it. A sulky gold. We're not lost. We're just being taxed."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'll pay the tax. I have experience being cold for no good reason."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "You have experience. You do not have a coupon. Keep walking."
      },
      {
        "speaker": "narrator",
        "text": "Pony's laugh fogs and vanishes. Somewhere a jar burns on the river, doing its small job without an audience."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I can feel it still lit. That's not magic. That's me deciding to believe a useful thing."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Useful beliefs are allowed until the door. After the door we switch to blankets."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Lamp's real. I wasn't guessing. Don't tell Pia I sounded certain. It will ruin me."
      }
    ],
    "next": "d-gate"
  },
  {
    "id": "d-gate",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The house appears all at once, yellow in the seams. They stamp on the step like a herd that has read a pamphlet on not tracking slush into the butter."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Shoes. Coats. No heroics in the hallway. The hallway is narrow and judgmental."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I missed this ugly mat. That's how you know a night has gone on long enough."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Kettle. I will commit a crime if the kettle is cold."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Get in line. My crime will be more organized."
      },
      {
        "speaker": "narrator",
        "text": "Giraffy touches the doorframe the way some people touch a lucky coin. He doesn't explain. The frame doesn't ask."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "I'm in. I'm staying in. If I look at the door too long, someone slap the thought off me."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I'll flick your ear. Less paperwork than a slap."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The jar is on the river. The rest of me is here. I would like that to be enough for one hour."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "One hour, paid in blankets and whatever the cupboard still believes is food. Inside."
      }
    ],
    "choices": [
      {
        "label": "Come in from the snow.",
        "goto": "m-return"
      }
    ]
  },
  {
    "id": "s-house",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The door shuts on the others. The house, suddenly understaffed, ticks and settles and pretends it meant to be this quiet."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "They'll be a while. Fenn walks like a measuring tape. We have time to be two people."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Two people is when I get reckless. Just so you know the risk profile."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I read the profile. I stayed. That's my whole cleverness for the evening."
      },
      {
        "speaker": "narrator",
        "text": "The lamp holds. The kitchen lamp, visible through the doorway, holds too. Between them, the letter's coat hangs like a third opinion."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I keep looking at the pocket. If I take it out, it becomes a thing we did. If I don't, it becomes a thing we avoided."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Both are things. Avoiding is underrated. So is a table. We can sit and not be noble."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You make 'not noble' sound like a recipe."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "It is. Step one, sit. Step two, don't perform. Step three is optional and usually tea."
      },
      {
        "speaker": "narrator",
        "text": "She sits. The couch receives her like it has been taking notes all night. He sits close enough that their coats touch, not their plans."
      }
    ],
    "next": "s-table"
  },
  {
    "id": "s-table",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They move the letter to the table without opening it. The paper is creased down the middle, a face that has been folded too many times."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If you read it now, you'll hear the version of me that thought leaving was cleaner."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I don't need her to be clean. I need her to be you, and you are in the chair."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "The second paragraph says I was already walking back when I wrote the fear down. Pia didn't get that far. I almost wish she had. It makes me less of a cliff."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "You are a staircase at worst. No. A door. Doors are allowed to stick."
      },
      {
        "speaker": "narrator",
        "text": "Steam lifts off the kettle they forgot they restarted. It fogs the window and gives the snow a privacy it didn't ask for."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Don't be good at this. I'll get ideas about staying in kitchens."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Have the ideas. We'll audit them in the morning with witnesses. Tonight the audit is closed."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Then I won't make you read it. I'll let it be a rectangle. Rectangles are manageable."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I love a manageable rectangle."
      },
      {
        "speaker": "narrator",
        "text": "Their shoulders almost touch. The letter stays flat, still creased, no longer pretending it isn't in the room.",
        "still": "letter"
      }
    ],
    "next": "s-fold"
  },
  {
    "id": "s-fold",
    "background": "table",
    "lines": [
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I'm going to say one line out loud and then we are done being brave. I was scared that coming back would make me the person who always leaves anyway."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "And tonight you came back and stayed for the dull parts. The dull parts are the evidence."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "The dull parts have better food."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I'll tell the chef. He is me. He accepts the note."
      },
      {
        "speaker": "narrator",
        "text": "She folds the letter on its old crease, carefully, as if the crease has rights. It goes back into the coat, but the pocket is left unhidden."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "When they come back, Pia will look at the pocket. Let her look. Looking isn't reading. Clover can put a cup on her if she has to."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Clover will enjoy the legal precedent."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I want them to find us ordinary. Not in the middle of a scene. Ordinary is how I know I live here."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Then help me slice the rest of the bread. Nothing restores ordinary like a knife and a crust."
      },
      {
        "speaker": "narrator",
        "text": "They work. The house, relieved of an audience, lets itself be a house. A pipe knocks once, friendly, and shuts up."
      }
    ],
    "next": "s-second"
  },
  {
    "id": "s-second",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The second kettle is a quieter achievement than the first. Pony pours like a man paying a debt he is happy to owe."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "They'll come in loud. We should be a landing, not a question."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I can be a landing. I have practice being furniture that people trust."
      },
      {
        "speaker": "pony",
        "expression": "tense",
        "text": "Don't do that. Don't shrink into furniture. I didn't stay behind to watch you disappear into a helpful shape."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "There he is. I was wondering when the tea would wear off and the person would talk."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The person was talking the whole time. He was just being polite to the cups."
      },
      {
        "speaker": "narrator",
        "text": "She bumps his shoulder with hers, on purpose, a small collision with a receipt."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If the road opens at dawn, I am not taking it as a hint. I am taking breakfast. Write that into the plan."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Breakfast is in the plan in ink. The road can file an appeal."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Good. Appeals take forever. We'll be on the second pot by then."
      }
    ],
    "next": "s-glass"
  },
  {
    "id": "s-glass",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They stand at the lamp-room window because the kitchen has started to feel like a watched pot. Snow writes and rewrites the lane."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I can't see the mill. That's either snow or my nerve."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Snow. Your nerve is in the kitchen intimidating a loaf."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Leave the loaf alone. It had a hard life."
      },
      {
        "speaker": "narrator",
        "text": "A flake sticks to the glass at eye level and gives up, sliding down like a thought that didn't survive contact."
      },
      {
        "speaker": "pony",
        "expression": "tense",
        "text": "If they are longer than an hour, I am going to invent a reason to go look. I want you to stop me if the reason is stupid."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "All reasons are stupid in this snow. I'll stop you. You can hate me for one minute and thank me for the rest."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "A fair rate."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Giraffy will be fine if Fenn is a fence post about the ice. Bruno will be fine if Clover has his sleeve. Pia will be fine because she refuses not to be."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You just described a family. Don't look so shocked. It's only a word."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "It's a large word. I'll try it on in the morning when there are fewer feelings per square foot."
      }
    ],
    "next": "s-hear"
  },
  {
    "id": "s-hear",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The first sound is not a knock. It is a cluster of boots failing to be quiet, and Pia's voice telling the cluster to be a person."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Mat. I am not negotiating with the mat."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "The mat started it."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You're back. Try not to drip on the only metaphor I have left."
      },
      {
        "speaker": "narrator",
        "text": "Cold comes in with them, a guest that does not wipe its feet. Then the door shuts and the cold is just a rumor on their coats."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The jar is lit. I didn't make a speech. Zizzy would have been proud, which is disturbing."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I'm proud. I'll recover."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I demoted the plank. Clover supervised. There were clauses."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "There were. He is in the house. The house is the clause."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Cups. Blankets. No one talks over the first swallow. We kept the place ordinary. You're welcome."
      }
    ],
    "next": "s-stomp"
  },
  {
    "id": "s-stomp",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They stomp and peel and invade the ordinary on purpose. The kitchen swells back to its earlier pride."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "My glasses have achieved fog as an art form. Someone narrate the bread."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "The bread is on the board, wounded but willing. Butter is beside it, pretending not to be the point."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Accurate. I'll eat the point."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The walk home had a light on it. That's all I needed the river to understand."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "And Bruno understood the difference between a pier and a room. We are having a educational evening. Disgusting."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I am educable. It only took a blizzard and a committee."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Sit before you educate the floor. Zizzy and I already had our scene. You don't have to top it."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "It wasn't a scene. It was bread. If anyone asks, it was bread."
      },
      {
        "speaker": "narrator",
        "text": "Pia looks at the coat pocket, sees that it is no longer a secret and not quite open, and lets her eyes move on. Clover notices the letting-go and does not put a cup on anyone. Progress, in a small, stubborn unit."
      }
    ],
    "choices": [
      {
        "label": "Let the house be full again.",
        "goto": "m-return"
      }
    ]
  },
  {
    "id": "m-return",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "However they got here, the kitchen takes them back without commentary. Wet wool, cold cheeks, the particular silence of people who have been outside longer than their plans."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Blankets are on the chair that isn't a coat rack. I am choosing not to comment on which chair that is."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Comment denied. Tea accepted. If the tea is theatrical I will still drink it."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "No one is missing. I checked twice because the first time was wishful."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Wishful looks good on you. Don't get used to the compliment. It expires at dawn."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'm on the mat and then I will be on a chair. That is the entire rest of my ambition."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Ambition is overrated. The jar is doing its job. We can be off duty in shifts."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Off duty still means mouths. This group doesn't know how to be quiet unless food is involved."
      },
      {
        "speaker": "narrator",
        "text": "So food becomes the policy. The cupboard is audited. A pot is found that has seen worse nights and better onions."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Soup is a word I am using loosely. Sit down before you drip a new river on my floor."
      }
    ],
    "next": "m-food"
  },
  {
    "id": "m-food",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The loose soup happens. Onions, the last potato, a heel of bread used as a boat. It tastes like staying."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "This is either courage or a crime against potatoes. I'll allow both."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I have eaten worse on better days. This is winning."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Don't rank the soup. It can hear you, and we still need it on our side."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "My sibling cooked like this when they were leaving. Big pot, small apology. I don't mind the echo."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Echoes aren't debts. You can eat an echo. I recommend it."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Fenn recommends things the way other people pray. Pass the bread boat."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "There is enough if nobody performs hunger. Performing hunger is how you get a speech instead of a second ladle."
      },
      {
        "speaker": "narrator",
        "text": "They eat. Spoons click. The stove keeps a low opinion of the wind and does not share it."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "All right. This is a table again, not a pier and not a pocket. Let's not waste it on bravery. Bravery had its hour."
      }
    ],
    "next": "m-seats"
  },
  {
    "id": "m-seats",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Seats become territories. Fenn keeps the end where he can see the door. Clover keeps the stove side. Giraffy, finally, sits."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "The chair didn't ask for a story. I'm trusting it."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Chairs in this house are discreet. The couch is the gossip."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "Since we are seated and fed, I want to say the thing I did with the letter without making it a trial."
      },
      {
        "speaker": "clover",
        "expression": "tense",
        "text": "And I want the thing said in a way that doesn't become a performance. Those are not the same request."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Both of you can have a turn. Short. No one reads anything aloud. The pocket stays a pocket unless I open it."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'll be furniture. Supportive furniture."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Furniture with opinions. We know the brand."
      },
      {
        "speaker": "narrator",
        "text": "The pot goes to the center like a mediator that cannot talk and is therefore promoted."
      }
    ],
    "choices": [
      {
        "label": "Let Pia speak first.",
        "goto": "m-sorry"
      },
      {
        "label": "Let Clover speak first.",
        "goto": "m-rule"
      }
    ]
  },
  {
    "id": "m-sorry",
    "background": "table",
    "lines": [
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I read a line that wasn't handed to me. I told you, which is the decent half of a bad habit. I'm sorry for the half that wasn't decent."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Accepted. Don't do it again, and don't spend the night being smaller than you are. Smaller is annoying."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I can work with annoying as a ceiling."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I wanted a rule more than I wanted a punishment. If she's sorry and you're not bleeding, the rule can sit down too."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Rules sitting down. That's my kind of legislation."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "For what it's worth, I would have looked. I'm not proud of that. I'm putting it next to the matches I forgot."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Then the looking is confessed on all sides and we can stop circulating it. Circulation is how small things become weather."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Weather is outside. In here we have soup and a ceasefire."
      },
      {
        "speaker": "narrator",
        "text": "Pia exhales like she has been holding a cup too carefully. Clover bumps her knee under the table, once, precise."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Ceasefire. I reserve the right to a footnote in the morning."
      }
    ],
    "next": "m-clock"
  },
  {
    "id": "m-rule",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "My piece is not that Pia is wicked. It's that a person should get to walk into a room before their sentence does. That is the whole rule. It doesn't need a villain."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "I can live inside that rule. I already stepped outside it. I'm not asking to be praised for walking back."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Nobody is praising. We are chewing. Chewing is the opposite of a verdict."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The rule stands for the rest of the night. If a pocket is open, we close it or we ask. Asking is free. Snooping costs the soup."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "A steep fine. I'm in favor."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I didn't snoop. I only carried a jar and a sibling-shaped silence. If the rule covers silence, I'm already compliant."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Silence is allowed. Ambush is not. We just defined a culture. Try not to applaud, it'll go to our heads."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "No applause. A nod. My neck still works."
      },
      {
        "speaker": "narrator",
        "text": "She nods. Clover nods back, smaller, which in Clover's dialect is a parade."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Good. The letter remains mine. The rule makes that easier to say without sounding like a queen."
      }
    ],
    "next": "m-clock"
  },
  {
    "id": "m-clock",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The hall clock finds them in the lamp room, where the couch has become a public utility. It is past midnight. The snow has opinions about staying that way."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Midnight plus twenty. The hill will not be a hill again before six, if the wind stays dishonest."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then we are not waiting the clock out on our feet. Feet are a limited resource."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Listen to him budget our extremities. This is romance in a cold town."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I've had worse romance. It involved a plank."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "We are not revisiting the plank. The plank has been demoted and it should stay demoted."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I could sleep if I trusted the room not to decide things while my eyes are shut."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I will be awake. I don't sleep when a light of mine is on the water. It's superstitious and non-negotiable."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Then Giraffy is the first watch. I'll take the second. Nobody else has to be noble unless they get bored."
      },
      {
        "speaker": "narrator",
        "text": "The lamp is steady now. Pony trimmed it while nobody was making a speech, which is his favorite kind of maintenance."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Bored is welcome. Speeches are rationed. New policy, effective immediately, enforced by blankets."
      }
    ],
    "next": "m-sleep"
  },
  {
    "id": "m-sleep",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Blankets appear from a chest that smells like summers nobody in the room had together. They use them anyway. Shared cloth is a kind of trust that doesn't require a speech."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "If I sleep, wake me when the wind changes or when Bruno looks at the door too long."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I will look at the floor. The floor has not betrayed me today."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Floors are the real heroes. Write that in the morning paper."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I'll take an edge of the couch. If I take the middle I'll pretend I live here more than I have earned."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You have earned the middle. Take it or don't, but don't invoice yourself for a cushion."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Bossy. I knew the tea would wear off."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I'll sit the watch by the window. If I start composing letters in my head, Fenn has permission to throw a sock."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Permission filed. I have a spare sock and a strong moral sense."
      },
      {
        "speaker": "narrator",
        "text": "They laugh, quiet, the laugh of people who are not out of the woods and have decided the woods can wait."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "One more round of ordinary talk. Then the letter can ask for its hearing, or it can wait until the light. Zizzy calls that one. Not the clock."
      }
    ],
    "next": "n01"
  },
  {
    "id": "h-fenn-pia",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The small hours start without a bell. Fenn and Pia end up on the rug with a deck of cards nobody shuffles, a pretext for staying level."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "You would have looked in the pocket too. You said the circulation was the problem, not the glance."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I would have looked and hated it. Both can be true. I'm not applying for saint."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Good. Saints are terrible at cards and worse at kitchens."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "We aren't playing. Holding cards is a way to keep my hands from fixing people."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Clover thinks fixing is a theft. She isn't wrong often enough for me to enjoy it."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "She waited for Bruno in a way that cost her. Let her have a rule. Rules are cheaper than fear."
      },
      {
        "speaker": "narrator",
        "text": "In the kitchen a spoon taps the pot, gentle, Pony refusing to let the soup become a memory while people still need it."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "If I sleep, don't let me miss the part where Zizzy decides. I want to be a witness, not a rumor."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I'll tap your shoe. Witnesses should be awake. Rumors have had a sufficient evening."
      }
    ],
    "next": "h-clover"
  },
  {
    "id": "h-clover",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Clover washes a cup that is already clean. The act is a lap she can finish."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Waiting is not my personality. It is a decision I remake every ten minutes. People think it's a talent. It's a chore."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "I made the chore longer tonight. You can put that on my tab until the tab falls apart."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "The tab is 'don't vanish.' It doesn't need interest."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "You're allowed to be tired of being the clock. Clocks get to be wound by someone else sometimes."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Then wind me by telling the truth early. I can stand early. I rust in the late version."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Early truths with the soup. A house style. I'll paint it on the lintel if the lintel stays still."
      },
      {
        "speaker": "narrator",
        "text": "She sets the cup down, aligned with the tile, and her shoulders drop the way shoulders do when a rule has been heard."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Lintel. Fine. I'm off duty for twenty minutes. If the door opens, it's Fenn's problem."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Accepted from the other room, unfortunately. These walls remain suggestions."
      }
    ],
    "next": "h-brothers"
  },
  {
    "id": "h-brothers",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Bruno and Giraffy share the window watch without calling it a watch. The lane is a blank page. They don't write on it."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Your sibling with the chair. Do you want them to come back, or do you want the letter they owe?"
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "Those are different wants. I want the letter more. Coming back is a bigger room than I have ready."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I understand bigger rooms. I tried to hide from one on a plank."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "You were very bad at hiding. It's one of your comforting traits."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "If they write, you can read it here. I'll be furniture again. Supportive, quiet, slightly damp."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "If they don't write, the jar was still a true sentence. I can live on a true sentence for a while."
      },
      {
        "speaker": "narrator",
        "text": "A clump of snow slides off the roof and thumps, soft, like the house clearing its throat."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "We're alike in the leaving part. You're better at staying near the people who notice."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Stay near, then. The window is wide enough for two men who are not going back out."
      }
    ],
    "next": "h-before"
  },
  {
    "id": "h-before",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Zizzy adds the part she skipped when she named Hester, because a brick is not the whole fear and the pocket has had enough attention."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "The stairs weren't the job. The job was fine. I hated that I was good at packing. Twenty minutes and the room looked like I had been polite about leaving."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You could have said packing. I am very good at packing as a topic. World-class, some would say, and then I would hide the suitcase."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I wrote a cliff instead of a suitcase. Cliffs get read. Suitcases get lived out of. I am trying to switch genres."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Genre switching is allowed after midnight. It's in the charter we invented between the bowls and the blankets."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "The fear was that if I came back I'd only be rehearsing the next exit. Tonight is a bad rehearsal. I keep not exiting."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Bad rehearsals are my favorite. They mean the play might be about something else."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Noted. You are present, fed, and not on the hill. The evidence is annoyingly consistent."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy looks at her hands. The stripes at her wrists are faint in the stove light. She doesn't hide them."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Annoy Pony with the evidence. He collects it in kettles."
      }
    ],
    "next": "h-kettle-story"
  },
  {
    "id": "h-kettle-story",
    "background": "table",
    "lines": [
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Marella kept that kettle on for anyone who might be late. She said a hot kettle is a bet that people return. She won more than she lost. I inherited the bet and none of her nerve, so I compensate with portions."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I would have liked her. She sounds like a pier with better ethics."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "She would have demoted your plank in half the time. A ruthless woman. The portions are the part I can do without pretending to be her."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Portions are a love language. I'll learn it. Mine is currently 'stand in weather until someone fetches me.' I'm retiring it."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Retirement party accepted. The gift is supervision."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "The bet is what this room already did. I don't want to be the person who cools it by being clever."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Then don't be clever. Be here. It's working on me and I resent how well."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Resentment and the jam we saved. The house special, delayed on purpose."
      },
      {
        "speaker": "narrator",
        "text": "The pot is clean and stays clean. Nobody mentions filling it again. Mentioning it would make the night finite, and they are not ready to be finite."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Finite comes at dawn whether we invite it. We can be wasteful with the middle."
      }
    ],
    "next": "h-flicker"
  },
  {
    "id": "h-flicker",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The lamp dips, not a death, a blink. Every face goes old for a second and then young again when the flame remembers itself."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Wick, not omen. I will say that until the sun agrees with me."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "The sun is not on your side yet. Keep talking anyway."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "If the house goes dark I still know the way to the door. I'm not offering that as a plan. I'm offering it as a fact so my hands stay still."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Hands stay still. I have the sock. The sock is a system."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "A system of socks. We have achieved civilization."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Civilization is a blanket that covers my feet. Don't philosophize me out of it."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "No philosophy. A question. Is anyone actually sleepy, or are we all performing endurance?"
      },
      {
        "speaker": "narrator",
        "text": "The answers arrive crooked: a shrug, a yes from Bruno that he immediately distrusts, a no from Giraffy that nobody argues with."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then we stop performing. Eyes can close. The watch is staffed. The letter has not been subpoenaed."
      }
    ],
    "next": "h-beds"
  },
  {
    "id": "h-beds",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They negotiate sleep the way diplomats negotiate a border nobody wants to live on. The couch is a country. The rug is a province. The chair is a joke that Bruno takes anyway."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "The chair and I have a history. Tonight the history includes a blanket, so it's a better history."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I'll take the rug near the stove if the stove promises not to be a character."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The stove is a character. It has an arc. You may still use the rug."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Wake me if the letter starts to feel like a decision the room is making without me."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The room doesn't get a vote. I'll make that unpleasant for the room if it tries."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Unpleasant Fenn. A rare vintage. I'll stay half-awake to see it."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Half-awake is my natural climate. I'll share."
      },
      {
        "speaker": "narrator",
        "text": "One by one the voices thin. Not gone. Thin, like a choir that has remembered it also has bodies."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "If I snore, it's slander. If Pony snores, it's the kettle's influence. Those are the official minutes."
      }
    ],
    "next": "h-almost-sorry"
  },
  {
    "id": "h-almost-sorry",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pia does not sleep. She stands at the sink in her socks and practices a sentence she already said, because said and settled are different rooms."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Clover. I know you heard the sorry. I am saying the shape of it again where there is no audience."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I heard it the first time. The second time is for you. You can have it."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "I don't want to be the person who knows first. It makes me lonely in a way that looks like being smart."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "You are smart. You are also cold. Those are separable. Come back to the blanket."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Separable. You and your clean cuts. All right."
      },
      {
        "speaker": "narrator",
        "text": "They stand shoulder to shoulder for a count of ten, which is a long time for two people who have spent the night in footnotes."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "If she opens the letter, we listen and we don't add footnotes until she asks. That's my amendment."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Seconded. Fenn will pretend he invented it. Let him. He needs a hobby that isn't counting."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I invented nothing. I am, however, counting to ten with you, and then I am sending you to the rug."
      }
    ],
    "next": "h-town"
  },
  {
    "id": "h-town",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Those still awake play the smallest game: name a thing in town that will still be there when the snow gives up."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The bakery bell. It sticks in winter and they hit it anyway."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "The green door on the hill that isn't green anymore. People still give directions with it."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "The pier. Unfortunately. I'll nod at it from land, like a mature adult."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "The last post where my sibling used to wait. The post doesn't know it's retired. I like that for it."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "The shop's stoop. I will not read anything left on it. Personal growth."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "The clock in this hall. It is wrong by four minutes and refuses correction. A role model."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The bend in the hill where the lantern quit. I'll fix the lantern. Not tonight. That's a tomorrow with shoes."
      },
      {
        "speaker": "narrator",
        "text": "The list sits in the room like a town they can carry without walking. Outside, the snow keeps editing, and the list does not care."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Add one more. This kitchen. If the road opens and I get strange about it, remind me I put the kitchen on the list."
      }
    ],
    "next": "h-before-letter"
  },
  {
    "id": "h-before-letter",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The watch changes. Fenn's sock remains undefeated. Giraffy rubs his eyes and stays a silhouette against a window that has begun, barely, to consider morning."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "It's the hour where decisions get honest because everyone is too tired to decorate them."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Then I'll be honest without a decoration. The letter can be read now, in this room, by you, with them hearing the last lines. Or it waits, and we eat breakfast on top of it like ordinary people."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "You don't owe us the reading. You owe yourself whichever version lets you stay."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "And if you wait, that is not cowardice. I will fight the first person who calls it that. I have a cup."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "She does. I've seen the paperwork."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Either way the jar is already on the river. Your letter doesn't have to match my timing."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "No vote. A nod when you're done choosing. We'll arrange our faces accordingly."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy looks at the coat, at Pony, at the window where the black is thinning by a shade nobody polite would mention yet."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "All right. I'm choosing with my mouth, not my panic."
      }
    ],
    "choices": [
      {
        "label": "Read the letter now.",
        "goto": "rd-open"
      },
      {
        "label": "Leave it until breakfast.",
        "goto": "fd-pocket"
      }
    ]
  },
  {
    "id": "rd-open",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pony takes the letter because she asked him to, not because the room leaned. The paper crackles, a small winter of its own."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I'll read it straight. If I soften it, you'll hear the softening and trust me less."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Straight. They're allowed to hear the cliff. They're also allowed to hear the stairs at the end."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "We'll hold still. Still is a skill. I'm showing off."
      },
      {
        "speaker": "narrator",
        "text": "He reads the opening the way you read a thing that was never meant to have an audience and now has seven. His voice stays level. The level is a kindness."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You wrote that you didn't know if you were coming back. You wrote that the stairs made every morning a rehearsal of leaving."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "That part is true. Don't look at me like it might bite. It already bit. I lived."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I knew that line. Hearing it in his mouth is different. It's less like theft and more like a room."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Keep going. Stopping in the middle is how cliffs stay cliffs."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "She's right. I say that rarely. Mark the minutes, Fenn."
      }
    ],
    "next": "rd-page"
  },
  {
    "id": "rd-page",
    "background": "room",
    "lines": [
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You wrote that you practiced the goodbye in a shop window and hated your face for being good at it."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "I know that face. I wore a cousin of it on the pier. I don't recommend the family."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You wrote an apology to the kettle, which is unhinged, and a better apology to me, which you then crossed out and rewrote without the word 'sorry' because you didn't want sorry to do the work of staying."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "The kettle apology stands. The crossed-out sorry was me being fancy. Fancy is how I hide."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Fancy is banned until breakfast. I will enforce this with institutional power."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The last paragraph is shorter. You said you were already on the road back when you finished the fear. You asked me not to make the fear the truest thing I kept."
      },
      {
        "speaker": "narrator",
        "text": "The room is very quiet. Even the stove, next door, seems to lean its ear to the wall."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "That's the stair. I didn't earn it earlier. Thank you for not leaving me with only the cliff."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Don't thank me yet. He still has to finish, and I still have to be a person in the chair afterward."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Finish it. Then we breathe. Breathing is underrated legislation."
      }
    ],
    "next": "rd-last"
  },
  {
    "id": "rd-last",
    "background": "room",
    "lines": [
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Last line. You were already on your way home when you wrote this."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Don't sound so surprised."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I'm not surprised. I'm relieved in a way I don't want to perform. So I won't. I'll just be a man holding a paper he is about to give back."
      },
      {
        "speaker": "narrator",
        "text": "He folds it on the old crease. The fold is familiar to the paper. He puts it in her hand, not the pocket."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "For the record, the coat is innocent. I'm retiring it as a mail service."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "A wise retirement. My jar has a rival now and I don't mind losing."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "No footnotes. I promised. I'm spending the promise visibly so Pia can see the effort."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I see it. It's ugly and perfect."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Zizzy, the room is not a jury. If you want the next sentence to be small, small is available."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Small, then. I meant it. The coming back was already happening. Tonight just caught up with the sentence."
      }
    ],
    "next": "rd-answer"
  },
  {
    "id": "rd-answer",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "She doesn't make a speech. She puts the letter on the table, in the open, which is a different bravery than reading it."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If the road opens, I am walking as far as the bakery and then I am walking back. That is the plan. Pony already wrote breakfast into it in ink only he can see."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Invisible ink. Very secure. The kettle is the notary."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'll walk the bakery leg if you want a crowd. Crowds ruin escapes. I am offering myself as ruin."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "I'll come to supervise the ruin."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "And I won't read anything that isn't handed to me between here and the bell. A short leash. I'll wear it."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I might peel off at the last post. Not to leave. To see if the post still recognizes me. I'll say it before I do it."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Saying it before is the whole culture now. Look at us. A blizzard and a policy."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy laughs, once, not the sharp kind. Pony's hand finds the back of the chair, not her shoulder. The difference matters, and she notices that he knows it."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Come here anyway. The chair can share."
      }
    ],
    "next": "rd-hug"
  },
  {
    "id": "rd-hug",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "She steps in. His arms come up like the lamp was waiting for the shape. It is not a long hug. It is a specific one. The room has the manners to look at the snow for a moment.",
        "still": "hug"
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "There. Evidence. Fenn can stop counting."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I stopped at one. I'm not a monster."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I'm putting this in the unofficial minutes under 'stairs.'"
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Minutes accepted. No commentary from the clock."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'm damp and happy for you, which is my most advanced setting."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "The jar is still a dot in my head. This is a better dot. Don't tell the river."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "We should sleep an hour or we'll be unbearable at dawn. I want to be bearable. It's a new ambition."
      },
      {
        "speaker": "narrator",
        "text": "They loosen. The letter stays on the table, done with being a threat. The lamp keeps its small circle, as if circles were the point all along."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Hour of sleep. Then we see what the hill thinks of us. I'm betting on breakfast either way."
      }
    ],
    "next": "rd-after"
  },
  {
    "id": "rd-after",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Sleep, the real kind, takes a few of them. Bruno goes first, a talent he should list on a resume. Pia follows out of spite and then out of honesty. Clover stays awake long enough to see that nobody is at the door."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "He's in the chair. Good. I'm clocking out."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Clocked. I'll poke the house if the wind gets ideas."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Wake me when the window goes blue. I want to see the color before I decide about the post."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Blue. All right. Don't let me sleep through the part where I prove I can come back twice in one day."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I will be extremely annoying about it. It's my love language after portions."
      },
      {
        "speaker": "narrator",
        "text": "The house ticks. Somewhere on the river a jar burns low and does not ask to be believed. In the room, seven people occupy the same night without spending it."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Dawn's a while yet. Rest. I'll keep the number of missing persons at zero. It's my favorite number."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Show-off."
      },
      {
        "speaker": "narrator",
        "text": "She says it with her eyes already closing. Pony stays awake one minute longer, which is not a vigil. It is a man enjoying a room that turned out kinder than the letter feared."
      }
    ],
    "next": "dawn-blue"
  },
  {
    "id": "fd-pocket",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "She puts the letter back herself. The pocket takes it without drama. Drama had other appointments."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Not tonight. I know the words. I don't want them to be the last loud thing before sleep."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Then it stays paper. Creases and all. I'm good at paper. Ask the kettle."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I won't circle it. Clover, you can stand down. Both hands visible."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Standing down. A personal record."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "The coat is retiring from the postal service anyway. Your letter can commute in a drawer tomorrow."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "A drawer. Listen to us invent furniture solutions for feelings."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Furniture is honest. My jar is furniture that floats. Different union."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "No one is owed the reading. Anyone who sulks about that can sulk into a blanket. Blankets have heard worse."
      },
      {
        "speaker": "narrator",
        "text": "The decision lands and does not bounce. That is how they know it was a decision and not a delay wearing a hat."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Breakfast will be loud enough. Let the night be a little dull. Dull is where people live."
      }
    ],
    "next": "fd-lets"
  },
  {
    "id": "fd-lets",
    "background": "table",
    "lines": [
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I know the shape. I don't need the sentences to trust the person in front of them."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "The shape includes a fear that I'll rehearse leaving even when I stay. If that shows up tomorrow, don't be noble. Be specific."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Specific is my hobby. 'You are putting your hat on like a fugitive' is a sentence I can deliver."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Deliver it with tea or I'll dodge."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I'll witness the delivery. No fee."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "A free witness. The hill really did change the economy."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I'm proud of the not-reading. I know that's an odd pride. I'll spend it quietly."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Quiet pride. Put it next to damp happiness. We're developing a product line."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy leans her head against the chair back, not against Pony, but near enough that the distance is a choice instead of a wound."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Morning, then. If I hand it to you over toast, that's me. If I don't, we still have toast. I'm learning to let toast count."
      }
    ],
    "next": "fd-fenn"
  },
  {
    "id": "fd-fenn",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Fenn finds her at the sink, where the brave people in this house go to pretend they are only thirsty."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "You don't have to summarize. I watched the choice. It was clean."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Clean. I was aiming for 'not a disaster.' Clean is a promotion."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Take the promotion. They're rare after midnight."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If I freeze at the hill in the morning, remind me I already came back once. Numbers help you. I want to borrow that."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Once, confirmed. I'll say 'once' and not make it a speech. Speeches are still rationed."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You are dangerously close to being a comfort."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Don't spread it around. I have a reputation as a measuring tape."
      },
      {
        "speaker": "narrator",
        "text": "She flicks water off her fingers at him, a childish tax. He pays it. The sink gurgles like a laugh it isn't supposed to have."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Go watch the window. Giraffy shouldn't be the only one seeing the blue arrive."
      }
    ],
    "next": "fd-morning"
  },
  {
    "id": "fd-morning",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They set the morning the way you set a table, before anyone is hungry. It is a way of saying the night is not a trap."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Bread, if it survives. Tea, if the kettle still believes in us. A walk only as far as people want."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I want the last post. I'll say it again when the light is real, so it doesn't count as a night-promise."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Night-promises are how I ended up a plank. I'm in favor of daylight vows."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Daylight vows. Small ones. 'I will not vanish' can be renewed daily like a library book."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I'll renew 'I will not read your mail.' Thrilling sequel."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I'll renew coming back as far as the bakery. Further renewals available upon toast."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Logged. I love a log. Don't ruin this for me."
      },
      {
        "speaker": "narrator",
        "text": "The list is ordinary and therefore precious. Nobody frames it. Framing would make it a speech."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Sleep if you can. The hill will still be a hill in an hour, and we can be rude to it together."
      }
    ],
    "next": "fd-cup"
  },
  {
    "id": "fd-cup",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "He pours the last of the pot. It is more memory than tea. They drink it anyway, because refusing the last cup would feel like a metaphor and they are off metaphors."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "This is the bad cup. The bad cup is traditional."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Tradition accepted. Put it on the lintel with the other laws."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "The lintel is full. We're going to need a second house."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "The second house can wait. This one still has a roof. I'm sentimental about roofs tonight."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Roofs and floors. We are simple creatures at last."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Simple is a good place to watch the window from. I'm going back to it."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I'll come. Two pairs of eyes, one blue eventually. An efficient dawn."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy keeps the cup a moment longer than she needs to. The letter, in the pocket, does not knock. She lets the not-knocking be a kindness she gave herself."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Wake me when it's honest morning. Not this in-between. In-between is where I write things I have to fold."
      }
    ],
    "next": "fd-quiet"
  },
  {
    "id": "fd-quiet",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Quiet, finally, with a spine. Bruno sleeps crooked in the chair and looks younger, which is unfair and also a relief. Pia and Clover share the rug like countries that signed something."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You can sleep. I'll be here when the blue starts. I don't have a jar to supervise. I have a person."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Don't make 'a person' sound so enormous or I'll have to be witty about it, and I'm out of wit."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Enormous stays. Wit can clock out."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If I dream about the stairs, it's an old dream. Don't promote it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Old dreams get the bad cup in the morning. Policy."
      },
      {
        "speaker": "narrator",
        "text": "She closes her eyes. He watches the doorway, not as a guard, as a man who likes the sight of his own house holding."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "From the window: still snow, less wind. I'll call it when it's worth opening an eye."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "And I'll call it when the post might recognize me. Different errand. Same light."
      },
      {
        "speaker": "narrator",
        "text": "The clock, wrong by four minutes, keeps being wrong. Nobody corrects it. Some errors are how a house stays itself."
      }
    ],
    "next": "dawn-blue"
  },
  {
    "id": "dawn-blue",
    "background": "dawn",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Blue arrives as a rumor and then as a fact. The lamp looks embarrassed to still be on. Pony pinches it out. The kitchen becomes a different room without moving a chair."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Wind dropped. The lane is a lane again if you don't mind the depth. The hill is a maybe."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Maybe is enough for a walk to a post. I'm saying it in daylight. It counts."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Look at you, redeeming a night-promise before breakfast. Overachiever."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I slept like a chair and I regret nothing except my neck."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Your neck is a fair tax. I'll allow it."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Tea. Real tea, not the memory cup. I refuse to meet the snow on a metaphor."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Real tea is in progress. The kettle has been briefed."
      },
      {
        "speaker": "narrator",
        "text": "Steam, daylight, the soft wreckage of blankets. It looks like a life. Zizzy stands in it without edging toward the door, and several people notice, and nobody makes it a prize."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Breakfast first. Then we see the road with our actual eyes. I'm not giving the hill the dignity of a rumor."
      }
    ],
    "next": "dawn-road"
  },
  {
    "id": "dawn-road",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They go as far as the bend in boots that were not dry and are not dry now. The hill is a white shoulder. Tracks from the night are gone, which is the snow's idea of mercy."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "You can walk it. I wouldn't call it kind. The bend is passable in single file. After the bend, I can't see, so I won't invent."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Kind is optional. Breakfast is not. I'm saying that into the record before anyone becomes a pioneer."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I'm not a pioneer today. I said bakery and back. The hill can stay a hill."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'll second the bakery. Pioneers end up on planks."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Three ways, then, and none of them are vanishing. We walk until the bell and home. Giraffy peels off at the post and we know. Or we go back now and let the road be tomorrow's chore."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "A chore with shoes. Fenn already claimed that genre."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "If I go to the post, I want company as far as the corner. Not a procession. A corner."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Corners are my specialty."
      },
      {
        "speaker": "narrator",
        "text": "The town is a sketch under fresh snow, bell and post and green-not-green door all still theoretically there. The choice is small. Small has been the point since the soup."
      }
    ],
    "choices": [
      {
        "label": "Walk as far as the bakery, then home.",
        "goto": "e-walk"
      },
      {
        "label": "Go with Giraffy to the last post.",
        "goto": "e-post"
      },
      {
        "label": "Leave the road for tomorrow.",
        "goto": "e-stay"
      }
    ]
  },
  {
    "id": "e-walk",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They walk single file because Fenn said so and the snow agrees. The bakery bell is stuck and someone inside hits it anyway. The sound is stupid and perfect."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "There. The bell. I came this far and my hat is still on like a citizen, not a fugitive."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Citizen. I'll allow the promotion."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "No mail on the stoop. I'm experiencing personal growth in public. Don't clap."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "No clap. A nod. My neck tax is already paid."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Back now. The hill gets nothing else from us before lunch."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Agreed. Turn around while turning around is easy."
      },
      {
        "speaker": "narrator",
        "text": "They turn. The house is not visible yet. It doesn't need to be. They have been practicing the way back all night."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I'll see the post on the return. It can wait ten minutes. I'm in a generous mood toward posts."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Ten minutes. Then toast. If anyone asks, the night was long and the morning was a bell."
      }
    ],
    "next": "e-walk-more"
  },
  {
    "id": "e-walk-home",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The kitchen receives them for the second time in twelve hours and acts like this is normal, which is the highest compliment a room can pay."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Hats off. Real breakfast. The bad-cup tradition is suspended until further notice."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Suspended, not abolished. Don't get reckless."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I am sitting in a chair that is not a metaphor. This is my peak."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The post recognized me. I didn't cry. I'm telling you so the not-crying counts as a fact and not a suspicion."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Fact accepted. Pass the toast before Fenn counts the slices and ruins the joy."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I already counted. I'm choosing not to say the number. Growth. Pia and I are a movement."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "A movement with jam. I'll join."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy eats. She does not watch the door. Pony sees the not-watching and puts more toast on her plate, which is not a speech."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "This is the staying. It looks like breakfast. I'm keeping it."
      }
    ],
    "end": true
  },
  {
    "id": "e-post",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The corner is just a corner. Giraffy treats it like a border he is allowed to cross and return from. They go with him that far, and then they go farther, because corners are contagious."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "You don't have to come to the post. I said corner. I meant corner."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You meant corner and your face meant post. We're multilingual."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Five more minutes. Then I become a kettle again."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The path is sound. Single file still. The snow is deep, not treacherous. I don't use those words lightly."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I love a path that isn't treacherous. It's a novel genre."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Stay where I can see sleeves. All sleeves. I am not starting a new shift."
      },
      {
        "speaker": "narrator",
        "text": "The last post appears, shorter than memory, wearing a cap of snow. Giraffy puts a hand on it the way he put a hand on the doorframe."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Still here. Retired and uninformed. Good for it."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "No letter nailed to it. I'm relieved and a little mad at the relief. I'll sort that out over toast."
      }
    ],
    "next": "e-post-more"
  },
  {
    "id": "e-post-home",
    "background": "dawn",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They come home slower. The light is full now, thin and gold at the edges. Giraffy looks lighter by a weight he does not name, and nobody invoices him for it."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "If a letter comes later, it comes. The post doesn't have to do it today. I introduced myself again. That's a start that isn't a jar."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Starts that aren't jars. We're expanding the product line."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I walked past the bakery and didn't hear the hill calling. I want that written down somewhere Fenn won't frame."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I will write it on a scrap and put it under the kettle. Framing is banned. Scraps are folk art."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Under the kettle is legally binding."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Then we're bound. Terrible. Pass the plates."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Bound to breakfast. I can live with the sentence."
      },
      {
        "speaker": "narrator",
        "text": "The door shuts. The lane, satisfied or not, stays outside. Inside, the long night ends the way the soup began: with enough, and with people who can see each other without a match."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Until the next storm, then. Not as a threat. As a calendar."
      }
    ],
    "end": true
  },
  {
    "id": "e-stay",
    "background": "dawn",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They turn back before the bend can become a story. The house is close enough to feel like a decision and not a retreat."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Tomorrow's chore can have tomorrow's legs. These legs are on strike."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "The strike is legal. I checked with the snow."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The post will keep. It's retired. Retired things are patient."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "And the bakery will hit its bell without me. I can be omitted for one morning. What a luxury."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Omission with toast. My new vocation."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Nobody vanished. I'm putting that at the top of the day, above the weather."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Above the weather. Ambitious. I support it."
      },
      {
        "speaker": "narrator",
        "text": "They stamp in. The mat receives them like old news. The kettle, briefed, is already talking to itself."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Sit. The road is not invited to breakfast."
      }
    ],
    "next": "e-stay-more"
  },
  {
    "id": "e-stay-end",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Breakfast is unrushed, which is a kind of wealth. Sun reaches the chair, the coat, the empty pocket's neighborhood, and does not interrogate any of them."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "We stayed. The night was long enough to be a place. I'm not turning the place into a lesson."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "No lesson. Jam. A superior literature."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I'll visit the post when the lane is boring again. Boring is a compliment I'm saving."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I'll fix the quit lantern on that walk. Shoes, not heroics."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'll stay on land and practice being easy to find. A dull skill. I want it."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Dull skills. Finally a curriculum I like."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I'll bring the curriculum and not read anyone's notes unless they hand them over. Growth, with jam."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy laughs into her cup. Outside, the hill keeps its snow. Inside, seven people finish a night that took the long way around and arrived, of all places, at morning."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Same time next storm. Bring a better potato."
      }
    ],
    "end": true
  },
  {
    "id": "n01",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The coats have been dripping long enough to become a climate. Zizzy's purple is merely damp now. Pony's green has remembered it is a coat. Bruno's navy still hangs longer than Bruno, and the coat has not apologized."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "If they drip again, the tile can complain in the morning. Tonight the tile is off duty, same as the hill."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Mine has made a small lake on the toe of yours. That is a sleeve, not a metaphor. I am watching you try to promote it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I turned it into a hook an hour ago. Your sleeve is a roommate of my sleeve. They can negotiate without us."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Three hooks, seven coats. I am not going to say the number again. I am saying the consequence. The chair is a hook. So is the crate. The crate looks proud, which I resent on its behalf."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Let the crate have this. I have taken enough from the evening, including a potato's dignity."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Cuffs out, not in. I am not mending what the stove already started. We ate. We can be practical for ten minutes."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Clover has appointed herself the house again. I, for one, feel supervised in a way I enjoy."
      },
      {
        "speaker": "narrator",
        "text": "They turn a cuff here and there. The window is fogged to the latch, so the lane is a rumor with one lamp still willing to be seen."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Leave a gap between Bruno's coat and mine. His is still a weather system. Mine just wants a wall and no questions."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "A gap. Civic planning, after soup. The night might survive us."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "It will survive because nobody is starting a second meal out of nerves. Sit where your socks can see the stove. Socks are the constituency I trust."
      }
    ],
    "next": "n02"
  },
  {
    "id": "n02",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The board is a map of crumbs and one shine of butter. The heel was a boat and the boat is gone. Pony looks at the emptiness as if it might confess to a secret slice."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "There is no second heel. I checked the tin, which is a hostile place that stores hope in the shape of old crackers. The crackers lost. We are officially in the tea portion of the night."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "The tea portion. I feel my standards returning. They were on the pier with Bruno's reputation."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Good. Hunger makes people honest in a way I don't trust, because it also makes them dramatic. Tea makes people specific. I would like us specific."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "I don't want a prize for weather and I already had the large shard, so nobody revive the bread. If I keep eating I'll think this is a holiday. Holidays are how I miss ordinary days."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "The holiday can clock out. I brought the potato and I watched it become soup. My ambition for food is complete. I am a finished man."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Then we stop hovering over the board. Hovering is how a meal becomes a meeting. The meeting already happened. This is after."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "After is my favorite tense. Nothing in it has to prove it will arrive. It arrived. The crumbs are evidence."
      },
      {
        "speaker": "narrator",
        "text": "Pony wipes the board in one long stroke and leaves the cloth folded, a small white flag the kitchen accepts."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You wipe a table the way other people sign a treaty. I'm not complaining. I'm observing a craftsman."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The cloth is extremely interesting. Look at the cloth, not at me, or I'll drop it and ruin the treaty."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Cloth respected. Tea next, whenever the kettle finishes thinking. I will not count the crumbs. They are free."
      }
    ],
    "next": "n03"
  },
  {
    "id": "n03",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Bruno tells on the potato they already ate, which is braver than producing another one. His hands stay on the table where everyone can see they are not hiding a second vegetable."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "That potato was the last one at the shop. I mistook last for recommended. It was soft at one eye. I put it in my pocket because leaving it felt like an insult, and then I was on the pier with a witness that could not talk."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "You went out for thread and the soup got your apology. I don't know whether to mend you or frame the bowl. I'll do neither. I'll remember."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "The thread was wrong. Brown, and your cuff is not brown. I stood in the aisle and felt the spool looking at me, and the pier was what I did instead of asking the shopkeeper to reach the navy. The petty version. I'm not upgrading it."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "A petty version is a true one. We love a true one. The potato already did its job. It doesn't get a sequel."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "No sequel. It was in the soup and the soup was on our side. That's the whole career I want for it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Agreed. The pot has been scraped. I refuse a second supper disguised as a feeling. Tea, later. Not a ceremony."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "A bad potato that became a decent bowl. I've seen worse religions, and I have practiced a few."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Then the potato is closed. Bruno, you don't have to face the peel. You already faced the table. That's the harder room."
      },
      {
        "speaker": "narrator",
        "text": "Bruno nods, smaller than his jokes. The empty board looks, briefly, like a cleared charge."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Closed. If I sound stern, it's because I like the size of this. Pocket-sized mistakes. I can live in a house with those."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Next time I'll ask the shopkeeper to reach. And I'll bring a better potato only if someone orders one. I'm not freelancing produce again."
      }
    ],
    "next": "n04"
  },
  {
    "id": "n04",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The jam is a jar with three spoons left in it, maybe four if someone is delicate. Pony holds it up and the room becomes a parliament."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "We can spend it on this bread and have a sweet hour, or we can leave it for morning and have a reason to recognize breakfast. I am not neutral. I am pretending, because the jar is not mine alone anymore."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Morning jam is a character in a play I would like to attend. Save it. I can be severe about pleasure if the pleasure is scheduled."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Save it. If I taste jam now I'll think the night is a holiday, and holidays are how I miss the ordinary days. I want the ordinary day. Put the jar where I can see it and not touch it."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "High shelf. I will be the law. Fenn, you are too tall in spirit. Don't help."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I wasn't going to help. I was going to measure the shelf. There's a difference that matters to me and to no one else."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Leave it low enough that a tired person doesn't have to perform reaching. Morning people are not acrobats. I have data."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I vote save. I would also like the record to show I did not vote for the potato. The potato happened to me."
      },
      {
        "speaker": "narrator",
        "text": "Pony sets the jar on the shelf beside the clock, not hidden, just out of the casual hand. The red of it is the brightest thing in the kitchen that is not a face."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Visible and delayed. A house style, if we survive long enough to have one."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "We are already in the middle of surviving. Don't rush the style guide."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I will look at the jar instead of the coat pocket. I am giving myself a better assignment."
      }
    ],
    "next": "n05"
  },
  {
    "id": "n05",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "In the other room the hooks are full, so the hats live on the back of the aunt's chair. Zizzy's purple brim still holds a line of melt. Pony's beanie is beside it, dark at the fold, ordinary as a habit."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Your hat looks like it lives here. Mine looks like it is visiting a hat that lives here. I can see it. I'm trying not to apologize to the chair."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The chair takes visitors. It took me, and I was worse than a hat. Wetter, and more convinced I should stand."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You still hover when you pour. I've watched. The cup is already on the table and you are negotiating with gravity."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Gravity has a history of letting people down. I like to be in the room when it happens."
      },
      {
        "speaker": "narrator",
        "text": "She lifts her hat, shakes the last cold out of the brim, and puts it back so the two brims touch. It is a small arrangement. It is also the first time all night she has placed something of hers as if it might still be there at noon."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "If I move it again in an hour, don't make it a verdict. Sometimes a hat is just nervous."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I will not cross-examine the hat. I may look pleased. You can allow me a face."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "From the doorway, and I am leaving after this sentence: the hats are fine, the chair is bearing it, and nobody has to narrate a brim. I am narrating a brim. I hate me too. Goodnight to this particular second."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Fenn, you are the opposite of a ghost. Ghosts leave. You file a report on the way out."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Reports are how I love people without standing too close to their hats. It's a system. It has flaws. I'm keeping it."
      }
    ],
    "next": "n06"
  },
  {
    "id": "n06",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pia's glasses fog when she leans over the stove. She takes them off, and her face becomes a softer fact. Pony, still wearing his, watches the fog happen to someone else with the sympathy of a man who has walked into many rooms blind."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I can't see the cup. This is either humility or a hazard. Hold still while I guess where you are."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I am exactly where the kettle is judging you. Left a little. There. You have the handle, not my finger. A victory."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Your glasses don't fog. That feels like favoritism from the steam."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "They fog. I time my sentences for the clear seconds. It's why I sound prepared. I'm not prepared. I'm waiting for a lens."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I knew there was a trick. Nobody is that even-handed without an equipment failure."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Don't be kind about me taking them off. I take them off when I don't want to see a room too clearly. Tonight I want to see it. I'm putting them back. The fog can cope."
      },
      {
        "speaker": "narrator",
        "text": "She wipes the lenses on the rose cardigan, a small rough prayer, and the kitchen returns to its edges. She looks at the coat on the chair and then, deliberately, at the jam."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Jam. Assignment remembered. Clover, your law is holding. I am almost pleasant about it."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Almost pleasant is a high score. I'll mark it on the invisible chart."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The chart is not invisible if you mention it. I'm not starting a chart. I am announcing that I am not starting a chart. This is my growth, and it is ugly, and it counts."
      }
    ],
    "next": "n07"
  },
  {
    "id": "n07",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The doorway into the lamp room was built for people who did not own Clover's ears. She ducks with the practice of someone who has turned a insult into a measurement, and then she stops ducking, because nobody in this room is owed the flinch."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "If any of you comment on the ears, I will put the jam on a higher shelf out of spite and we will all suffer. I am a woman with ears. The door frame is the one with the problem."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "The door frame has been wrong for years. I'll sand it in the spring. I've been meaning to. Tonight I was busy being a potato's courier."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Sand it. I'll hold the ladder and refuse to call it a favor. The frame has clipped more than ears. It clipped my aunt's temper, which was taller than the house."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I like a house that loses arguments to the people in it. Sand the frame. Leave the clock wrong. We're establishing a philosophy by accident."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I have to fold myself under that frame like a pocketknife. I didn't take it personally until Clover refused to. Now I might ask the wood for an apology too."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "A class action against a door. I'll take notes, and I will not read anyone else's. Personal growth, ongoing, tedious, mine."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I'll measure the frame tomorrow. Not tonight. Tonight I would measure it angrily and the number would come out moral. Moral numbers are bad carpentry."
      },
      {
        "speaker": "narrator",
        "text": "Clover touches the top of the frame on her way through, once, the way you touch a dog you have decided to forgive. Her ears clear it with a centimeter to spare and a great deal of intent."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Centimeter. Fenn, you may remember that one. It is a compliment to the ears and a complaint about the house. I contain both."
      }
    ],
    "next": "n08"
  },
  {
    "id": "n08",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The lamp room is dimmer than the kitchen, and Fenn's orange hoodie becomes the brightest stationary object. He sits on the rug because the couch has been claimed by coats and he does not move people's weather without a treaty."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I can hear the kitchen deciding to be decent. That's new. Usually a full room gets louder until someone escapes. Nobody is escaping. I keep waiting for the sound of it and getting soup instead."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "You could go be in the soup. The rug doesn't need a sentry."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "The rug needs exactly one man who will not dramatize it. I have accepted the post. Also my socks are finally warm, and I have political objections to moving warm socks."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "A sentry in an orange flag. If the lamp fails, we follow Fenn. This is the evacuation plan. I feel safer and slightly mocked by my own plan."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Follow the kettle, not me. I am a hoodie. The kettle has a purpose. I have cuffs and a tendency to count exits."
      },
      {
        "speaker": "narrator",
        "text": "He says exits and then does not count them. The effort shows, a small stillness in his hands. Pia sees it and does not praise it, which is the correct response, and she knows it, and it costs her a little."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I'm sitting on the rug too. Not as staff. As a person who wants the warm part of the floor. If that ruins the sentry story, good."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "The sentry story was terrible. Welcome to the floor. Don't fix me. The floor is the whole offer."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'll bring two cups and then leave, because three is a crowd and two is a treaty. I'm learning crowds. I'm not graduating tonight."
      }
    ],
    "next": "n09"
  },
  {
    "id": "n09",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Bruno spreads the wrong thread on the table. It is brown, cheap, and shining a little, like it wants credit for arriving. Clover's olive cuff has a split at the seam no wider than a grain."
      },
      {
        "speaker": "bruno",
        "expression": "tense",
        "text": "Navy was on the top hook. I took the brown because it was at eye level and I didn't want to ask the shopkeeper to reach. I am telling you the petty version so I don't get to be tragic about it."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "The petty version is the true one. You got embarrassed in an aisle and you left. The pier was extra. The thread was the whole plot. I prefer plots that fit in a pocket."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I can mend it with brown. It will show. Or I can wait for navy and you can keep catching the split on doorknobs. Tell me which annoyance you want."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Brown. Let it show. I want the evidence that you came back with the wrong thing instead of not coming back. Evidence is my love language. Unfortunately."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Unfortunately, she says, while looking like the law just got a birthday. Sew it, Bruno. I'll thread the needle if your hands keep apologizing."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Needle's in the tin above the stove. Don't burn yourself being symbolic. The stove is hot in an ordinary way."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy threads the needle because her hands are steadier tonight than her voice. She passes it to Bruno without a speech. He sews three stitches, none of them handsome, all of them holding."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Ugly and attached. A personal motto. I'm retiring the pier one stitch at a time."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Three stitches is not a retirement party. It is a start. I'll wear the brown. If anyone asks, I fought a shelf and the shelf lost."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I will not ask. I will notice, and I will keep the notice to myself, and this is me practicing the new law where you can all see me practice it."
      }
    ],
    "next": "n10"
  },
  {
    "id": "n10",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Giraffy turns in the lamp room and his ossicones meet the lamp shade with a soft ceremonial thud. The shade swings. The light goes wide, then narrow, then wide, painting spots across the wall that are his and not the wallpaper's."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "That was the house. I am submitting a second complaint. The first was the door. I'll have a list by dawn and no one will frame it."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The shade is older than my manners. Hit it all you want. If it breaks, we wanted a brighter room anyway and were too polite to say."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Don't hit it all he wants. I like the bulb. Bulbs are a tomorrow problem I refuse to invite into tonight."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Agreed. One thud, as a formal notice. I can duck. I ducked on the pier for years. Inside, I forget I have a height, which is a compliment to the room and a danger to the lighting."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Forgetting your height because a room is kind. That's a good problem. I'll trade you. I remember every door I've left, in order, like Fenn with worse hobbies."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Don't trade yet. I'm still using my problem. It keeps me from composing letters in my head. A swinging shade is a better occupation than a sentence I'll regret."
      },
      {
        "speaker": "narrator",
        "text": "He sits, and sitting he is suddenly of a scale the furniture understands. The spots on his coat catch the light in small honest coins. He folds his hands so they will not reach for a jar that is no longer on the pier."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "The jar is in the kitchen, on the crate, under Fenn's coat. I'm saying it so your hands can stop looking. I saw it when I was trying not to see the letter. A useful accident."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Under an orange coat. My sibling would laugh. They liked a punch line more than a vigil. I'll try the punch line. The vigil has had enough of my years."
      }
    ],
    "next": "n11"
  },
  {
    "id": "n11",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They open the door only wide enough to change the air. The lane is a white page with one gold period, the streetlamp, still working out of embarrassment. Nobody steps off the mat. The cold comes in and edits their faces."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "The ruts we made coming back are already half gone. If we left now, the hill would have us inventing the path. I am not inventing a path in boots this tired."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Good. I didn't open the door to be persuaded. I opened it so the kitchen would remember there is an outside, and then choose the inside on purpose."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The inside chooses you back. It's possessive. I've lived here long enough to warn you."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I can hear the mill stream if I am lying. I want to be lying. Is that the stream, or the kettle doing an impression?"
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Kettle. The stream is under the snow a street over, and it sounds duller, like a person talking into a sleeve. I've walked to it angry. It doesn't argue back. Very mature of it. Annoying."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "We stay on the mat. I am making that a rule so I don't get noble. Nobility, in me, walks toward water. We're onto it."
      },
      {
        "speaker": "narrator",
        "text": "Pony shuts the door. The latch catches with a small domestic click that would be nothing in July and is a complete sentence in this weather."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "There. Outside has been acknowledged and dismissed. I want that skill at the shop. Hello, dreadful errand. No."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Teach it to me in the morning. Tonight I only have the one door, and I would like to keep using it in the correct direction."
      }
    ],
    "next": "n12"
  },
  {
    "id": "n12",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They plan the bakery the way other people plan escapes, except the plan ends at their own table. It is a luxury, and Zizzy keeps touching it to see if it is real."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "If the lane lets us, the bell will be stuck and they will hit it. I want the brown loaf, not the sweet one. The sweet one is a hat the bread is wearing."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Brown loaf. Butter. I will stand in the shop like a person who is going home after, not like a person performing a goodbye in the window. I have practiced the wrong version. I can stand still and buy bread."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I'll get the small rolls. I eat them in even numbers because Fenn has infected me and I refuse to discuss the prognosis."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Even numbers are just kindness to the last roll. You hate a lonely roll. That's not infection. That's character."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Seeded, if they have it. If they don't, plain. I am not crossing the hill for a seed. Write that down as my entire ambition."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'll carry. Carrying is a job that ends at a table. I am collecting jobs that end."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Nothing for me from the bakery. I'll walk as far as the corner if we go, and then I have a post to look at. Don't save me a bun and make it a feeling."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I'll save you a bun and pretend it is logistics. You can call it a feeling in private. The bun will not tell."
      },
      {
        "speaker": "narrator",
        "text": "The plan sits on the counter next to the salt. It is not brave. That is why Zizzy trusts it enough to leave it there."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Brown loaf, small rolls, seeded if the world is kind, a bun denied and saved anyway. If I get strange at the bell, remind me I wrote this menu."
      }
    ],
    "next": "n13"
  },
  {
    "id": "n13",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The clock above the jam is wrong by four minutes, proudly, as if correctness were a vulgar habit. Pony glances at it and does not touch it. He has not explained it yet. The night is long enough that not-explaining starts to look like a locked drawer."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "That clock has been late since I started coming here. At first I thought you couldn't tell time. Then I decided it was a bit. I am asking which, because I am tired and bits annoy me after midnight."
      },
      {
        "speaker": "pony",
        "expression": "tense",
        "text": "It's my aunt's bit, and she wasn't joking. Her name was Marella. She set it early so she would leave for the ferry before she could talk herself into a second cup. She missed the ferry once and didn't forgive the cup. So the clock stayed guilty."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Marella. You've said aunt all night like the word was a closed door. You can leave it closed. You opened it. I'm standing in the doorway being careful with my boots."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "She died in the spring. Not a story for a storm, except the kettle is hers and the clock is hers and the chair is hers, so she is already in the room. You should hear her name from me and not from a spoon."
      },
      {
        "speaker": "narrator",
        "text": "Nobody rushes to fill the quiet. The kettle, tactless, begins to tick toward a boil they didn't ask for yet. Fenn reaches over and lifts it off the heat, a small correction, no speech attached."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Off the boil. We'll want it later. Marella doesn't need a performance. The clock can keep being early."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Early clocks and late letters. This town is bad at time. I feel at home, which is inconvenient."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I won't fix it. I fix things to feel less alone, and the clock is not alone. It has a reason. Reasons are allowed to be four minutes wide."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Four minutes. She would have liked you using the number and not a hymn. Thank you. That's the end of the service. Jam stays on the shelf. Name stays in the room."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Marella. I'll remember which chair. I won't sit in it like I discovered it. I sat in it earlier. I'm apologizing to a clock now. The night is going well."
      }
    ],
    "next": "n14"
  },
  {
    "id": "n14",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pony takes a recipe card from the tin, not because they need a recipe for a potato, but because the room needs a piece of paper that is allowed to be read aloud. The card is stained and bossy."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Marella's hand. I'll read it straight. If I do the voices I'll embarrass all three of us, and one of us is dead and winning."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Soup, she says. Onion if you have one. Potato if it isn't a sermon. Salt until it tastes like you meant to feed someone. Bread on the side. No speeches until the second bowl."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "She legislated the second bowl. I love her and I never met her. Don't let that get sentimental or she'll dock us four minutes."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "No speeches until the second bowl is a law I can enforce. I was born for this card. Pia, you heard it. The card is public. This is not the coat."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I can tell the difference between a recipe and a letter. Please assume I can. I need the assumption more than the compliment."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "We already followed it. Onion, potato, salt, bread, and not one speech during the bowls. I went looking for a contradiction and found obedience. I hate how pleased I am."
      },
      {
        "speaker": "narrator",
        "text": "He sets the card down where the butter used to be. Nobody suggests cooking again. The card has been promoted from instructions to company."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I cried earlier for culinary reasons and I'm not doing an encore. The encore would be showing off."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "The card got what it wanted and we're still here. That's a successful recipe. Most of mine end with me on a pier."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then we leave the pot alone. It worked. I don't thank pots twice. They get ideas."
      }
    ],
    "next": "n15"
  },
  {
    "id": "n15",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "On the back of a grocery list, Clover writes the rule in blunt pencil. She does not ask for prettier wording. Pretty wording is how rules become poems, and poems get exceptions."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "No one reads the letter unless Zizzy says the night is for that. Seeing a first line by accident is already done and is not a hobby. The pocket is not a conversation. If you want a conversation, use your mouth."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "Write that I agreed before I felt noble about agreeing. I agreed because I was ashamed. Shame is a worse author than I am. Put my name anyway."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Put mine. I'll keep the paper in the tin, not on the wall. Walls turn rules into decor. Tins keep them near the spoons, where work is."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Put mine at the top, not as a queen. As the person the rule is for. I don't want it protecting me from you. I want it protecting the letter from becoming the only thing we are."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Mine goes last. I'll read it when asked, straight, no softening. Softening is a kind of edit, and edits belong to the person who wrote the thing."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Mine is small. I won't carry the coat into another room to be helpful. Helpful is how pockets travel."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "And mine. I won't offer my jar as a trade for her pages. Different griefs. They can sit in the same kitchen without a swap."
      },
      {
        "speaker": "narrator",
        "text": "Clover reads the lines back. They are ugly and complete. She folds the list once and puts it under the recipe card, so the public paper weighs down the private rule, and both live in the tin."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Filed. If anyone breaks it, they wash up, including the pot, including the smug part of the pot. I will be watching with both ears."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Both ears. The law has never been so well equipped. Thank you. I'm saying thank you about a rule, which means the night has gotten into me."
      }
    ],
    "next": "n16"
  },
  {
    "id": "n16",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "While the bowls dry, Bruno tells the shop hour without the pier in it, because the pier has had enough starring roles. He sits on his hands so they will not demonstrate."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "The bell on the shop door sticks, same as the bakery, and the shopkeeper hits it with a pencil. I said hello like a person. That part went well. Then I saw the thread and I saw Zizzy's coat on the counter, which was my coat, which she had because the snow got hers at lunch."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I borrowed it to run the letters to the corner and back. I was coming back. The coat made me look like I had an errand instead of a mood. Moods get questions. Errands get doors held."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "The letter showed at the pocket. Not the words. The paper. Pia was at the counter buying ink she didn't need. She looked away, and then she didn't, and then she told me she had seen a line. She looked sick about it. I believe the sick. I've worn it."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "I bought the ink so I would have a reason to be at the counter long enough to decide whether to speak. The ink is green. I hate green ink. It was the nearest lie."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "And I was outside, being the clock, watching the door not open. I don't need the rest of the aisle. I needed you to come through the door. You did, eventually, via a pier, which we are not recasting as destiny."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Via a pier, then a potato, then a house. The route was stupid. The arrival is the part I want graded."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Arrival graded. Pass. The route can stay a footnote. Footnotes are where I put things I refuse to romanticize."
      },
      {
        "speaker": "narrator",
        "text": "A dry bowl ticks as it cools, which is reason enough to stay seated. A reason that ends in a kitchen is Bruno's favorite kind, and he lets himself have the favorite without joking it away."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Green ink and brown thread and a soft potato. We are a very bad shopping list. I'm glad we didn't stay in the shop trying to become a better one."
      }
    ],
    "next": "n17"
  },
  {
    "id": "n17",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Zizzy dries the pot because a towel is a task with an edge. She talks to the copper so she will not aim the story at one face and make it a confession too early."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "The other town has a boarding house with stairs that complain in C. The landlady's name is Hester. She keeps a book of who paid and she taps the names when she is pleased, which is not often. I paid her through the week. I put the key under the brick she pretends is a secret."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "You don't owe the room a tour. You can stop at the brick."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I want the brick in the record. If I only say I was scared, it sounds like weather. The key is under a brick. Hester has the week's money. The room is hers again. I am not between two houses. I left one. I am in this one. The fear can sit down."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Hester. I'll remember, and I won't write to her being helpful. Helpful is a disease I am in treatment for."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Treatment noted. The towel is winning. Don't philosophize a clean pot back into a problem."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I hated the stairs because every morning they made a small rehearsal of going down and out. I am embarrassed by how literal that is. You can laugh. I have."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Literal is a gift. My grief has been a poem for too long. A brick I understand. A brick stays where you put it."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "So you are not deciding tonight whether to return to Hester. That decision is already under a brick. Good. I can spend my worrying on people who are in the room."
      },
      {
        "speaker": "narrator",
        "text": "She hangs the towel square. She looks, briefly, like a person whose hands got to the truth first."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Worry about the room. I recommend it. The room has never abandoned a town. Unlike some of us, it knows what it is for."
      }
    ],
    "next": "n18"
  },
  {
    "id": "n18",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Pony and Zizzy end up alone by the chair for three minutes, which is a long privacy in a house this full. The hats are still touching. From the kitchen, Bruno laughs at the brown thread, and the laugh makes the privacy feel permitted rather than stolen."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Marella would have fed you before she asked your name. She would have asked eventually. She thought unnamed people were a draft, and she liked a fair copy."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Am I a fair copy yet, or still a draft with snow on it?"
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "You are a woman in my kitchen with a towel over your arm. That's fairer than a copy. Copies don't dry pots."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "I am going to say a small thing and then we are going back to the dishes. When I wrote the letter I was already walking toward this chair. The fear was real and the walking was also real. Pia saw the fear. The walking is mine to spend when I say so."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then it's yours. I won't bargain it out of you with kindness. Kindness is very good at bargains. I'm setting it down."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You set things down so carefully. It's unfair. I came here ready to be wrestled and you keep offering me a cup."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "I wrestle dough, not people. People get cups. It's a limit, not a virtue. Don't promote me."
      },
      {
        "speaker": "narrator",
        "text": "Their shoulders meet, wool to wool, and stay met. It is not a hug. A hug would be a scene, and they are trying, for this minute, to be a fact. His glasses knock her hair when he turns. They both apologize at once and then refuse to count the apologies."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Back to the dishes before Fenn files us under unsupervised softness. I want to be supervised by a towel. It's less eloquent."
      }
    ],
    "next": "n19"
  },
  {
    "id": "n19",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Giraffy puts the salt back in the tin and does not become a parable. The room watches a man practice leaving a thing where it was useful and done."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "My sibling's name is Sol. I'm saying it once so it stops being a shape. Sol took a job past the river and was supposed to write when the chair was real. The chair has been real since March. The letter has not. I don't want you to find Sol. I want you to know the name and leave the road alone."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Sol. I won't go looking. I am retired from looking like a rescue. I'll remember the chair is not an invitation."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The chair can be a chair. This house is full of furniture that used to be a sentence. We can let some of it go back to being furniture."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Sol. I won't write a letter to Sol being us. If a letter happens, it's yours. I know what it costs when someone else opens the envelope."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "I especially will not. I am the cautionary tale tonight. I accept the role. I would like to be promoted, later, to person."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "You are already a person. The tale can clock out. Sol would have liked the soup, past tense, which is a tense I am practicing. Sol liked anything that didn't ask them to be inspirational. That bowl wasn't. I'm grateful."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Name heard. Road left alone. I'll put Sol on the list of things I am not counting toward a solution. The list is long. It's my best work."
      },
      {
        "speaker": "narrator",
        "text": "He sets the salt down. His hands are steady. The steadiness looks new, like a coat that finally fits after a winter of borrowing one."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Sol, Marella, Hester. The night is acquiring a population. Good. Ghosts are lonelier when we refuse them names."
      }
    ],
    "next": "n20"
  },
  {
    "id": "n20",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The pot is clean and unemployed. In the lamp room, Bruno tells Clover which plank, because a specific plank is harder to mythologize than the water."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "Third from the end, the one that rocks. I stood there because it moves a little, so I could feel like the decision was still in progress. It was not in progress. I was standing. You were outside a shop. Those are the facts at the size they actually were."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Third from the end. I won't go stand on it to understand you. Understanding you is not a field trip. You came here and sewed three bad stitches. That is the size I wanted."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Bad stitches are going to follow me into legend. I can live with a small legend. The pier legend was too big for my jacket."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Your jacket is wet, your stitches are ugly, and you are in the chair that is not Marella's. This is my favorite version of you so far. Don't improve it into a speech."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "No speech. I'll sit until someone needs a chair moved. If I look at the door, you can say the plank's number and I will remember I already left it."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Third from the end. I hope I don't have to spend it. I like having a precise thing more than I like using it."
      },
      {
        "speaker": "narrator",
        "text": "She puts her hand on the mended cuff, over the brown thread, not on him. The touch is brief and proprietary toward the repair, not toward the man. He understands the difference and is grateful for the precision."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I heard the number from the hall and I am not involved. I'm passing through to steal a blanket. Carry on being accurate. It makes the house feel safer than poetry."
      }
    ],
    "next": "n21"
  },
  {
    "id": "n21",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Fenn counts the cups without meaning to. Seven. He counts the chairs they are using. Six, plus the crate. He counts the people and gets seven, then says the number out loud and immediately looks annoyed at his own mouth."
      },
      {
        "speaker": "fenn",
        "expression": "tense",
        "text": "Seven. I don't need seven. You are all visible. I counted because my head does it the way other people blink. I am telling you so it doesn't become a secret system you have to live inside."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Then blink. Leave the cups uncounted for a minute. I'll watch them. They rarely flee."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "If I leave them, the number goes soft. Soft numbers make me rude. I get rude, and then I call it accuracy. You have all met me. I'm trying a different trick. The trick is to let one cup be extra and not solve it."
      },
      {
        "speaker": "narrator",
        "text": "Pony sets down an eighth cup, empty, for Marella's ghost or for nobody. He does not explain. Fenn looks at the extra cup. His ears tip toward the fix, a twitch he would deny, and he puts his hands in the hoodie pocket."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Eight. There. It's wrong on purpose. The world did not end. I am unemployed as a prophet. Pia, you may applaud internally."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Internal applause, done. You look lighter. Don't inventory the lightness or you'll put it back."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "An extra cup is the kindest wrong thing I've seen tonight. And I have seen a potato forgiven."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "The eighth cup pours nothing. That's the point. Not everything in the room has to earn its heat."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I'll drink from my own and leave the eighth alone. Empty and intended. I know that shape. I won't recruit it into Sol's chair."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Good. The cup is not a project. If anyone makes it a project I will take it to the sink and that will be my one relapse. Fair warning. I relapse with dishes."
      }
    ],
    "next": "n22"
  },
  {
    "id": "n22",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The first line has been a ghost long enough. Pia asks, and Zizzy nods, and the nod is for the sentence only. The rest of the paper stays where the rule put it."
      },
      {
        "speaker": "pia",
        "expression": "tense",
        "text": "I want to say the words I saw, out loud, the exact ones, so they stop growing in my mouth. You can refuse. Refusal is also a sentence."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Say them. Just them. If you decorate, I'll hear the decoration and I'll get proud and difficult."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "You wrote that you were writing it before you knew if you were coming back. That is what I saw. Not the brick. Not the walking. The not-knowing. I made it bigger on the walk over because I was afraid of being the only one who knew. I was not protecting you. I was recruiting witnesses so I would feel less like a thief."
      },
      {
        "speaker": "narrator",
        "text": "The spoon goes still in the pot. Seven people hold the actual size of the sentence. It is smaller than the night they built around it, and the smallness is a relief with a bruise inside it."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "That's the line. It's true and it's not the whole page. Thank you for putting it back to its size. I can hate it at the correct scale now."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Correct scale. Good. I was preparing to fight a monster and I got a sentence. I can live in a house with a sentence."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Second bowl hasn't happened yet, so I am not making a speech. I am glad the line is a line. Lines end. Weather doesn't. You've had enough weather."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I will eat at the correct scale too. Someone ladle. My hands want to be useful and I don't trust them with paper."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Ladle is a good job. It ends in a bowl. Bowls are the opposite of pockets."
      }
    ],
    "next": "n23"
  },
  {
    "id": "n23",
    "background": "table",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The bowls are empty and still on the table, which makes them honest. Marella's card said no speeches until the second bowl. They had the second bowl without knowing the law. The speech window, annoyingly, is open."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I already made the sound. I'm not making it again. Encores are how a meal becomes a show."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Then we spend the window on purpose and badly. A good speech would violate the spirit. The spirit wanted us fed first. We are fed. Be small."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I was ready to be moved and instead I was fed, past tense, and the past tense is ruder and better. I feel less like a cliff. Don't quote me. Cliffs are sensitive."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Sol would have insulted a third bowl into existence and then not written. I'll stop at full. Honor can be full. That's new for me."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "And we stay in the chairs. Standing up is how people convince themselves they're about to leave. We are not about to leave. Furniture is the argument."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Chairs involved. I'll write it on the card as a footnote. Footnotes are Fenn's district, but he is busy being full. I'll trespass."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Trespass. The soup lowered my standards and I am not rebuilding them tonight. This is either peace or a trap. I'm sitting through it."
      },
      {
        "speaker": "narrator",
        "text": "Knees knock under the table. Nobody ladles anything. The room, which has been a crisis with furniture, stays a meal that is over, and the difference is so plain that even Fenn does not measure it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Window open. I suggest we waste it on a game, or Marella will think we saved our seriousness for a letter."
      }
    ],
    "next": "n24"
  },
  {
    "id": "n24",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They waste the speech window on a game Fenn invents to avoid a speech. Lowest card tells one true thing the size of a cup, not a life. The deck is short a jack and nobody cares enough to mourn the jack."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Small truths only. If it has a moral, it's too big and you draw again. I'll go first so you can see the size. I like the sad cup. Not as a joke. I like having one thing in the room that is allowed to be unmatched."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I am afraid of the shop stoop after dark. Not of people. Of how long I will wait on it if nobody assigns me a time to stop. There. Cup-sized. I'm proud and annoyed."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I hate the new paint on the green door. It isn't green. People still give directions with a color that left. I miss being able to say turn at the green and mean it."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I can sleep through bells and not through kindness. Kindness wakes me like a fire. Bells are just bells. That's why your kettle works on me. It pretends to be a bell."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I wanted the navy thread because I wanted Clover to look at her cuff and know I had looked at it first. That's the whole romance. It's tiny. I'm keeping it tiny."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Accepted at that size. I saw the brown and knew the same thing. The game is dangerous. Draw, Giraffy, before I become a speech."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "I laughed on the pier tonight, once, alone, because the jar looked like it was judging my knot. I was not only suffering. I was also ridiculous. I want that counted."
      },
      {
        "speaker": "narrator",
        "text": "The jack stays missing. The truths sit on the table with the bowls, the same height as the bowls, and nobody stacks them into a tower."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Game over. Nobody drew a moral. I am shocked and a little proud. Don't make me a coach. Coaches count."
      }
    ],
    "next": "n25"
  },
  {
    "id": "n25",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Clover starts a ferry song and loses it on the third line. The chorus, she insists, is about a rope and a joke. Pony knows a different chorus about a wage. They sing both, badly, and the badness stitches the two versions into a third thing that belongs to the kitchen."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "It isn't supposed to harmonize. It's supposed to keep your hands busy while the rope does something dull. We don't have a rope. We have a spoon. The spoon is trying."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Marella's version was about being paid. Yours is about not falling in. Both are prayers. I'm not choosing. The pot can hear both."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "I don't know either prayer. I'll do the note that doesn't exist. There. I have contributed vandalism. It's intimate."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I will hum the plank, third from the end, which has no song. Now it does. You're welcome, architecture."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Sol hated singing and would have stayed for this one because it isn't trying to be good. I'll take the low part. The low part is mostly just staying."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I know the wage chorus. I learned it to be liked at a dock I didn't work at. Old crime. I'll sing it honestly this time, which means quietly, which means you might survive."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I won't sing. I'll knock the spoon on the pot in four. If I sing, I'll correct the tune, and the tune is better wrong. This is my second relapse prevention of the night. I'm collecting chips."
      },
      {
        "speaker": "narrator",
        "text": "They go through it twice. The second time is worse and happier. The snow at the window gets none of it, which feels like the correct distribution of joy."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Enough. If we do it a third time it becomes a tradition, and traditions are for people who have slept. Wash a bowl, someone. Joy does dishes in this house."
      }
    ],
    "next": "n26"
  },
  {
    "id": "n26",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Socks become a public works project because Fenn's spare sock, the moral one, is dry, and Bruno's are not. The redistribution is conducted with the seriousness of a treaty and the laughter of people who needed a treaty about something unserious."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Dry to Bruno. I have another pair that is damp in an acceptable way. Acceptable dampness is a category I just invented. Don't build a life on it."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I will build a small life on it. Your sock is orange at the heel. I look like I lost a bet. I love it. I look findable. Bright heels can't vanish."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Bright heels. Finally a safety policy I didn't have to write. Turn around, I want the full absurdity."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "My socks are dry and cowardly. Give the moral sock to the man who went to the pier. I have had enough redemption for one potato."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "I have cold toes and no claim. I'll suffer attractively. This is a lie. Pass me whatever is left and don't watch me put it on. Dignity is a slipper I forgot."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "There's a pair in the chest that Marella called company socks. They are ugly on purpose, so guests would not steal them. She understood crime. Take them, Pia. The crime has expired."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "My feet are fine and far away. I'll keep my own. If I join the sock treaty I'll have to admit the house is dressing me, and then I'll never leave even when the road is dull and open."
      },
      {
        "speaker": "narrator",
        "text": "Bruno walks a lap of the rug in the orange heel, a parade of one. Clover watches like a person who has been given a simple gift and is not going to complicate the ribbon."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Findable. New vocation, after carrying bread. I am expanding. The expansion is mostly footwear."
      }
    ],
    "next": "n27"
  },
  {
    "id": "n27",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Giraffy and Fenn step into the doorway again, not to walk, to look at the streetlamp that quit earlier and the one that didn't. The working lamp paints their breath. The quit one is a dark bracket up the lane."
      },
      {
        "speaker": "giraffy",
        "expression": "tense",
        "text": "The quit one is my fault. I filled it last week from a can that had rain in it. I knew the can felt light in the wrong way and I called the feeling pessimism. It was water. Water in the oil. I let the lane go dark and then I went to the pier to be sad about a different failure."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "I thought the wick had given up. I was going to be competent at you tomorrow. Competence is another way I take people's mistakes away from them. You can have this one. We'll drain it when there's light. Not tonight. The can will still be guilty in the morning."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Leave me the guilt until morning, then. A short lease. I don't want it as a house. I want it as a chore with my name on it."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Chore with your name. I'll carry the ladder and not the credit. If I reach for the credit, say eight cups. That is our code for stand down."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Eight cups. Absurd code. It will work because I'll laugh. Laughter is the only stand-down I actually obey."
      },
      {
        "speaker": "narrator",
        "text": "They stay in the doorway until the cold makes the confession feel finished rather than endless. Behind them the kitchen is a warmer color than the lamp outside. Fenn pulls the door to, not latched yet, a pause."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "You laughed alone on the pier and you told us. That's harder than oil. Don't let me rank them. I'm retired from ranking for the length of this latch."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "Latch it. Ranking season is closed. Sol would say stop standing in the weather like it owes you a character arc."
      }
    ],
    "next": "n28"
  },
  {
    "id": "n28",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The couch clears, coat by coat, until it is a couch again. Zizzy takes the middle because Pony told her not to invoice herself for a cushion, and because she is tired of hovering at the edge like a guest in her own arrival. He sits beside her. The arm of the couch is empty and stays empty."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "If I fall asleep I will miss the part where I decide about the letter. Wake me rude. Rude I trust. Gentle I'll interpret as a goodbye."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "I'll wake you like a kettle. A tap, a second tap, your name. No poetry. Poetry is how people leave without moving their feet."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You can have one piece of poetry, prepaid. The hats look like they get along. There. Spent. I'm broke. Talk about the hinge."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "The hinge ticks because the pin is short. I'll replace the pin when the shop has one. It is not a sign. It is a pin. Marella hit it with a spoon once and felt better, and the hinge did not."
      },
      {
        "speaker": "narrator",
        "text": "Her head finds his shoulder and stays, a weight she could still call accidental. He does not adjust her into a prettier pose. His beanie is off. Her hat is on the chair. The stripes at her wrist show where the cuff has ridden up. He looks at the wrist the way he looks at a cup he is glad exists, and then he looks at the hinge, as requested."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "This is not the hug. I want the hug saved for if I open the letter, or not saved, just not spent while I'm half asleep and brave by accident. Accidental brave doesn't count. I want to be brave on purpose or ordinary on purpose."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Ordinary on purpose is what the shoulder is for. Take it. I'll mind the hinge. The hinge has never opened anyone's mail."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Passing through, eyes up, you are both fine, the couch is not a violation. I am getting the blanket from the chest. Resume the hinge. I saw nothing and I am happy about what I didn't see."
      }
    ],
    "next": "n29"
  },
  {
    "id": "n29",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "They try ten minutes of ordinary and almost fail immediately, which makes the success, when it arrives, feel like a craft. The topics allowed are the hinge, the price of thread, and whether the snow will crust by morning. Feelings may attend but may not hold the floor."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "Thread is too much at the shop and too little when you need navy. That is my whole economics. I feel radical. Someone else go."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "Snow will crust if the wind stays. Crust is walkable. Powder is a rumor. I learned that from falling, which I am not describing. Topic remains snow."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "The hinge needs a pin, not a discussion. I am enjoying this. We are so dull. I could live in dull. Dull is a man sewing and a clock that is early on purpose."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "The lamp in the lane will still be out in the morning. That is a chore, not a mood. I have never been happier to say chore."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Hester will find the key and tap the book and not miss me, and that is fine. The brick was the point. I am not going to add a feeling. The feeling tried. I sent it to the shelf with the jam."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Ten minutes. I think we did eight. Close enough for a house that runs early."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Eight is a number and I am not saving it. Ordinary, logged, finished. If we do it longer we'll show off, and showing off is just fear with a ribbon."
      },
      {
        "speaker": "narrator",
        "text": "They let the ten minutes end without a toast. The soup pot, scraped down, sits clean. The clean pot is the most ordinary object in the room, and it looks like an achievement because they know what it used to hold."
      }
    ],
    "next": "n30"
  },
  {
    "id": "n30",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The fear about morning arrives anyway, because fears do not respect a dull ten minutes. Zizzy says it while looking at the window, where the black has not yet given anything away."
      },
      {
        "speaker": "zizzy",
        "expression": "tense",
        "text": "Daylight makes me efficient. Efficiency is how I left last time. I packed in the light and called it sense. I'm afraid of my own morning mind. It will try to neaten this into a visit."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Then we will feed your morning mind before it gets a vote. Breakfast is not a visit. Breakfast argues. I'll put the toast where your efficiency can see it and get confused."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I'll be inefficient on purpose. I'll lose the green ink and look for it slowly. If you start packing, I will ask you where the ink is until the fit passes."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "And I'll stand in the door, not as a lock. As a man tying a boot very badly. You can get around me. You'll have to do it on purpose, past a person, not past a mood. Moods are easier to pack than I am."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "I'll read the rule out loud if your sense gets loud. The rule is not about the letter then. It's about the room still being the room."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'll be on the mat, findable, orange heel and all. Leaving would have to step over a ridiculous man. Most efficiency won't bother."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I'll be at the lamp with a can, doing a chore in public. You can come do it with me. Work is a good argument against a neat exit. Exits hate a ladder."
      },
      {
        "speaker": "narrator",
        "text": "Zizzy breathes out. The fear is not gone. It has been given a crowd, and a crowd is harder to call sense."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "A ladder, a boot, a lost ink, a rule, a heel, and toast. That is an unfair number of obstacles. I'm complaining for show. Don't move them. I want the obstacle course. I ordered it."
      }
    ],
    "next": "n31"
  },
  {
    "id": "n31",
    "background": "kitchen",
    "lines": [
      {
        "speaker": "narrator",
        "text": "The jam stays on the shelf. They look at it once, a congregation of almost, and leave it. What they do spend is the last of the tea, poured into seven cups and not the eighth. The eighth remains a kindness with nothing in it."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "Another pot, not a verdict. The paper is not owed this cup. Pia requested a lack of metaphor. I'm capable for at least one kettle."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Capable and tall. Hand it down. I want to taste leaves, not a symbol. Leaves. Yes. I could cry and I won't. The onion used up the crying permit."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "Leaves. Good. I'll drink it in the middle of the couch like I pay rent. I don't pay rent. I'm borrowing the posture."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Borrow it until it fits. Posture is cheaper than a lease and Marella would have pretended to charge you."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "To Sol, who is not a cup. To Marella, who is the clock. I'm done toasting. Toasting is how I sneak a vigil back in. Tea is tea."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "To the better potato, who is not here, and whose absence is an improvement. I'll stop. Clover's ears just went into enforcement."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "They did. Drink. The next part can be serious without us rehearsing it in the cup."
      },
      {
        "speaker": "narrator",
        "text": "They drink. The tea is slightly too strong, which is the correct error for a late pot. Outside, something slides off the roof and thumps, the house clearing its throat again, patient as furniture."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Roof snow. Not a knock. I checked the math of the sound. You may ignore the door. The door is innocent for another hour."
      }
    ],
    "next": "n32"
  },
  {
    "id": "n32",
    "background": "room",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Blankets migrate back to knees. The lamp does its steady work. People peel off into quieter pairs without leaving the house or the rule. The later hour can have them. It does not need a trumpet."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "We're past the middle. I can feel it in the tea and in my face, which wants to be a shut door and doesn't get to. Zizzy, the paper is still yours. The rest of us are going to be people in a room, not an audience, unless you ask for one."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "Be people. I like you as people. Audiences make me write cliffs. I'm retiring cliffs in favor of this blanket, which is winning."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "I'll take the sink and anyone who needs a small job. Small jobs until the window changes. If the window changes and we still haven't asked her, that is allowed. Dawn is not a debt."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I'll be on the rug, awake enough to be a witness if wanted and quiet enough to be furniture if not. Furniture is an honor tonight. I'm not being sharp about it."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "I'll keep the eighth cup empty and the door innocent. If anyone needs a number, they can suffer. I'm off the clock I invented."
      },
      {
        "speaker": "bruno",
        "expression": "neutral",
        "text": "I'll be findable in the chair. Wake me if findable becomes hiding. Clover has the plank number if my face goes traveling."
      },
      {
        "speaker": "giraffy",
        "expression": "smile",
        "text": "I'll watch the lane without writing to it. The lamp I broke can wait. Sol can wait. Waiting, shared, is less like a shrine and more like a shift."
      },
      {
        "speaker": "narrator",
        "text": "The house settles into that shift. Dishes tick as they dry. Somebody's breathing evens out and then, politely, roughens again, not ready to be the first asleep. The letter is still a rectangle in a pocket. The night, long on purpose, keeps its next hour close."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "All right. Be a shift. I'll sit in the middle of it. When it's time to choose, I'll choose. Not this breath. Soon enough that nobody has to carry me there."
      }
    ],
    "next": "h-fenn-pia"
  },
  {
    "id": "e-walk-more",
    "background": "dawn",
    "lines": [
      {
        "speaker": "narrator",
        "text": "On the way back from the bell they do stop at the post, for the ten minutes Giraffy asked and not a parade more. The post is a short wooden fact under a cap of snow. He puts his glove on it. The glove comes away printed with cold."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Hello again. I'm not here to be answered. I'm here so the walk home includes you and doesn't end on you. There's a difference. I walked it."
      },
      {
        "speaker": "zizzy",
        "expression": "smile",
        "text": "You walked it, and we're still pointed at toast. That's the whole trick. I want it written on something that isn't a letter."
      },
      {
        "speaker": "pony",
        "expression": "neutral",
        "text": "It's written on the snow behind us, and the snow is already editing. So I'll say it in the kitchen where edits need a pencil. You came as far as a bell and a post and you turned around."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Turn completed. No one invented a path. I'm proud in a way I will not measure. Move. The cold is auditioning for a personality."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "My heels are visible. If I vanish now it will be a magic trick, and I don't do those anymore."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Home. I'm spending the word. Home, with the ugly stitches and the early clock. Walk."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "The stoop can keep its nothing. I looked. There was nothing to read. I am going to be unbearable about that for one cup and then I will be normal."
      },
      {
        "speaker": "narrator",
        "text": "They take the lane in the growing light. The quit lamp is still quit. Giraffy nods at it like a man greeting a chore he recognizes. Smoke from Pony's chimney shows first, a thread, then the door."
      }
    ],
    "next": "e-walk-home"
  },
  {
    "id": "e-post-more",
    "background": "snow",
    "lines": [
      {
        "speaker": "narrator",
        "text": "At the post itself they do not linger into a rite. Giraffy reads nothing, because nothing is nailed there. He brushes snow off the cap so the wood can be wood. His height makes a long shadow on the lane, and he watches the shadow point back toward the houses."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "Sol stood here because it was the last place the town was, before the river road. I used to think if I stood in the same print they would finish the sentence. Prints don't work like that. I'm brushing off snow. That's the whole ritual. You're witnesses so I don't promote it later."
      },
      {
        "speaker": "pia",
        "expression": "smile",
        "text": "Witness, not editor. I can do that. I am doing that. Notice the restraint. It is enormous and I want no medal."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "No medal. Toast. You introduced yourself to a post and it didn't take you with it. I'm taking that personally, as encouragement."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Encouragement accepted and redirected toward the kettle. My feet are filing their own complaint. I promised them breakfast, and I don't lie to feet."
      },
      {
        "speaker": "fenn",
        "expression": "neutral",
        "text": "Path back is the path we made. Single file. Giraffy, you're in the middle, not the front. Middles are harder to turn into legends."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I'll be last, findable, a bright heel in case the middle gets poetic. The poetry will trip on me."
      },
      {
        "speaker": "clover",
        "expression": "neutral",
        "text": "Last and middle and front, I don't care, as long as the door is the next plot point. I am cashing in the night."
      },
      {
        "speaker": "narrator",
        "text": "They turn. The post diminishes correctly, the way a thing should when you are done asking it to be a person. Ahead, the working streetlamp gives up its shift to the morning and looks relieved."
      }
    ],
    "next": "e-post-home"
  },
  {
    "id": "e-stay-more",
    "background": "dawn",
    "lines": [
      {
        "speaker": "narrator",
        "text": "Not walking is its own labor. They stand in the doorway long enough to feel the choice, then they take their boots off like people who mean to be in the house when the sun finishes arriving. The mat becomes a small harbor of snow."
      },
      {
        "speaker": "zizzy",
        "expression": "neutral",
        "text": "I am omitted from the bell and I am still a person. I want to stand here until that sentence is boring. Boring means it took."
      },
      {
        "speaker": "pony",
        "expression": "smile",
        "text": "Then stand. I'll start the toast so the sentence has competition. Boredom loves a rival."
      },
      {
        "speaker": "giraffy",
        "expression": "neutral",
        "text": "The post is retired, and so is this hour of walking. I'll go when the lane is dull enough to be a chore. Today I am practicing not making a shrine out of a delay."
      },
      {
        "speaker": "fenn",
        "expression": "smile",
        "text": "Delay logged, shrine rejected. I'll oil the hinge instead. A pin can wait. Oil can't make a speech."
      },
      {
        "speaker": "clover",
        "expression": "smile",
        "text": "Oil the hinge. I'll watch Bruno not look at the door. It's my favorite program."
      },
      {
        "speaker": "bruno",
        "expression": "smile",
        "text": "I am looking at the toast. The door is a rumor I already solved. Third from the end can stay on the pier without me."
      },
      {
        "speaker": "pia",
        "expression": "neutral",
        "text": "I'll set the table wrong on purpose. Knife on the wrong side. If anyone fixes it, they are nervous. If nobody fixes it, we live here."
      },
      {
        "speaker": "narrator",
        "text": "Nobody fixes the knives. The wrongness holds. Light moves across the jam jar and makes it look like a small reserved sun, still unopened, still for this table."
      }
    ],
    "next": "e-stay-end"
  }
] as Scene[];

export const UNTIL_MORNING: Story = {
  id: "until-morning",
  title: "Until Morning",
  logline: "About two and a half hours if you read it, whichever way the night goes. The hill road closes. Seven people, a letter, and a jar that still has to be walked home.",
  characters: [
    { id: "zizzy", name: "Zizzy", cast: "zizzy", role: "came back in the snow" },
    { id: "pony", name: "Pony", cast: "pony", role: "keeps the kettle honest" },
    { id: "fenn", name: "Fenn", cast: "fenn", role: "counts what the lane is doing" },
    { id: "bruno", name: "Bruno", cast: "bruno", role: "learning to stay findable" },
    { id: "clover", name: "Clover", cast: "clover", role: "the clock who is tired of being a clock" },
    { id: "giraffy", name: "Giraffy", cast: "giraffy", role: "a light for the walk home" },
    { id: "pia", name: "Pia", cast: "pia", role: "done knowing things first" },
  ],
  start: "a-door",
  scenes,
};
