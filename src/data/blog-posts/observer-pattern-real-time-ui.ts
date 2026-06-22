import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "observer-pattern-real-time-ui",
  title: "Observer Pattern for Real-Time UI Updates",
  titleVi: "Observer Pattern cho cập nhật UI thời gian thực",
  excerpt: "How observer-style flows appear in subscriptions, stores, and live dashboards.",
  excerptVi: "Cách luồng kiểu observer xuất hiện trong subscription, store và dashboard realtime.",
  content: `# Observer Pattern for Real-Time UI Updates

The Observer Pattern appears whenever one part of an application needs to react when another part changes. In modern UI development, this shows up in stores, subscriptions, WebSocket events, live dashboards, notifications, and form state.

The pattern is simple: a subject owns state or events, and observers subscribe to be notified when something changes. The practical challenge is not the definition. The challenge is managing subscriptions, avoiding memory leaks, preventing unnecessary updates, and keeping real-time flows understandable.

## What problem does this solve?

Real-time UI becomes difficult when components need updates without manually passing callbacks through every layer. A chat badge should update when a new message arrives. A dashboard card should update when metrics change. A notification panel should react to server events.

Observer-style flows help by:

- Decoupling event producers from UI consumers.
- Allowing multiple views to react to the same change.
- Supporting real-time data from WebSockets or event streams.
- Keeping update logic centralized.
- Reducing prop drilling for shared subscriptions.

The pattern is useful when the UI should respond to change, but the producer should not know which components are currently visible.

## Core concepts

The first concept is **subject**. The subject owns the state or event source and notifies observers.

The second concept is **observer**. The observer subscribes to changes and reacts when notified.

The third concept is **subscription lifecycle**. Observers must unsubscribe when no longer needed, especially in UI components.

The fourth concept is **change granularity**. Not every change should update every observer. Good systems notify the right subscribers.

The fifth concept is **backpressure and frequency**. Real-time updates can be frequent. The UI may need batching, throttling, or selective rendering.

## Practical example

A small event store can demonstrate the idea:

\`\`\`ts
type Listener<T> = (value: T) => void;

class ObservableValue<T> {
  private listeners = new Set<Listener<T>>();

  constructor(private value: T) {}

  getSnapshot() {
    return this.value;
  }

  subscribe(listener: Listener<T>) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  setValue(nextValue: T) {
    this.value = nextValue;
    this.listeners.forEach((listener) => listener(nextValue));
  }
}
\`\`\`

In a real app, the subject may be a WebSocket client, a state store, or a query cache. The same principle applies: components subscribe, update when the value changes, and unsubscribe during cleanup.

For real-time notifications, the flow may look like this:

\`\`\`text
WebSocket receives NotificationCreated
-> notification store updates unread count
-> header badge re-renders
-> notification drawer updates list if open
\`\`\`

The WebSocket layer does not need to know about the header or drawer. It only publishes the change to the subject.

## Common mistakes

- **Forgetting to unsubscribe.** This can create memory leaks and updates to unmounted components.
- **Not controlling update frequency.** Frequent events can cause excessive renders.
- **Making observers mutate the subject.** This can create loops and unpredictable state.
- **Using one global stream for everything.** Broad notifications make it hard to know why a component updated.
- **Hiding business logic in subscriptions.** Subscription handlers should stay small; complex rules belong in services or stores.
- **No error or reconnect strategy.** Real-time connections fail and must recover.

## Best practices

- Keep subscription setup and cleanup explicit.
- Notify only the observers that need the change.
- Use typed events or clearly defined payloads.
- Keep event handlers small and predictable.
- Batch or throttle high-frequency updates.
- Separate transport concerns from UI state.
- Add logs for connection, reconnect, and message handling failures.
- Test the subject separately from UI components when possible.

For React, prefer established primitives such as external stores, state libraries, or React Query subscriptions when they fit. The pattern matters more than hand-writing your own observable implementation.

## When to use and when to avoid

Use Observer Pattern when multiple parts of the UI need to react to changing state or external events. It fits notifications, live dashboards, collaborative editing indicators, streaming logs, and shared stores.

Avoid it for simple parent-child communication where props are enough. Also avoid observer flows when they hide data movement so much that developers cannot trace updates.

The trade-off is decoupling versus traceability. Observers reduce direct dependencies, but teams need clear event names, cleanup, and debugging tools.

## Summary

Observer Pattern is a practical foundation for real-time UI updates.

- Use subjects to publish changes.
- Let observers subscribe and unsubscribe explicitly.
- Keep update payloads clear and typed.
- Avoid broad global streams.
- Control high-frequency updates.
- Keep real-time transport separate from UI rendering.`,
  contentVi: `# Observer Pattern cho cập nhật UI thời gian thực

Observer Pattern xuất hiện khi một phần của ứng dụng cần phản ứng khi phần khác thay đổi. Trong UI hiện đại, pattern này có mặt trong store, subscription, WebSocket event, live dashboard, notification và form state.

Pattern rất đơn giản: subject sở hữu state hoặc event, observer subscribe để được thông báo khi có thay đổi. Thách thức thực tế không nằm ở định nghĩa. Thách thức là quản lý subscription, tránh memory leak, ngăn update không cần thiết và giữ real-time flow dễ hiểu.

## Chủ đề này giải quyết vấn đề gì?

UI thời gian thực trở nên khó khi component cần update mà không muốn truyền callback qua nhiều tầng. Chat badge cần cập nhật khi có message mới. Dashboard card cần cập nhật khi metric thay đổi. Notification panel cần phản ứng với server event.

Luồng kiểu Observer giúp:

- Tách event producer khỏi UI consumer.
- Cho nhiều view phản ứng với cùng một thay đổi.
- Hỗ trợ realtime data từ WebSocket hoặc event stream.
- Giữ update logic tập trung.
- Giảm prop drilling cho shared subscription.

Pattern này hữu ích khi UI cần phản ứng với thay đổi nhưng producer không nên biết component nào đang hiển thị.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **subject**. Subject sở hữu state hoặc event source và thông báo cho observer.

Ý tưởng thứ hai là **observer**. Observer subscribe thay đổi và phản ứng khi được notify.

Ý tưởng thứ ba là **subscription lifecycle**. Observer phải unsubscribe khi không còn cần, đặc biệt trong UI component.

Ý tưởng thứ tư là **độ chi tiết của change**. Không phải mọi thay đổi đều nên update mọi observer. Hệ thống tốt notify đúng subscriber.

Ý tưởng thứ năm là **backpressure và frequency**. Realtime update có thể rất nhiều. UI có thể cần batching, throttling hoặc selective rendering.

## Ví dụ thực tế

Một event store nhỏ có thể minh họa ý tưởng:

\`\`\`ts
type Listener<T> = (value: T) => void;

class ObservableValue<T> {
  private listeners = new Set<Listener<T>>();

  constructor(private value: T) {}

  getSnapshot() {
    return this.value;
  }

  subscribe(listener: Listener<T>) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  setValue(nextValue: T) {
    this.value = nextValue;
    this.listeners.forEach((listener) => listener(nextValue));
  }
}
\`\`\`

Trong app thật, subject có thể là WebSocket client, state store hoặc query cache. Nguyên tắc vẫn giống nhau: component subscribe, update khi value đổi và unsubscribe khi cleanup.

Với realtime notification, flow có thể như sau:

\`\`\`text
WebSocket receives NotificationCreated
-> notification store updates unread count
-> header badge re-renders
-> notification drawer updates list if open
\`\`\`

WebSocket layer không cần biết header hay drawer. Nó chỉ publish thay đổi vào subject.

## Lỗi thường gặp

- **Quên unsubscribe.** Điều này có thể tạo memory leak và update component đã unmount.
- **Không kiểm soát tần suất update.** Event quá thường xuyên có thể gây render quá mức.
- **Để observer mutate subject.** Việc này có thể tạo loop và state khó đoán.
- **Dùng một global stream cho mọi thứ.** Notification quá rộng làm khó biết vì sao component update.
- **Giấu business logic trong subscription.** Handler nên nhỏ; rule phức tạp nên ở service hoặc store.
- **Không có chiến lược error/reconnect.** Realtime connection có thể fail và cần recover.

## Best practices

- Setup và cleanup subscription rõ ràng.
- Chỉ notify observer cần thay đổi.
- Dùng typed event hoặc payload định nghĩa rõ.
- Giữ event handler nhỏ và dễ đoán.
- Batch hoặc throttle update tần suất cao.
- Tách transport concern khỏi UI state.
- Thêm log cho connection, reconnect và message handling failure.
- Test subject riêng khỏi UI component khi có thể.

Với React, nên ưu tiên primitive có sẵn như external store, state library hoặc React Query subscription khi phù hợp. Pattern quan trọng hơn việc tự viết observable implementation.

## Khi nào nên dùng và khi nào nên tránh

Dùng Observer Pattern khi nhiều phần UI cần phản ứng với state thay đổi hoặc external event. Nó phù hợp cho notification, live dashboard, collaborative editing indicator, streaming log và shared store.

Tránh dùng cho parent-child communication đơn giản khi props đã đủ. Cũng tránh observer flow nếu nó che giấu data movement đến mức developer không trace được update.

Trade-off là decoupling và traceability. Observer giảm dependency trực tiếp, nhưng team cần event name rõ, cleanup và công cụ debug.

## Tóm tắt

Observer Pattern là nền tảng thực tế cho UI cập nhật thời gian thực.

- Dùng subject để publish thay đổi.
- Cho observer subscribe và unsubscribe rõ ràng.
- Giữ payload update rõ và typed.
- Tránh global stream quá rộng.
- Kiểm soát update tần suất cao.
- Tách realtime transport khỏi UI rendering.`,
  category: "patterns",
  tags: ["Observer Pattern", "Realtime", "UI", "Design Patterns"],
  date: "2026-06-04",
  readTime: "7 min",
  readTimeVi: "7 phút",
};
