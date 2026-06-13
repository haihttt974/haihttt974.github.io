# LÊ DUY HẢI — INFORMATION SYSTEMS DEVELOPER
### A Digital Portfolio & Living Systems Journal

[![Project Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()
[![Tech Stack: React/TS](https://img.shields.io/badge/Stack-React%20%7C%20TS%20%7C%20Vite-blue.svg)]()
[![Design: Cyber-Aesthetics](https://img.shields.io/badge/Design-Cyber--Aesthetics-cyan.svg)]()

> "Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo."

---

## 🛰️ TỔNG QUAN HỆ THỐNG (SYSTEM OVERVIEW)

Đây không chỉ là một trang web giới thiệu bản thân (Portfolio) thông thường. Đây là một **Hệ thống thông tin cá nhân**, được thiết kế để lưu trữ, trình diễn và đúc kết toàn bộ hành trình kỹ thuật của tôi. Dự án được xây dựng với triết lý **"Crafting code & distilling field experiences"** — nơi mỗi dòng code đều là một sự chế tác và mỗi bài viết là một sự đúc kết từ thực tế.

### Triết lý thiết kế (Design Philosophy)
Hệ thống sử dụng ngôn ngữ thiết kế **Cyber-Aesthetics** kết hợp với **Glassmorphism**, tạo ra một giao diện đậm chất kỹ thuật, minh bạch và có chiều sâu không gian.

---

## 💎 CÁC PHÂN HỆ CỐT LÕI (CORE MODULES)

### 1. Cyber Observatory (Hiệu ứng 3D Độc bản)
Một không gian 3D tương tác được xây dựng hoàn toàn bằng CSS Transform và Canvas API, không sử dụng các thư viện đồ họa nặng nề để đảm bảo hiệu suất:
*   **Multi-Cube Core:** Hệ thống khối lập phương trung tâm với hiệu ứng kính mờ và các chi tiết vi mạch (Tech Corners).
*   **Satellite System:** 18 khối vệ tinh chuyển động trên các quỹ đạo đa chiều (X, Y, Z), phản hồi theo vị trí con trỏ chuột.
*   **Data Fragments:** Các mảnh vỡ dữ liệu trôi nổi tạo chiều sâu không gian (Depth of Field).

### 2. Multilingual Engine (Động cơ đa ngôn ngữ)
Hệ thống hỗ trợ song ngữ **Tiếng Việt** và **Tiếng Anh** một cách toàn diện. Toàn bộ nội dung từ tiêu đề, bài viết Blog đến thông tin dự án đều được quản lý thông qua `LanguageContext`, cho phép chuyển đổi trạng thái tức thì mà không cần tải lại trang.

### 3. Knowledge Base (Kho tri thức)
Phân hệ Blog được thiết kế như một nhật ký hệ thống (System Log), nơi chia sẻ các bài viết chuyên sâu về:
*   Kiến trúc phần mềm (Software Architecture).
*   Nguyên tắc lập trình sạch (Clean Code & SOLID).
*   Thực hành DevOps và Quản trị cơ sở dữ liệu.

### 4. Project Archive (Kho lưu trữ dự án)
Nơi trình diễn các giải pháp kỹ thuật thực tế đã triển khai:
*   Hệ thống quản lý y tế (HIS/EMR).
*   Ứng dụng quản lý đào tạo GPLX (ASP.NET Core 9.0).
*   Các công cụ tối ưu hóa dữ liệu và IoT.

---

## 🛠️ NỀN TẢNG CÔNG NGHỆ (TECHNICAL STACK)

| Layer | Technologies |
| :--- | :--- |
| **Core Framework** | React 18, TypeScript, Vite |
| **Styling & UI** | Tailwind CSS, Shadcn/UI, Radix UI |
| **Animation** | Framer Motion, CSS 3D Transforms, Canvas API |
| **State Management** | React Context API (Language, Effects) |
| **Deployment** | GitHub Pages |

---

## 🏗️ CẤU TRÚC THƯ MỤC (ARCHITECTURE)

```text
src/
├── components/
│   ├── effects/      # Các phân hệ xử lý hiệu ứng 3D & Môi trường
│   ├── home/         # Thành phần cấu tạo trang chủ (Hero, Grid, Projects)
│   ├── layout/       # Cấu trúc khung (Header, Footer, Switchers)
│   └── ui/           # Thư viện thành phần giao diện chuẩn hóa
├── contexts/         # Quản lý trạng thái toàn cục (Ngôn ngữ, Hiệu ứng)
├── data/             # Nguồn dữ liệu tập trung (Profile, Blog, Projects)
├── hooks/            # Các custom hooks xử lý logic bổ trợ
├── lib/              # Tiện ích cấu hình (Motion, Utils, API)
└── pages/            # Các phân trang chức năng chính
```

---

## 👤 TÁC GIẢ (THE DEVELOPER)

**Lê Duy Hải (Hai IT)**
*   **Vai trò:** Information Systems Developer.
*   **Chuyên môn:** Database Design, Server-side Architecture, DevOps.
*   **Sứ mệnh:** Xây dựng các hệ thống có khả năng mở rộng (Scalable) và độ tin cậy cao (Reliable).

---

## 🔒 BẢN QUYỀN & QUYỀN RIÊNG TƯ (LEGAL NOTICE)

Dự án này là tài sản cá nhân độc quyền của **Lê Duy Hải**. 
*   Toàn bộ mã nguồn và nội dung được thiết kế dành riêng cho Portfolio cá nhân.
*   Vui lòng không sao chép hoặc tái sử dụng các thành phần hiệu ứng 3D và logic hệ thống khi chưa có sự đồng ý của tác giả.

---
*Last updated: 2026-06-13*
