
import Link from "next/link";

const navigationItems = [
  {
    label: "Terms & Conditions",
    href: "#terms-and-conditions",
  },
  {
    label: "Privacy Policy",
    href: "#privacy-policy",
  },
];

export function LegalNavigation() {
  return (
    <nav className="sticky top-20 z-30 border-y border-[#292624]/10 bg-[#F8F5EF]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 py-4 md:px-12">
        <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#81766C]">
          On this page
        </span>

        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 text-sm text-[#514A45] transition hover:text-[#B32526]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
