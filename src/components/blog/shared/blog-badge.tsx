import React from "react";
import Link from "next/link";

interface BlogBadgeProps {
  label: string;
  href?: string;
  variant?: "default" | "burgundy" | "outline" | "gold";
  size?: "sm" | "md";
  className?: string;
}

export function BlogBadge({
  label,
  href,
  variant = "default",
  size = "sm",
  className = "",
}: BlogBadgeProps) {
  const variantStyles = {
    default: "bg-[#B32526]/10 text-[#B32526] hover:bg-[#B32526] hover:text-white",
    burgundy: "bg-[#781E24]/10 text-[#781E24] hover:bg-[#781E24] hover:text-white",
    outline: "border border-[#292624]/15 text-[#514A45] hover:border-[#B32526] hover:text-[#B32526]",
    gold: "bg-[#A58B64]/15 text-[#781E24] hover:bg-[#A58B64] hover:text-white",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-1 tracking-[0.16em]",
    md: "text-xs px-3.5 py-1.5 tracking-[0.18em]",
  };

  const baseStyles = `inline-flex items-center font-sans font-semibold uppercase transition-all duration-300 rounded-xs select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {label}
      </Link>
    );
  }

  return <span className={baseStyles}>{label}</span>;
}
