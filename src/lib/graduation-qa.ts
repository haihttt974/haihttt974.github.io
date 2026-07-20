import { GRADUATION_QA_API_URL } from "@/config/graduation-qa";

export interface GraduationQuestion {
  id: string;
  name: string;
  question: string;
  answer: string;
  submittedAt: string;
}

const isAllowedApiUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "script.google.com" && url.pathname.startsWith("/macros/s/") && url.pathname.endsWith("/exec");
  } catch {
    return false;
  }
};

export const hasGraduationQaApi = () => isAllowedApiUrl(GRADUATION_QA_API_URL.trim());

export async function getGraduationQuestions(signal?: AbortSignal): Promise<GraduationQuestion[]> {
  const apiUrl = GRADUATION_QA_API_URL.trim();
  if (!isAllowedApiUrl(apiUrl)) throw new Error("QA_API_NOT_CONFIGURED");

  const response = await fetch(apiUrl, { signal, cache: "no-store", redirect: "follow" });
  if (!response.ok) throw new Error(`QA_API_${response.status}`);
  const payload: unknown = await response.json();
  const items = Array.isArray(payload) ? payload : typeof payload === "object" && payload !== null && Array.isArray((payload as { items?: unknown }).items) ? (payload as { items: unknown[] }).items : [];

  return items.flatMap((item, index) => {
    if (typeof item !== "object" || item === null) return [];
    const source = item as Record<string, unknown>;
    const question = typeof source.question === "string" ? source.question.trim() : "";
    if (!question) return [];
    return [{
      id: typeof source.id === "string" && source.id ? source.id : `question-${index}`,
      name: typeof source.name === "string" ? source.name.trim() : "",
      question,
      answer: typeof source.answer === "string" ? source.answer.trim() : "",
      submittedAt: typeof source.submittedAt === "string" ? source.submittedAt : "",
    }];
  });
}
