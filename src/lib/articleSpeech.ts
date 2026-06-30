export type ArticleSpeechKind = "heading" | "paragraph" | "list" | "quote";

export interface ArticleSpeechSegment {
  id: string;
  kind: ArticleSpeechKind;
  label: string;
  text: string;
}

const headingPattern = /^#{1,3}\s+/;
const blockStartPattern = /^(#{1,3} |```|- |> )/;

const cleanInlineText = (text: string) =>
  text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const makeLabel = (text: string) => {
  const cleanText = cleanInlineText(text);
  return cleanText.length > 84 ? `${cleanText.slice(0, 81).trim()}...` : cleanText;
};

const createSegment = (kind: ArticleSpeechKind, text: string, index: number): ArticleSpeechSegment | undefined => {
  const cleanText = cleanInlineText(text);
  if (!cleanText) return undefined;

  return {
    id: `speech-segment-${index}`,
    kind,
    label: makeLabel(cleanText),
    text: cleanText,
  };
};

export const buildArticleSpeechSegments = (content: string): ArticleSpeechSegment[] => {
  const lines = content.trim().split("\n");
  const segments: ArticleSpeechSegment[] = [];
  let index = 0;

  const pushSegment = (kind: ArticleSpeechKind, text: string) => {
    const segment = createSegment(kind, text, segments.length);
    if (segment) segments.push(segment);
  };

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        index += 1;
      }
      index += 1;
      continue;
    }

    if (headingPattern.test(line)) {
      pushSegment("heading", line.replace(headingPattern, ""));
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      pushSegment("list", items.join(". "));
      continue;
    }

    if (line.startsWith("> ")) {
      pushSegment("quote", line.slice(2));
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !blockStartPattern.test(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    pushSegment("paragraph", paragraph.join(" "));
  }

  return segments;
};
