import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-white/70">
      <div className="page-shell flex flex-col gap-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-ink">习概互动学习站</p>
          <p>围绕答题练习、学习画像和知识卡片，帮助你更有条理地复习课程重点。</p>
        </div>
        <div className="flex gap-4">
          <Link href="/quiz">闯关答题</Link>
          <Link href="/test">学习画像</Link>
          <Link href="/knowledge">知识卡片</Link>
        </div>
      </div>
    </footer>
  );
}
