import type { BlogPost } from "./types";

export const blogPost: BlogPost = {
  id: "oracle-database-practical-guide",
  title: "Oracle Database Practical Guide for Application Developers",
  titleVi: "Hướng dẫn Oracle Database thực tế cho lập trình viên ứng dụng",
  excerpt: "A serious practical guide to Oracle Database: architecture, SQL, PL/SQL, transactions, indexing, performance, security, backup, multitenant design, and production trade-offs.",
  excerptVi: "Hướng dẫn Oracle Database thực tế và nghiêm túc: kiến trúc, SQL, PL/SQL, transaction, indexing, performance, security, backup, multitenant và các trade-off trong production.",
  content: `# Oracle Database Practical Guide for Application Developers

Oracle Database is a mature relational and object-relational database platform used in systems where data consistency, transaction integrity, security, availability, and long-term maintainability matter. It is common in banking, insurance, ERP, government systems, large enterprise applications, data warehouses, and mixed workloads where many applications depend on the same critical data.

For an application developer, learning Oracle is not only learning SQL syntax. It means understanding how Oracle stores data, how transactions work, how the optimizer chooses execution plans, how indexes help or hurt, how PL/SQL fits into application design, and why operational concerns such as backup, recovery, privileges, and schema design must be considered early.

Oracle can feel large because it is large. The right way to learn it is not to memorize every feature. The right way is to understand the core model, use the database deliberately, and know which features solve real production problems.

## What problem does this solve?

Most applications eventually become data problems. The UI may change, frameworks may change, and services may be rewritten, but business data must remain correct. Oracle Database is designed for systems where correctness and controlled access are more important than quick prototypes.

Oracle helps solve several hard problems:

- **Consistent transactions:** multiple statements can succeed or fail as one unit.
- **Concurrent access:** many users can read and write data without corrupting each other's work.
- **Data integrity:** constraints, keys, triggers, and schemas protect business rules.
- **Performance at scale:** indexes, partitioning, optimizer statistics, execution plans, materialized views, and tuning tools help large datasets remain usable.
- **Security and governance:** users, roles, privileges, auditing, encryption, and data masking support controlled access.
- **Operational reliability:** backup, recovery, Data Guard, high availability, and multitenant architecture support production systems.
- **Database-side logic:** PL/SQL packages, procedures, functions, and triggers can keep certain rules close to the data.

The value is not that every project needs every Oracle feature. The value is that Oracle gives serious teams a deep toolbox when data becomes business-critical.

## Core concepts

### Database, instance, schema, and objects

Oracle separates logical structures from physical storage. A database contains files on disk. An instance is the memory structures and background processes that manage those files. Application developers do not need to administer every process, but they should understand that Oracle is not just a folder of tables. It is a server with memory, processes, redo logs, control files, data files, and recovery mechanisms.

A **schema** is a collection of objects owned by a database user. Tables, indexes, views, sequences, packages, procedures, functions, and triggers are common schema objects. This matters because permissions, naming, deployment, and application ownership often happen at the schema level.

Good schema design starts with business meaning:

- Tables represent entities or relationships.
- Primary keys identify rows.
- Foreign keys protect relationships.
- Unique constraints prevent duplicate business facts.
- Not-null constraints protect required data.
- Check constraints enforce simple rules close to the data.

If the application is the only place that enforces important rules, data can become inconsistent when another job, script, integration, or admin operation writes to the same tables.

### SQL is declarative

Oracle SQL describes what data is needed, not exactly how to retrieve it. The optimizer chooses an execution plan based on statistics, indexes, predicates, joins, and available access paths. This is why two SQL statements that look similar can have very different performance.

Developers should become comfortable with:

- \`SELECT\`, \`JOIN\`, \`WHERE\`, \`GROUP BY\`, \`ORDER BY\`
- \`INSERT\`, \`UPDATE\`, \`DELETE\`, \`MERGE\`
- Constraints and indexes
- Views and materialized views
- Execution plans and optimizer statistics
- Transaction control with \`COMMIT\` and \`ROLLBACK\`

SQL skill matters because the database can often solve a data problem more safely and efficiently than application code that loads too many rows and processes them in memory.

### Transactions and read consistency

A transaction is a logical unit of work. In Oracle, changes become visible to other sessions only after commit. If something fails, rollback can undo the uncommitted work. This is fundamental for business workflows such as transferring money, reserving inventory, approving payments, or updating account status.

Oracle also provides read consistency. A query sees a consistent view of committed data for a point in time. This helps readers and writers work concurrently without every read blocking every write. Developers still need to design carefully around lost updates, long transactions, retry behavior, and isolation requirements.

Practical rules:

- Keep transactions as short as possible.
- Do not wait for user input while holding a transaction open.
- Commit at business boundaries, not after every statement.
- Handle unique constraint and foreign key errors as real business outcomes.
- Avoid hiding commits inside low-level procedures unless that procedure truly owns the whole unit of work.

### PL/SQL is database-side application logic

PL/SQL is Oracle's procedural extension to SQL. It supports variables, control flow, exceptions, procedures, functions, packages, triggers, and more. PL/SQL is powerful because it runs close to the data and can group related SQL operations into a controlled unit.

Use PL/SQL when logic is strongly data-centric, performance benefits from running near the data, or several applications need the same database operation. Avoid putting all business logic in PL/SQL by default if the domain logic belongs in application services, needs modern application testing workflows, or must integrate heavily with external APIs.

The most maintainable PL/SQL is usually packaged, named clearly, and treated like production code: versioned, reviewed, tested, and deployed through migrations.

### Indexes are access paths, not magic

An index can make reads faster, but it is not free. Indexes consume storage and add overhead to inserts, updates, and deletes. A useful index matches real query patterns: filtering columns, join columns, ordering needs, and selectivity.

Bad indexing often comes from guessing. Good indexing comes from observing actual SQL, reading execution plans, and understanding data distribution.

Common Oracle index considerations:

- B-tree indexes are common for selective lookups and ranges.
- Composite indexes should follow query predicates and ordering patterns.
- Function-based indexes can help when queries apply functions consistently.
- Bitmap indexes can be useful in data warehouse scenarios but are usually dangerous for high-concurrency OLTP writes.
- Indexing every foreign key can help locking and join performance, but should still be reviewed with workload context.

### Performance is a workflow

Oracle performance tuning is not "add an index and hope." A professional workflow looks like this:

1. Identify the slow business operation.
2. Find the SQL statements involved.
3. Check the execution plan.
4. Check row counts, predicates, joins, and indexes.
5. Confirm optimizer statistics are current.
6. Test a focused change.
7. Measure again with realistic data.

The biggest performance mistakes are often application mistakes: fetching too much data, running queries in loops, missing pagination, using leading wildcard searches, committing too often, or making a chatty service call for every row.

### Multitenant architecture

Modern Oracle uses a multitenant architecture with container databases (CDBs) and pluggable databases (PDBs). A PDB appears to applications as a separate database while being managed inside a CDB. For developers, the important idea is that application schemas often live inside a PDB, while DBAs manage broader infrastructure at the CDB level.

Multitenant architecture helps with consolidation, isolation, cloning, patching, and lifecycle management. Application teams should still understand which PDB they connect to, how connection strings are configured, and how migrations are applied per environment.

### Newer Oracle capabilities

Oracle Database has expanded beyond traditional relational workloads. Current Oracle AI Database documentation includes areas such as JSON support, graph capabilities, spatial features, and AI Vector Search. These features can be useful when an application needs mixed structured and semi-structured data or semantic search near enterprise data.

Still, new features should be adopted for a real use case. Vector search, JSON duality, or in-database AI features should solve a concrete product problem, not become architecture decoration.

## Practical example

Consider an order system. A weak design stores orders without constraints and expects the application to prevent every invalid state. A stronger Oracle design lets the database protect important facts.

\`\`\`text
CREATE TABLE customers (
  customer_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  email VARCHAR2(320) NOT NULL,
  full_name VARCHAR2(200) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT uq_customers_email UNIQUE (email)
);

CREATE TABLE orders (
  order_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  customer_id NUMBER NOT NULL,
  status VARCHAR2(30) NOT NULL,
  total_amount NUMBER(12, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT fk_orders_customer
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  CONSTRAINT ck_orders_status
    CHECK (status IN ('PENDING', 'PAID', 'CANCELLED')),
  CONSTRAINT ck_orders_total
    CHECK (total_amount >= 0)
);

CREATE INDEX ix_orders_customer_created
  ON orders (customer_id, created_at DESC);
\`\`\`

This schema does several important things:

- It prevents customers without emails.
- It prevents duplicate customer emails.
- It prevents orders without a valid customer.
- It restricts order status to known values.
- It prevents negative totals.
- It supports a common query: recent orders for a customer.

A transactional workflow can then update the order safely:

\`\`\`text
UPDATE orders
SET status = 'PAID'
WHERE order_id = :order_id
  AND status = 'PENDING';

INSERT INTO payment_events (order_id, event_type, created_at)
VALUES (:order_id, 'PAYMENT_CAPTURED', SYSTIMESTAMP);

COMMIT;
\`\`\`

In a real application, you would check affected row counts, handle constraint errors, and rollback on failure. The key idea is that the database and application cooperate. The application owns the workflow. The database protects facts that must never be invalid.

## Common mistakes

- **Treating Oracle like generic SQL only.** Standard SQL knowledge helps, but Oracle has its own optimizer behavior, data types, PL/SQL model, locking behavior, and operational concepts.
- **Ignoring constraints.** If important rules exist only in application code, data can be corrupted by scripts, imports, jobs, and integrations.
- **Committing too often.** Commit at meaningful business boundaries. Excessive commits make workflows harder to reason about.
- **Leaving transactions open too long.** Long transactions increase undo pressure, locking problems, and operational risk.
- **Adding indexes without workload evidence.** Every index has write and storage cost.
- **Using functions on indexed columns accidentally.** Expressions can prevent normal index usage unless a function-based index is designed intentionally.
- **Building SQL dynamically without bind variables.** This can hurt performance and increase security risk.
- **Putting too much logic in triggers.** Triggers can hide behavior and make changes difficult to reason about.
- **Skipping execution plans.** Without plans, query tuning becomes guessing.
- **Ignoring backup and recovery until production.** Recovery is not a DBA-only concern when application data is business-critical.

## Best practices

- Model schemas around business rules, not only current screens.
- Use primary keys, foreign keys, unique constraints, not-null constraints, and check constraints deliberately.
- Use bind variables in application queries.
- Keep transactions short and explicit.
- Treat PL/SQL packages as versioned application code.
- Review execution plans for important queries.
- Add indexes based on query patterns, not assumptions.
- Keep optimizer statistics current through the appropriate database maintenance process.
- Use least privilege: application users should have only the permissions they need.
- Separate schema ownership, application runtime users, and administrative users.
- Plan migrations with rollback, data volume, locking impact, and deployment windows in mind.
- Test with realistic data volume before trusting performance.
- Document backup, restore, and recovery expectations for important applications.

## When to use and when to avoid

Use Oracle Database when the application needs strong consistency, complex relational data, mature transaction handling, enterprise security, high availability, advanced performance tooling, and long-term operational support. It fits systems where data is valuable, regulated, shared by many applications, or expected to live for years.

Oracle is also a strong choice when an organization already has Oracle expertise, licensing, infrastructure, monitoring, backup strategy, and operational processes. In that environment, using Oracle can reduce platform risk because the team knows how to operate it.

Avoid Oracle when the project is a small prototype, a low-budget side project, or a simple application where a lighter database is enough. Also avoid it when the team has no ability to operate, tune, secure, back up, and monitor the database. Oracle is powerful, but that power comes with complexity, licensing considerations, and operational responsibility.

The trade-off is straightforward: Oracle gives deep database capabilities, but it expects disciplined design and operations. If a team treats it casually, the system can become expensive and hard to maintain.

## Summary

Oracle Database is not just a place to store rows. It is a large data platform for transactional integrity, concurrency, security, performance, recovery, and enterprise operations. Application developers do not need to become DBAs overnight, but they should understand the database well enough to design safe schemas, write efficient SQL, use transactions correctly, and collaborate with database specialists.

Key takeaways:

- Use constraints to protect business facts.
- Understand transactions, commits, rollbacks, locks, and read consistency.
- Learn Oracle SQL and PL/SQL where they solve real problems.
- Tune with execution plans and real workload evidence.
- Design indexes for actual queries.
- Keep security and least privilege in mind from the beginning.
- Treat backup, recovery, and migrations as part of application quality.
- Choose Oracle when the data problem justifies a serious database platform.`,
  contentVi: `# Hướng dẫn Oracle Database thực tế cho lập trình viên ứng dụng

Oracle Database là một nền tảng cơ sở dữ liệu quan hệ và object-relational đã rất trưởng thành, thường được dùng trong các hệ thống cần tính nhất quán dữ liệu, transaction integrity, bảo mật, khả năng sẵn sàng cao và khả năng bảo trì lâu dài. Oracle xuất hiện nhiều trong ngân hàng, bảo hiểm, ERP, hệ thống nhà nước, ứng dụng enterprise lớn, data warehouse và các workload hỗn hợp nơi nhiều ứng dụng phụ thuộc vào cùng một nguồn dữ liệu quan trọng.

Với lập trình viên ứng dụng, học Oracle không chỉ là học cú pháp SQL. Bạn cần hiểu Oracle lưu dữ liệu như thế nào, transaction hoạt động ra sao, optimizer chọn execution plan thế nào, index giúp hoặc gây hại trong trường hợp nào, PL/SQL nên đặt ở đâu trong thiết kế ứng dụng, và vì sao backup, recovery, privilege, schema design phải được nghĩ đến từ sớm.

Oracle có cảm giác lớn vì nó thực sự lớn. Cách học đúng không phải là cố nhớ mọi feature. Cách học đúng là hiểu mô hình cốt lõi, dùng database có chủ đích và biết feature nào giải quyết vấn đề production thật.

## Chủ đề này giải quyết vấn đề gì?

Phần lớn ứng dụng cuối cùng đều trở thành bài toán dữ liệu. UI có thể thay đổi, framework có thể thay đổi, service có thể viết lại, nhưng dữ liệu nghiệp vụ phải đúng. Oracle Database được thiết kế cho các hệ thống nơi tính đúng đắn và quyền truy cập có kiểm soát quan trọng hơn việc tạo prototype thật nhanh.

Oracle giúp giải quyết nhiều vấn đề khó:

- **Transaction nhất quán:** nhiều statement có thể thành công hoặc thất bại như một đơn vị.
- **Truy cập đồng thời:** nhiều user có thể đọc và ghi mà không phá dữ liệu của nhau.
- **Data integrity:** constraints, keys, triggers và schemas bảo vệ rule nghiệp vụ.
- **Performance ở quy mô lớn:** indexes, partitioning, optimizer statistics, execution plans, materialized views và tuning tools giúp dataset lớn vẫn dùng được.
- **Security và governance:** users, roles, privileges, auditing, encryption và data masking hỗ trợ kiểm soát truy cập.
- **Độ tin cậy vận hành:** backup, recovery, Data Guard, high availability và multitenant architecture hỗ trợ production systems.
- **Logic phía database:** PL/SQL packages, procedures, functions và triggers có thể giữ một số rule gần dữ liệu.

Giá trị không nằm ở việc mọi project đều cần mọi feature của Oracle. Giá trị là Oracle cho team nghiêm túc một bộ công cụ sâu khi dữ liệu trở thành tài sản quan trọng.

## Các ý tưởng cốt lõi

### Database, instance, schema và objects

Oracle tách cấu trúc logic khỏi lưu trữ vật lý. Database chứa các file trên disk. Instance là các memory structures và background processes quản lý các file đó. Lập trình viên ứng dụng không cần quản trị mọi process, nhưng nên hiểu Oracle không chỉ là một thư mục chứa table. Nó là một server có memory, process, redo log, control file, data file và cơ chế recovery.

Một **schema** là tập hợp objects thuộc sở hữu của một database user. Tables, indexes, views, sequences, packages, procedures, functions và triggers là các schema objects phổ biến. Điều này quan trọng vì permission, naming, deployment và ownership ứng dụng thường diễn ra ở tầng schema.

Schema design tốt bắt đầu từ ý nghĩa nghiệp vụ:

- Tables biểu diễn entity hoặc relationship.
- Primary keys định danh rows.
- Foreign keys bảo vệ quan hệ.
- Unique constraints ngăn business fact bị trùng.
- Not-null constraints bảo vệ dữ liệu bắt buộc.
- Check constraints ép các rule đơn giản gần dữ liệu.

Nếu ứng dụng là nơi duy nhất enforce rule quan trọng, dữ liệu có thể sai khi job, script, integration hoặc thao tác admin khác ghi vào cùng table.

### SQL là ngôn ngữ declarative

Oracle SQL mô tả dữ liệu cần lấy, không mô tả chính xác cách lấy. Optimizer chọn execution plan dựa trên statistics, indexes, predicates, joins và access paths có sẵn. Vì vậy hai câu SQL nhìn gần giống nhau có thể có performance rất khác.

Developer nên quen với:

- \`SELECT\`, \`JOIN\`, \`WHERE\`, \`GROUP BY\`, \`ORDER BY\`
- \`INSERT\`, \`UPDATE\`, \`DELETE\`, \`MERGE\`
- Constraints và indexes
- Views và materialized views
- Execution plans và optimizer statistics
- Transaction control với \`COMMIT\` và \`ROLLBACK\`

Kỹ năng SQL quan trọng vì database thường có thể giải quyết bài toán dữ liệu an toàn và hiệu quả hơn application code tải quá nhiều rows rồi xử lý trong memory.

### Transactions và read consistency

Transaction là một đơn vị công việc logic. Trong Oracle, thay đổi chỉ hiển thị với session khác sau khi commit. Nếu có lỗi, rollback có thể hoàn tác phần chưa commit. Đây là nền tảng cho các workflow như chuyển tiền, giữ tồn kho, duyệt thanh toán hoặc cập nhật trạng thái tài khoản.

Oracle cũng cung cấp read consistency. Một query nhìn thấy dữ liệu committed nhất quán tại một thời điểm. Điều này giúp reader và writer chạy đồng thời mà không phải mọi read đều block mọi write. Developer vẫn cần thiết kế cẩn thận quanh lost updates, transaction dài, retry behavior và isolation requirements.

Nguyên tắc thực tế:

- Giữ transaction ngắn nhất có thể.
- Không chờ input người dùng khi transaction đang mở.
- Commit tại business boundary, không commit sau mọi statement.
- Xử lý lỗi unique constraint và foreign key như outcome nghiệp vụ thật.
- Tránh giấu commit trong procedure cấp thấp trừ khi procedure đó thật sự sở hữu toàn bộ unit of work.

### PL/SQL là logic ứng dụng phía database

PL/SQL là phần mở rộng procedural của Oracle SQL. Nó hỗ trợ biến, control flow, exceptions, procedures, functions, packages, triggers và nhiều khả năng khác. PL/SQL mạnh vì chạy gần dữ liệu và có thể gom nhiều SQL operations liên quan vào một đơn vị có kiểm soát.

Dùng PL/SQL khi logic rất data-centric, performance hưởng lợi từ việc chạy gần dữ liệu hoặc nhiều ứng dụng cần dùng chung một operation ở database. Tránh đặt toàn bộ business logic vào PL/SQL theo mặc định nếu domain logic thuộc về application services, cần workflow testing hiện đại hoặc phải tích hợp nhiều với external APIs.

PL/SQL dễ bảo trì nhất thường được đóng gói trong package, đặt tên rõ ràng và được xem như production code: có version, review, test và deploy qua migrations.

### Indexes là access paths, không phải phép màu

Index có thể làm read nhanh hơn, nhưng không miễn phí. Index tốn storage và làm tăng overhead cho insert, update, delete. Một index hữu ích phải khớp với query pattern thật: filtering columns, join columns, ordering needs và selectivity.

Indexing tệ thường đến từ đoán mò. Indexing tốt đến từ quan sát SQL thật, đọc execution plan và hiểu phân bố dữ liệu.

Một số điểm cần nhớ về Oracle index:

- B-tree indexes phổ biến cho lookup chọn lọc và range queries.
- Composite indexes nên đi theo predicates và ordering pattern của query.
- Function-based indexes hữu ích khi query áp dụng function một cách nhất quán.
- Bitmap indexes có thể hợp với data warehouse nhưng thường nguy hiểm cho OLTP write concurrency cao.
- Index foreign key thường giúp locking và join performance, nhưng vẫn cần review theo workload.

### Performance là một workflow

Tuning Oracle không phải là "thêm index rồi hy vọng". Một workflow chuyên nghiệp thường là:

1. Xác định business operation chậm.
2. Tìm các SQL statements liên quan.
3. Kiểm tra execution plan.
4. Kiểm tra row counts, predicates, joins và indexes.
5. Xác nhận optimizer statistics còn phù hợp.
6. Thử một thay đổi có trọng tâm.
7. Đo lại với dữ liệu thực tế.

Các lỗi performance lớn thường là lỗi ở application: fetch quá nhiều dữ liệu, chạy query trong vòng lặp, thiếu pagination, dùng leading wildcard search, commit quá thường xuyên hoặc gọi service quá nhiều lần cho từng row.

### Multitenant architecture

Oracle hiện đại dùng kiến trúc multitenant với container databases (CDBs) và pluggable databases (PDBs). Một PDB xuất hiện với ứng dụng như một database riêng nhưng được quản lý bên trong CDB. Với developer, ý quan trọng là application schemas thường nằm trong PDB, còn DBA quản lý hạ tầng rộng hơn ở tầng CDB.

Multitenant architecture giúp consolidation, isolation, cloning, patching và lifecycle management. Team ứng dụng vẫn nên hiểu mình connect tới PDB nào, connection string được cấu hình ra sao và migrations được áp dụng thế nào ở từng môi trường.

### Các khả năng mới hơn của Oracle

Oracle Database đã mở rộng vượt ra ngoài workload quan hệ truyền thống. Tài liệu Oracle AI Database hiện tại bao gồm các mảng như JSON support, graph capabilities, spatial features và AI Vector Search. Những feature này có thể hữu ích khi ứng dụng cần kết hợp dữ liệu có cấu trúc, bán cấu trúc hoặc semantic search gần dữ liệu enterprise.

Tuy vậy, feature mới nên được dùng vì có use case thật. Vector search, JSON duality hoặc in-database AI features nên giải quyết một vấn đề sản phẩm cụ thể, không nên trở thành trang trí kiến trúc.

## Ví dụ thực tế

Hãy xét một hệ thống đơn hàng. Thiết kế yếu lưu orders mà thiếu constraints và kỳ vọng application tự ngăn mọi trạng thái sai. Thiết kế Oracle tốt hơn để database bảo vệ các sự thật quan trọng.

\`\`\`text
CREATE TABLE customers (
  customer_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  email VARCHAR2(320) NOT NULL,
  full_name VARCHAR2(200) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT uq_customers_email UNIQUE (email)
);

CREATE TABLE orders (
  order_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  customer_id NUMBER NOT NULL,
  status VARCHAR2(30) NOT NULL,
  total_amount NUMBER(12, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT fk_orders_customer
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  CONSTRAINT ck_orders_status
    CHECK (status IN ('PENDING', 'PAID', 'CANCELLED')),
  CONSTRAINT ck_orders_total
    CHECK (total_amount >= 0)
);

CREATE INDEX ix_orders_customer_created
  ON orders (customer_id, created_at DESC);
\`\`\`

Schema này làm được nhiều việc quan trọng:

- Ngăn customer thiếu email.
- Ngăn email customer bị trùng.
- Ngăn order không có customer hợp lệ.
- Giới hạn status vào các giá trị đã biết.
- Ngăn total âm.
- Hỗ trợ query phổ biến: các order gần đây của một customer.

Một workflow transaction có thể cập nhật order an toàn:

\`\`\`text
UPDATE orders
SET status = 'PAID'
WHERE order_id = :order_id
  AND status = 'PENDING';

INSERT INTO payment_events (order_id, event_type, created_at)
VALUES (:order_id, 'PAYMENT_CAPTURED', SYSTIMESTAMP);

COMMIT;
\`\`\`

Trong ứng dụng thật, bạn cần kiểm tra số row bị ảnh hưởng, xử lý constraint errors và rollback khi lỗi. Ý chính là database và application phối hợp với nhau. Application sở hữu workflow. Database bảo vệ các sự thật không bao giờ được sai.

## Lỗi thường gặp

- **Xem Oracle như SQL chung chung.** Kiến thức SQL chuẩn hữu ích, nhưng Oracle có optimizer behavior, data types, PL/SQL model, locking behavior và operational concepts riêng.
- **Bỏ qua constraints.** Nếu rule quan trọng chỉ nằm trong application code, dữ liệu có thể bị phá bởi script, import, job và integration.
- **Commit quá thường xuyên.** Commit tại business boundary có ý nghĩa. Commit quá nhiều làm workflow khó reasoning.
- **Để transaction mở quá lâu.** Transaction dài tăng undo pressure, locking problems và rủi ro vận hành.
- **Thêm index không dựa trên workload.** Mọi index đều có chi phí write và storage.
- **Vô tình dùng function trên indexed columns.** Expression có thể làm index thường không được dùng, trừ khi thiết kế function-based index có chủ đích.
- **Tạo SQL động mà không dùng bind variables.** Điều này có thể làm giảm performance và tăng rủi ro bảo mật.
- **Đặt quá nhiều logic trong triggers.** Trigger có thể giấu behavior và làm thay đổi khó reasoning.
- **Không xem execution plan.** Không có plan thì tuning query chỉ là đoán.
- **Đợi đến production mới nghĩ backup và recovery.** Recovery không chỉ là việc của DBA khi dữ liệu ứng dụng là tài sản nghiệp vụ.

## Best practices

- Model schema theo business rules, không chỉ theo màn hình hiện tại.
- Dùng primary keys, foreign keys, unique constraints, not-null constraints và check constraints có chủ đích.
- Dùng bind variables trong application queries.
- Giữ transaction ngắn và explicit.
- Xem PL/SQL packages như application code có version.
- Review execution plans cho query quan trọng.
- Thêm indexes dựa trên query patterns, không dựa trên giả định.
- Giữ optimizer statistics cập nhật bằng quy trình maintenance phù hợp.
- Dùng least privilege: application users chỉ nên có quyền thật sự cần.
- Tách schema owner, application runtime user và administrative users.
- Lên kế hoạch migration với rollback, data volume, locking impact và deployment window.
- Test với data volume thực tế trước khi tin performance.
- Document kỳ vọng backup, restore và recovery cho ứng dụng quan trọng.

## Khi nào nên dùng và khi nào nên tránh

Dùng Oracle Database khi ứng dụng cần strong consistency, dữ liệu quan hệ phức tạp, transaction handling trưởng thành, enterprise security, high availability, tooling performance nâng cao và support vận hành lâu dài. Oracle phù hợp với hệ thống nơi dữ liệu có giá trị cao, chịu quy định, được chia sẻ bởi nhiều ứng dụng hoặc dự kiến tồn tại nhiều năm.

Oracle cũng là lựa chọn mạnh khi tổ chức đã có Oracle expertise, licensing, infrastructure, monitoring, backup strategy và operational processes. Trong môi trường đó, dùng Oracle có thể giảm platform risk vì team biết cách vận hành nó.

Tránh Oracle khi project là prototype nhỏ, side project ngân sách thấp hoặc ứng dụng đơn giản nơi database nhẹ hơn đã đủ. Cũng nên tránh nếu team không có khả năng vận hành, tuning, bảo mật, backup và monitor database. Oracle mạnh, nhưng sức mạnh đó đi kèm complexity, licensing considerations và trách nhiệm vận hành.

Trade-off khá rõ: Oracle cung cấp năng lực database rất sâu, nhưng đòi hỏi thiết kế và vận hành có kỷ luật. Nếu team dùng nó một cách tùy tiện, hệ thống có thể trở nên đắt đỏ và khó bảo trì.

## Tóm tắt

Oracle Database không chỉ là nơi lưu rows. Nó là một data platform lớn cho transactional integrity, concurrency, security, performance, recovery và enterprise operations. Application developer không cần trở thành DBA ngay lập tức, nhưng nên hiểu database đủ tốt để thiết kế schema an toàn, viết SQL hiệu quả, dùng transaction đúng và phối hợp tốt với database specialists.

Các ý chính:

- Dùng constraints để bảo vệ business facts.
- Hiểu transactions, commits, rollbacks, locks và read consistency.
- Học Oracle SQL và PL/SQL khi chúng giải quyết vấn đề thật.
- Tune bằng execution plans và bằng chứng từ workload thật.
- Thiết kế indexes theo query thực tế.
- Nghĩ về security và least privilege ngay từ đầu.
- Xem backup, recovery và migrations là một phần của chất lượng ứng dụng.
- Chọn Oracle khi bài toán dữ liệu xứng đáng với một database platform nghiêm túc.`,
  category: "practices",
  tags: ["Oracle", "Database", "SQL", "PL/SQL", "Performance"],
  date: "2026-06-23",
  readTime: "11 min",
  readTimeVi: "9 phút",
  featured: true,
};
