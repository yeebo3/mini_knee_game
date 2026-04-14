"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/quiz", label: "闯关答题" },
  { href: "/test", label: "学习画像" },
  { href: "/knowledge", label: "知识卡片" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-[#fffdf8]/88 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-4">
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white">
            习概
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">习概互动学习站</p>
            <p className="text-xs text-slate-500">Course Project Showcase</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  active ? "bg-ink text-white" : "text-slate-600 hover:bg-ink/5 hover:text-ink"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
