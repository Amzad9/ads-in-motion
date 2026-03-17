import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
} & (
  | {
      as?: "link";
      href: string;
    }
  | {
      as: "button";
      type?: "button" | "submit" | "reset";
      onClick?: () => void;
    }
);

function getClasses(variant: Props["variant"], className: string) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles =
    variant === "solid"
      ? "bg-brand-gold-500 text-black shadow-soft hover:bg-brand-gold-600"
      : "border border-white/30 bg-white/10 text-white hover:bg-white/15";

  return `${base} ${styles} ${className}`;
};

export function PrimaryButton({
  children,
  variant = "solid",
  className = "",
  ...props
}: Props) {
  const classes = getClasses(variant, className);

  if (props.as === "button") {
    return (
      <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={props.href} className={classes}>
      {children}
    </Link>
  );
}
