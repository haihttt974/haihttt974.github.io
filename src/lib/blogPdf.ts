import type { BlogPost } from "@/data/blog-posts";

type PdfTheme = {
  language: "vi" | "en";
  locale: string;
  categoryName: string;
  sourceNote: string;
};

type TextStyle = {
  size: number;
  weight?: string;
  color?: string;
  lineHeight?: number;
  family?: string;
  italic?: boolean;
};

type PdfPage = ReturnType<typeof createPage>;

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const SCALE = 4;
const MARGIN_X = 52;
const MARGIN_TOP = 64;
const MARGIN_BOTTOM = 66;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const BRAND = "HAIIT.DEV";
const SITE = "haihttt974.github.io";
const BODY_FONT = "Segoe UI, Inter, Arial, sans-serif";
const MONO_FONT = "Cascadia Code, Consolas, SFMono-Regular, monospace";

const languageAliases: Record<string, string> = {
  javascript: "js",
  jsx: "js",
  typescript: "ts",
  tsx: "ts",
  py: "python",
  cs: "csharp",
  "c#": "csharp",
};

const keywordGroups: Record<string, Set<string>> = {
  js: new Set([
    "async", "await", "break", "case", "catch", "class", "const", "continue", "default", "do", "else", "export",
    "extends", "finally", "for", "from", "function", "if", "import", "in", "instanceof", "let", "new", "of", "return",
    "switch", "throw", "try", "typeof", "var", "void", "while", "yield",
  ]),
  ts: new Set([
    "abstract", "as", "async", "await", "break", "case", "catch", "class", "const", "continue", "default", "do", "else",
    "enum", "export", "extends", "finally", "for", "from", "function", "if", "implements", "import", "in", "infer",
    "interface", "keyof", "let", "namespace", "new", "of", "private", "protected", "public", "readonly", "return",
    "satisfies", "switch", "throw", "try", "type", "typeof", "var", "void", "while",
  ]),
  python: new Set([
    "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except",
    "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "nonlocal", "not",
    "or", "pass", "raise", "return", "True", "try", "while", "with", "yield",
  ]),
  csharp: new Set([
    "abstract", "async", "await", "base", "break", "case", "catch", "class", "const", "decimal", "default", "else",
    "enum", "false", "finally", "for", "foreach", "from", "get", "if", "in", "interface", "internal", "is", "namespace",
    "new", "null", "private", "protected", "public", "readonly", "record", "return", "sealed", "set", "static", "string",
    "switch", "this", "throw", "true", "try", "using", "var", "void", "when", "where",
  ]),
};

const literalTokens = new Set(["true", "false", "null", "undefined", "True", "False", "None"]);
const typeTokens = new Set([
  "Array", "Boolean", "Date", "Decimal", "Error", "Guid", "Iterable", "List", "Map", "Number", "Promise", "Record",
  "Set", "String", "Task", "ValueError", "dict", "list", "str", "int", "float", "bool",
]);

const tokenPattern =
  /(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g;

const escapePdfText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7e]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || "blog-post";

const font = ({ size, weight = "400", family = BODY_FONT, italic }: TextStyle) =>
  `${italic ? "italic " : ""}${weight} ${size}px ${family}`;

const normalizeLanguage = (language: string) => languageAliases[language.trim().toLowerCase()] ?? language.trim().toLowerCase();

