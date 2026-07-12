# Cập nhật nội dung thiệp tốt nghiệp

Nguồn dữ liệu duy nhất là `src/data/graduation.ts`. Route `/graduation` không được liên kết từ giao diện portfolio.

Dữ liệu học tập tham khảo `public/cvs/FullStack.pdf`. Ngày, địa điểm, tọa độ, nội dung thư và Journey hiện có phần minh họa được đánh dấu `TODO`; cần xác nhận trước khi phát hành. Ảnh WebP trong `public/graduation/` là ảnh AI art-directed. SVG Journey có thể được thay bằng ảnh thật chỉ bằng cách đổi trường `image`.

## Thay ngày sự kiện

- `eventDate.localDate`: ngày lịch dạng `YYYY-MM-DD`, dùng cho Calendar.
- `eventDate.dateTimeISO`: thời điểm countdown, bắt buộc có UTC offset; Việt Nam thường là `+07:00`.
- `eventDate.timeZone`: múi giờ IANA, ví dụ `Asia/Ho_Chi_Minh`.
- `eventDate.displayTime`: nhãn giờ hiển thị.

`localDate` và `dateTimeISO` phải cùng chỉ đến một ngày tại múi giờ tổ chức. Đồng bộ thêm các field ceremony cũ đang dùng ở Hero/Ceremony: `ceremonyDateISO`, `ceremonyDateLabel`, `ceremonyTime`.

## Thay nội dung thư

Chỉnh `letter.salutation`, `letter.paragraphs`, `letter.closing`, `letter.signature` và `letter.writtenAt`.

## Thay hành trình

Mỗi item trong `journey` có `year`, `period`, `eyebrow`, `title`, `summary`, `story`, `lesson`, `highlight`, `tags`, `image`, `imageAlt`, `imageCaption` và `imagePosition`. Asset mẫu nằm tại `public/graduation/journey/`.

## Thay bản đồ và link chỉ đường

Không cần Google Cloud, API key, Map ID hoặc Billing.

1. Mở địa điểm thật trên Google Maps.
2. Chọn **Share / Chia sẻ** → **Embed a map / Nhúng bản đồ**.
3. Trong đoạn `<iframe ...>`, chỉ sao chép giá trị nằm trong thuộc tính `src="..."`.
4. Dán URL đó vào `mapLocation.embedUrl` trong `src/data/graduation.ts`.
5. Sao chép URL Google Maps thông thường của địa điểm hoặc link Directions và dán vào `mapLocation.directionsUrl`.
6. Cập nhật `mapLocation.venueName` và `mapLocation.address`.
7. Đồng bộ `venueName`, `venueAddress` và `mapUrl` nếu muốn CTA ở Hero/Ceremony cùng trỏ đến địa điểm này.

Ví dụ cấu trúc (không dùng nguyên placeholder):

```ts
mapLocation: {
  venueName: "[Tên địa điểm tổ chức]",
  address: "[Địa chỉ tổ chức]",
  embedUrl: "[Dán giá trị src của iframe Google Maps tại đây]",
  directionsUrl: "[Dán link Chỉ đường Google Maps tại đây]",
}
```

Không dán toàn bộ thẻ `<iframe>` vào data; component đã cung cấp iframe responsive, `title`, `loading="lazy"`, `allowFullScreen` và `referrerPolicy`.
## Hình ảnh chung

- Hero: `heroImage`, `heroImageAlt`, `heroImagePosition`.
- Gallery: mảng `photos`; file hiện tại là `/graduation/frame-01.webp` đến `frame-04.webp`.
- Ưu tiên WebP/AVIF, hero khoảng 1200px và gallery 800–1200px.