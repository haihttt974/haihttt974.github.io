import { ArrowDownRight, ArrowUpRight, Award, BriefcaseBusiness, Download, ExternalLink, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { aboutData } from "@/data/blogData";
import { achievements, certifications, cvProfiles, featuredProfileProjects, professionalExperience, profileSkills } from "@/data/profileData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const text = language === "vi" ? {
    eyebrow: "Hồ sơ nghề nghiệp / 2026",
    intro: "Tôi xây sản phẩm fullstack, hiểu dữ liệu và không bỏ qua câu chuyện nghiệp vụ phía sau mỗi tính năng.",
    summary: "Fullstack Developer định hướng hệ thống, có kinh nghiệm phát triển module HIS, EMR và hệ thống quản trị bằng Angular, ASP.NET Core, SQL Server. Đồng thời có nền tảng Business Analysis và kiểm thử phần mềm.",
    contact: "Liên hệ",
    cvLabel: "Bộ hồ sơ ứng tuyển",
    cvTitle: "Ba góc nhìn. Một năng lực cốt lõi.",
    cvDesc: "Mỗi CV được tối ưu cho một vị trí khác nhau. Fullstack là hồ sơ trọng tâm và phản ánh đầy đủ nhất kinh nghiệm hiện tại.",
    primary: "Hồ sơ trọng tâm",
    view: "Xem CV",
    download: "Tải PDF",
    experience: "Kinh nghiệm thực tế",
    present: "Hiện tại",
    projects: "Dự án tiêu biểu",
    skills: "Năng lực chuyên môn",
    education: "Học vấn",
    educationTitle: "Công nghệ Thông tin",
    school: "Trường Đại học Công nghệ TP. Hồ Chí Minh",
    awards: "Danh hiệu & giải thưởng",
    certificates: "Chứng chỉ",
    primaryEmail: "Email chính",
    secondaryEmail: "Email phụ",
  } : {
    eyebrow: "Professional profile / 2026",
    intro: "I build fullstack products, understand data, and never ignore the business story behind each feature.",
    summary: "Systems-oriented Fullstack Developer with experience building HIS, EMR, and administration modules using Angular, ASP.NET Core, and SQL Server, supported by Business Analysis and software testing foundations.",
    contact: "Contact",
    cvLabel: "Application profiles",
    cvTitle: "Three perspectives. One core capability.",
    cvDesc: "Each CV is tailored to a different role. Fullstack is the primary profile and best represents my current experience.",
    primary: "Primary profile",
    view: "View CV",
    download: "Download PDF",
    experience: "Professional experience",
    present: "Present",
    projects: "Selected projects",
    skills: "Professional capabilities",
    education: "Education",
    educationTitle: "Information Technology",
    school: "Ho Chi Minh City University of Technology (HUTECH)",
    awards: "Honors & awards",
    certificates: "Certifications",
    primaryEmail: "Primary email",
    secondaryEmail: "Secondary email",
  };

  return (
    <Layout>
      <section className="border-b border-border/70">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <p className="eyebrow mb-7">{text.eyebrow}</p>
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div className="journal-card relative aspect-[4/5] max-w-md overflow-hidden">
              <img src={aboutData.avatar} alt={aboutData.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-xs uppercase tracking-[.16em] text-primary">Fullstack / Information Systems</p>
                <h1 className="mt-2 text-3xl">{aboutData.name}</h1>
              </div>
            </div>
            <div className="pb-2">
              <h2 className="max-w-5xl text-4xl leading-[.98] md:text-6xl lg:text-7xl">{text.intro}</h2>
              <p className="mt-7 max-w-3xl border-l border-primary/50 pl-5 text-lg leading-8 text-muted-foreground">{text.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><a href={`mailto:${aboutData.social.email}`}><Mail className="mr-2 h-4 w-4" />{text.contact}</a></Button>
                <Button asChild variant="outline"><a href={aboutData.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
                <Button asChild variant="outline"><a href={aboutData.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
              </div>
              <div className="mt-10 grid border-y border-border/70 sm:grid-cols-3">
                {[["3.44/4.00", "GPA"], ["03/2026", text.experience], ["03", text.cvLabel]].map(([value, label], index) => (
                  <div key={label} className={`py-4 ${index ? "border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5" : ""}`}>
                    <span className="font-mono text-xl font-semibold text-primary">{value}</span>
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-card/25 py-20" id="cv-collection">
        <div className="container mx-auto px-4">
          <p className="eyebrow mb-4">{text.cvLabel}</p>
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
            <h2 className="text-4xl md:text-6xl">{text.cvTitle}</h2>
            <p className="text-muted-foreground">{text.cvDesc}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {cvProfiles.map((cv, index) => (
              <article key={cv.id} className={`journal-card flex min-h-[330px] flex-col p-6 ${cv.featured ? "border-primary/60 lg:-translate-y-3" : ""}`}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-4xl text-primary/60">0{index + 1}</span>
                  {cv.featured && <Badge className="gap-1"><Sparkles className="h-3 w-3" />{text.primary}</Badge>}
                </div>
                <h3 className="mt-8 text-2xl">{cv.title[language]}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{cv.description[language]}</p>
                <div className="mt-5 flex flex-wrap gap-2.5">{cv.stack.map((item) => <Badge key={item} variant="secondary" className="min-h-7 px-3 py-1 font-mono text-[11px]">{item}</Badge>)}</div>
                <div className="mt-auto flex gap-2 border-t border-border/70 pt-5">
                  <Button asChild size="sm" className="flex-1"><a href={cv.file} target="_blank" rel="noreferrer">{text.view}<ExternalLink className="ml-2 h-3.5 w-3.5" /></a></Button>
                  <Button asChild size="sm" variant="outline"><a href={cv.file} download><Download className="h-3.5 w-3.5" /><span className="sr-only">{text.download}</span></a></Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="eyebrow mb-8">{text.experience}</p>
            {professionalExperience.map((experience) => (
              <article key={experience.company} className="journal-card p-7 md:p-9">
                <div className="flex flex-col justify-between gap-3 border-b border-border/70 pb-6 sm:flex-row">
                  <div><h2 className="text-2xl">{experience.role}</h2><p className="mt-1 text-primary">{experience.company}</p></div>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{experience.period}</span>
                </div>
                <p className="mt-6 leading-7 text-muted-foreground">{experience.summary[language]}</p>
                <div className="mt-6 space-y-3">{experience.highlights[language].map((item) => <p key={item} className="flex gap-3 text-sm text-muted-foreground"><ArrowDownRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</p>)}</div>
              </article>
            ))}
          </div>
          <aside className="space-y-5">
            <p className="eyebrow mb-8">{text.education}</p>
            <div className="journal-card p-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-xl">{text.educationTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text.school}</p>
              <div className="mt-5 flex justify-between border-t border-border/70 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground"><span>2022 - {text.present}</span><span className="text-primary">GPA 3.44 / 4.00</span></div>
            </div>
            <div className="journal-card p-6">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">{aboutData.address}</p>
              <div className="mt-4 space-y-3 border-t border-border/70 pt-4 font-mono text-xs">
                <a className="block hover:text-primary" href={`mailto:${aboutData.social.email}`}>
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">{text.primaryEmail}</span>
                  {aboutData.social.email}
                </a>
                <a className="block hover:text-primary" href={`mailto:${aboutData.social.secondaryEmail}`}>
                  <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">{text.secondaryEmail}</span>
                  {aboutData.social.secondaryEmail}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border/70 bg-card/25 py-20">
        <div className="container mx-auto px-4">
          <p className="eyebrow mb-8">{text.projects}</p>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProfileProjects.map((project) => (
              <article key={project.period} className="journal-card p-7">
                <div className="flex justify-between gap-3"><h3 className="text-2xl">{project.title[language]}</h3><span className="font-mono text-xs text-primary">{project.period}</span></div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description[language]}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}</div>
                <a href={project.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary">GitHub repository <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]">
          <div><p className="eyebrow mb-8">{text.skills}</p><div className="grid gap-4 sm:grid-cols-2">{profileSkills.map((group) => <div key={group.title} className="journal-card p-5"><h3>{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}</div></div>)}</div></div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div><p className="eyebrow mb-8">{text.awards}</p><div className="space-y-3">{achievements.map((item) => <div key={`${item.year}-${item.en}`} className="journal-card p-4"><Award className="h-4 w-4 text-primary" /><p className="mt-3 text-sm">{item[language]}</p><p className="mt-2 font-mono text-xs text-muted-foreground">{item.year}</p></div>)}</div></div>
            <div><p className="eyebrow mb-8">{text.certificates}</p><div className="space-y-3">{certifications.map((item) => <div key={item.en} className="journal-card p-4"><BriefcaseBusiness className="h-4 w-4 text-primary" /><p className="mt-3 text-sm">{item[language]}</p><p className="mt-2 font-mono text-xs text-muted-foreground">{item.year}</p></div>)}</div></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
