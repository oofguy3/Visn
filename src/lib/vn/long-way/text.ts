export type Span = { text: string; italic: boolean; bold: boolean };

/** The script keeps markdown emphasis (`*italic*`, `**bold**`). */
export function emphasize(source: string): Span[] {
  const spans: Span[] = [];
  let italic = false;
  let bold = false;
  let buf = "";
  const flush = () => {
    if (!buf) return;
    spans.push({ text: buf, italic, bold });
    buf = "";
  };
  for (let i = 0; i < source.length; i += 1) {
    if (source.startsWith("**", i)) {
      flush();
      bold = !bold;
      i += 1;
      continue;
    }
    if (source[i] === "*") {
      flush();
      italic = !italic;
      continue;
    }
    buf += source[i];
  }
  flush();
  return spans.length > 0 ? spans : [{ text: "", italic: false, bold: false }];
}

export function plainText(source: string): string {
  return emphasize(source)
    .map((span) => span.text)
    .join("");
}

export function sliceSpans(spans: Span[], count: number): Span[] {
  const out: Span[] = [];
  let left = count;
  for (const span of spans) {
    if (left <= 0) break;
    if (span.text.length <= left) {
      out.push(span);
      left -= span.text.length;
    } else {
      out.push({ ...span, text: span.text.slice(0, left) });
      left = 0;
    }
  }
  return out;
}
