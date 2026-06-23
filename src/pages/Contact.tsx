import { FormEvent, useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageSquareText,
  Music2,
  Send,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { aboutData } from "@/data/blogData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdlzdwy";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook,
  Instagram,
  TikTok: Music2,
  "X (Twitter)": Twitter,
  "Primary Email": Mail,
  "Secondary Email": Mail,
} as const;

const contactCopy = {
  vi: {
    eyebrow: "04 / Liên hệ & phản hồi",
    title: "Gửi phản hồi, góp ý hoặc bắt đầu một cuộc trao đổi nghiêm túc.",
    description:
      "Nếu bạn thấy nội dung có điểm chưa chính xác, muốn góp ý cho blog, trao đổi dự án hoặc kết nối công việc, đây là nơi phù hợp nhất để liên hệ với tôi.",
    response: "Phản hồi ưu tiên",
    responseText: "Email là kênh tôi theo dõi kỹ nhất cho góp ý kỹ thuật, lỗi nội dung và trao đổi công việc.",
    direct: "Kênh trực tiếp",
    social: "Mạng xã hội & hồ sơ",
    formTitle: "Gửi phản hồi trực tiếp",
    formDesc: "Tin nhắn được gửi qua Formspree và chuyển thẳng đến email của tôi, không cần mở ứng dụng email trên máy của bạn.",
    name: "Tên của bạn",
    email: "Email liên hệ",
    subject: "Chủ đề",
    message: "Nội dung phản hồi",
    namePlaceholder: "Nguyễn Văn A",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: "Góp ý về bài viết hoặc website",
    messagePlaceholder: "Mô tả rõ vấn đề, đường dẫn liên quan, hoặc đề xuất cải thiện...",
    send: "Gửi phản hồi",
    sending: "Đang gửi...",
    required: "Vui lòng nhập email, chủ đề và nội dung phản hồi.",
    success: "Đã gửi phản hồi",
    successDesc: "Cảm ơn bạn. Phản hồi đã được gửi đến email của tôi.",
    failed: "Không thể gửi phản hồi",
    failedDesc: "Vui lòng thử lại sau hoặc dùng email trực tiếp ở bên trái.",
    privacy: "Nội dung được gửi qua Formspree để chuyển tiếp email; website không tự lưu phản hồi vào database.",
    availability: "Thời gian phản hồi phụ thuộc vào lịch cá nhân, nhưng các góp ý kỹ thuật rõ ràng luôn được ưu tiên.",
  },
  en: {
    eyebrow: "04 / Contact & feedback",
    title: "Send feedback, report an issue, or start a focused conversation.",
    description:
      "If you notice inaccurate content, want to improve the blog, discuss a project, or connect professionally, this is the best place to reach me.",
    response: "Preferred response channel",
    responseText: "Email is the channel I review most carefully for technical feedback, content issues, and work conversations.",
    direct: "Direct channels",
    social: "Social profiles",
    formTitle: "Send direct feedback",
    formDesc: "Your message is sent through Formspree and delivered straight to my inbox without opening your email app.",
    name: "Your name",
    email: "Contact email",
    subject: "Subject",
    message: "Feedback",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: "Feedback about an article or the website",
    messagePlaceholder: "Describe the issue, related link, or suggested improvement...",
    send: "Send feedback",
    sending: "Sending...",
    required: "Please enter your email, subject, and feedback message.",
    success: "Feedback sent",
    successDesc: "Thank you. Your message has been sent to my inbox.",
    failed: "Could not send feedback",
    failedDesc: "Please try again later or use the direct email links on the left.",
    privacy: "Messages are sent through Formspree for email forwarding; this website does not store feedback in its own database.",
    availability: "Response time depends on my schedule, but clear technical feedback is prioritized.",
  },
} as const;

const normalizeLabel = (name: string) => name.replace("Primary ", "").replace("Secondary ", "");

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const text = contactCopy[language];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const directLinks = useMemo(
    () => aboutData.socialLinks.filter((link) => link.name.includes("Email")),
    [],
  );
  const socialLinks = useMemo(
    () => aboutData.socialLinks.filter((link) => !link.name.includes("Email")),
    [],
  );

  const submitFeedback = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (!cleanEmail || !cleanSubject || !cleanMessage) {
      toast({
        variant: "warning",
        title: text.required,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", cleanEmail);
      formData.append("_replyto", cleanEmail);
      formData.append("subject", cleanSubject);
      formData.append("message", cleanMessage);
      formData.append("page", window.location.href);
      formData.append("_subject", `[Portfolio feedback] ${cleanSubject}`);

      if (website.trim()) {
        formData.append("website", website.trim());
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("formspree_send_failed");
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");

      toast({
        variant: "success",
        title: text.success,
        description: text.successDesc,
      });
    } catch {
      toast({
        variant: "destructive",
        title: text.failed,
        description: text.failedDesc,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-4">{text.eyebrow}</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                <span className="text-gradient">{text.title}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                {text.description}
              </p>
            </div>

            <div className="rounded-lg border border-primary/25 bg-primary/[.06] p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-background/70 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">{text.response}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text.responseText}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="font-mono text-xs uppercase tracking-[.18em] text-muted-foreground">{text.direct}</h2>
                <Badge variant="outline" className="rounded-md">Email</Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {directLinks.map((link) => {
                  const Icon = iconMap[link.name as keyof typeof iconMap] ?? Mail;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      className="group rounded-lg border border-border/70 bg-background/75 p-4 transition-colors hover:border-primary/45 hover:bg-primary/[.04]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-primary">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">{normalizeLabel(link.name)}</span>
                            <span className="mt-1 block text-xs text-muted-foreground">{link.url.replace("mailto:", "")}</span>
                          </span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-[.18em] text-muted-foreground">{text.social}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.name as keyof typeof iconMap] ?? MessageSquareText;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-background/70 px-4 py-3 text-sm transition-colors hover:border-primary/45 hover:bg-primary/[.04]"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="font-medium">{link.name}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <section className="rounded-lg border border-border/70 bg-background/80 p-5 shadow-[0_20px_60px_hsl(var(--foreground)/0.08)] backdrop-blur md:p-6">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{text.formTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text.formDesc}</p>
              </div>
            </div>

            <form action={FORMSPREE_ENDPOINT} className="space-y-4" method="POST" onSubmit={submitFeedback}>
              <input
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
                name="website"
                tabIndex={-1}
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium">{text.name}</span>
                  <Input name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder={text.namePlaceholder} maxLength={120} />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">{text.email}</span>
                  <Input name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={text.emailPlaceholder} maxLength={200} required />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-medium">{text.subject}</span>
                <Input name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder={text.subjectPlaceholder} maxLength={160} required />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium">{text.message}</span>
                <Textarea
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={text.messagePlaceholder}
                  className="min-h-44 resize-y"
                  maxLength={5000}
                  required
                />
              </label>

              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSubmitting ? text.sending : text.send}
              </Button>
            </form>

            <div className="mt-6 grid gap-3 border-t border-border/70 pt-5 text-xs leading-5 text-muted-foreground sm:grid-cols-2">
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{text.privacy}</p>
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{text.availability}</p>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
