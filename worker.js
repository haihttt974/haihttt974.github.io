export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-umami-api-key, Authorization",
      "Access-Control-Max-Age": "86400",
      // ÉP BUỘC KHÔNG LƯU CACHE TẠI TRÌNH DUYỆT VÀ CLOUDFLARE
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname !== "/views") {
      return new Response(JSON.stringify({ error: "Not found" }), { 
        status: 404, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      });
    }

    const path = url.searchParams.get("path");
    const endAt = Date.now();
    const startAt = 1672531200000;

    // Thêm tham số ngẫu nhiên vào URL gọi tới Umami để tránh Umami trả về cache
    const umamiEndpoint = `https://api.umami.is/v1/websites/${env.UMAMI_WEBSITE_ID}/metrics?startAt=${startAt}&endAt=${endAt}&type=url&_cache_bust=${endAt}`;

    try {
      const res = await fetch(umamiEndpoint, {
        headers: {
          "Accept": "application/json",
          "x-umami-api-key": env.UMAMI_API_KEY,
        },
      });

      if (!res.ok) {
        return new Response(JSON.stringify({ error: "Umami API error" }), { 
          status: res.status, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        });
      }

      const metrics = await res.json();
      
      if (!path || path === "all") {
        return new Response(JSON.stringify({ allViews: metrics, ts: endAt }), { 
          status: 200, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        });
      }

      const pageMetric = metrics.find(m => m.x === path);
      return new Response(JSON.stringify({ path, views: pageMetric ? pageMetric.y : 0, ts: endAt }), { 
        status: 200, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: "Worker Error" }), { 
        status: 500, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      });
    }
  },
};
