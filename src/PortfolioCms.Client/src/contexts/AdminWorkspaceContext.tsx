import { createContext, useCallback, useContext, useEffect, useMemo, useState, type Dispatch, type FormEvent, type ReactNode, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
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
import { useToast } from "@/hooks/use-toast";

export type AdminSection = "dashboard" | "posts" | "categories" | "tags" | "media" | "account";
export type PendingConfirmation = {
  title: string;
  description: string;
  confirmLabel?: string;
  tone?: "danger" | "warning";
  action: () => Promise<void>;
};

const adminSectionPaths: Record<AdminSection, string> = {
  dashboard: "/admin/dashboard",
  posts: "/admin/posts",
  categories: "/admin/categories",
  tags: "/admin/tags",
  media: "/admin/media",
  account: "/admin/account",
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Ã„â€˜/g, "d")
    .replace(/Ã„Â/g, "d")
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

type AdminWorkspaceValue = {
  token: string;
  setToken: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isLoggingIn: boolean;
  isLoading: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (value: boolean | ((value: boolean) => boolean)) => void;
  profile: AdminProfile | null;
  profileForm: { username: string; displayName: string };
  setProfileForm: Dispatch<SetStateAction<{ username: string; displayName: string }>>;
  passwordForm: { currentPassword: string; newPassword: string; confirmPassword: string };
  setPasswordForm: Dispatch<SetStateAction<{ currentPassword: string; newPassword: string; confirmPassword: string }>>;
  dashboard: Dashboard | null;
  posts: CmsPostListItem[];
  categories: CmsCategory[];
  tags: CmsTag[];
  media: MediaAsset[];
  editingId: string | null;
  postForm: UpsertPostRequest;
  setPostForm: Dispatch<SetStateAction<UpsertPostRequest>>;
  postSearch: string;
  setPostSearch: (value: string) => void;
  editingCategoryId: string | null;
  editingTagId: string | null;
  categoryName: string;
  setCategoryName: (value: string) => void;
  tagName: string;
  setTagName: (value: string) => void;
  categoryAdminSearch: string;
  setCategoryAdminSearch: (value: string) => void;
  tagAdminSearch: string;
  setTagAdminSearch: (value: string) => void;
  filteredPosts: CmsPostListItem[];
  filteredAdminCategories: CmsCategory[];
  filteredAdminTags: CmsTag[];
  adminSectionPaths: Record<AdminSection, string>;
  navigateToSection: (section: AdminSection) => void;
  login: (event: FormEvent) => Promise<void>;
  logout: () => void;
  editPost: (id: string) => Promise<void>;
  resetPostForm: () => void;
  savePost: (event: FormEvent) => Promise<void>;
  requestDeletePost: (post: CmsPostListItem) => void;
  editCategory: (category: CmsCategory) => void;
  resetCategoryForm: () => void;
  saveCategory: (event: FormEvent) => Promise<void>;
  requestDeleteCategory: (category: CmsCategory) => void;
  editTag: (tag: CmsTag) => void;
  resetTagForm: () => void;
  saveTag: (event: FormEvent) => Promise<void>;
  requestDeleteTag: (tag: CmsTag) => void;
  uploadImage: (file?: File, applyToPost?: boolean) => Promise<void>;
  requestDeleteMedia: (asset: MediaAsset) => void;
  copyMediaUrl: (url: string) => Promise<void>;
  saveProfile: (event: FormEvent) => Promise<void>;
  changePassword: (event: FormEvent) => Promise<void>;
  requestImportLocalBlogData: () => void;
  pendingConfirmation: PendingConfirmation | null;
  confirmingAction: boolean;
  runConfirmedAction: () => Promise<void>;
  requestConfirmation: (confirmation: PendingConfirmation) => void;
  dismissConfirmation: () => void;
  resetSectionState: () => void;
};

const AdminWorkspaceContext = createContext<AdminWorkspaceValue | null>(null);

export const useAdminWorkspace = () => {
  const context = useContext(AdminWorkspaceContext);
  if (!context) throw new Error("useAdminWorkspace must be used within AdminWorkspaceProvider");
  return context;
};

export const AdminWorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [token, setTokenState] = useState(() => getAdminToken());
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const dismissConfirmation = () => setPendingConfirmation(null);

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
      setTokenState(result.accessToken);
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
    setTokenState("");
    navigate("/admin");
  };

  const navigateToSection = (section: AdminSection) => navigate(adminSectionPaths[section]);

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
      };
      if (editingCategoryId) {
        await adminApi.updateCategory(editingCategoryId, payload);
      } else {
        await adminApi.createCategory({ ...payload, slug: slugify(categoryName) });
      }
      resetCategoryForm();
      await loadAdmin();
      notifySuccess("Đã lưu danh mục");
    } catch (error) {
      notifyError("Không thể lưu danh mục", error);
    }
  };

  const deleteCategory = async (id: string) => {
    if (!adminApi) return;
    try {
      await adminApi.deleteCategory(id);
      await loadAdmin();
      notifySuccess("Đã xóa danh mục");
    } catch (error) {
      notifyError("Không thể xóa danh mục", error);
    }
  };

  const requestDeleteCategory = (category: CmsCategory) => {
    const linkedCount = posts.filter((post) => post.categoryId === category.id).length;
    requestConfirmation({
      title: "Xóa danh mục?",
      description:
        linkedCount > 0
          ? `Danh mục "${category.name}" đang gắn với ${linkedCount} bài viết. Bạn vẫn muốn xóa chứ?`
          : `Danh mục "${category.name}" sẽ bị xóa khỏi CMS. Hành động này không thể hoàn tác.`,
      confirmLabel: "Xóa danh mục",
      tone: linkedCount > 0 ? "warning" : "danger",
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
      const payload = {
        name: tagName,
        slug: currentTag?.slug ?? "",
      };
      if (editingTagId) {
        await adminApi.updateTag(editingTagId, payload);
      } else {
        await adminApi.createTag({ ...payload, slug: slugify(tagName) });
      }
      resetTagForm();
      await loadAdmin();
      notifySuccess("Đã lưu thẻ");
    } catch (error) {
      notifyError("Không thể lưu thẻ", error);
    }
  };

  const deleteTag = async (id: string) => {
    if (!adminApi) return;
    try {
      await adminApi.deleteTag(id);
      await loadAdmin();
      notifySuccess("Đã xóa thẻ");
    } catch (error) {
      notifyError("Không thể xóa thẻ", error);
    }
  };

  const requestDeleteTag = (tag: CmsTag) => {
    const linkedCount = posts.filter((post) => post.tags.includes(tag.name)).length;
    requestConfirmation({
      title: "Xóa thẻ nội dung?",
      description:
        linkedCount > 0
          ? `Thẻ "${tag.name}" đang gắn với ${linkedCount} bài viết. Bạn vẫn muốn xóa chứ?`
          : `Thẻ "${tag.name}" sẽ bị xóa khỏi CMS. Hành động này không thể hoàn tác.`,
      confirmLabel: "Xóa thẻ",
      tone: linkedCount > 0 ? "warning" : "danger",
      action: () => deleteTag(tag.id),
    });
  };

  const uploadImage = async (file?: File, applyToPost = true) => {
    if (!adminApi || !file) return;
    try {
      const result = await adminApi.uploadMedia(file);
      if (applyToPost) {
        setPostForm((current) => ({ ...current, coverImageUrl: result.url }));
      }
      await loadAdmin();
      notifySuccess("Đã tải ảnh lên", "Ảnh đã được thêm vào thư viện media.");
    } catch (error) {
      notifyError("Không thể tải ảnh lên", error);
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
      description: `Ảnh "${asset.fileName ?? asset.id}" sẽ bị xóa khỏi thư viện. Hành động này không thể hoàn tác.`,
      confirmLabel: "Xóa ảnh",
      tone: "danger",
      action: () => deleteMedia(asset.id),
    });
  };

  const copyMediaUrl = async (url: string) => {
    await navigator.clipboard.writeText(url);
    notifySuccess("Đã sao chép URL");
  };

  const saveProfile = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi) return;
    try {
      await adminApi.updateProfile(profileForm);
      await loadAdmin();
      notifySuccess("Đã lưu thông tin admin");
    } catch (error) {
      notifyError("Không thể lưu thông tin admin", error);
    }
  };

  const changePassword = async (event: FormEvent) => {
    event.preventDefault();
    if (!adminApi) return;
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      notifyInfo("Mật khẩu xác nhận không khớp");
      return;
    }
    try {
      await adminApi.changePassword(passwordForm);
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      notifySuccess("Đã đổi mật khẩu");
    } catch (error) {
      notifyError("Không thể đổi mật khẩu", error);
    }
  };

  const importLocalBlogData = async () => {
    if (!adminApi) return;
    try {
      await adminApi.importPosts(localBlogPosts, localCategories);
      await loadAdmin();
      notifySuccess("Đã import dữ liệu blog mẫu");
    } catch (error) {
      notifyError("Không thể import dữ liệu blog", error);
    }
  };

  const requestImportLocalBlogData = () => {
    requestConfirmation({
      title: "Import dữ liệu blog mẫu?",
      description: "Hành động này sẽ thêm dữ liệu blog mẫu từ local vào hệ thống.",
      confirmLabel: "Import",
      tone: "warning",
      action: importLocalBlogData,
    });
  };

  const resetSectionState = () => {
    setSidebarOpen(false);
  };

  const value = {
    token,
    setToken: setTokenState,
    username,
    setUsername,
    password,
    setPassword,
    isLoggingIn,
    isLoading,
    sidebarOpen,
    setSidebarOpen,
    sidebarCollapsed,
    setSidebarCollapsed,
    profile,
    profileForm,
    setProfileForm,
    passwordForm,
    setPasswordForm,
    dashboard,
    posts,
    categories,
    tags,
    media,
    editingId,
    postForm,
    setPostForm,
    postSearch,
    setPostSearch,
    editingCategoryId,
    editingTagId,
    categoryName,
    setCategoryName,
    tagName,
    setTagName,
    categoryAdminSearch,
    setCategoryAdminSearch,
    tagAdminSearch,
    setTagAdminSearch,
    filteredPosts,
    filteredAdminCategories,
    filteredAdminTags,
    adminSectionPaths,
    navigateToSection,
    login,
    logout,
    editPost,
    resetPostForm,
    savePost,
    requestDeletePost,
    editCategory,
    resetCategoryForm,
    saveCategory,
    requestDeleteCategory,
    editTag,
    resetTagForm,
    saveTag,
    requestDeleteTag,
    uploadImage,
    requestDeleteMedia,
    copyMediaUrl,
    saveProfile,
    changePassword,
    requestImportLocalBlogData,
    pendingConfirmation,
    confirmingAction,
    runConfirmedAction,
    requestConfirmation,
    dismissConfirmation,
    resetSectionState,
  };

  return <AdminWorkspaceContext.Provider value={value}>{children}</AdminWorkspaceContext.Provider>;
};
