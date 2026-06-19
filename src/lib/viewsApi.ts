const VIEWS_API_BASE = "AKfycbyREb0-NhaBcMrhp6CXtA2OsKcXFJalYhvlvhN7MxmXkjU-gA1F0Wd4h3J3bLF2M-ZO8w";

function buildUrl(params: Record<string, string>) {
  const u = new URL(VIEWS_API_BASE);
  Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
  u.searchParams.set("t", String(Date.now())); // cache-bust
  return u.toString();
}

// Track view bằng IMG để né CORS
export function trackView(slug: string) {
  const url = buildUrl({ action: "collect", slug });
  const img = new Image();
  img.src = url;
}

// Lấy views bằng JSONP để né CORS
export function fetchViewsJsonp(slug: string): Promise<number> {
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
