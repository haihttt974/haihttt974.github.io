const VIEWS_API_BASE =
  "https://script.google.com/macros/s/AKfycbyREb0-NhaBcMrhp6CXtA2OsKcXFJalYhvlvhN7MxmXkjU-gA1F0Wd4h3J3bLF2M-ZO8w/exec";

function buildUrl(params: Record<string, string>) {
  const u = new URL(VIEWS_API_BASE);
  Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
  u.searchParams.set("t", String(Date.now()));
  return u.toString();
}

export function trackView(slug: string): Promise<void> {
  if (typeof Image === "undefined") return Promise.resolve();

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = buildUrl({ action: "collect", slug });
  });
}

export function fetchViewsJsonp(slug: string): Promise<number> {
  if (typeof window === "undefined" || typeof document === "undefined") return Promise.resolve(0);

  return new Promise((resolve) => {
    const cb = `__views_cb_${Math.random().toString(36).slice(2)}`;
    const url = buildUrl({ action: "views", slug, callback: cb });

    (window as any)[cb] = (data: any) => {
      try {
        resolve(Number(data?.views ?? 0));
      } finally {
        delete (window as any)[cb];
        script.remove();
      }
    };

    const script = document.createElement("script");
    script.src = url;
    script.onerror = () => {
      delete (window as any)[cb];
      script.remove();
      resolve(0);
    };
    document.body.appendChild(script);
  });
}
