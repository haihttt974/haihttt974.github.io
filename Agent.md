# Agent Project Documentation: haihttt974.github.io

Dự án này là trang web cá nhân/portfolio của **haiit**, được xây dựng bằng React và Vite. Trang web bao gồm blog, danh sách dự án, thông tin cá nhân và các hiệu ứng hình ảnh đặc biệt.

## 🛠 Công nghệ sử dụng
- **Frontend:** React 18 (TypeScript), Vite.
- **Styling:** Tailwind CSS, shadcn/ui, Lucide Icons.
- **Routing:** React Router v6.
- **State Management:** React Context API (cho hiệu ứng), TanStack Query (cho fetching data).
- **UI Components:** Radix UI primitives qua shadcn/ui.
- **Analytics:** Umami Analytics.

## 📁 Cấu trúc thư mục chính
- `worker.js`: Code Cloudflare Worker dùng làm proxy lấy dữ liệu từ Umami.
- `src/components/`:
    - `ui/`: Các thành phần giao diện cơ bản từ shadcn/ui (Button, Card, Dialog, v.v.).
    - `layout/`: Các thành phần bố cục (Header, Footer, Layout chung).
    - `home/`: Các section riêng cho trang chủ (Hero, FeaturedPosts, Projects).
    - `effects/`: Hệ thống hiệu ứng hình ảnh (Tết, Giáng sinh, Parallax).
    - `analytics/`: Tích hợp Umami.
- `src/contexts/`: Chứa `EffectsContext` quản lý trạng thái hiệu ứng toàn trang.
- `src/pages/`: Các trang chính (Index, Blog, BlogPost, Projects, About).
- `src/hooks/`: Custom hooks như `use-mobile`, `use-toast`.
- `src/lib/`: Các hàm tiện ích, cấu hình API và Umami.
- `src/data/`: Dữ liệu tĩnh (ví dụ: `blogData.ts`).

## ✨ Tính năng đặc biệt: Hệ thống hiệu ứng (Effects System)
Dự án có một hệ thống hiệu ứng nền độc đáo có thể chuyển đổi qua `EffectsController`:
- **Christmas:** Hiệu ứng tuyết rơi và trang trí Giáng sinh.
- **Tet:** Hiệu ứng hoa đào và không khí Tết nguyên đán.
- **3D Parallax:** Hiệu ứng chiều sâu theo chuyển động chuột.
- **None:** Tắt toàn bộ hiệu ứng.

Trạng thái này được quản lý toàn cục qua `EffectsContext` và render bởi `EffectsRenderer`.

## 📈 Hệ thống theo dõi lượt xem (View Counter)
- **Công nghệ:** Sử dụng Umami Analytics thông qua một Cloudflare Worker proxy (`haiit-umami-proxy`).
- **Real-time:** Cả trang danh sách Blog và trang chi tiết bài viết đều tự động cập nhật số lượt xem sau mỗi khoảng thời gian (30-60 giây) mà không cần load lại trang.
- **Cơ chế:** Fetch dữ liệu từ proxy Umami dựa trên path của bài viết (ví dụ: `/blog/understanding-solid-principles`).

## 🚀 Cách vận hành
1. **Cài đặt:** `npm install` hoặc `bun install`.
2. **Chạy dev:** `npm run dev`.
3. **Build:** `npm run build`.
4. **Deploy:** `npm run deploy` (lên GitHub Pages).

---
*Lưu ý: File này được tự động cập nhật bởi Agent khi có các thay đổi quan trọng về kiến trúc hoặc tính năng trong codebase.*
