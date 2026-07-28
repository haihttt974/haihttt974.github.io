export const loadingMotionConfig = {
  routeDelay: 150,
  minimumVisibleTime: 280,
  appMinimumTime: 420,
  appMaximumWait: 1800,
  initializeDuration: 150,
  drawDuration: 620,
  completeDuration: 120,
  exitDuration: 340,
  sizes: {
    app: "clamp(12rem, 58vw, 23rem)",
    route: "10rem",
    inline: "2.75rem",
  },
} as const;
