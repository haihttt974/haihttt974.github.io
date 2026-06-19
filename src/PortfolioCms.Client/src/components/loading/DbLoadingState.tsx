import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type LoadingVariant = "feed" | "article" | "dashboard";

type DbLoadingStateProps = {
  variant?: LoadingVariant;
  className?: string;
};

const feedCards = [1, 2, 3, 4, 5, 6];

const LoadingChip = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur",
      className,
    )}
  >
    <span className="db-loader-breathe h-2.5 w-2.5 rounded-full bg-primary/80" />
    <span className="h-1.5 w-16 rounded-full bg-muted-foreground/20" />
  </div>
);

const ArticleLoading = () => (
  <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-8 md:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:py-12">
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <LoadingChip />
        <LoadingChip className="hidden sm:inline-flex" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-12 w-[min(100%,44rem)] rounded-2xl bg-primary/10" />
        <Skeleton className="h-7 w-[min(100%,32rem)] rounded-full" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>
      </div>

      <div className="rounded-[1.35rem] border border-border/70 bg-card/85 p-5 shadow-sm md:p-8">
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[96%]" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[94%]" />
          <Skeleton className="h-4 w-[86%]" />
        </div>
        <div className="my-8 grid gap-3 md:grid-cols-2">
          <Skeleton className="h-36 rounded-2xl" />
          <Skeleton className="h-36 rounded-2xl" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-[92%]" />
          <Skeleton className="h-4 w-[88%]" />
          <Skeleton className="h-4 w-[95%]" />
          <Skeleton className="h-4 w-[82%]" />
        </div>
      </div>
    </div>

    <aside className="space-y-4">
      <div className="rounded-[1.2rem] border border-border/70 bg-background/75 p-4 shadow-sm">
        <Skeleton className="h-4 w-24 rounded-full" />
        <div className="mt-4 space-y-3">
          <Skeleton className="h-8 w-full rounded-full" />
          <Skeleton className="h-8 w-[92%] rounded-full" />
          <Skeleton className="h-8 w-[84%] rounded-full" />
        </div>
      </div>
      <div className="rounded-[1.2rem] border border-border/70 bg-background/75 p-4 shadow-sm">
        <Skeleton className="h-4 w-28 rounded-full" />
        <div className="mt-4 space-y-3">
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>
    </aside>
  </div>
);

const FeedLoading = () => (
  <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
    <div className="mb-12 max-w-3xl space-y-4">
      <LoadingChip className="w-fit" />
      <Skeleton className="h-14 w-[min(100%,34rem)] rounded-2xl bg-primary/10" />
      <Skeleton className="h-7 w-[min(100%,28rem)] rounded-full" />
    </div>

    <div className="mb-8 rounded-[1.2rem] border border-border/70 bg-background/80 p-3 shadow-sm backdrop-blur">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto]">
        <Skeleton className="h-10 rounded-full" />
        <Skeleton className="h-10 w-full rounded-full lg:w-[14rem]" />
        <Skeleton className="h-10 w-full rounded-full lg:w-[11rem]" />
        <Skeleton className="h-10 w-full rounded-full lg:w-[10rem]" />
      </div>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {feedCards.map((card, index) => (
        <div
          key={card}
          className={cn(
            "rounded-[1.2rem] border border-border/70 bg-card/85 p-5 shadow-sm",
            index === 0 && "md:col-span-2 xl:col-span-1",
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-4 w-16 rounded-full" />
          </div>
          <Skeleton className="mt-5 h-9 w-[min(100%,24rem)] rounded-xl" />
          <div className="mt-4 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[92%]" />
            <Skeleton className="h-4 w-[84%]" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Skeleton className="h-7 w-16 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-14 rounded-full" />
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DashboardLoading = () => (
  <div className="mx-auto w-full max-w-7xl px-4 py-6 lg:px-6">
    <div className="mb-6 flex items-center justify-between gap-4">
      <LoadingChip className="w-fit" />
      <Skeleton className="h-9 w-40 rounded-full" />
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="rounded-[1.2rem] border border-border/70 bg-card/90 p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-9 w-9 rounded-2xl" />
          </div>
          <Skeleton className="mt-5 h-10 w-24 rounded-2xl bg-primary/10" />
          <Skeleton className="mt-4 h-4 w-32 rounded-full" />
        </div>
      ))}
    </div>

    <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
      <div className="rounded-[1.2rem] border border-border/70 bg-card/90 p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-5 w-40 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border/60">
          <div className="grid grid-cols-4 gap-4 border-b border-border/60 bg-background/70 px-4 py-3">
            <Skeleton className="h-4 w-24 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-12 rounded-full justify-self-end" />
          </div>
          <div className="space-y-0 bg-card/70">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 border-b border-border/40 px-4 py-4 last:border-0">
                <Skeleton className="h-4 w-full rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-4 w-24 rounded-full" />
                <Skeleton className="h-4 w-10 rounded-full justify-self-end" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[1.2rem] border border-border/70 bg-card/90 p-5 shadow-sm">
          <Skeleton className="h-5 w-32 rounded-full" />
          <div className="mt-4 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[92%]" />
            <Skeleton className="h-4 w-[86%]" />
          </div>
        </div>
        <div className="rounded-[1.2rem] border border-border/70 bg-card/90 p-5 shadow-sm">
          <Skeleton className="h-5 w-36 rounded-full" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Skeleton className="h-24 rounded-2xl" />
            <Skeleton className="h-24 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DbLoadingState = ({ variant = "feed", className }: DbLoadingStateProps) => {
  return (
    <section aria-busy="true" aria-live="polite" className={cn("db-loader-shell", className)}>
      <div className="relative z-10">
        {variant === "article" ? (
          <ArticleLoading />
        ) : variant === "dashboard" ? (
          <DashboardLoading />
        ) : (
          <FeedLoading />
        )}
      </div>
      <div className="db-loader-orbit pointer-events-none absolute -right-20 top-8 h-48 w-48 rounded-full border border-primary/15" />
      <div className="db-loader-orbit pointer-events-none absolute bottom-8 left-6 h-28 w-28 rounded-full border border-accent/15 [animation-direction:reverse]" />
    </section>
  );
};
