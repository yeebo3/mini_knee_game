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
          title="双模块结合，比单一答题站更适合作业展示"
          description="如果只做答题，网站很容易停留在功能演示层面。加入学习画像测试后，网站不仅能验证知识掌握，还能展示你对学习者差异、复习路径与信息呈现方式的设计思考。"
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
