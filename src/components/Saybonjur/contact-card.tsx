
import {
  IconArrowUpRight,
  type TablerIcon,
} from "@tabler/icons-react";

interface ContactCardProps {
  icon: TablerIcon;
  label: string;
  value: string;
  href: string;
  description: string;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  description,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-start gap-5 border border-[#D9CFC2] bg-[#F8F5EF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B32526]/50 hover:shadow-[0_15px_40px_rgba(41,38,36,0.06)] sm:p-7"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EFE9DF] text-[#B32526] transition-colors group-hover:bg-[#B32526] group-hover:text-white">
        <Icon size={22} stroke={1.5} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81766C]">
          {label}
        </p>

        <p className="mt-2 break-words font-[family-name:var(--font-heading)] text-xl text-[#292624] sm:text-2xl">
          {value}
        </p>

        <p className="mt-2 text-sm leading-6 text-[#81766C]">
          {description}
        </p>
      </div>

      <IconArrowUpRight
        size={19}
        className="shrink-0 text-[#A58B64] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  );
}
