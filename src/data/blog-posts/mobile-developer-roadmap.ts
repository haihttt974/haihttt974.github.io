import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "mobile-developer-roadmap",
  title: "Mobile Developer Roadmap for Cross-Platform Apps",
  titleVi: "Lộ trình Mobile Developer cho ứng dụng cross-platform",
  excerpt: "A path covering UI, state, storage, APIs, testing, releases, and store deployment.",
  excerptVi: "Lộ trình gồm UI, state, storage, API, testing, release và triển khai store.",
  content: `# Mobile Developer Roadmap for Cross-Platform Apps

Cross-platform mobile development is attractive because one codebase can reach both Android and iOS. Tools such as Flutter and React Native make this practical, but mobile development is still more than drawing screens. A useful mobile app must handle navigation, local storage, API failures, permissions, offline behavior, performance, and release processes.

A good roadmap helps you learn these topics in the right order instead of jumping directly from UI tutorials to app store deployment.

## What problem does this solve?

Mobile learning can feel confusing because it mixes several concerns at once. You need UI knowledge, platform behavior, network handling, device APIs, state management, testing, build signing, and store rules.

Without a roadmap, many beginners build screens but get stuck when the app needs real data, authentication, push notifications, offline support, or a release build.

The goal of this roadmap is to build practical capability step by step: first UI, then state and data, then reliability, then release.

## Core concepts

The first concept is **platform awareness**. Even with cross-platform tools, Android and iOS have different permission models, navigation expectations, build processes, and store requirements.

The second concept is **state management**. A mobile app has UI state, server state, cached state, and sometimes offline state. Keeping these separate makes the app easier to debug.

The third concept is **resilience**. Mobile networks are unstable. A good app handles loading, retry, timeout, empty state, and partial failure gracefully.

The fourth concept is **release discipline**. A mobile app is not shipped by pushing code to a server. You need versioning, signing, store metadata, review processes, and rollback planning.

## Practical example

A practical learning path can be organized by projects:

\`\`\`text
Stage 1: UI fundamentals
- Build a profile screen and settings screen.
- Practice responsive layout and theming.

Stage 2: Navigation and state
- Build a notes app with list, detail, create, edit, and delete flows.

Stage 3: API integration
- Build a weather or product app that handles loading, error, and retry.

Stage 4: Local storage
- Add saved items, recent searches, or offline drafts.

Stage 5: Release readiness
- Add app icon, permissions, build signing, and store screenshots.
\`\`\`

This sequence matters. A release-ready app requires more than attractive UI. It needs predictable behavior when the device, network, or API is not ideal.

After the first few projects, start organizing the code like a real application instead of putting everything in screen files:

\`\`\`text
lib/
  features/
    auth/
    notes/
    settings/
  shared/
    api/
    storage/
    theme/
    widgets/
\`\`\`

The exact folders depend on the framework, but the direction matters: screens should not own API details, token storage, validation rules, and formatting logic all at once.

For React Native, a small API boundary might look like this:

\`\`\`ts
export interface NotesApi {
  getNotes(): Promise<NoteDto[]>;
  createNote(request: CreateNoteRequest): Promise<NoteDto>;
}
\`\`\`

The same idea applies in Flutter with Dart: keep the contract small, then let the UI depend on a use case or repository instead of directly constructing HTTP requests inside a button handler.

## Common mistakes

- **Learning only UI widgets.** UI is important, but real apps also need state, networking, storage, and release flow.
- **Ignoring platform differences.** Cross-platform does not mean platform details disappear.
- **Putting all state in one place.** UI state, API cache, and persisted data should not be treated the same.
- **Skipping error states.** Mobile users often have weak networks. Failure handling is part of the product.
- **Testing only on one screen size.** Phones differ in size, density, safe areas, and keyboard behavior.
- **Waiting too long to create a release build.** Build signing and store setup can reveal issues late.

## Best practices

- Learn layout, navigation, forms, and theming before complex architecture.
- Build small apps that include real flows, not only static screens.
- Handle loading, empty, error, and offline states explicitly.
- Keep API clients separate from UI components.
- Use local storage intentionally for preferences, drafts, tokens, or cached data.
- Test on both Android and iOS when possible.
- Learn release basics early: icons, permissions, signing, version codes, screenshots.
- Keep app permissions minimal and explain why they are needed.

For app quality, practice these scenarios deliberately:

- Launch the app with no network.
- Start a request, then navigate away.
- Rotate the screen or change text scaling.
- Open the keyboard on a small device.
- Kill and reopen the app after saving a draft.
- Try an expired token or unauthorized API response.

These cases reveal whether the app is only a demo or something closer to a real product.

## When to use and when to avoid

Use cross-platform development when the app needs similar behavior on Android and iOS, the team wants to share most code, and platform-specific features are not the main product differentiator.

Avoid assuming cross-platform is always cheaper. Apps that depend heavily on native SDKs, background services, Bluetooth, advanced camera features, or platform-specific UI may require more native work.

## Summary

Mobile development becomes manageable when the learning path follows real app needs.

- Start with UI and navigation.
- Add state, APIs, and local storage.
- Treat network failure as normal.
- Learn platform differences.
- Build release-ready habits early.
- Use cross-platform tools pragmatically, not blindly.`,
  contentVi: `# Lộ trình Mobile Developer cho ứng dụng cross-platform

Phát triển mobile cross-platform hấp dẫn vì một codebase có thể chạy trên cả Android và iOS. Các công cụ như Flutter hoặc React Native làm điều này thực tế hơn, nhưng mobile development không chỉ là vẽ màn hình. Một ứng dụng mobile hữu ích cần xử lý navigation, local storage, lỗi API, permission, offline behavior, performance và quy trình release.

Một roadmap tốt giúp bạn học các chủ đề này đúng thứ tự thay vì nhảy thẳng từ tutorial UI sang deploy lên store.

## Chủ đề này giải quyết vấn đề gì?

Việc học mobile dễ gây rối vì nó trộn nhiều mối quan tâm cùng lúc. Bạn cần kiến thức UI, hành vi platform, network, device API, state management, testing, build signing và quy định store.

Nếu không có roadmap, nhiều người mới có thể dựng màn hình nhưng bị kẹt khi app cần dữ liệu thật, authentication, push notification, offline support hoặc release build.

Mục tiêu của roadmap này là xây năng lực thực tế từng bước: đầu tiên là UI, sau đó state và data, tiếp theo là độ tin cậy, cuối cùng là release.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **nhận thức về platform**. Dù dùng công cụ cross-platform, Android và iOS vẫn khác nhau về permission, navigation expectation, build process và store requirement.

Ý tưởng thứ hai là **state management**. Một mobile app có UI state, server state, cached state và đôi khi offline state. Tách rõ các loại state này giúp app dễ debug hơn.

Ý tưởng thứ ba là **resilience**. Mạng mobile không ổn định. Một app tốt xử lý loading, retry, timeout, empty state và partial failure một cách rõ ràng.

Ý tưởng thứ tư là **kỷ luật release**. Mobile app không được phát hành bằng cách push code lên server. Bạn cần versioning, signing, store metadata, review process và kế hoạch rollback.

## Ví dụ thực tế

Một lộ trình học thực tế có thể tổ chức theo dự án:

\`\`\`text
Giai đoạn 1: UI fundamentals
- Xây màn hình profile và settings.
- Luyện layout responsive và theming.

Giai đoạn 2: Navigation và state
- Xây notes app có list, detail, create, edit, delete.

Giai đoạn 3: API integration
- Xây weather app hoặc product app có loading, error, retry.

Giai đoạn 4: Local storage
- Thêm saved items, recent searches hoặc offline drafts.

Giai đoạn 5: Release readiness
- Thêm app icon, permissions, build signing và store screenshots.
\`\`\`

Thứ tự này quan trọng. Một app sẵn sàng release cần nhiều hơn UI đẹp. Nó cần hành vi dự đoán được khi thiết bị, mạng hoặc API không lý tưởng.

Sau vài project đầu tiên, hãy bắt đầu tổ chức code giống ứng dụng thật thay vì nhét mọi thứ vào screen file:

\`\`\`text
lib/
  features/
    auth/
    notes/
    settings/
  shared/
    api/
    storage/
    theme/
    widgets/
\`\`\`

Tên thư mục có thể thay đổi theo framework, nhưng hướng phụ thuộc mới là phần quan trọng: screen không nên sở hữu API detail, token storage, validation rule và formatting logic cùng lúc.

Với React Native, một boundary API nhỏ có thể được mô tả như sau:

\`\`\`ts
export interface NotesApi {
  getNotes(): Promise<NoteDto[]>;
  createNote(request: CreateNoteRequest): Promise<NoteDto>;
}
\`\`\`

Ý tưởng tương tự áp dụng cho Flutter với Dart: giữ contract nhỏ, sau đó để UI phụ thuộc vào use case hoặc repository thay vì tự tạo HTTP request trong button handler.

## Lỗi thường gặp

- **Chỉ học UI widget.** UI quan trọng, nhưng app thật còn cần state, networking, storage và release flow.
- **Bỏ qua khác biệt platform.** Cross-platform không có nghĩa là chi tiết platform biến mất.
- **Đưa mọi state vào một chỗ.** UI state, API cache và persisted data không nên được xử lý giống nhau.
- **Bỏ qua error state.** Người dùng mobile thường gặp mạng yếu. Xử lý lỗi là một phần của sản phẩm.
- **Chỉ test trên một kích thước màn hình.** Điện thoại khác nhau về size, density, safe area và keyboard behavior.
- **Đợi quá lâu mới tạo release build.** Build signing và store setup có thể phát hiện vấn đề muộn.

## Best practices

- Học layout, navigation, form và theming trước kiến trúc phức tạp.
- Xây app nhỏ có flow thật, không chỉ màn hình tĩnh.
- Xử lý loading, empty, error và offline state rõ ràng.
- Tách API client khỏi UI component.
- Dùng local storage có chủ đích cho preferences, drafts, token hoặc cached data.
- Test trên cả Android và iOS khi có thể.
- Học release basics sớm: icon, permission, signing, version code, screenshot.
- Giữ permission tối thiểu và giải thích vì sao cần.

Để nâng chất lượng app, hãy luyện các tình huống này có chủ đích:

- Mở app khi không có mạng.
- Bắt đầu request rồi chuyển màn hình.
- Xoay màn hình hoặc thay đổi text scaling.
- Mở keyboard trên thiết bị nhỏ.
- Kill app rồi mở lại sau khi lưu draft.
- Thử token hết hạn hoặc API trả unauthorized.

Những case này cho thấy app chỉ là demo hay đã gần với sản phẩm thật.

## Khi nào nên dùng và khi nào nên tránh

Dùng cross-platform khi app cần hành vi tương tự trên Android và iOS, team muốn chia sẻ phần lớn code và tính năng native đặc thù không phải điểm khác biệt chính.

Tránh nghĩ cross-platform luôn rẻ hơn. App phụ thuộc nặng vào native SDK, background service, Bluetooth, camera nâng cao hoặc UI đặc thù từng platform có thể cần nhiều native work.

## Tóm tắt

Mobile development dễ quản lý hơn khi lộ trình học đi theo nhu cầu thật của app.

- Bắt đầu với UI và navigation.
- Thêm state, API và local storage.
- Xem lỗi mạng là điều bình thường.
- Học khác biệt platform.
- Xây thói quen release sớm.
- Dùng cross-platform tool một cách thực tế, không máy móc.`,
  category: "roadmap",
  tags: ["Mobile", "Flutter", "Roadmap", "Career"],
  date: "2026-05-23",
  readTime: "8 min",
  readTimeVi: "8 phút",
};
