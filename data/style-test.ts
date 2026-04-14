import { StyleProfile, StyleQuestion } from "@/types/learning";

export const styleProfiles: StyleProfile[] = [
  {
    id: "historical",
    name: "历史脉络型",
    subtitle: "更擅长沿时间线把握理论形成逻辑",
    summary:
      "你倾向于先理解历史背景、阶段变化和重大节点，再去掌握理论命题本身。时间顺序能帮助你形成整体图景。",
    traits: [
      "对阶段划分、时代背景和发展脉络较敏感",
      "习惯通过历史事件理解理论提出的现实依据",
      "对知识点之间的前后承接关系把握更好"
    ],
    suggestions: [
      "复习时先搭建时间轴，再填入关键概念与政策判断",
      "把重要会议、重大部署和理论创新串联成因果链条",
      "注意避免只记时间点而忽视概念内涵"
    ],
    reviewMethods: [
      "制作章节时间轴",
      "用阶段关键词做纵向对比",
      "把题目解析回扣到历史背景"
    ],
    accent: "from-ink/90 to-ink"
  },
  {
    id: "framework",
    name: "概念框架型",
    subtitle: "更擅长通过结构图掌握课程主干",
    summary:
      "你更容易通过概念定义、逻辑层级和框架关系来理解习概内容。建立结构后，细节记忆会更加稳固。",
    traits: [
      "偏好总分结构、概念树和知识框架图",
      "能较快辨识概念之间的并列、递进和统领关系",
      "遇到零散知识时，会主动寻找上位框架"
    ],
    suggestions: [
      "优先梳理每章主线，把关键概念放进统一框架",
      "对易混概念做横向比较，明确边界与联系",
      "避免只搭框架而忽视具体表述与现实指向"
    ],
    reviewMethods: [
      "画章节结构图",
      "用对照表区分相近概念",
      "把选择题选项归并到同一知识框架中"
    ],
    accent: "from-clay/90 to-crimson"
  },
  {
    id: "case",
    name: "现实案例型",
    subtitle: "更擅长结合现实议题理解理论意义",
    summary:
      "你更容易在现实问题、政策案例和社会观察中理解理论内容。理论对现实的解释力，是你建立记忆的关键。",
    traits: [
      "关注理论如何回应现实问题",
      "容易通过政策案例记住抽象概念",
      "对理论的实践价值和现实意义感知更强"
    ],
    suggestions: [
      "把课程知识与时政案例或社会治理案例对应起来",
      "每学一个概念，都补一个现实应用场景",
      "注意回到教材原表述，避免只记案例不记理论"
    ],
    reviewMethods: [
      "建立概念与案例对照卡",
      "看题时先判断其现实指向",
      "把解析中的背景知识转为案例素材"
    ],
    accent: "from-clay to-[#f0b37e]"
  },
  {
    id: "keyword",
    name: "关键词记忆型",
    subtitle: "更擅长抓住高频表达和核心术语",
    summary:
      "你倾向于通过关键词、固定表述和高频命题来把握课程内容。只要术语体系清晰，记忆效率会很高。",
    traits: [
      "对定义性表述和固定搭配较敏感",
      "能快速捕捉题目中的核心关键词",
      "适合通过标签化方式整理知识点"
    ],
    suggestions: [
      "将每章压缩为关键词清单，再延展到完整表述",
      "重点整理高频术语的标准说法和易错点",
      "避免只记关键词而忽视其内在逻辑"
    ],
    reviewMethods: [
      "制作高频术语卡片",
      "按关键词回忆完整表述",
      "用题目标签反向定位章节重点"
    ],
    accent: "from-[#a24a44] to-crimson"
  }
];

