import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  AlertTriangle,
  BookOpen,
  Camera,
  CheckCircle2,
  Edit,
  FileText,
  FolderTree,
  ImageUp,
  KeyRound,
  LayoutDashboard,
  Loader2,
  LogOut,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Save,
  Search,
  Settings,
  Shield,
  Tags,
  Trash2,
  UploadCloud,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { DbLoadingState } from "@/components/loading/DbLoadingState";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import {
  AdminProfile,
  CmsCategory,
  CmsPostListItem,
  CmsTag,
  Dashboard,
  MediaAsset,
  UpsertPostRequest,
  cmsApi,
} from "@/lib/cmsApi";
import { blogPosts as localBlogPosts, categories as localCategories } from "@/data/blogData";
import { clearAdminToken, getAdminToken, setAdminToken } from "@/lib/adminAuth";
import { useLocation, useNavigate } from "react-router-dom";

type AdminSection = "dashboard" | "posts" | "categories" | "tags" | "media" | "account";
type PendingConfirmation = {
  title: string;
  description: string;
  confirmLabel?: string;
  tone?: "danger" | "warning";
  action: () => Promise<void>;
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Ä‘/g, "d")
    .replace(/Ä/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const parseReadTime = (value: string) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 5;
};

const emptyPost = (categoryId = ""): UpsertPostRequest => ({
  title: "",
  titleVi: "",
  slug: "",
  excerpt: "",
  excerptVi: "",
  content: "",
  contentVi: "",
  coverImageUrl: "",
  categoryId,
  tagIds: [],
  status: "Draft",
  featured: false,
  readTimeMinutes: 5,
  publishedAt: null,
});

const navItems: { id: AdminSection; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "posts", label: "Bài viết", icon: FileText },
  { id: "categories", label: "Danh mục", icon: FolderTree },
  { id: "tags", label: "Thẻ nội dung", icon: Tags },
  { id: "media", label: "Media", icon: Camera },
  { id: "account", label: "Tài khoản", icon: UserRound },
];

const statusTone = (status: CmsPostListItem["status"]) => {
  const value = String(status).toLowerCase();
  if (value === "published") return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (value === "draft") return "border-amber-200 bg-amber-50 text-amber-700";
  return "border-slate-200 bg-slate-50 text-slate-700";
};

const formatDate = (value?: string | null) => (value ? new Date(value).toLocaleDateString("vi-VN") : "Chưa có");
const adminPrimaryButton = "bg-indigo-600 text-white shadow-sm shadow-indigo-900/10 hover:bg-indigo-700";
const adminSecondaryButton = "border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-950";
const adminPanel = "rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-200/60";
const adminInput =
  "border-slate-200 bg-white text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-indigo-500";
const adminSectionPaths: Record<AdminSection, string> = {
  dashboard: "/admin/dashboard",
  posts: "/admin/posts",
  categories: "/admin/categories",
  tags: "/admin/tags",
  media: "/admin/media",
  account: "/admin/account",
};

