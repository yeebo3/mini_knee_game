import { QuizQuestion } from "@/types/learning";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "习近平新时代中国特色社会主义思想被明确为党必须长期坚持的指导思想，是在哪次大会上写入党章的？",
    options: [
      { id: "a", label: "A", text: "党的十八大" },
      { id: "b", label: "B", text: "党的十九大" },
      { id: "c", label: "C", text: "党的二十大" },
      { id: "d", label: "D", text: "党的十八届三中全会" }
    ],
    correctAnswer: "b",
    explanation:
      "党的十九大将习近平新时代中国特色社会主义思想写入党章，确立为党必须长期坚持的指导思想。",
    background:
      "这一确立标志着党的指导思想实现与时俱进，为新时代党和国家事业发展提供了根本遵循。",
    chapter: "导论",
    difficulty: "基础",
    tags: ["指导思想", "十九大", "党章"]
  },
  {
    id: "q2",
    prompt: "中国式现代化的本质要求中，不包括以下哪一项？",
    options: [
      { id: "a", label: "A", text: "坚持中国共产党领导" },
      { id: "b", label: "B", text: "实现全体人民共同富裕" },
      { id: "c", label: "C", text: "照搬西方现代化道路" },
      { id: "d", label: "D", text: "促进人与自然和谐共生" }
    ],
    correctAnswer: "c",
    explanation:
      "中国式现代化强调走符合中国国情的发展道路，不能照搬西方现代化模式。",
    background:
      "中国式现代化既借鉴人类文明成果，也立足中国历史、制度和发展阶段，强调独立自主与实践创新。",
    chapter: "中国式现代化",
    difficulty: "基础",
    tags: ["现代化", "本质要求", "道路"]
  },
  {
    id: "q3",
    prompt: "新发展理念中，居于首位并起统领作用的是哪一项？",
    options: [
      { id: "a", label: "A", text: "协调" },
      { id: "b", label: "B", text: "创新" },
      { id: "c", label: "C", text: "绿色" },
      { id: "d", label: "D", text: "共享" }
    ],
    correctAnswer: "b",
    explanation:
      "创新是引领发展的第一动力，在新发展理念中居于首位并发挥统领作用。",
    background:
      "面对发展阶段变化与外部竞争格局调整，创新被视为解决发展动力问题的关键抓手。",
    chapter: "新发展理念",
    difficulty: "基础",
    tags: ["创新", "发展理念", "第一动力"]
  },
  {
    id: "q4",
    prompt: "全面深化改革总目标是完善和发展中国特色社会主义制度，推进什么？",
    options: [
      { id: "a", label: "A", text: "国家治理体系和治理能力现代化" },
      { id: "b", label: "B", text: "新型工业化和城镇化" },
      { id: "c", label: "C", text: "社会主义文化现代化" },
      { id: "d", label: "D", text: "共同富裕全面实现" }
    ],
    correctAnswer: "a",
    explanation:
      "全面深化改革总目标强调制度完善与治理现代化的统一，核心表达就是推进国家治理体系和治理能力现代化。",
    background:
      "这一表述体现改革已从单项突破走向系统集成，更关注制度效能和治理能力提升。",
    chapter: "全面深化改革",
    difficulty: "进阶",
    tags: ["改革总目标", "治理现代化", "制度建设"]
  },
  {
    id: "q5",
    prompt: "总体国家安全观强调以什么为宗旨？",
    options: [
      { id: "a", label: "A", text: "人民安全" },
      { id: "b", label: "B", text: "政治安全" },
      { id: "c", label: "C", text: "经济安全" },
      { id: "d", label: "D", text: "国际安全" }
    ],
    correctAnswer: "a",
    explanation:
      "总体国家安全观强调以人民安全为宗旨，以政治安全为根本，以经济安全为基础。",
    background:
      "这一体系打破了传统安全与非传统安全分割的理解方式，强调国家安全的整体性和系统性。",
    chapter: "总体国家安全观",
    difficulty: "进阶",
    tags: ["国家安全", "人民安全", "总体国家安全观"]
  },
  {
    id: "q6",
    prompt: "全过程人民民主更强调民主的哪一项特征？",
    options: [
      { id: "a", label: "A", text: "只在选举时体现" },
      { id: "b", label: "B", text: "程序和实质相统一" },
      { id: "c", label: "C", text: "主要依赖网络投票" },
      { id: "d", label: "D", text: "以少数精英参与为主" }
    ],
    correctAnswer: "b",
    explanation:
      "全过程人民民主强调民主不仅有完整程序，而且有完整参与实践，体现程序民主与实质民主统一。",
    background:
      "这一概念回应了现代民主实践中程序存在但结果失衡的问题，突出人民当家作主的真实有效性。",
    chapter: "全过程人民民主",
    difficulty: "综合",
    tags: ["人民民主", "程序民主", "实质民主"]
  },
  {
    id: "q7",
    prompt: "建设社会主义文化强国，最深层、最持久的力量来自什么？",
    options: [
      { id: "a", label: "A", text: "文化产业规模扩张" },
      { id: "b", label: "B", text: "国际传播技术升级" },
      { id: "c", label: "C", text: "全民族文化创新创造活力" },
      { id: "d", label: "D", text: "文艺作品数量增长" }
    ],
    correctAnswer: "c",
    explanation:
      "文化强国建设不能只看产出数量，更关键的是激发全民族文化创新创造活力。",
    background:
      "文化软实力和文化自信的形成，最终取决于人民群众广泛参与和文化创造能力持续增强。",
    chapter: "文化建设",
    difficulty: "综合",
    tags: ["文化强国", "文化自信", "创新创造"]
  },
  {
    id: "q8",
    prompt: "绿水青山就是金山银山理念主要强调哪种发展关系？",
    options: [
      { id: "a", label: "A", text: "生态保护与经济发展对立" },
      { id: "b", label: "B", text: "生态文明建设可后置处理" },
      { id: "c", label: "C", text: "生态优势可以转化为发展优势" },
      { id: "d", label: "D", text: "资源消耗越多越能推动增长" }
    ],
    correctAnswer: "c",
    explanation:
      "两山理念指出生态环境本身就是生产力，良好生态可以成为高质量发展的重要支撑。",
    background:
      "这一理念推动发展观从重速度转向重质量，强调生态文明建设是现代化的重要组成部分。",
    chapter: "生态文明",
    difficulty: "基础",
    tags: ["两山理念", "生态文明", "高质量发展"]
  },
  {
    id: "q9",
    prompt: "推动构建人类命运共同体，体现了新时代中国外交更强调什么？",
    options: [
      { id: "a", label: "A", text: "封闭自守的零和思维" },
      { id: "b", label: "B", text: "以邻为壑的竞争逻辑" },
      { id: "c", label: "C", text: "合作共赢和共同发展" },
      { id: "d", label: "D", text: "只关注国内事务" }
    ],
    correctAnswer: "c",
    explanation:
      "人类命运共同体理念超越零和思维，强调各国在相互依存中实现合作共赢。",
    background:
      "这一理念回应全球治理赤字、和平赤字和发展赤字，强调共同安全、共同发展与文明互鉴。",
    chapter: "中国特色大国外交",
    difficulty: "进阶",
    tags: ["命运共同体", "外交", "合作共赢"]
  },
  {
    id: "q10",
    prompt: "全面从严治党首先要从什么严起？",
    options: [
      { id: "a", label: "A", text: "从作风严起" },
      { id: "b", label: "B", text: "从制度严起" },
      { id: "c", label: "C", text: "从思想严起" },
      { id: "d", label: "D", text: "从纪律严起" }
    ],
    correctAnswer: "c",
    explanation:
      "全面从严治党强调思想建党和理论强党，首先要从思想上严起来。",
    background:
      "只有在理想信念、党性修养和理论武装上站稳立场，制度执行和纪律约束才更有基础。",
    chapter: "全面从严治党",
    difficulty: "进阶",
    tags: ["全面从严治党", "思想建党", "理论强党"]
  }
];
