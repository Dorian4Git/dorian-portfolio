import type { SVGProps } from "react";
import { useId } from "react";

type LogoDTProps = SVGProps<SVGSVGElement> & {
  variant?: "mono" | "gradient";
};

export default function LogoDT({ variant = "mono", ...props }: LogoDTProps) {
  const gid = useId(); // évite les collisions d'ID si le logo apparaît plusieurs fois
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
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#67E8F9" />   {/* cyan-300 */}
            <stop offset="0.5" stopColor="#F0ABFC" /> {/* fuchsia-300 */}
            <stop offset="1" stopColor="#FDE68A" />   {/* amber-200 */}
          </linearGradient>
        </defs>
      )}

      {/* D */}
      <path
        d="M8 8 H28 C44 8 56 20 56 32 C56 44 44 56 28 56 H8 Z
           M16 16 V48 H28 C38 48 48 40 48 32 C48 24 38 16 28 16 Z"
        fill={fillValue}
      />
      {/* T */}
      <rect x="64" y="8" width="24" height="8" fill={fillValue} />
      <rect x="72" y="16" width="8" height="40" fill={fillValue} />
    </svg>
  );
}
