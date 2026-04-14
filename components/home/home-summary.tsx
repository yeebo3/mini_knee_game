import { productSummary } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardText, CardTitle } from "@/components/ui/card";
import { SectionIntro } from "@/components/ui/section-intro";

export function HomeSummary() {
  return (
    <section className="page-section">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Product Outline"
          title="一个入口，串起练习、画像与复盘"
          description="无论你想先做题、先看卡片，还是先了解自己的学习偏好，这里都能提供对应入口，帮助你把复习安排得更顺手。"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {productSummary.map((item) => (
            <Card key={item.title} className="p-6">
              <CardTitle>{item.title}</CardTitle>
              <CardText className="mt-4">{item.content}</CardText>
            </Card>
          ))}
        </div>
      </div>
      <div className="page-shell mt-10 flex flex-wrap gap-4">
        <Button href="/quiz">进入闯关答题</Button>
        <Button href="/test" variant="secondary">
          查看学习画像
        </Button>
        <Button href="/knowledge" variant="ghost">
          浏览知识卡片
        </Button>
      </div>
    </section>
  );
}
