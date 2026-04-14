import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#10253d]",
  secondary:
    "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-sand",
  ghost: "bg-transparent text-ink hover:bg-ink/5"
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm"
};

function sharedClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link className={sharedClasses(variant, size, className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
