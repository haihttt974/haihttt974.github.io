export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-umami-api-key, Authorization",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    };

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders });

    const path = url.searchParams.get("path");
    const endAt = Date.now();
    const startAt = 1672531200000;

    const umamiEndpoint = `https://api.umami.is/v1/websites/${env.UMAMI_WEBSITE_ID}/metrics?startAt=${startAt}&endAt=${endAt}&type=url&_t=${endAt}`;

    try {
      const res = await fetch(umamiEndpoint, {
        headers: { "x-umami-api-key": env.UMAMI_API_KEY },
      });

      if (!res.ok) {
        return new Response(JSON.stringify({ error: "Umami API error" }), { 
          status: res.status, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        });
      }

      const metrics = await res.json();
      
      // Hàm chuẩn hóa Path nâng cao:
      // 1. Bỏ hash (/#)
      // 2. Bỏ query parameters (?...)
      // 3. Bỏ dấu / cuối cùng
      const normalize = (p) => {
        if (!p) return '/';
        let clean = p.replace('/#', '');
        clean = clean.split('?')[0];
        clean = clean.replace(/\/$/, '');
        return clean || '/';
      };

      // Tạo bản đồ cộng dồn tất cả các path
      const aggregated = {};
      metrics.forEach(m => {
        const key = normalize(m.x);
        aggregated[key] = (aggregated[key] || 0) + m.y;
      });

      // Nếu yêu cầu lấy TẤT CẢ (trang danh sách)
      if (!path || path === "all") {
        return new Response(JSON.stringify({ 
          allViews: aggregated, // Trả về object { "/blog/abc": 100, ... }
          ts: endAt 
        }), { 
          status: 200, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        });
      }

      // Nếu yêu cầu một path cụ thể
      const target = normalize(path);
      const total = aggregated[target] || 0;

      return new Response(JSON.stringify({ 
        path, 
        views: total, 
        ts: endAt 
      }), { 
        status: 200, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: "Worker Error", detail: err.message }), { 
        status: 500, 
        headers: { "Content-Type": "application/json", ...corsHeaders } 
      });
    }
  },
};