const resolveAdminSection = (pathname: string): AdminSection => {
  const segment = pathname.split("/")[2] as AdminSection | undefined;
  return segment && segment in adminSectionPaths ? segment : "dashboard";
};

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(() => getAdminToken());
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [section, setSection] = useState<AdminSection>(() => resolveAdminSection(location.pathname));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [profileForm, setProfileForm] = useState({ username: "", displayName: "" });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [posts, setPosts] = useState<CmsPostListItem[]>([]);
  const [categories, setCategories] = useState<CmsCategory[]>([]);
  const [tags, setTags] = useState<CmsTag[]>([]);
  const [media, setMedia] = useState<MediaAsset[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [postForm, setPostForm] = useState<UpsertPostRequest>(emptyPost());
  const [postSearch, setPostSearch] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingTagId, setEditingTagId] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [tagName, setTagName] = useState("");
  const [categoryAdminSearch, setCategoryAdminSearch] = useState("");
  const [tagAdminSearch, setTagAdminSearch] = useState("");
  const [pendingConfirmation, setPendingConfirmation] = useState<PendingConfirmation | null>(null);
  const [confirmingAction, setConfirmingAction] = useState(false);

  const { toast } = useToast();
  const adminApi = useMemo(() => (token ? cmsApi.admin(token) : null), [token]);
  const notifySuccess = (title: string, description?: string) => toast({ variant: "success", title, description });
  const notifyInfo = (title: string, description?: string) => toast({ variant: "info", title, description });
  const notifyError = (title: string, error?: unknown) =>
    toast({
      variant: "destructive",
      title,
      description: error instanceof Error ? error.message : typeof error === "string" ? error : undefined,
    });
  const requestConfirmation = (confirmation: PendingConfirmation) => setPendingConfirmation(confirmation);
  const runConfirmedAction = async () => {
    if (!pendingConfirmation || confirmingAction) return;

    setConfirmingAction(true);
    try {
      await pendingConfirmation.action();
      setPendingConfirmation(null);
    } finally {
      setConfirmingAction(false);
    }
  };

  const loadAdmin = useCallback(async () => {
    if (!adminApi) return;

    setIsLoading(true);
    try {
      const [profileData, dashboardData, postData, categoryData, tagData, mediaData] = await Promise.all([
        adminApi.profile(),
        adminApi.dashboard(),
        adminApi.posts(),
        adminApi.categories(),
        adminApi.tags(),
        adminApi.media(),
      ]);

      setProfile(profileData);
      setProfileForm({ username: profileData.username, displayName: profileData.displayName });
      setDashboard(dashboardData);
      setPosts(postData.items);
      setCategories(categoryData);
      setTags(tagData);
      setMedia(mediaData);
      setPostForm((current) => (current.categoryId ? current : emptyPost(categoryData[0]?.id ?? "")));
    } finally {
      setIsLoading(false);
    }
  }, [adminApi]);

  useEffect(() => {
    loadAdmin().catch((error) => notifyError("Không tải được dữ liệu admin", error));
  }, [loadAdmin]);

  useEffect(() => {
    setSection(resolveAdminSection(location.pathname));
  }, [location.pathname]);

  const filteredPosts = useMemo(() => {
    const query = postSearch.trim().toLowerCase();
    if (!query) return posts;
    return posts.filter((post) =>
      [post.title, post.titleVi ?? "", post.slug, post.categoryName, String(post.status)].some((value) => value.toLowerCase().includes(query)),
    );
  }, [posts, postSearch]);

  const filteredAdminCategories = useMemo(() => {
    const query = categoryAdminSearch.trim().toLowerCase();
    if (!query) return categories;
    return categories.filter((category) =>
      [category.name, category.slug, category.description ?? ""].some((value) => value.toLowerCase().includes(query)),
    );
  }, [categories, categoryAdminSearch]);

  const filteredAdminTags = useMemo(() => {
    const query = tagAdminSearch.trim().toLowerCase();
    if (!query) return tags;
    return tags.filter((tag) => [tag.name, tag.slug].some((value) => value.toLowerCase().includes(query)));
  }, [tags, tagAdminSearch]);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    if (isLoggingIn) return;

    setIsLoggingIn(true);
    try {
      const result = await cmsApi.login(username, password);
      setAdminToken(result.accessToken);
      setToken(result.accessToken);
      setPassword("");
      notifySuccess("Đăng nhập thành công", `Xin chào ${result.displayName || result.username}.`);
    } catch (error) {
      notifyError("Đăng nhập thất bại", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = () => {
    clearAdminToken();
    setToken("");
  };

  const editPost = async (id: string) => {
    if (!adminApi) return;

    const post = await adminApi.post(id);
    const selectedTagIds = tags.filter((tag) => post.tags.includes(tag.name)).map((tag) => tag.id);
    setEditingId(id);
    setPostForm({
      title: post.title,
      titleVi: post.titleVi ?? "",
      slug: post.slug,
      excerpt: post.excerpt,
      excerptVi: post.excerptVi ?? "",
      content: post.content,
      contentVi: post.contentVi ?? "",
      coverImageUrl: post.coverImageUrl ?? "",
      categoryId: categories.find((category) => category.slug === post.categorySlug)?.id ?? categories[0]?.id ?? "",
      tagIds: selectedTagIds,
      status: typeof post.status === "string" ? post.status : "Draft",
      featured: post.featured,
      readTimeMinutes: post.readTimeMinutes,
      publishedAt: post.publishedAt ?? null,
    });
    setSection("posts");
    navigate(adminSectionPaths.posts);
  };

  const resetPostForm = () => {
    setEditingId(null);
    setPostForm(emptyPost(categories[0]?.id ?? ""));
  };

  const savePost = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi) return;

    try {
      if (editingId) {
        await adminApi.updatePost(editingId, postForm);
      } else {
        await adminApi.createPost(postForm);
      }
      resetPostForm();
      await loadAdmin();
      notifySuccess("Đã lưu bài viết", editingId ? "Bài viết đã được cập nhật." : "Bài viết mới đã được tạo.");
    } catch (error) {
      notifyError("Không thể lưu bài viết", error);
    }
  };

  const deletePost = async (id: string) => {
    if (!adminApi) return;
    try {
      await adminApi.deletePost(id);
      await loadAdmin();
      notifySuccess("Đã xóa bài viết");
    } catch (error) {
      notifyError("Không thể xóa bài viết", error);
    }
  };

  const requestDeletePost = (post: CmsPostListItem) => {
    requestConfirmation({
      title: "Xóa bài viết?",
      description: `Bài viết "${post.title}" sẽ bị xóa khỏi CMS. Hành động này không thể hoàn tác.`,
      confirmLabel: "Xóa bài viết",
      tone: "danger",
      action: () => deletePost(post.id),
    });
  };

  const editCategory = (category: CmsCategory) => {
    setEditingCategoryId(category.id);
    setCategoryName(category.name);
  };

  const resetCategoryForm = () => {
    setEditingCategoryId(null);
    setCategoryName("");
  };

  const saveCategory = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi || !categoryName.trim()) return;

    try {
      const currentCategory = categories.find((category) => category.id === editingCategoryId);
      const payload = {
        name: categoryName,
        slug: currentCategory?.slug ?? "",
        description: currentCategory?.description ?? "",
        color: currentCategory?.color ?? "category-practices",
        sortOrder: currentCategory?.sortOrder ?? categories.length + 1,
        isActive: currentCategory?.isActive ?? true,
      };

      if (editingCategoryId) {
        await adminApi.updateCategory(editingCategoryId, payload);
      } else {
        await adminApi.createCategory(payload);
      }

      resetCategoryForm();
      await loadAdmin();
      notifySuccess("Đã thêm danh mục");
    } catch (error) {
      notifyError("Không thể thêm danh mục", error);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!adminApi) return;
    try {
      await adminApi.deleteCategory(id);
      if (editingCategoryId === id) resetCategoryForm();
      await loadAdmin();
      notifySuccess("Đã xóa danh mục");
    } catch (error) {
      notifyError("Không thể xóa danh mục", error);
    }
  };

  const requestDeleteCategory = (category: CmsCategory) => {
    const used = category.postCount > 0;
    requestConfirmation({
      title: used ? "Danh mục đang được dùng" : "Xóa danh mục?",
      description: used
        ? `Danh mục "${category.name}" hiện đang liên kết với ${category.postCount} bài viết. Nếu backend không cho xóa, bạn cần chuyển các bài viết sang danh mục khác trước. Bạn vẫn muốn thử xóa?`
        : `Danh mục "${category.name}" sẽ bị xóa khỏi CMS. Hành động này không thể hoàn tác.`,
      confirmLabel: used ? "Vẫn thử xóa" : "Xóa danh mục",
      tone: used ? "warning" : "danger",
      action: () => deleteCategory(category.id),
    });
  };

  const editTag = (tag: CmsTag) => {
    setEditingTagId(tag.id);
    setTagName(tag.name);
  };

  const resetTagForm = () => {
    setEditingTagId(null);
    setTagName("");
  };

  const saveTag = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi || !tagName.trim()) return;

    try {
      const currentTag = tags.find((tag) => tag.id === editingTagId);

      if (editingTagId) {
        await adminApi.updateTag(editingTagId, { name: tagName, slug: currentTag?.slug });
      } else {
        await adminApi.createTag({ name: tagName });
      }

      resetTagForm();
      await loadAdmin();
      notifySuccess("Đã thêm thẻ");
    } catch (error) {
      notifyError("Không thể thêm thẻ", error);
    }
  };

  const deleteTag = async (id: string) => {
    if (!adminApi) return;
    try {
      await adminApi.deleteTag(id);
      if (editingTagId === id) resetTagForm();
      await loadAdmin();
      notifySuccess("Đã xóa thẻ");
    } catch (error) {
      notifyError("Không thể xóa thẻ", error);
    }
  };

  const requestDeleteTag = (tag: CmsTag) => {
    const used = tag.postCount > 0;
    requestConfirmation({
      title: used ? "Thẻ đang được dùng" : "Xóa thẻ?",
      description: used
        ? `Thẻ "${tag.name}" hiện đang liên kết với ${tag.postCount} bài viết. Xóa thẻ có thể làm mất phân loại nội dung liên quan. Bạn chắc chắn muốn xóa?`
        : `Thẻ "${tag.name}" sẽ bị xóa khỏi CMS. Hành động này không thể hoàn tác.`,
      confirmLabel: used ? "Xóa thẻ đang dùng" : "Xóa thẻ",
      tone: "danger",
      action: () => deleteTag(tag.id),
    });
  };

  const uploadImage = async (file?: File, applyToPost = true) => {
    if (!adminApi || !file) return;

    try {
      const uploaded = await adminApi.upload(file);
      if (applyToPost) {
        setPostForm((current) => ({ ...current, coverImageUrl: uploaded.url }));
      }
      await loadAdmin();
      notifySuccess("Đã upload ảnh", applyToPost ? "Ảnh đã được gắn vào bài viết." : "Ảnh đã được thêm vào thư viện media.");
    } catch (error) {
      notifyError("Không thể upload ảnh", error);
    }
  };

  const deleteMedia = async (id: string) => {
    if (!adminApi) return;
    try {
      await adminApi.deleteMedia(id);
      await loadAdmin();
      notifySuccess("Đã xóa media");
    } catch (error) {
      notifyError("Không thể xóa media", error);
    }
  };

  const requestDeleteMedia = (asset: MediaAsset) => {
    requestConfirmation({
      title: "Xóa media?",
      description: `Ảnh "${asset.fileName ?? "media đã chọn"}" sẽ bị xóa khỏi thư viện CMS. Nếu ảnh đang được dùng trong bài viết, URL hiện tại có thể không còn quản lý được trong CMS.`,
      confirmLabel: "Xóa media",
      tone: "danger",
      action: () => deleteMedia(asset.id),
    });
  };

  const copyMediaUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      notifySuccess("Đã sao chép URL ảnh");
    } catch (error) {
      notifyError("Không thể sao chép URL", error);
    }
  };

  const saveProfile = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi) return;

    try {
      const updated = await adminApi.updateProfile(profileForm);
      setProfile(updated);
      setProfileForm({ username: updated.username, displayName: updated.displayName });
      notifySuccess("Đã cập nhật tài khoản");
    } catch (error) {
      notifyError("Không thể cập nhật tài khoản", error);
    }
  };

  const changePassword = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi) return;
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      notifyError("Mật khẩu không khớp", "Mật khẩu mới và xác nhận mật khẩu phải giống nhau.");
      return;
    }

    try {
      await adminApi.changePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      notifySuccess("Đã đổi mật khẩu");
    } catch (error) {
      notifyError("Không thể đổi mật khẩu", error);
    }
  };

  const importLocalBlogData = async () => {
    if (!adminApi) return;

    notifyInfo("Đang import dữ liệu blog", "Quá trình này có thể mất vài giây.");
    try {
      const currentCategories = await adminApi.categories();
      const categoryBySlug = new Map(currentCategories.map((category) => [category.slug, category]));

      for (const [index, category] of localCategories.entries()) {
        if (!categoryBySlug.has(category.id)) {
          const created = await adminApi.createCategory({
            name: category.name,
            slug: category.id,
            description: category.description,
            color: category.color,
            sortOrder: index + 1,
            isActive: true,
          });
          categoryBySlug.set(created.slug, created);
        }
      }

      const currentTags = await adminApi.tags();
      const tagBySlug = new Map(currentTags.map((tag) => [tag.slug, tag]));

      for (const post of localBlogPosts) {
        for (const tagName of post.tags) {
          const slug = slugify(tagName);
          if (!tagBySlug.has(slug)) {
            const created = await adminApi.createTag({ name: tagName, slug });
            tagBySlug.set(created.slug, created);
          }
        }
      }

      const currentPosts = await adminApi.posts();
      const existingSlugs = new Set(currentPosts.items.map((post) => post.slug));
      let imported = 0;
      let skipped = 0;

      for (const post of localBlogPosts) {
        if (existingSlugs.has(post.id)) {
          skipped += 1;
          continue;
        }

        const category = categoryBySlug.get(post.category);
        if (!category) {
          skipped += 1;
          continue;
        }

        await adminApi.createPost({
          title: post.title,
          titleVi: post.titleVi ?? null,
          slug: post.id,
          excerpt: post.excerpt,
          excerptVi: post.excerptVi ?? null,
          content: post.content,
          contentVi: post.contentVi ?? null,
          coverImageUrl: null,
          categoryId: category.id,
          tagIds: post.tags.map((tagName) => tagBySlug.get(slugify(tagName))?.id).filter(Boolean) as string[],
          status: "Published",
          featured: Boolean(post.featured),
          readTimeMinutes: parseReadTime(post.readTime),
          publishedAt: new Date(post.date).toISOString(),
        });
        imported += 1;
      }

      await loadAdmin();
      notifySuccess("Import hoàn tất", `Đã import ${imported}, bỏ qua ${skipped}.`);
    } catch (error) {
      notifyError("Import thất bại", error);
    }
  };

  const requestImportLocalBlogData = () => {
    requestConfirmation({
      title: "Import dữ liệu blog?",
      description: "Dữ liệu blog cục bộ sẽ được import vào database. Các slug đã tồn tại sẽ được bỏ qua để tránh trùng bài viết.",
      confirmLabel: "Bắt đầu import",
      tone: "warning",
      action: importLocalBlogData,
    });
  };

  if (!token) {
    return (
      <main className="min-h-screen bg-[#eef2f8] px-4 py-4 text-slate-950">
        <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center justify-center">
          <div className="grid w-full overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-2xl shadow-slate-300/70 lg:h-[min(640px,calc(100vh-2rem))] lg:grid-cols-[1.05fr_.95fr]">
            <section className="relative hidden overflow-hidden bg-[#0f172a] p-8 text-white lg:block">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(79,70,229,.34),rgba(15,23,42,.12)_38%,rgba(14,165,233,.18))]" />
              <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-20 translate-y-20 rounded-full border border-white/10" />
              <div className="absolute left-8 top-24 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-950/20">
                      <img src="/logo-rm-khongvien.png" alt="Portfolio logo" className="h-9 w-9 object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">Portfolio CMS</div>
                      <div className="text-xs text-slate-300">Content operations console</div>
                    </div>
                  </div>

                  <div className="mt-10 max-w-xl">
                    <h1 className="text-4xl font-semibold leading-tight tracking-tight">
                      Quản trị nội dung với giao diện rõ ràng và bảo mật.
                    </h1>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      Điều khiển bài viết, danh mục, media và tài khoản admin trong một không gian làm việc gọn, hiện đại và dễ theo dõi.
                    </p>
                  </div>
                </div>

                <div className="relative mt-8">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
                    <div className="rounded-2xl bg-white p-5 text-slate-950 shadow-xl">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Today overview</div>
                          <div className="mt-1 text-xl font-semibold">Admin workspace</div>
                        </div>
                        <div className="rounded-xl bg-indigo-50 p-3 text-indigo-700">
                          <LayoutDashboard className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {[
                          ["Posts", "128"],
                          ["Media", "42"],
                          ["Views", "9.8k"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                            <div className="text-xs text-slate-500">{label}</div>
                            <div className="mt-1 text-lg font-semibold">{value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 space-y-2">
                        {[
                          ["Modern backend guide", "Published"],
                          ["Learning roadmap", "Draft"],
                        ].map(([title, state]) => (
                          <div key={title} className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
                            <div className="flex min-w-0 items-center gap-3">
                              <div className="h-7 w-7 rounded-lg bg-indigo-100" />
                              <span className="truncate text-sm font-medium">{title}</span>
                            </div>
                            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{state}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                    {[
                      ["Secure", Shield],
                      ["Content", FileText],
                      ["Media", Camera],
                    ].map(([label, Icon]) => (
                      <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Icon className="mb-2 h-4 w-4 text-indigo-200" />
                        <div className="font-medium">{String(label)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="relative flex items-center bg-white p-5 sm:p-8">
              <div className="absolute right-6 top-6">
                <Button asChild variant="outline" className={adminSecondaryButton}>
                  <a href="/">
                    <BookOpen className="h-4 w-4" />
                    Trang chủ
                  </a>
                </Button>
              </div>

              <form onSubmit={login} className="mx-auto w-full max-w-md">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                    <img src="/logo-rm-khongvien.png" alt="Portfolio logo" className="h-10 w-10 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Admin login</p>
                    <h2 className="mt-1 text-2xl font-semibold">Portfolio CMS</h2>
                  </div>
                </div>

                <div className="mb-6">
                  <h1 className="text-3xl font-semibold tracking-tight">Chào mừng trở lại</h1>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Đăng nhập để tiếp tục quản lý bài viết, hình ảnh và thông tin cá nhân của hệ thống.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Tên đăng nhập</label>
                    <Input className={`h-10 ${adminInput}`} value={username} onChange={(event) => setUsername(event.target.value)} placeholder="admin" disabled={isLoggingIn} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Mật khẩu</label>
                    <Input className={`h-10 ${adminInput}`} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Nhập mật khẩu" type="password" disabled={isLoggingIn} />
                  </div>
                  <Button type="submit" className={`h-10 w-full gap-2 ${adminPrimaryButton}`} disabled={isLoggingIn}>
                    {isLoggingIn && <Loader2 className="h-4 w-4 animate-spin" />}
                    {isLoggingIn ? "Đang đăng nhập..." : "Đăng nhập vào CMS"}
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["JWT", "Secure"],
                    ["CMS", "Ready"],
                    ["API", "Online"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <div className="text-xs text-slate-500">{label}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-800">{value}</div>
                    </div>
                  ))}
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    );
  }

  const activeTitle = navItems.find((item) => item.id === section)?.label ?? "Dashboard";

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-950">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-800 bg-[#111827] text-white transition-all duration-300 lg:translate-x-0 ${
          sidebarCollapsed ? "lg:w-24" : "lg:w-72"
        } ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className={`flex h-16 items-center gap-3 border-b border-white/10 ${sidebarCollapsed ? "lg:justify-center lg:px-4" : "px-5"}`}>
          <div className={`flex items-center justify-center bg-indigo-500 text-white shadow-lg shadow-indigo-950/30 transition-all ${
            sidebarCollapsed ? "lg:h-11 lg:w-11 lg:rounded-2xl" : "h-10 w-10 rounded-xl"
          }`}>
            <Shield className="h-5 w-5" />
          </div>
          <div className={sidebarCollapsed ? "lg:hidden" : ""}>
            <div className="font-semibold leading-tight">Portfolio CMS</div>
            <div className="text-xs text-slate-400">Admin Panel</div>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto text-white lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className={`space-y-1 py-4 ${sidebarCollapsed ? "lg:px-4" : "px-3"}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = section === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSection(item.id);
                  navigate(adminSectionPaths[item.id]);
                  setSidebarOpen(false);
                }}
                title={sidebarCollapsed ? item.label : undefined}
                className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
                  sidebarCollapsed ? "lg:h-12 lg:justify-center lg:px-0 lg:py-0" : ""
                } ${
                  active ? "bg-white text-slate-950 shadow-sm shadow-slate-950/20" : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {sidebarCollapsed && active && <span className="absolute -left-2 hidden h-7 w-1 rounded-full bg-indigo-400 lg:block" />}
                <span className={`flex shrink-0 items-center justify-center rounded-xl transition-colors ${
                  sidebarCollapsed
                    ? active
                      ? "lg:h-10 lg:w-10 lg:bg-indigo-50 lg:text-indigo-700"
                      : "lg:h-10 lg:w-10 lg:bg-white/5 lg:text-slate-300 group-hover:lg:bg-white/10 group-hover:lg:text-white"
                    : ""
                }`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className={sidebarCollapsed ? "lg:hidden" : ""}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className={`absolute inset-x-0 bottom-0 border-t border-white/10 ${sidebarCollapsed ? "lg:p-4" : "p-4"}`}>
          <div className={`mb-3 rounded-xl border border-white/10 bg-white/5 p-3 ${sidebarCollapsed ? "lg:hidden" : ""}`}>
            <div className="text-sm font-medium">{profile?.displayName ?? "Admin"}</div>
            <div className="text-xs text-slate-400">{profile?.role ?? "Admin"}</div>
          </div>
          <Button asChild variant="outline" title="Trang chủ" className={`mb-2 w-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white ${sidebarCollapsed ? "lg:h-11 lg:justify-center lg:overflow-hidden lg:rounded-2xl lg:px-0 lg:text-[0px] [&_svg]:lg:size-4" : ""}`}>
            <a href="/">
              <BookOpen className="h-4 w-4" />
              Trang chủ
            </a>
          </Button>
          <Button variant="outline" title="Đăng xuất" className={`w-full border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white ${sidebarCollapsed ? "lg:h-11 lg:justify-center lg:overflow-hidden lg:rounded-2xl lg:px-0 lg:text-[0px] [&_svg]:lg:size-4" : ""}`} onClick={logout}>
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </Button>
        </div>
      </aside>

      {sidebarOpen && <button type="button" className="fixed inset-0 z-30 bg-slate-950/60 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <section className={`transition-all duration-300 ${sidebarCollapsed ? "lg:pl-24" : "lg:pl-72"}`}>
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200/80 bg-white/95 px-4 shadow-sm shadow-slate-200/60 backdrop-blur lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`hidden border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 lg:inline-flex ${
              sidebarCollapsed ? "text-indigo-700 ring-2 ring-indigo-100" : ""
            }`}
            aria-label={sidebarCollapsed ? "Mở rộng menu quản trị" : "Thu gọn menu quản trị"}
            title={sidebarCollapsed ? "Mở rộng menu" : "Thu gọn menu"}
            onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
          >
            {sidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </Button>
          <div>
            <h1 className="text-lg font-semibold leading-tight">{activeTitle}</h1>
            <p className="text-xs text-slate-500">Quản trị nội dung và cấu hình website</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            {isLoading && (
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                <span className="db-loader-breathe h-2 w-2 rounded-full bg-indigo-500" />
                Đang đồng bộ dữ liệu
              </span>
            )}
            <Button asChild variant="outline" className={`hidden sm:inline-flex ${adminSecondaryButton}`}>
              <a href="/">
                <BookOpen className="h-4 w-4" />
                Trang chủ
              </a>
            </Button>
            <Button variant="outline" onClick={requestImportLocalBlogData} className={`hidden sm:inline-flex ${adminSecondaryButton}`}>
              <UploadCloud className="h-4 w-4" />
              Import
            </Button>
          </div>
        </header>

        <div className="p-4 lg:p-6">
          {isLoading ? (
            <DbLoadingState variant="dashboard" className="min-h-[calc(100vh-7rem)]" />
          ) : section === "dashboard" && (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {[
                  ["Tổng bài viết", dashboard?.totalPosts ?? 0, FileText],
                  ["Đã xuất bản", dashboard?.publishedPosts ?? 0, CheckCircle2],
                  ["Bản nháp", dashboard?.draftPosts ?? 0, Edit],
                  ["Danh mục", dashboard?.categories ?? 0, FolderTree],
                  ["Lượt xem", dashboard?.totalViews ?? 0, BarChart3],
                ].map(([label, value, Icon]) => (
                  <div key={String(label)} className={adminPanel}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-medium text-slate-500">{label as string}</div>
                      <div className="rounded-lg bg-indigo-50 p-2 text-indigo-700">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mt-4 text-3xl font-semibold">{Number(value).toLocaleString("vi-VN")}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
                <section className={adminPanel}>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold">Bài viết gần đây</h2>
                    <Button variant="outline" size="sm" className={adminSecondaryButton} onClick={() => navigate(adminSectionPaths.posts)}>Quản lý</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-sm">
                      <thead>
                        <tr className="border-b text-left text-xs uppercase text-slate-500">
                          <th className="py-3 pr-4">Tiêu đề</th>
                          <th className="py-3 pr-4">Trạng thái</th>
                          <th className="py-3 pr-4">Ngày</th>
                          <th className="py-3 pr-4 text-right">Views</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.slice(0, 6).map((post) => (
                          <tr key={post.id} className="border-b last:border-0">
                            <td className="py-3 pr-4 font-medium">{post.title}</td>
                            <td className="py-3 pr-4">
                              <span className={`rounded-full border px-2 py-1 text-xs ${statusTone(post.status)}`}>{String(post.status)}</span>
                            </td>
                            <td className="py-3 pr-4 text-slate-500">{formatDate(post.publishedAt ?? post.createdAt)}</td>
                            <td className="py-3 pr-4 text-right">{post.viewCount.toLocaleString("vi-VN")}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className={adminPanel}>
                  <h2 className="text-base font-semibold">Thông tin admin</h2>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Tên hiển thị</span>
                      <span className="font-medium">{profile?.displayName ?? "-"}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Username</span>
                      <span className="font-medium">{profile?.username ?? "-"}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-500">Role</span>
                      <span className="font-medium">{profile?.role ?? "-"}</span>
                    </div>
                  </div>
                  <Button className={`mt-5 w-full ${adminPrimaryButton}`} onClick={() => navigate(adminSectionPaths.account)}>
                    <Settings className="h-4 w-4" />
                    Cài đặt tài khoản
                  </Button>
                </section>
              </div>
            </div>
          )}

          {section === "posts" && (
            <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
              <form onSubmit={savePost} className={adminPanel}>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold">{editingId ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
                    <p className="text-sm text-slate-500">Nội dung, SEO slug, danh mục, thẻ và ảnh đại diện.</p>
                  </div>
                  <Button type="button" variant="outline" className={adminSecondaryButton} onClick={resetPostForm}>
                    <Plus className="h-4 w-4" />
                    Bài mới
                  </Button>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Input className={adminInput} value={postForm.title} onChange={(event) => setPostForm({ ...postForm, title: event.target.value })} placeholder="Title" required />
                  <Input className={adminInput} value={postForm.titleVi ?? ""} onChange={(event) => setPostForm({ ...postForm, titleVi: event.target.value })} placeholder="Tiêu đề tiếng Việt" />
                  <Input className={adminInput} value={postForm.slug ?? ""} onChange={(event) => setPostForm({ ...postForm, slug: event.target.value })} placeholder="Slug" />
                  <select value={postForm.categoryId} onChange={(event) => setPostForm({ ...postForm, categoryId: event.target.value })} className={`h-10 rounded-md px-3 text-sm ${adminInput}`}>
                    {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                  </select>
                </div>

                <Textarea value={postForm.excerpt} onChange={(event) => setPostForm({ ...postForm, excerpt: event.target.value })} placeholder="Excerpt" className={`mt-3 ${adminInput}`} required />
                <Textarea value={postForm.excerptVi ?? ""} onChange={(event) => setPostForm({ ...postForm, excerptVi: event.target.value })} placeholder="Mô tả tiếng Việt" className={`mt-3 ${adminInput}`} />
                <Textarea value={postForm.content} onChange={(event) => setPostForm({ ...postForm, content: event.target.value })} placeholder="Markdown content" className={`mt-3 min-h-72 font-mono ${adminInput}`} required />
                <Textarea value={postForm.contentVi ?? ""} onChange={(event) => setPostForm({ ...postForm, contentVi: event.target.value })} placeholder="Markdown tiếng Việt" className={`mt-3 min-h-44 font-mono ${adminInput}`} />

                <div className="mt-3 grid gap-3 md:grid-cols-[1fr_auto]">
                  <Input className={adminInput} value={postForm.coverImageUrl ?? ""} onChange={(event) => setPostForm({ ...postForm, coverImageUrl: event.target.value })} placeholder="Cover image URL" />
                  <label className={`inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md px-3 text-sm ${adminSecondaryButton}`}>
                    <ImageUp className="h-4 w-4" />
                    Upload
                    <input type="file" accept="image/*" className="hidden" onChange={(event) => uploadImage(event.target.files?.[0])} />
                  </label>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => {
                    const active = postForm.tagIds.includes(tag.id);
                    return (
                      <button
                        key={tag.id}
                        type="button"
                        onClick={() =>
                          setPostForm((current) => ({
                            ...current,
                            tagIds: active ? current.tagIds.filter((id) => id !== tag.id) : [...current.tagIds, tag.id],
                          }))
                        }
                        className={`rounded-full border px-3 py-1 text-xs transition-colors ${active ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-600 hover:border-indigo-200 hover:text-indigo-700"}`}
                      >
                        {tag.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <select value={postForm.status} onChange={(event) => setPostForm({ ...postForm, status: event.target.value as UpsertPostRequest["status"] })} className={`h-10 rounded-md px-3 text-sm ${adminInput}`}>
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                    <option value="Archived">Archived</option>
                  </select>
                  <Input type="number" min={1} value={postForm.readTimeMinutes ?? 5} onChange={(event) => setPostForm({ ...postForm, readTimeMinutes: Number(event.target.value) })} className={`w-28 ${adminInput}`} />
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={postForm.featured} onChange={(event) => setPostForm({ ...postForm, featured: event.target.checked })} />
                    Featured
                  </label>
                  <Button type="submit" className={`ml-auto ${adminPrimaryButton}`}>
                    <Save className="h-4 w-4" />
                    Lưu bài viết
                  </Button>
                </div>
              </form>

              <section className={adminPanel}>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold">Danh sách bài viết</h2>
                    <p className="text-sm text-slate-500">{posts.length} bài trong CMS</p>
                  </div>
                </div>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input value={postSearch} onChange={(event) => setPostSearch(event.target.value)} placeholder="Tìm bài viết..." className={`pl-9 ${adminInput}`} />
                </div>
                <div className="space-y-3">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/20">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="truncate font-medium">{post.title}</div>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                            <span className={`rounded-full border px-2 py-1 ${statusTone(post.status)}`}>{String(post.status)}</span>
                            <span>{post.slug}</span>
                            <span>{post.viewCount.toLocaleString("vi-VN")} views</span>
                          </div>
                        </div>
                        <div className="flex shrink-0 gap-2">
                          <Button size="icon" variant="outline" className={adminSecondaryButton} onClick={() => editPost(post.id)}><Edit className="h-4 w-4" /></Button>
                          <Button size="icon" variant="outline" className={adminSecondaryButton} onClick={() => requestDeletePost(post)}><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}

          {section === "categories" && (
            <section className={adminPanel}>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">Quản lý danh mục</h2>
                <p className="text-sm text-slate-500">Phân loại chính cho bài viết.</p>
              </div>
              <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">{editingCategoryId ? "Chỉnh sửa danh mục" : "Thêm danh mục mới"}</div>
                  <div className="text-xs text-slate-500">Click vào danh mục bên dưới để đưa dữ liệu lên form.</div>
                </div>
                {editingCategoryId && (
                  <Button type="button" variant="outline" size="sm" className={adminSecondaryButton} onClick={resetCategoryForm}>
                    Hủy
                  </Button>
                )}
              </div>
              <form onSubmit={saveCategory} className={`mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 ${
                editingCategoryId ? "flex flex-col gap-3 lg:flex-row" : "flex flex-col gap-3 sm:flex-row"
              } ${editingCategoryId ? "[&>button:first-of-type]:hidden" : ""}`}>
                <Input className={adminInput} value={categoryName} onChange={(event) => setCategoryName(event.target.value)} placeholder="Tên danh mục mới" />
                <Button type="submit" className={adminPrimaryButton}><Plus className="h-4 w-4" />Thêm</Button>
                {editingCategoryId && (
                  <div className="flex shrink-0 flex-wrap items-center gap-2 lg:flex-nowrap">
                    <Button type="submit" className={adminPrimaryButton}>
                      <Save className="h-4 w-4" />
                      Lưu sửa
                    </Button>
                    <Button type="button" variant="outline" className={`${adminSecondaryButton} text-red-600 hover:text-red-700`} onClick={() => {
                      const category = categories.find((item) => item.id === editingCategoryId);
                      if (category) requestDeleteCategory(category);
                    }}>
                      <Trash2 className="h-4 w-4" />
                      Xóa
                    </Button>
                  </div>
                )}
              </form>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input className={`pl-9 ${adminInput}`} value={categoryAdminSearch} onChange={(event) => setCategoryAdminSearch(event.target.value)} placeholder="Tìm danh mục..." />
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {filteredAdminCategories.map((category) => (
                  <div key={category.id} role="button" tabIndex={0} onClick={() => editCategory(category)} className={`rounded-xl border bg-white p-4 text-left transition-all hover:border-indigo-200 hover:bg-indigo-50/20 hover:shadow-sm ${editingCategoryId === category.id ? "border-indigo-300 bg-indigo-50/70 ring-2 ring-indigo-100" : "border-slate-200"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{category.slug}</p>
                      </div>
                      <Button size="icon" variant="outline" className={adminSecondaryButton} onClick={(event) => { event.stopPropagation(); requestDeleteCategory(category); }}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                    <div className="mt-4 text-sm text-slate-500">{category.postCount} bài viết</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {section === "tags" && (
            <section className={adminPanel}>
              <div className="mb-5">
                <h2 className="text-lg font-semibold">Quản lý thẻ nội dung</h2>
                <p className="text-sm text-slate-500">Gắn chủ đề chi tiết cho từng bài viết.</p>
              </div>
              <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <div className="text-sm font-semibold">{editingTagId ? "Chỉnh sửa thẻ" : "Thêm thẻ mới"}</div>
                  <div className="text-xs text-slate-500">Click vào thẻ bên dưới để đưa dữ liệu lên form.</div>
                </div>
                {editingTagId && (
                  <Button type="button" variant="outline" size="sm" className={adminSecondaryButton} onClick={resetTagForm}>
                    Hủy
                  </Button>
                )}
              </div>
              <form onSubmit={saveTag} className={`mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 ${
                editingTagId ? "flex flex-col gap-3 lg:flex-row" : "flex flex-col gap-3 sm:flex-row"
              } ${editingTagId ? "[&>button:first-of-type]:hidden" : ""}`}>
                <Input className={adminInput} value={tagName} onChange={(event) => setTagName(event.target.value)} placeholder="Tên thẻ mới" />
                <Button type="submit" className={adminPrimaryButton}><Plus className="h-4 w-4" />Thêm</Button>
                {editingTagId && (
                  <div className="flex shrink-0 flex-wrap items-center gap-2 lg:flex-nowrap">
                    <Button type="submit" className={adminPrimaryButton}>
                      <Save className="h-4 w-4" />
                      Lưu sửa
                    </Button>
                    <Button type="button" variant="outline" className={`${adminSecondaryButton} text-red-600 hover:text-red-700`} onClick={() => {
                      const tag = tags.find((item) => item.id === editingTagId);
                      if (tag) requestDeleteTag(tag);
                    }}>
                      <Trash2 className="h-4 w-4" />
                      Xóa
                    </Button>
                  </div>
                )}
              </form>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input className={`pl-9 ${adminInput}`} value={tagAdminSearch} onChange={(event) => setTagAdminSearch(event.target.value)} placeholder="Tìm thẻ..." />
              </div>
              <div className="flex flex-wrap gap-2">
                {filteredAdminTags.map((tag) => (
                  <button key={tag.id} type="button" onClick={() => editTag(tag)} className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-all hover:border-indigo-200 hover:bg-indigo-50/60 ${editingTagId === tag.id ? "border-indigo-300 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100" : "border-slate-200 bg-white text-slate-700"}`}>
                    {tag.name}
                    <span className="text-slate-400">{tag.postCount}</span>
                    <span onClick={(event) => { event.stopPropagation(); requestDeleteTag(tag); }} role="button" tabIndex={0} className="rounded-full p-0.5 text-slate-400 hover:bg-white hover:text-red-600"><Trash2 className="h-3 w-3" /></span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {section === "media" && (
            <section className={adminPanel}>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">Thư viện media</h2>
                  <p className="text-sm text-slate-500">Upload và quản lý ảnh đã dùng trong CMS.</p>
                </div>
                <label className={`inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md px-4 text-sm font-medium ${adminPrimaryButton}`}>
                  <UploadCloud className="h-4 w-4" />
                  Upload ảnh
                  <input type="file" accept="image/*" className="hidden" onChange={(event) => uploadImage(event.target.files?.[0], false)} />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {media.map((asset) => (
                  <article key={asset.id} className="overflow-hidden rounded-xl border border-slate-200">
                    <div className="aspect-video bg-slate-100">
                      <img src={asset.url} alt={asset.fileName ?? "Media asset"} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <div className="truncate text-sm font-medium">{asset.fileName ?? "Uploaded image"}</div>
                      <div className="mt-1 text-xs text-slate-500">{formatDate(asset.createdAt)}</div>
                      <div className="mt-3 flex gap-2">
                        <Button type="button" variant="outline" size="sm" className={`flex-1 ${adminSecondaryButton}`} onClick={() => copyMediaUrl(asset.url)}>
                          Copy URL
                        </Button>
                        <Button type="button" variant="outline" size="icon" className={adminSecondaryButton} onClick={() => requestDeleteMedia(asset)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {section === "account" && (
            <div className="grid gap-6 xl:grid-cols-2">
              <form onSubmit={saveProfile} className={adminPanel}>
                <div className="mb-5">
                  <h2 className="flex items-center gap-2 text-lg font-semibold"><UserRound className="h-5 w-5" />Thông tin cá nhân</h2>
                  <p className="text-sm text-slate-500">Cập nhật tên đăng nhập và tên hiển thị của admin.</p>
                </div>
                <div className="space-y-3">
                  <Input className={adminInput} value={profileForm.username} onChange={(event) => setProfileForm({ ...profileForm, username: event.target.value })} placeholder="Username" />
                  <Input className={adminInput} value={profileForm.displayName} onChange={(event) => setProfileForm({ ...profileForm, displayName: event.target.value })} placeholder="Tên hiển thị" />
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">Role hiện tại: {profile?.role ?? "Admin"}</div>
                  <Button type="submit" className={adminPrimaryButton}><Save className="h-4 w-4" />Lưu thông tin</Button>
                </div>
              </form>

              <form onSubmit={changePassword} className={adminPanel}>
                <div className="mb-5">
                  <h2 className="flex items-center gap-2 text-lg font-semibold"><KeyRound className="h-5 w-5" />Đổi mật khẩu</h2>
                  <p className="text-sm text-slate-500">Mật khẩu mới tối thiểu 8 ký tự.</p>
                </div>
                <div className="space-y-3">
                  <Input className={adminInput} value={passwordForm.currentPassword} onChange={(event) => setPasswordForm({ ...passwordForm, currentPassword: event.target.value })} placeholder="Mật khẩu hiện tại" type="password" />
                  <Input className={adminInput} value={passwordForm.newPassword} onChange={(event) => setPasswordForm({ ...passwordForm, newPassword: event.target.value })} placeholder="Mật khẩu mới" type="password" />
                  <Input className={adminInput} value={passwordForm.confirmPassword} onChange={(event) => setPasswordForm({ ...passwordForm, confirmPassword: event.target.value })} placeholder="Xác nhận mật khẩu mới" type="password" />
                  <Button type="submit" className={adminPrimaryButton}><KeyRound className="h-4 w-4" />Đổi mật khẩu</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <AlertDialog open={Boolean(pendingConfirmation)} onOpenChange={(open) => !open && !confirmingAction && setPendingConfirmation(null)}>
        <AlertDialogContent className="max-w-md rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 p-0 shadow-2xl overflow-hidden">
          <div className="relative p-6 pb-4">
            {/* Elegant Top Accent Line/Glow */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${
              pendingConfirmation?.tone === "warning" 
                ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" 
                : "bg-gradient-to-r from-red-500 via-rose-600 to-red-700"
            }`} />

            <AlertDialogHeader className="space-y-4 text-left">
              <div className="flex items-center gap-4">
                {/* Glowing Icon Container */}
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                  pendingConfirmation?.tone === "warning"
                    ? "bg-amber-50/80 border-amber-200/60 text-amber-600 dark:bg-amber-950/30 dark:border-amber-900/40 dark:text-amber-400 ring-8 ring-amber-500/5 dark:ring-amber-500/2"
                    : "bg-red-50/80 border-red-200/60 text-red-600 dark:bg-red-950/30 dark:border-red-900/40 dark:text-red-400 ring-8 ring-red-500/5 dark:ring-red-500/2"
                }`}>
                  {pendingConfirmation?.tone === "warning" ? (
                    <AlertTriangle className="h-5 w-5 animate-pulse" />
                  ) : (
                    <Trash2 className="h-5 w-5 animate-pulse" />
                  )}
                </div>

                <div className="space-y-1">
                  {/* Small Eyebrow Badge */}
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                    pendingConfirmation?.tone === "warning"
                      ? "bg-amber-50 text-amber-700 border border-amber-200/50 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/30"
                      : "bg-red-50 text-red-700 border border-red-200/50 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900/30"
                  }`}>
                    {pendingConfirmation?.tone === "warning" ? "Cảnh báo" : "Xác nhận xóa"}
                  </span>
                  
                  <AlertDialogTitle className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none">
                    {pendingConfirmation?.title}
                  </AlertDialogTitle>
                </div>
              </div>

              {/* Description box */}
              <div className="rounded-xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-100/50 dark:border-slate-800/30 p-3.5 mt-3">
                <AlertDialogDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {pendingConfirmation?.description}
                </AlertDialogDescription>
              </div>
            </AlertDialogHeader>
          </div>

          <AlertDialogFooter className="border-t border-slate-100 dark:border-slate-900/80 bg-slate-50/50 dark:bg-slate-950/40 px-6 py-4 flex gap-3 sm:gap-0">
            <AlertDialogCancel 
              disabled={confirmingAction} 
              className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-slate-100 rounded-xl px-4 py-2 text-sm font-medium transition-all shadow-sm"
            >
              Hủy
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={confirmingAction}
              onClick={(event) => {
                event.preventDefault();
                runConfirmedAction();
              }}
              className={`rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-1.5 ${
                pendingConfirmation?.tone === "warning" 
                  ? "bg-amber-600 hover:bg-amber-500 active:bg-amber-700 shadow-amber-600/10 dark:bg-amber-700 dark:hover:bg-amber-600 focus-visible:ring-amber-500" 
                  : "bg-red-600 hover:bg-red-500 active:bg-red-700 shadow-red-600/10 dark:bg-red-700 dark:hover:bg-red-600 focus-visible:ring-red-500"
              }`}
            >
              {confirmingAction ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : pendingConfirmation?.tone === "warning" ? (
                <AlertTriangle className="h-4 w-4 shrink-0" />
              ) : (
                <Trash2 className="h-4 w-4 shrink-0" />
              )}
              <span>{pendingConfirmation?.confirmLabel ?? "Xác nhận"}</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default Admin;
