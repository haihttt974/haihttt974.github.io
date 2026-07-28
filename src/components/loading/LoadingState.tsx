import { InlineLoader } from "./InlineLoader";

type LoadingStateProps = {
  className?: string;
  label?: string;
};

export const LoadingState = ({ className, label = "Loading" }: LoadingStateProps) => (
  <InlineLoader className={className} label={label} />
);
