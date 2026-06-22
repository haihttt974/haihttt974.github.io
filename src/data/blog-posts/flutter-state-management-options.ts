import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "flutter-state-management-options",
  title: "Flutter State Management Options: Choosing the Right Fit",
  titleVi: "Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp",
  excerpt: "A comparison of state management approaches for small and growing Flutter apps.",
  excerptVi: "So sánh các cách quản lý state cho ứng dụng Flutter nhỏ và đang mở rộng.",
  content: `# Flutter State Management Options: Choosing the Right Fit

State management in Flutter is not about finding one library that wins every situation. It is about choosing a level of structure that matches the size of the feature, the lifetime of the state, the team skill level, and the cost of future changes.

A settings toggle, a login session, a shopping cart, cached API data, and a multi-step checkout flow do not need the same solution. If every state is treated as global state, the app becomes hard to reason about. If every feature keeps state locally, screens become difficult to connect.

This article gives a practical map for choosing between local state, inherited state, Provider, Riverpod, Bloc, and simpler service-based approaches.

## What problem does this solve?

Flutter apps become difficult to maintain when state ownership is unclear. A value may be updated in one widget, read by another widget, fetched from an API, cached locally, and reset after logout. Without a clear pattern, teams run into duplicated fetches, inconsistent UI, stale data, and widgets that rebuild more than necessary.

State management helps answer:

- Who owns this data?
- How long should this data live?
- Which widgets should rebuild when it changes?
- Is the state local UI state or shared application state?
- Does the state come from an API, local storage, or user input?
- How will we test the logic?

The best choice is usually the simplest one that still keeps ownership clear.

## Core concepts

The first concept is **state lifetime**. Some state lives only while one widget is on screen, such as whether a password field is visible. Other state lives across routes, such as authentication or cart contents.

The second concept is **state scope**. Local state should stay local. Shared state should be lifted to a place where all consumers can access it without passing props through many layers.

The third concept is **state source**. UI state, server state, cached state, and persisted state have different rules. Server state often needs loading, error, refresh, and stale handling.

The fourth concept is **rebuild control**. Good state management updates the right parts of the UI without forcing unrelated widgets to rebuild.

The fifth concept is **testability**. Business logic should be testable without rendering the whole widget tree.

## Practical example

For small local state, \`setState\` is still valid:

\`\`\`text
class PasswordFieldState extends State<PasswordField> {
  bool obscureText = true;

  void toggleVisibility() {
    setState(() {
      obscureText = !obscureText;
    });
  }
}
\`\`\`

This is appropriate because the state belongs to one widget and does not need to be shared.

For shared feature state, use a dedicated controller or notifier. The idea is to keep mutation logic outside the widget:

\`\`\`text
class CartController extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(Product product) {
    _items.add(CartItem(product: product, quantity: 1));
    notifyListeners();
  }
}
\`\`\`

The widget can listen to the controller, while the controller owns the rules for changing the cart. The same idea can be implemented with Provider, Riverpod Notifier, Bloc, or another pattern.

## Common mistakes

- **Making everything global.** Global state is convenient at first but makes ownership and cleanup harder.
- **Using a heavy pattern for tiny state.** A simple toggle does not need Bloc or a global provider.
- **Keeping business rules inside widgets.** Widgets should coordinate UI; complex rules belong in controllers, use cases, or services.
- **Mixing server state and UI state.** API data needs refresh, error, loading, and caching behavior. A text field value does not.
- **Ignoring rebuild scope.** If one small change rebuilds a whole screen, performance and debugging both suffer.
- **Choosing a library before defining the problem.** The library matters less than state lifetime, scope, and ownership.

## Best practices

- Use \`setState\` for short-lived state owned by one widget.
- Use Provider or Riverpod for shared state that needs dependency injection and clear ownership.
- Use Bloc or Cubit when events, transitions, and testable flows are important.
- Keep API calls and storage access outside widgets.
- Separate UI state from domain state.
- Keep state close to the feature unless it truly belongs to the whole app.
- Prefer explicit loading, empty, error, and success states for async data.
- Test controllers or blocs without rendering the full UI when possible.

For growing apps, consistency is more important than chasing every new library. Pick a small set of patterns and document when the team should use each one.

## When to use and when to avoid

Use simple local state when the value affects only one widget or one screen. Use shared state management when multiple screens need the same data, when logic must be tested independently, or when async flows become difficult to coordinate.

Avoid heavy architecture for prototypes or simple screens. Also avoid keeping everything in \`setState\` once the app has authentication, caching, offline data, or multi-screen workflows.

The trade-off is structure versus speed. Less structure is faster at the beginning. More structure becomes valuable when the app and team grow.

## Summary

Flutter state management is a design choice about ownership, lifetime, and change propagation.

- Keep local state local.
- Move shared rules into controllers, not widgets.
- Match the solution to state lifetime and scope.
- Treat async server state differently from UI state.
- Choose Provider, Riverpod, Bloc, or simple services based on real complexity.
- Keep the team consistent instead of mixing patterns randomly.`,
  contentVi: `# Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp

Quản lý state trong Flutter không phải là tìm một thư viện thắng mọi tình huống. Điều quan trọng là chọn mức cấu trúc phù hợp với độ lớn của feature, vòng đời của state, kỹ năng team và chi phí thay đổi về sau.

Một settings toggle, login session, shopping cart, cached API data và checkout nhiều bước không cần cùng một giải pháp. Nếu state nào cũng đưa thành global state, app sẽ khó hiểu. Nếu state nào cũng giữ local, các màn hình lại khó kết nối với nhau.

Bài viết này đưa ra bản đồ thực tế để chọn giữa local state, inherited state, Provider, Riverpod, Bloc và cách tổ chức bằng service/controller đơn giản.

## Chủ đề này giải quyết vấn đề gì?

Flutter app trở nên khó bảo trì khi ownership của state không rõ. Một giá trị có thể được update ở widget này, đọc ở widget khác, fetch từ API, cache local và reset sau logout. Không có pattern rõ ràng, team dễ gặp duplicated fetch, UI không nhất quán, stale data và widget rebuild nhiều hơn cần thiết.

State management giúp trả lời:

- Ai sở hữu dữ liệu này?
- Dữ liệu này sống trong bao lâu?
- Widget nào cần rebuild khi nó thay đổi?
- Đây là local UI state hay shared application state?
- State đến từ API, local storage hay input của user?
- Logic này sẽ được test như thế nào?

Lựa chọn tốt nhất thường là cách đơn giản nhất nhưng vẫn giữ ownership rõ.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **state lifetime**. Một số state chỉ sống khi một widget còn trên màn hình, như việc password field có đang ẩn không. State khác sống qua nhiều route, như authentication hoặc cart.

Ý tưởng thứ hai là **state scope**. Local state nên ở local. Shared state nên được đưa đến nơi các consumer có thể truy cập mà không phải truyền prop qua nhiều tầng.

Ý tưởng thứ ba là **state source**. UI state, server state, cached state và persisted state có quy tắc khác nhau. Server state thường cần loading, error, refresh và stale handling.

Ý tưởng thứ tư là **kiểm soát rebuild**. State management tốt cập nhật đúng phần UI cần thay đổi, không kéo theo widget không liên quan.

Ý tưởng thứ năm là **testability**. Business logic nên test được mà không cần render toàn bộ widget tree.

## Ví dụ thực tế

Với state local nhỏ, \`setState\` vẫn hoàn toàn phù hợp:

\`\`\`text
class PasswordFieldState extends State<PasswordField> {
  bool obscureText = true;

  void toggleVisibility() {
    setState(() {
      obscureText = !obscureText;
    });
  }
}
\`\`\`

Cách này phù hợp vì state thuộc về một widget và không cần chia sẻ.

Với state dùng chung trong feature, hãy dùng controller hoặc notifier riêng. Ý tưởng là đưa mutation logic ra khỏi widget:

\`\`\`text
class CartController extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(Product product) {
    _items.add(CartItem(product: product, quantity: 1));
    notifyListeners();
  }
}
\`\`\`

Widget có thể listen controller, còn controller sở hữu rule thay đổi cart. Ý tưởng tương tự có thể triển khai bằng Provider, Riverpod Notifier, Bloc hoặc pattern khác.

## Lỗi thường gặp

- **Đưa mọi thứ thành global.** Global state tiện lúc đầu nhưng làm ownership và cleanup khó hơn.
- **Dùng pattern nặng cho state nhỏ.** Một toggle đơn giản không cần Bloc hoặc global provider.
- **Đặt business rule trong widget.** Widget nên điều phối UI; rule phức tạp nên ở controller, use case hoặc service.
- **Trộn server state và UI state.** API data cần refresh, error, loading và caching. Giá trị text field thì không.
- **Bỏ qua phạm vi rebuild.** Một thay đổi nhỏ mà rebuild cả màn hình sẽ làm performance và debugging kém hơn.
- **Chọn library trước khi định nghĩa vấn đề.** Library ít quan trọng hơn lifetime, scope và ownership của state.

## Best practices

- Dùng \`setState\` cho state ngắn hạn thuộc về một widget.
- Dùng Provider hoặc Riverpod cho shared state cần dependency injection và ownership rõ.
- Dùng Bloc hoặc Cubit khi event, transition và flow dễ test là quan trọng.
- Đưa API call và storage access ra khỏi widget.
- Tách UI state khỏi domain state.
- Giữ state gần feature, trừ khi nó thật sự thuộc toàn app.
- Luôn có loading, empty, error và success state rõ ràng cho async data.
- Test controller hoặc bloc mà không cần render toàn bộ UI khi có thể.

Với app đang lớn dần, consistency quan trọng hơn việc chạy theo mọi thư viện mới. Hãy chọn một nhóm pattern nhỏ và ghi rõ khi nào team dùng từng pattern.

## Khi nào nên dùng và khi nào nên tránh

Dùng local state đơn giản khi giá trị chỉ ảnh hưởng một widget hoặc một màn hình. Dùng shared state management khi nhiều màn hình cần cùng dữ liệu, logic cần test độc lập hoặc async flow khó điều phối.

Tránh kiến trúc nặng cho prototype hoặc màn hình đơn giản. Cũng tránh giữ mọi thứ bằng \`setState\` khi app đã có authentication, caching, offline data hoặc workflow nhiều màn hình.

Trade-off là cấu trúc và tốc độ. Ít cấu trúc giúp đi nhanh lúc đầu. Nhiều cấu trúc trở nên có giá trị khi app và team lớn hơn.

## Tóm tắt

Quản lý state Flutter là quyết định thiết kế về ownership, lifetime và cách lan truyền thay đổi.

- Giữ local state ở local.
- Đưa shared rules vào controller, không nhét trong widget.
- Chọn giải pháp theo lifetime và scope của state.
- Xử lý async server state khác UI state.
- Chọn Provider, Riverpod, Bloc hoặc service đơn giản dựa trên độ phức tạp thật.
- Giữ team nhất quán thay vì trộn pattern ngẫu nhiên.`,
  category: "frameworks",
  tags: ["Flutter", "Dart", "State Management", "Mobile"],
  date: "2026-06-15",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
