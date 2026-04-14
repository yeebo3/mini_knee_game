import { dailySentence } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HomeHero() {
  return (
    <section className="page-section">
      <div className="page-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="fade-up">
          <Badge className="border-crimson/20 bg-crimson/5 text-crimson">互动学习平台</Badge>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-ink md:text-6xl">
            习概互动学习站
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            通过答题、测试与知识卡片，梳理课程重点，及时发现薄弱环节，让复习更有条理。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/quiz" size="lg">
              开始闯关
            </Button>
            <Button href="/test" variant="secondary" size="lg">
              开始测试
            </Button>
          </div>
        </div>
        <Card className="report-grid p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">今日学习一句话</p>
              <CardTitle className="mt-3 max-w-md text-2xl">{dailySentence}</CardTitle>
            </div>
            <div className="rounded-full border border-line bg-white px-3 py-1 text-xs text-slate-500">
              Daily Note
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/90 bg-white/90 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Module 01</p>
              <p className="mt-3 text-sm font-semibold text-ink">闯关答题</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">逐题反馈，边答边学。</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/90 bg-white/90 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Module 02</p>
              <p className="mt-3 text-sm font-semibold text-ink">学习画像</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">了解自己的学习偏好，找到更顺手的复习方式。</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/90 bg-white/90 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Module 03</p>
              <p className="mt-3 text-sm font-semibold text-ink">知识卡片</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">适合预习、复盘与考前速览。</p>
            </div>
          </div>
          <CardText className="mt-6">由膝盖小组制作</CardText>
        </Card>
      </div>
    </section>
  );
}
