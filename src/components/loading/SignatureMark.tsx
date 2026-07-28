import { cn } from "@/lib/utils";

export type SignatureMarkVariant = "app" | "route" | "inline";
export type SignatureMarkPhase = "initializing" | "drawing" | "waiting" | "complete";

interface SignatureMarkProps {
  className?: string;
  phase?: SignatureMarkPhase;
  variant?: SignatureMarkVariant;
}

const signaturePath = "M12 68 C31 68 34 22 55 22 C73 22 66 72 84 72 C99 72 96 38 112 38 C126 38 126 64 139 64 C151 64 157 47 172 28";

export const SignatureMark = ({ className, phase = "drawing", variant = "route" }: SignatureMarkProps) => {
  if (variant === "inline") {
    const inlinePath = "M3 17 C11 17 12 6 21 6 C29 6 27 18 35 18 C39 18 42 13 45 9";
    return (
      <svg aria-hidden="true" className={cn("signature-mark signature-mark--inline", className)} viewBox="0 0 48 24" fill="none">
        <path className="signature-mark__stroke" vectorEffect="non-scaling-stroke" pathLength="1" d={inlinePath} />
        <circle className="signature-mark__lead" cx="0" cy="0" r="2.35">
          <animateMotion dur="480ms" repeatCount="indefinite" path={inlinePath} />
        </circle>
      </svg>
    );
  }

  if (variant === "route") {
    const routePath = "M7 42 C23 42 24 12 40 12 C55 12 50 44 65 44 C78 44 76 22 89 22 C98 22 101 29 105 34";
    return (
      <svg aria-hidden="true" className={cn("signature-mark signature-mark--route", className)} viewBox="0 0 112 56" fill="none">
        <path className="signature-mark__guide" vectorEffect="non-scaling-stroke" d={routePath} />
        <path className="signature-mark__stroke" vectorEffect="non-scaling-stroke" pathLength="1" d={routePath} />
        <circle className="signature-mark__lead" cx="0" cy="0" r="2.8">
          <animateMotion dur="560ms" repeatCount="indefinite" path={routePath} />
        </circle>
        <circle className="signature-mark__node signature-mark__node--origin" cx="7" cy="42" r="3.2" />
        <circle className="signature-mark__node signature-mark__node--end" cx="105" cy="34" r="3.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={cn("signature-mark signature-mark--app", `signature-mark--${phase}`, className)} viewBox="0 0 184 96" fill="none">
      <path className="signature-mark__guide" vectorEffect="non-scaling-stroke" d={signaturePath} />
      <path className="signature-mark__stroke" vectorEffect="non-scaling-stroke" pathLength="1" d={signaturePath} />
      <path className="signature-mark__highlight" vectorEffect="non-scaling-stroke" pathLength="1" d={signaturePath} />
      {phase !== "initializing" && phase !== "complete" && (
        <circle className="signature-mark__lead" cx="0" cy="0" r="3.1">
          <animateMotion dur="620ms" repeatCount="1" fill="freeze" path={signaturePath} />
        </circle>
      )}
      {phase === "complete" && <circle className="signature-mark__lead signature-mark__lead--locked" cx="172" cy="28" r="3.4" />}
      <g className="signature-mark__nodes">
        <circle className="signature-mark__node signature-mark__node--origin" cx="12" cy="68" r="3.8" />
        <circle className="signature-mark__node signature-mark__node--one" cx="55" cy="22" r="2.8" />
        <circle className="signature-mark__node signature-mark__node--two" cx="112" cy="38" r="2.8" />
        <circle className="signature-mark__node signature-mark__node--end" cx="172" cy="28" r="3.5" />
      </g>
      <path className="signature-mark__index signature-mark__index--start" vectorEffect="non-scaling-stroke" d="M26 82 H76" />
      <path className="signature-mark__index signature-mark__index--end" vectorEffect="non-scaling-stroke" d="M146 16 H174" />
    </svg>
  );
};