export const styleQuestions: StyleQuestion[] = [
  {
    id: "s1",
    prompt: "开始复习新一章时，你最自然的第一步通常是什么？",
    note: "选择最贴近你真实学习习惯的一项。",
    options: [
      { id: "a", text: "先看这一章所处的历史背景和发展阶段", profileId: "historical" },
      { id: "b", text: "先把本章标题、小节和核心概念整理成框架", profileId: "framework" },
      { id: "c", text: "先找这一章与现实政策或社会问题的对应点", profileId: "case" },
      { id: "d", text: "先圈出关键词和可能出现的高频表述", profileId: "keyword" }
    ]
  },
  {
    id: "s2",
    prompt: "遇到抽象概念时，哪种方式最能帮助你理解？",
    note: "尽量按理解效率而不是个人喜好来判断。",
    options: [
      { id: "a", text: "知道这个概念是在什么历史条件下提出的", profileId: "historical" },
      { id: "b", text: "把它放进更大的知识结构中定位", profileId: "framework" },
      { id: "c", text: "找到它解决过什么现实问题", profileId: "case" },
      { id: "d", text: "记住它的关键词和标准定义", profileId: "keyword" }
    ]
  },
  {
    id: "s3",
    prompt: "做题时你最先关注题干中的什么信息？",
    note: "这会影响你判断知识点的方式。",
    options: [
      { id: "a", text: "时间节点或阶段变化", profileId: "historical" },
      { id: "b", text: "概念之间的逻辑关系", profileId: "framework" },
      { id: "c", text: "现实语境或政策场景", profileId: "case" },
      { id: "d", text: "高频术语和关键字眼", profileId: "keyword" }
    ]
  },
  {
    id: "s4",
    prompt: "复盘错题时，你最希望得到哪类补充信息？",
    note: "这决定了你更依赖哪种反馈方式。",
    options: [
      { id: "a", text: "这一知识点在历史脉络中的位置", profileId: "historical" },
      { id: "b", text: "这一题对应的上位框架与下位概念", profileId: "framework" },
      { id: "c", text: "这一题对应的现实案例和应用背景", profileId: "case" },
      { id: "d", text: "这一题涉及的关键词和易混术语", profileId: "keyword" }
    ]
  },
  {
    id: "s5",
    prompt: "如果要给同学解释一章内容，你会优先怎么讲？",
    note: "想象你需要在较短时间内说清楚重点。",
    options: [
      { id: "a", text: "从时代背景讲起，再说明理论如何发展", profileId: "historical" },
      { id: "b", text: "先讲整体框架，再进入每个分论点", profileId: "framework" },
      { id: "c", text: "先从现实问题切入，再引出理论回答", profileId: "case" },
      { id: "d", text: "先给出一组核心关键词，再逐个展开", profileId: "keyword" }
    ]
  },
  {
    id: "s6",
    prompt: "你觉得最稳妥的记忆方式是什么？",
    note: "关注长期保持效果，而不是短时背诵。",
    options: [
      { id: "a", text: "把不同阶段的内容串成时间线", profileId: "historical" },
      { id: "b", text: "把知识点压缩成清晰的框架层级", profileId: "framework" },
      { id: "c", text: "把概念对应到真实案例与实践问题", profileId: "case" },
      { id: "d", text: "把高频表达反复归纳成术语清单", profileId: "keyword" }
    ]
  },
  {
    id: "s7",
    prompt: "面对内容较多的章节时，你最容易先做什么整理？",
    note: "选择你真正会动手去做的方式。",
    options: [
      { id: "a", text: "整理阶段演进和关键节点", profileId: "historical" },
      { id: "b", text: "整理章节树状结构和逻辑图", profileId: "framework" },
      { id: "c", text: "整理与现实议题相关的典型材料", profileId: "case" },
      { id: "d", text: "整理核心概念和关键词卡片", profileId: "keyword" }
    ]
  },
  {
    id: "s8",
    prompt: "当你觉得一章内容“学会了”时，通常意味着什么？",
    note: "这里反映的是你的判断标准。",
    options: [
      { id: "a", text: "我能说清它是如何一步步发展到现在的", profileId: "historical" },
      { id: "b", text: "我能画出这一章完整的结构关系", profileId: "framework" },
      { id: "c", text: "我能说明它在现实中解决什么问题", profileId: "case" },
      { id: "d", text: "我能准确说出核心术语和标准表述", profileId: "keyword" }
    ]
  },
  {
    id: "s9",
    prompt: "如果考试临近，你最愿意优先压缩哪类资料？",
    note: "请选择最符合冲刺阶段习惯的一项。",
    options: [
      { id: "a", text: "一页式时间线提纲", profileId: "historical" },
      { id: "b", text: "一页式框架总览图", profileId: "framework" },
      { id: "c", text: "一页式案例关联表", profileId: "case" },
      { id: "d", text: "一页式关键词速记表", profileId: "keyword" }
    ]
  },
  {
    id: "s10",
    prompt: "你最希望这个网站在学习上怎样帮助你？",
    note: "这是对你学习偏好的综合判断。",
    options: [
      { id: "a", text: "帮我理清历史逻辑和阶段关系", profileId: "historical" },
      { id: "b", text: "帮我建立稳定清楚的概念框架", profileId: "framework" },
      { id: "c", text: "帮我把理论和现实问题联系起来", profileId: "case" },
      { id: "d", text: "帮我快速定位重点术语和高频考点", profileId: "keyword" }
    ]
  }
];
