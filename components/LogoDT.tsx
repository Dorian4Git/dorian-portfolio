import type { SVGProps } from "react";
import { useId } from "react";

type LogoDTProps = SVGProps<SVGSVGElement> & {
  variant?: "mono" | "gradient";
};

export default function LogoDT({ variant = "mono", ...props }: LogoDTProps) {
  const gid = useId();
  const fillValue = variant === "gradient" ? `url(#dtGradient-${gid})` : "currentColor";

  return (
    <svg
      viewBox="0 0 96 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DT"
      {...props}
    >
      {variant === "gradient" && (
        <defs>
          <linearGradient
            id={`dtGradient-${gid}`}
            x1="0"
            y1="0"
            x2="96"
            y2="64" /* Changed to diagonal gradient for more dynamism */
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#f5d073" />
          </linearGradient>
        </defs>
      )}

      {/* AGGRESSIVE D 
          - Replaced Curves (C) with Lines (L) 
          - Creates an octagonal/chamfered aesthetic
      */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8H32L56 32V32L32 56H8V8ZM16 16V48H28L44 32L28 16H16Z"
        fill={fillValue}
      />

      {/* AGGRESSIVE T 
          - Sliced top-right corner
          - Sliced bottom-left of the stem
      */}
      <path
        d="M64 8H80L88 16H64V8Z" /* Top Bar with cut corner */
        fill={fillValue}
      />
      <path
        d="M72 16H80V48L72 56V16Z" /* Stem with cut bottom */
        fill={fillValue}
      />
    </svg>
  );
}