const tokenizeCodeLine = (line: string) => {
  const tokens: string[] = [];
  let lastIndex = 0;

  line.replace(tokenPattern, (match, _token, offset: number) => {
    if (offset > lastIndex) tokens.push(line.slice(lastIndex, offset));
    tokens.push(match);
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < line.length) tokens.push(line.slice(lastIndex));
  return tokens;
};

const nextMeaningfulToken = (tokens: string[], startIndex: number) =>
  tokens.slice(startIndex + 1).find((token) => token.trim().length > 0);

const tokenColor = (token: string, language: string, nextToken?: string) => {
  const keywords = keywordGroups[normalizeLanguage(language)] ?? keywordGroups.js;
  if (/^\s+$/.test(token)) return "#e2e8f0";
  if (/^(\/\/|#|\/\*)/.test(token)) return "#64748b";
  if (/^(`|"|')/.test(token)) return "#6ee7b7";
  if (/^@\w+/.test(token)) return "#fcd34d";
  if (/^\d/.test(token)) return "#fdba74";
  if (literalTokens.has(token)) return "#c4b5fd";
  if (keywords.has(token)) return "#7dd3fc";
  if (typeTokens.has(token) || /^[A-Z][A-Za-z0-9_]*$/.test(token)) return "#a5f3fc";
  if (nextToken === "(") return "#fde68a";
  if (/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(token)) return "#cbd5e1";
  return "#f8fafc";
};

const stripInlineMarkdown = (text: string) => text.replace(/`([^`]+)`/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

const wrapText = (context: CanvasRenderingContext2D, text: string, maxWidth: number, style: TextStyle) => {
  context.font = font(style);
  const words = text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (context.measureText(next).width <= maxWidth) {
      current = next;
      return;
    }

    if (current) lines.push(current);
    if (context.measureText(word).width <= maxWidth) {
      current = word;
      return;
    }

    let fragment = "";
    Array.from(word).forEach((char) => {
      const candidate = `${fragment}${char}`;
      if (context.measureText(candidate).width > maxWidth && fragment) {
        lines.push(fragment);
        fragment = char;
      } else {
        fragment = candidate;
      }
    });
    current = fragment;
  });

  if (current) lines.push(current);
  return lines;
};

const createPage = () => {
  const canvas = document.createElement("canvas");
  canvas.width = PAGE_WIDTH * SCALE;
  canvas.height = PAGE_HEIGHT * SCALE;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is not available");

  context.scale(SCALE, SCALE);
  context.fillStyle = "#fbfaf7";
  context.fillRect(0, 0, PAGE_WIDTH, PAGE_HEIGHT);
  return { canvas, context, y: MARGIN_TOP };
};

const roundedRect = (context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) => {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
};

const fillRoundedRect = (context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, color: string) => {
  context.save();
  roundedRect(context, x, y, width, height, radius);
  context.fillStyle = color;
  context.fill();
  context.restore();
};

const strokeRoundedRect = (context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number, color: string) => {
  context.save();
  roundedRect(context, x, y, width, height, radius);
  context.strokeStyle = color;
  context.lineWidth = 1;
  context.stroke();
  context.restore();
};

const drawTextLine = (context: CanvasRenderingContext2D, text: string, x: number, y: number, style: TextStyle) => {
  context.font = font(style);
  context.fillStyle = style.color ?? "#334155";
  context.textAlign = "left";
  context.textBaseline = "alphabetic";
  context.fillText(text, x, y);
};

const drawWatermark = (context: CanvasRenderingContext2D, _language: "vi" | "en") => {
  context.save();
  context.translate(PAGE_WIDTH / 2, PAGE_HEIGHT / 2);
  context.rotate((-28 * Math.PI) / 180);
  context.globalAlpha = 0.035;
  context.fillStyle = "#0f172a";
  context.textAlign = "center";
  context.font = `850 42px ${BODY_FONT}`;
  context.fillText("HAIIT.DEV · PROFESSIONAL LEARNING NOTES", 0, 0);
  context.restore();
};

const drawPageChrome = (page: PdfPage, pageNumber: number, pageCount: number, language: "vi" | "en") => {
  const { context } = page;
  drawWatermark(context, language);

  context.fillStyle = "#0f172a";
  context.font = `800 10px ${BODY_FONT}`;
  context.textAlign = "left";
  context.fillText(BRAND, MARGIN_X, 30);

  context.fillStyle = "#64748b";
  context.font = `500 9px ${BODY_FONT}`;
  context.fillText(language === "vi" ? "Learning notes / PDF edition" : "Learning notes / PDF edition", MARGIN_X + 70, 30);

  context.textAlign = "right";
  context.fillText(`${SITE}  ·  ${pageNumber}/${pageCount}`, PAGE_WIDTH - MARGIN_X, PAGE_HEIGHT - 30);

  context.strokeStyle = "#e2e8f0";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(MARGIN_X, PAGE_HEIGHT - 50);
  context.lineTo(PAGE_WIDTH - MARGIN_X, PAGE_HEIGHT - 50);
  context.stroke();
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

export const downloadBlogPostPdf = async (post: BlogPost, theme: PdfTheme) => {
  await document.fonts?.ready;

  const pages: PdfPage[] = [createPage()];
  const getPage = () => pages[pages.length - 1];
  const newPage = () => {
    pages.push(createPage());
    return getPage();
  };
  const ensureSpace = (height: number) => {
    if (getPage().y + height <= PAGE_HEIGHT - MARGIN_BOTTOM) return;
    newPage();
  };

  const drawParagraph = (text: string, style: TextStyle, options?: { gapAfter?: number; x?: number; width?: number }) => {
    const x = options?.x ?? MARGIN_X;
    const width = options?.width ?? CONTENT_WIDTH;
    const lineHeight = style.lineHeight ?? style.size * 1.55;
    const lines = wrapText(getPage().context, stripInlineMarkdown(text), width, style);

    lines.forEach((line) => {
      ensureSpace(lineHeight + 2);
      const page = getPage();
      drawTextLine(page.context, line, x, page.y, style);
      page.y += lineHeight;
    });

    getPage().y += options?.gapAfter ?? 8;
  };

  const drawSectionRule = () => {
    ensureSpace(24);
    const page = getPage();
    page.context.strokeStyle = "#dbe4ef";
    page.context.lineWidth = 1;
    page.context.beginPath();
    page.context.moveTo(MARGIN_X, page.y);
    page.context.lineTo(PAGE_WIDTH - MARGIN_X, page.y);
    page.context.stroke();
    page.y += 24;
  };

  const fitText = (context: CanvasRenderingContext2D, text: string, width: number, style: TextStyle) => {
    context.font = font(style);
    if (context.measureText(text).width <= width) return text;
    let next = text;
    while (next.length > 1 && context.measureText(`${next}...`).width > width) {
      next = next.slice(0, -1);
    }
    return `${next}...`;
  };

  const drawMetaPill = (label: string, value: string, x: number, y: number, width: number) => {
    const page = getPage();
    fillRoundedRect(page.context, x, y, width, 34, 8, "#f8fafc");
    strokeRoundedRect(page.context, x, y, width, 34, 8, "#dbe4ef");
    drawTextLine(page.context, label.toUpperCase(), x + 10, y + 12, { size: 6.7, weight: "800", color: "#64748b" });
    drawTextLine(page.context, fitText(page.context, value, width - 20, { size: 8.8, weight: "800" }), x + 10, y + 26, {
      size: 8.8,
      weight: "800",
      color: "#0f172a",
    });
  };

  const measureTokenWidth = (context: CanvasRenderingContext2D, token: string) => {
    context.font = font({ size: 8.2, family: MONO_FONT });
    return context.measureText(token).width;
  };

  const splitLongToken = (context: CanvasRenderingContext2D, token: string, maxWidth: number) => {
    const parts: string[] = [];
    let current = "";
    Array.from(token).forEach((char) => {
      const next = `${current}${char}`;
      if (current && measureTokenWidth(context, next) > maxWidth) {
        parts.push(current);
        current = char;
      } else {
        current = next;
      }
    });
    if (current) parts.push(current);
    return parts;
  };

  const wrapCodeLine = (context: CanvasRenderingContext2D, line: string, language: string, maxWidth: number) => {
    const tokens = tokenizeCodeLine(line || " ").flatMap((token) =>
      measureTokenWidth(context, token) > maxWidth ? splitLongToken(context, token, maxWidth) : [token],
    );
    const rows: string[][] = [[]];
    let rowWidth = 0;

    tokens.forEach((token) => {
      const tokenWidth = measureTokenWidth(context, token);
      if (rows[rows.length - 1].length > 0 && rowWidth + tokenWidth > maxWidth) {
        rows.push([]);
        rowWidth = 0;
      }
      rows[rows.length - 1].push(token);
      rowWidth += tokenWidth;
    });

    return rows.map((row) => ({
      tokens: row,
      language,
    }));
  };

  const drawCodeTokens = (
    context: CanvasRenderingContext2D,
    row: { tokens: string[]; language: string },
    x: number,
    y: number,
  ) => {
    let cursor = x;
    context.font = font({ size: 8.2, family: MONO_FONT });
    row.tokens.forEach((token, index) => {
      context.fillStyle = tokenColor(token, row.language, nextMeaningfulToken(row.tokens, index));
      context.fillText(token, cursor, y);
      cursor += context.measureText(token).width;
    });
  };

  const drawCodeBlock = (code: string[], language: string) => {
    const lineHeight = 15.5;
    const headerHeight = 30;
    const footerPadding = 13;
    const blockX = MARGIN_X;
    const blockWidth = CONTENT_WIDTH;
    const numberWidth = 42;
    const codeX = blockX + numberWidth + 12;
    const codeWidth = blockWidth - numberWidth - 24;
    const rows = code.flatMap((line, lineIndex) =>
      wrapCodeLine(getPage().context, line, language, codeWidth).map((row, visualIndex) => ({
        ...row,
        sourceLine: lineIndex + 1,
        continued: visualIndex > 0,
      })),
    );
    let rowIndex = 0;

    while (rowIndex < rows.length) {
      ensureSpace(headerHeight + lineHeight + footerPadding + 12);
      const page = getPage();
      const available = PAGE_HEIGHT - MARGIN_BOTTOM - page.y - headerHeight - footerPadding;
      const rowsOnPage = Math.max(1, Math.min(rows.length - rowIndex, Math.floor(available / lineHeight)));
      const blockHeight = headerHeight + rowsOnPage * lineHeight + footerPadding;
      const top = page.y;

      fillRoundedRect(page.context, blockX, top, blockWidth, blockHeight, 8, "#020617");
      strokeRoundedRect(page.context, blockX, top, blockWidth, blockHeight, 8, "#334155");
      fillRoundedRect(page.context, blockX, top, blockWidth, headerHeight, 8, "#0f172a");
      page.context.fillStyle = "#0f172a";
      page.context.fillRect(blockX, top + 17, blockWidth, 14);

      [["#f87171", 16], ["#fbbf24", 30], ["#34d399", 44]].forEach(([color, cx]) => {
        page.context.fillStyle = String(color);
        page.context.beginPath();
        page.context.arc(blockX + Number(cx), top + 15, 4, 0, Math.PI * 2);
        page.context.fill();
      });

      drawTextLine(page.context, `${language || "code"}${rowIndex > 0 ? " · continued" : ""}`.toUpperCase(), blockX + 62, top + 19, {
        size: 8,
        weight: "800",
        color: "#94a3b8",
        family: MONO_FONT,
      });
      page.context.font = font({ size: 8, weight: "600", color: "#64748b", family: MONO_FONT });
      page.context.fillStyle = "#64748b";
      page.context.textAlign = "right";
      page.context.fillText(BRAND.toLowerCase(), blockX + blockWidth - 12, top + 19);
      page.context.textAlign = "left";

      page.context.strokeStyle = "#1e293b";
      page.context.beginPath();
      page.context.moveTo(blockX + numberWidth, top + headerHeight);
      page.context.lineTo(blockX + numberWidth, top + blockHeight - footerPadding + 3);
      page.context.stroke();

      for (let i = 0; i < rowsOnPage; i += 1) {
        const row = rows[rowIndex + i];
        const y = top + headerHeight + 14 + i * lineHeight;
        page.context.font = font({ size: 8, family: MONO_FONT });
        page.context.fillStyle = row.continued ? "#334155" : "#475569";
        page.context.textAlign = "right";
        page.context.fillText(row.continued ? "↳" : String(row.sourceLine), blockX + numberWidth - 10, y);
        page.context.textAlign = "left";
        drawCodeTokens(page.context, row, codeX, y);
      }

      page.y += blockHeight + 14;
      rowIndex += rowsOnPage;
    }
  };
  const date = new Date(post.date).toLocaleDateString(theme.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const downloadDate = new Date().toLocaleDateString(theme.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const firstPage = getPage();
  const coverX = MARGIN_X;
  const coverY = 52;
  const coverPaddingX = 24;
  const coverInnerX = coverX + coverPaddingX;
  const coverInnerWidth = CONTENT_WIDTH - coverPaddingX * 2;
  const categoryStyle: TextStyle = { size: 8.5, weight: "850", color: "#2563eb", lineHeight: 12 };
  const titleStyle: TextStyle = { size: 24, weight: "850", color: "#0f172a", lineHeight: 30 };
  const excerptStyle: TextStyle = { size: 11.2, color: "#475569", lineHeight: 17.5 };
  const categoryLines = wrapText(firstPage.context, theme.categoryName.toUpperCase(), coverInnerWidth - 116, categoryStyle);
  const titleLines = wrapText(firstPage.context, post.title, coverInnerWidth, titleStyle);
  const excerptLines = wrapText(firstPage.context, post.excerpt, coverInnerWidth, excerptStyle);
  const metaYGap = 18;
  const metaHeight = 34;
  const coverHeight = Math.max(
    214,
    30 + categoryLines.length * 12 + 14 + titleLines.length * 30 + 10 + excerptLines.length * 17.5 + metaYGap + metaHeight + 24,
  );

  fillRoundedRect(firstPage.context, coverX + 5, coverY + 7, CONTENT_WIDTH, coverHeight, 14, "rgba(15, 23, 42, 0.08)");
  fillRoundedRect(firstPage.context, coverX, coverY, CONTENT_WIDTH, coverHeight, 14, "#ffffff");
  strokeRoundedRect(firstPage.context, coverX, coverY, CONTENT_WIDTH, coverHeight, 14, "#d7e2ee");

  const accent = firstPage.context.createLinearGradient(coverX, coverY, coverX, coverY + coverHeight);
  accent.addColorStop(0, "#2563eb");
  accent.addColorStop(1, "#14b8a6");
  firstPage.context.fillStyle = accent;
  firstPage.context.fillRect(coverX, coverY, 5, coverHeight);

  firstPage.context.fillStyle = "#eff6ff";
  firstPage.context.beginPath();
  firstPage.context.arc(coverX + CONTENT_WIDTH - 42, coverY + 42, 26, 0, Math.PI * 2);
  firstPage.context.fill();
  firstPage.context.fillStyle = "#dbeafe";
  firstPage.context.beginPath();
  firstPage.context.arc(coverX + CONTENT_WIDTH - 74, coverY + 72, 12, 0, Math.PI * 2);
  firstPage.context.fill();

  let coverCursorY = coverY + 34;
  categoryLines.forEach((line) => {
    drawTextLine(firstPage.context, line, coverInnerX, coverCursorY, categoryStyle);
    coverCursorY += 12;
  });
  drawTextLine(firstPage.context, "PDF EDITION", coverX + CONTENT_WIDTH - 104, coverY + 34, {
    size: 7.5,
    weight: "850",
    color: "#1d4ed8",
  });

  coverCursorY += 14;
  titleLines.forEach((line) => {
    drawTextLine(firstPage.context, line, coverInnerX, coverCursorY, titleStyle);
    coverCursorY += 30;
  });

  coverCursorY += 8;
  excerptLines.forEach((line) => {
    drawTextLine(firstPage.context, line, coverInnerX, coverCursorY, excerptStyle);
    coverCursorY += 17.5;
  });

  const pillY = coverCursorY + metaYGap;
  const pillGap = 10;
  const pillWidth = (coverInnerWidth - pillGap * 2) / 3;
  drawMetaPill(theme.language === "vi" ? "Ngày đăng" : "Published", date, coverInnerX, pillY, pillWidth);
  drawMetaPill(theme.language === "vi" ? "Thời lượng" : "Read time", post.readTime, coverInnerX + pillWidth + pillGap, pillY, pillWidth);
  drawMetaPill(theme.language === "vi" ? "Nguồn" : "Source", BRAND, coverInnerX + (pillWidth + pillGap) * 2, pillY, pillWidth);

  firstPage.y = coverY + coverHeight + 28;

  drawParagraph(`${theme.language === "vi" ? "Thẻ nội dung" : "Tags"}: ${post.tags.join(", ")}`, {
    size: 9.5,
    weight: "600",
    color: "#64748b",
    lineHeight: 14,
  }, { gapAfter: 16 });
  drawSectionRule();

  const lines = post.content.trim().split("\n");
  let index = 0;
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const language = line.slice(3).trim() || "code";
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      drawCodeBlock(code, language);
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      getPage().y += 4;
      drawParagraph(line.slice(2), { size: 19, weight: "850", color: "#0f172a", lineHeight: 25 }, { gapAfter: 8 });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      ensureSpace(42);
      const page = getPage();
      page.y += 10;
      page.context.fillStyle = "#2563eb";
      page.context.fillRect(MARGIN_X, page.y - 17, 3, 22);
      drawParagraph(line.slice(3), { size: 15.5, weight: "800", color: "#1e293b", lineHeight: 21 }, { x: MARGIN_X + 14, width: CONTENT_WIDTH - 14, gapAfter: 8 });
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      drawParagraph(line.slice(4), { size: 13, weight: "800", color: "#1e293b", lineHeight: 18 }, { gapAfter: 5 });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        const item = stripInlineMarkdown(lines[index].trim().slice(2));
        ensureSpace(22);
        const page = getPage();
        page.context.fillStyle = "#2563eb";
        page.context.beginPath();
        page.context.arc(MARGIN_X + 5, page.y - 5, 2.2, 0, Math.PI * 2);
        page.context.fill();
        drawParagraph(item, { size: 10.5, color: "#334155", lineHeight: 17 }, { x: MARGIN_X + 16, width: CONTENT_WIDTH - 16, gapAfter: 2 });
        index += 1;
      }
      getPage().y += 6;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote = stripInlineMarkdown(line.slice(2));
      const quoteLines = wrapText(getPage().context, quote, CONTENT_WIDTH - 36, { size: 11.5, weight: "600", italic: true, lineHeight: 18 });
      ensureSpace(quoteLines.length * 18 + 26);
      const page = getPage();
      const top = page.y - 8;
      const height = quoteLines.length * 18 + 22;
      fillRoundedRect(page.context, MARGIN_X, top, CONTENT_WIDTH, height, 8, "#eff6ff");
      page.context.fillStyle = "#2563eb";
      page.context.fillRect(MARGIN_X, top, 3, height);
      page.y += 10;
      quoteLines.forEach((quoteLine) => {
        drawTextLine(page.context, quoteLine, MARGIN_X + 18, page.y, { size: 11.5, weight: "600", italic: true, color: "#475569", lineHeight: 18 });
        page.y += 18;
      });
      page.y += 12;
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3} |```|- |> )/.test(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    drawParagraph(paragraph.join(" "), { size: 10.6, color: "#334155", lineHeight: 17.5 }, { gapAfter: 8 });
  }

  drawSectionRule();
  drawParagraph(theme.sourceNote, { size: 8.8, color: "#64748b", lineHeight: 13.5 }, { gapAfter: 8 });
  drawParagraph(
    `${theme.language === "vi" ? "Bản PDF được xuất ngày" : "PDF exported on"} ${downloadDate}. ${theme.language === "vi" ? "Vui lòng giữ nguyên nguồn HAIIT.DEV khi chia sẻ hoặc trích dẫn." : "Please keep HAIIT.DEV attribution when sharing or quoting."}`,
    { size: 9, weight: "700", color: "#334155", lineHeight: 14 },
    { gapAfter: 0 },
  );

  pages.forEach((page, pageIndex) => drawPageChrome(page, pageIndex + 1, pages.length, theme.language));

  const imageObjects = pages.map((page) => {
    const dataUrl = page.canvas.toDataURL("image/jpeg", 0.98);
    return atob(dataUrl.split(",")[1]);
  });

  const objects: string[] = [];
  const addObject = (object: string) => {
    objects.push(object);
    return objects.length;
  };

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("");
  const pageIds: number[] = [];

  imageObjects.forEach((imageData, index) => {
    const imageId = addObject(`<< /Type /XObject /Subtype /Image /Width ${PAGE_WIDTH * SCALE} /Height ${PAGE_HEIGHT * SCALE} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageData.length} >>\nstream\n${imageData}\nendstream`);
    const drawing = `q\n${PAGE_WIDTH} 0 0 ${PAGE_HEIGHT} 0 0 cm\n/Im${index + 1} Do\nQ`;
    const contentId = addObject(`<< /Length ${drawing.length} >>\nstream\n${drawing}\nendstream`);
    const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /XObject << /Im${index + 1} ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`);
    pageIds.push(pageId);
  });

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;
  objects[catalogId - 1] = "<< /Type /Catalog /Pages 2 0 R >>";

  let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info << /Title (${escapePdfText(post.title)}) /Author (${BRAND}) >> >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const bytes = new Uint8Array(pdf.length);
  for (let i = 0; i < pdf.length; i += 1) bytes[i] = pdf.charCodeAt(i) & 0xff;

  downloadBlob(new Blob([bytes], { type: "application/pdf" }), `${slugify(post.title)}.pdf`);
};