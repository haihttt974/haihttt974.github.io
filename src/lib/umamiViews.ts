const UMAMI_PROXY_BASE = "https://haiit-umami-proxy.leduyhai090704.workers.dev";

export async function fetchViews(path: string): Promise<number> {
  const url =
    `${UMAMI_PROXY_BASE}/views?path=${encodeURIComponent(path)}&t=${Date.now()}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return 0;

  const data = await res.json();
  return Number(data.views ?? data.total ?? 0);
}

export async function fetchAllViews(): Promise<Record<string, number>> {
  const url = `${UMAMI_PROXY_BASE}/views?path=all&t=${Date.now()}`;
  
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return {};
    
    const data = await res.json();
    const metrics = data.allViews || [];
    
    // Chuyển đổi mảng [{x: "/path", y: 123}] thành object {"/path": 123}
    const viewsMap: Record<string, number> = {};
    metrics.forEach((item: any) => {
      if (item.x) viewsMap[item.x] = item.y;
    });
    
    return viewsMap;
  } catch (err) {
    console.error("Error fetching all views:", err);
    return {};
  }
}
