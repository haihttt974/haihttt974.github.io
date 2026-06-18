export const adminTokenKey = "portfolio-cms-token";
export const adminAuthChangedEvent = "portfolio-cms-auth-changed";

export const getAdminToken = () => localStorage.getItem(adminTokenKey) || "";

export const setAdminToken = (token: string) => {
  localStorage.setItem(adminTokenKey, token);
  window.dispatchEvent(new Event(adminAuthChangedEvent));
};

export const clearAdminToken = () => {
  localStorage.removeItem(adminTokenKey);
  window.dispatchEvent(new Event(adminAuthChangedEvent));
};
