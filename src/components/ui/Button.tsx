import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
  download?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  download,
}: ButtonProps) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-[6px] px-6 text-[13px] font-semibold tracking-[0.04em] transition-colors duration-200";

  const styles =
    variant === "ghost"
      ? "border border-hairline bg-transparent text-ink hover:border-mint hover:text-mint"
      : "bg-mint text-canvas hover:bg-mint-strong";

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(download ? { download } : {})}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
