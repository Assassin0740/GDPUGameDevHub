/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-05
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-05",
    weekday: "星期六",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-05 09:15",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "💰 Take-Two 9.56亿美元收购赛车游戏巨头Codemasters，现金加股票交易敲定",
      "📊 游戏行业半年报：24家A股近七成盈利，上半年收入1884.5亿同比增12%",
      "📈 申万游戏指数单日成交233亿涨3.57%，板块PE跌至22.50估值分位仅12.55%",
      "🎨 Unity ShaderGraph 三大官方学习资源更新：入门教程/功能示例/系统课程",
      "🤖 NPC Sandbox开源：LLM驱动的实时2D RPG沙盒，NPC可改变世界推动剧情"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "WebGPU生产就绪·光追烘焙", badge: "最新功能版", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 支持至2027年12月", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "8月27日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁", badge: "UE5工业化", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "Verse语言", color: "pink" },
      { name: "Godot 4.4", type: "godot", status: "Star 13.7万·生态爆发", badge: "轻量开源", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-take-two-codemasters",
    category: "industry",
    categoryName: "行业热点 · 头条深度",
    tag: "🔥 行业并购",
    title: "Take-Two 9.56 亿美元收购 Codemasters：赛车游戏巨头敲定现金加股票交易",
    summary: "据Bloomberg报道，Take-Two Interactive已与英国游戏开发商Codemasters签署最终协议，以9.56亿美元现金加股票完成收购。此前Codemasters确认收到Take-Two约9.6亿美元非约束性报价，双方迅速达成确定性交易。Codemasters旗下拥有《尘埃》《F1》《GRID》等经典赛车IP，此次收购将大幅增强Take-Two在赛车游戏品类的布局，与EA的《极品飞车》形成直接竞争。",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&auto=format&fit=crop&q=80",
    source: "TEXXR / Bloomberg",
    date: "2026-09-04",
    url: "https://texxr.com/959854/take-two-acquires-codemasters-for-956m",
    readTime: "4 分钟深度",
    hotScore: 95,
    tags: ["Take-Two", "Codemasters", "并购", "赛车游戏", "F1", "尘埃"],
    content: [
      {
        title: "交易要点",
        type: "list",
        items: [
          "Take-Two以9.56亿美元现金加股票收购Codemasters；",
          "此前Codemasters确认收到约9.6亿美元非约束性报价；",
          "双方迅速签署确定性最终协议；",
          "Codemasters旗下拥有《尘埃》《F1》《GRID》等赛车IP；",
          "Take-Two赛车品类布局大幅增强，对标EA《极品飞车》。"
        ]
      },
      {
        title: "行业影响",
        type: "text",
        text: "此次收购是2026年游戏行业又一重磅并购，延续了大厂 consolidation 趋势。Codemasters作为英国老牌赛车游戏开发商，其F1官方授权游戏和尘埃系列在赛车品类拥有深厚积累。Take-Two此前在赛车领域仅有《NBA 2K》等体育游戏布局，收购Codemasters后将形成与EA Sports的直接竞争。对开发者而言，Codemasters的Ego引擎技术和赛车物理模拟经验可能被整合进Take-Two的技术体系。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 投融资 / 财报 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 电竞赛事 / 热门新作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "架构设计 / 图形渲染 / 性能优化指南" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / 大模型" }
  ],
  items: [
    // ------------------------- 引擎前沿 (Engine) -------------------------
    {
      id: "unity-shadergraph-get-started",
      category: "engine",
      subcategory: "Unity 渲染",
      title: "Unity ShaderGraph 官方入门教程：从零搭建第一个可视化着色器",
      summary: "Unity Learn官方发布ShaderGraph入门教程，手把手教你创建第一个Lit Shader Graph，涵盖Vector2输入节点、Remap节点、灰度图连接、Alpha透明设置等核心操作。教程通过溶解、发光等实际效果展示节点连接逻辑，适合零基础开发者入门可视化着色器编辑。",
      source: "Unity Learn",
      date: "2026-09-03",
      url: "https://learn.unity.com/tutorial/get-started-with-shader-graph",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "官方教程",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 84,
      tags: ["Unity", "ShaderGraph", "可视化着色器", "入门教程", "URP"],
      content: [
        {
          title: "教程要点",
          type: "list",
          items: [
            "创建第一个Lit Shader Graph；",
            "Vector2输入节点+Remap节点核心操作；",
            "灰度图连接Alpha实现透明效果；",
            "通过溶解、发光效果展示节点逻辑；",
            "适合零基础开发者入门。"
          ]
        }
      ]
    },
    {
      id: "unity-shadergraph-sample-features",
      category: "engine",
      subcategory: "Unity 渲染",
      title: "Unity ShaderGraph 功能示例官方文档：多管线兼容/粒子时间调试/条件分支",
      summary: "Unity官方文档更新ShaderGraph 14.1功能示例，涵盖DebugTime/ManualTime粒子时间调试滑块、基于渲染管线的条件分支（Built-in/URP/HDRP兼容）、自定义函数节点等高级特性。文档提供可直接复用的示例代码和节点配置，帮助开发者构建跨管线着色器。",
      source: "Unity 官方文档",
      date: "2026-04-29",
      url: "https://docs.unity.cn/cn/Packages-cn/com.unity.shadergraph@14.1/manual/Shader-Graph-Sample-Feature-Examples.html",
      image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=900&auto=format&fit=crop&q=80",
      badge: "官方文档",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["Unity", "ShaderGraph", "多管线兼容", "粒子调试", "条件分支"],
      content: [
        {
          title: "功能亮点",
          type: "list",
          items: [
            "DebugTime/ManualTime粒子时间调试滑块；",
            "基于渲染管线的条件分支（Built-in/URP/HDRP）；",
            "自定义函数节点高级特性；",
            "可直接复用的示例代码和节点配置；",
            "帮助构建跨管线兼容着色器。"
          ]
        }
      ]
    },
    {
      id: "unity-shadergraph-fundamentals",
      category: "engine",
      subcategory: "Unity 渲染",
      title: "Unity Academy 推出 ShaderGraph Fundamentals 系统课程：动态草地/体积光/动画着色器",
      summary: "Unity Academy上线ShaderGraph Fundamentals系统课程，从着色器基础（顶点/片段阶段、纹理贴图）出发，逐步讲解节点系统、Sub Graph、交互元素设计，最终实现动态草地、跑道灯光、体积光照等实战效果，并探索动画着色器的创意边界。",
      source: "Unity Academy",
      date: "2026-07-10",
      url: "https://academy.unity.com/courses/shader-graph-fundamentals",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=80",
      badge: "系统课程",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["Unity", "ShaderGraph", "系统课程", "动态草地", "体积光"],
      content: [
        {
          title: "课程结构",
          type: "list",
          items: [
            "着色器基础：顶点/片段阶段、纹理贴图；",
            "节点系统与Sub Graph复用；",
            "交互元素设计实战；",
            "动态草地、跑道灯光、体积光照效果；",
            "动画着色器创意边界探索。"
          ]
        }
      ]
    },
    {
      id: "ue5-hit-flash-dynamic-material",
      category: "engine",
      subcategory: "Unreal",
      title: "UE5 受击闪红效果教程：动态材质实例运行时变色的完整实现",
      summary: "ういやまラボ发布UE5 Hit Flash教程，详解如何通过动态材质实例（Dynamic Material Instance）在运行时改变物体颜色实现受击反馈。教程涵盖材质准备（OriginalColor/FlashAmount参数）、蓝图中Set Scalar Parameter Value调用、材质分配到Actor的完整流程，是动作游戏必备的反馈效果。",
      source: "ういやまラボ",
      date: "2026-07-20",
      url: "https://uhiyama-lab.com/en/notes/ue/material-instance-dynamic-effects/",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "UE教程",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["UE5", "动态材质", "受击反馈", "蓝图", "Material Instance"],
      content: [
        {
          title: "实现要点",
          type: "list",
          items: [
            "材质准备：OriginalColor/FlashAmount参数；",
            "蓝图Set Scalar Parameter Value调用；",
            "动态材质实例运行时变色；",
            "材质分配到Actor的完整流程；",
            "动作游戏受击反馈必备效果。"
          ]
        }
      ]
    },
    {
      id: "ue5-actor-blueprint-intro",
      category: "engine",
      subcategory: "Unreal",
      title: "UE5 零基础入门：Actor 基础与蓝图交互，鼠标点击触发材质变色",
      summary: "CSDN博主发布UE5零基础入门第二弹，详解Actor基础与蓝图交互：实现鼠标点击立方体随机切换材质颜色，打通「逻辑→材质」联动。教程涵盖Vector3参数创建、材质编辑器参数设置、蓝图点击事件处理、运行时动态修改材质颜色的完整链路。",
      source: "CSDN",
      date: "2026-04-12",
      url: "https://blog.csdn.net/mogreat/article/details/160089395",
      image: "https://aka.doubaocdn.com/s/kUC46GIZ1O",
      badge: "零基础入门",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["UE5", "Actor", "蓝图", "材质交互", "零基础"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "Actor基础概念与蓝图交互入门；",
            "鼠标点击立方体随机切换材质颜色；",
            "Vector3参数创建与材质编辑器设置；",
            "蓝图点击事件处理；",
            "运行时动态修改材质颜色完整链路。"
          ]
        }
      ]
    },
    {
      id: "ue-quickstart-roadmap",
      category: "engine",
      subcategory: "Unreal",
      title: "UE 最短上手路线：组件/输入/材质/UMG 四大核心模块速通指南",
      summary: "CSDN博主整理UE最短上手路线，覆盖四大核心模块：组件层级（StaticMesh/SkeletalMesh/Capsule/Camera/SpringArm）、输入系统（Project Settings配置Action/Axis+蓝图事件）、材质贴图光照（基础材质+实例化+Lumen开关）、UMG界面（Widget蓝图+Text+ProgressBar+Create Widget）。",
      source: "CSDN",
      date: "2026-08-12",
      url: "https://blog.csdn.net/commshare/article/details/151763449",
      image: "https://aka.doubaocdn.com/s/ufhSJUFwjh",
      badge: "速通指南",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["UE", "上手路线", "组件", "输入系统", "UMG"],
      content: [
        {
          title: "四大模块",
          type: "list",
          items: [
            "组件层级：StaticMesh/SkeletalMesh/Camera/SpringArm；",
            "输入系统：Action/Axis配置+蓝图事件处理；",
            "材质光照：基础材质+实例化+Lumen开关；",
            "UMG界面：Widget蓝图+Text+ProgressBar；",
            "BeginPlay中Create Widget添加到视口。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "gaming-h1-report-24-companies",
      category: "industry",
      subcategory: "财报",
      title: "游戏公司 2026 半年报：24 家 A 股近七成盈利，利润高度集中头部",
      summary: "36氪报道，根据iFinD数据，24家A股游戏概念公司上半年归母净利润合计约78.86亿元，其中17家盈利、7家亏损，利润高度集中在头部。腾讯Q2网络游戏收入659亿元同比增11%，网易上半年游戏收入507亿元同比增8%。爆款之后谁来接班成为行业核心议题。",
      source: "36氪 / iFinD",
      date: "2026-09-02",
      url: "https://36kr.com/p/3964909544611331",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=80",
      badge: "半年报",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 87,
      tags: ["半年报", "A股游戏", "腾讯", "网易", "利润集中"],
      content: [
        {
          title: "财报要点",
          type: "list",
          items: [
            "24家A股游戏公司上半年归母净利78.86亿；",
            "17家盈利、7家亏损，利润高度集中头部；",
            "腾讯Q2游戏收入659亿同比增11%；",
            "网易上半年游戏收入507亿同比增8%；",
            "爆款之后谁来接班成为核心议题。"
          ]
        }
      ]
    },
    {
      id: "gaming-industry-analysis-2026h1",
      category: "industry",
      subcategory: "市场分析",
      title: "大厂撤退、腰部分化：游戏不再是一门好生意了吗？上半年收入 1884.5 亿",
      summary: "第一财经深度分析游戏行业现状：根据中国音数协工委报告，2026年上半年国内游戏市场实际销售收入1884.5亿元同比增长超12%，用户规模6.84亿同比增0.82%。但腾讯独大、腰部分化明显，游戏行业从过去的'性感'赛道转向稳健增长，AI技术和出海成为新增长引擎。",
      source: "第一财经 / 今日头条",
      date: "2026-09-02",
      url: "http://m.toutiao.com/group/7680948735215436342/",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=900&auto=format&fit=crop&q=80",
      badge: "深度分析",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 86,
      tags: ["游戏行业", "市场分析", "1884.5亿", "腰部分化", "出海"],
      content: [
        {
          title: "分析要点",
          type: "list",
          items: [
            "上半年国内游戏收入1884.5亿同比增12%；",
            "用户规模6.84亿同比增0.82%；",
            "腾讯独大、腰部分化明显；",
            "行业从'性感'赛道转向稳健增长；",
            "AI技术和出海成为新增长引擎。"
          ]
        }
      ]
    },
    {
      id: "gaming-valuation-repair",
      category: "industry",
      subcategory: "资本市场",
      title: "游戏行业估值修复：PE 跌至 22.50，估值分位数仅 12.55%",
      summary: "新浪财经报道，截至2026年9月3日，申万二级游戏行业按市值加权PE(TTM)已跌至22.50，远低于历史峰值60倍和期间中枢33.47倍，估值分位数仅12.55%。'价格筑底+业绩支撑+AI赋能'三重共振下，游戏行业估值修复弹性正在提升，市场定价已十分保守。",
      source: "新浪财经 / WIND",
      date: "2026-09-04",
      url: "http://m.toutiao.com/group/7681523383263150634/",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=900&auto=format&fit=crop&q=80",
      badge: "估值分析",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["游戏行业", "估值修复", "PE 22.50", "AI赋能", "资本市场"],
      content: [
        {
          title: "估值数据",
          type: "list",
          items: [
            "PE(TTM)跌至22.50，远低于历史峰值60倍；",
            "估值分位数仅12.55%，市场定价保守；",
            "价格筑底+业绩支撑+AI赋能三重共振；",
            "估值修复弹性正在提升；",
            "期间估值中枢为33.47倍。"
          ]
        }
      ]
    },
    {
      id: "gaming-index-surge",
      category: "industry",
      subcategory: "资本市场",
      title: "申万游戏指数单日成交 233 亿上涨 3.57%，上半年净利增 65.68%",
      summary: "证券日报报道，申万二级游戏指数单日成交233亿元上涨3.57%。Wind数据显示2026年上半年游戏板块合计营收653.57亿元同比增20.03%，归母净利润133.40亿元同比增65.68%。吉比特等个股上半年归母净利润超10亿元，行业景气度上行在半年报中得到印证。",
      source: "证券日报 / Wind",
      date: "2026-09-04",
      url: "http://m.toutiao.com/group/7681654174790009394/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
      badge: "市场行情",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["游戏指数", "233亿", "净利增65%", "吉比特", "景气度"],
      content: [
        {
          title: "行情数据",
          type: "list",
          items: [
            "申万游戏指数单日成交233亿涨3.57%；",
            "上半年板块营收653.57亿同比增20%；",
            "归母净利133.40亿同比增65.68%；",
            "吉比特上半年归母净利超10亿；",
            "行业景气度在半年报中得到印证。"
          ]
        }
      ]
    },
    {
      id: "tencent-superplay-acquisition",
      category: "industry",
      subcategory: "并购",
      title: "腾讯拟 10-15 亿美元收购以色列 SuperPlay，史玉柱没办到的马化腾办到了",
      summary: "界面新闻报道，2026年7月腾讯正与以色列游戏公司Playtika谈判，拟收购旗下移动游戏工作室SuperPlay，交易估值10亿至15亿美元（约67-102亿元人民币）。这笔交易的耐人寻味之处在于标的的'前主人'Playtika——史玉柱曾试图收购Playtika但未能成功，腾讯此次出手被视为游戏出海布局的重要一步。",
      source: "界面新闻 / 新浪财经",
      date: "2026-07-28",
      url: "https://finance.sina.com.cn/jjxw/2026-07-28/doc-inikkhkc0328583.shtml.md",
      image: "https://aka.doubaocdn.com/s/oC7uFJZg0R",
      badge: "腾讯并购",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["腾讯", "SuperPlay", "Playtika", "以色列", "出海并购"],
      content: [
        {
          title: "交易背景",
          type: "list",
          items: [
            "腾讯拟10-15亿美元收购SuperPlay；",
            "标的为Playtika旗下移动游戏工作室；",
            "史玉柱曾试图收购Playtika但未成功；",
            "交易估值约67-102亿元人民币；",
            "腾讯游戏出海布局的重要一步。"
          ]
        }
      ]
    },
    {
      id: "gaming-overseas-systematic",
      category: "industry",
      subcategory: "出海",
      title: "游戏出海早已不赌爆款：2026 年海外赛道进入体系化竞争时代",
      summary: "深度复盘中国游戏出海现状：早年靠风口赌爆款，2026年海外赛道彻底进入体系化竞争。核心包括科学立项（不是你想做什么而是你能做什么）、精准发行（破解流量涨价内卷困境）、SLG实测方法论（3个月验证周期）、数据驱动决策，全是真金白银砸出来的实战经验。",
      source: "抖音 / 游戏出海实战",
      date: "2026-09-03",
      url: "https://www.iesdouyin.com/share/video/7681226409146125614",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop&q=80",
      badge: "出海复盘",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["游戏出海", "体系化竞争", "SLG", "科学立项", "数据驱动"],
      content: [
        {
          title: "体系化要点",
          type: "list",
          items: [
            "从赌爆款转向体系化竞争；",
            "科学立项：你能做什么而非想做什么；",
            "精准发行破解流量涨价内卷；",
            "SLG实测方法论3个月验证周期；",
            "数据驱动决策，全是实战经验。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "valorant-shanghai-masters",
      category: "games",
      subcategory: "电竞赛事",
      title: "无畏契约上海大师赛售票开启：16 支全球顶尖队伍争夺年度总冠军",
      summary: "澎湃新闻报道，无畏契约上海大师赛售票正式开启，万事达卡优先购票8月30日开启，公开售票9月2日在大麦网开启。票价198元至1208元分工作日与周末两档，实行实名制购票不可转让不可转售，入场须人脸识别。16支全球顶尖队伍将在上海争夺年度总冠军。",
      source: "澎湃新闻 / 无畏契约官方",
      date: "2026-09-05",
      url: "https://m.thepaper.cn/newsDetail_forward_34001085",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&auto=format&fit=crop&q=80",
      badge: "电竞赛事",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["无畏契约", "上海大师赛", "电竞", "售票", "16支队伍"],
      content: [
        {
          title: "赛事信息",
          type: "list",
          items: [
            "上海大师赛售票9月2日大麦网开启；",
            "票价198-1208元分工作日/周末两档；",
            "实名制购票不可转让，入场人脸识别；",
            "16支全球顶尖队伍争夺年度总冠军；",
            "万事达卡优先购票通道已开启。"
          ]
        }
      ]
    },
    {
      id: "fantasy-new-zhuxian-light",
      category: "games",
      subcategory: "手游上线",
      title: "《梦幻新诛仙》轻享版 9/3 上线：赛季制回合仙侠三端互通，永久 69 级",
      summary: "《梦幻新诛仙》轻享版于9月3日正式上线，是一款赛季制回合仙侠三端游戏，支持横竖屏自由切换。核心设定永久69级，赛季制优化养成拒绝等级内卷追赶，支持有限的点对点银锭赠送功能。画面表现力和建模属上乘，适合回合制爱好者。",
      source: "抖音 / 新游盘点",
      date: "2026-09-03",
      url: "https://www.iesdouyin.com/share/video/7681216107612556594",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=900&auto=format&fit=crop&q=80",
      badge: "新游上线",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["梦幻新诛仙", "回合制", "仙侠", "赛季制", "三端互通"],
      content: [
        {
          title: "游戏特色",
          type: "list",
          items: [
            "9月3日上线，赛季制回合仙侠三端游戏；",
            "横竖屏自由切换；",
            "核心设定永久69级，拒绝等级内卷；",
            "赛季制优化养成；",
            "支持有限点对点银锭赠送。"
          ]
        }
      ]
    },
    {
      id: "global-gaming-market-2026",
      category: "games",
      subcategory: "市场报告",
      title: "全球游戏行业 2026 年预计突破 2800 亿美元，移动端占 62%",
      summary: "产业世界发布全球游戏行业深度分析报告，2026年全球游戏市场进入新一轮增长周期，预计全年市场规模突破2800亿美元同比增长7.3%。移动端仍为最大贡献板块占全球总收入62%，主机与PC端分别占据剩余份额。AI技术和跨平台发展成为主要增长驱动力。",
      source: "产业世界",
      date: "2026-05-31",
      url: "https://www.inwwin.com.cn/1192/view-1119173-1.html",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&auto=format&fit=crop&q=80",
      badge: "市场报告",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["全球游戏", "2800亿美元", "移动端62%", "市场报告", "AI驱动"],
      content: [
        {
          title: "报告数据",
          type: "list",
          items: [
            "2026年全球游戏市场预计突破2800亿美元；",
            "同比增长7.3%，新一轮增长周期；",
            "移动端占总收入62%为最大板块；",
            "主机与PC端分占剩余份额；",
            "AI技术和跨平台发展为主要驱动力。"
          ]
        }
      ]
    },
    {
      id: "gaming-boom-record-revenue",
      category: "games",
      subcategory: "行业趋势",
      title: "爆款撬动游戏行业收入破纪录，AI+版号稳定支撑 2026 景气度延续",
      summary: "证券时报分析，国内游戏市场实际销售收入和用户规模均创历史新高，爆款频出、头部长青游戏稳健、新产品多点开花。在爆款继续放量、AI技术进一步成熟、游戏版号稳定发放的大背景下，2026年游戏产业在政策、技术、产品层面均有望延续良好态势。",
      source: "证券时报",
      date: "2026-02-09",
      url: "https://www.stcn.com/article/detail/3634491.html",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80",
      badge: "趋势分析",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["游戏行业", "收入破纪录", "AI技术", "版号", "景气度"],
      content: [
        {
          title: "趋势要点",
          type: "list",
          items: [
            "销售收入和用户规模创历史新高；",
            "爆款频出+头部长青+新品多点开花；",
            "AI技术进一步成熟；",
            "游戏版号稳定发放；",
            "政策/技术/产品三重支撑景气度延续。"
          ]
        }
      ]
    },
    {
      id: "silent-hill-townfall-preview",
      category: "games",
      subcategory: "即将发售",
      title: "《寂静岭：小镇陷落》9 月 24 日发售，科乐美给予 Screen Burn 充分创作自由",
      summary: "《寂静岭：小镇陷落》将于2026年9月24日登陆PS5、PC（Steam）、Xbox Series X|S平台。开发商Screen Burn获得科乐美几乎'放手去做'的创作自由，游戏设定在苏格兰小镇，采用系列标志性的心理恐怖风格，是寂静岭系列重启后的重要作品。",
      source: "九游 / 科乐美",
      date: "2026-08-02",
      url: "https://a.9game.cn/jijingling/gonglue-34-1/",
      image: "https://aka.doubaocdn.com/s/2dfW9gFW8q",
      badge: "即将发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["寂静岭", "小镇陷落", "心理恐怖", "科乐美", "9月24日"],
      content: [
        {
          title: "游戏信息",
          type: "list",
          items: [
            "9月24日登陆PS5/PC/Xbox Series；",
            "开发商Screen Burn获科乐美充分创作自由；",
            "设定在苏格兰小镇；",
            "系列标志性心理恐怖风格；",
            "寂静岭系列重启后重要作品。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-npc-sandbox-llm",
      category: "opensource",
      subcategory: "AI NPC",
      title: "NPC Sandbox：LLM 驱动的实时 2D RPG 沙盒，NPC 可改变世界推动剧情",
      summary: "Trainerx7979/LlmSandbox是一个LLM驱动的实时2D RPG沙盒，程序化命名的NPC在其中生活、移动、行动和记忆，每个决策都由实时LLM调用返回结构化JSON驱动。与传统AI NPC只能交互不同，这里的NPC可以真正改变世界、驱动完整故事线，9月5日仍有活跃更新。",
      source: "GitHub",
      date: "2026-09-05",
      url: "https://github.com/Trainerx7979/LlmSandbox",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&auto=format&fit=crop&q=80",
      badge: "AI沙盒",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["NPC Sandbox", "LLM", "2D RPG", "实时模拟", "剧情驱动"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "LLM驱动的实时2D RPG沙盒；",
            "NPC生活/移动/行动/记忆全AI驱动；",
            "每个决策由实时LLM调用返回结构化JSON；",
            "NPC可真正改变世界、驱动完整故事线；",
            "突破传统AI NPC只能交互的限制。"
          ]
        }
      ]
    },
    {
      id: "repo-llm-npc-agents",
      category: "opensource",
      subcategory: "AI NPC",
      title: "LLM-NPC-Agents：上下文感知 AI 游戏角色框架，实时语音+叙事控制",
      summary: "lschiweck/LLM-NPC-Agents是一个上下文感知的AI游戏角色框架，支持实时语音合成、AI驱动的叙事控制、WebSocket通信、Unity集成、VR适配。基于FastAPI+Ollama技术栈，Python实现，为游戏开发者提供可落地的AI NPC解决方案，6月29日仍有更新。",
      source: "GitHub",
      date: "2026-06-29",
      url: "https://github.com/lschiweck/LLM-NPC-Agents",
      badge: "AI框架",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["LLM-NPC", "上下文感知", "实时语音", "Unity", "FastAPI"],
      content: [
        {
          title: "框架能力",
          type: "list",
          items: [
            "上下文感知AI游戏角色框架；",
            "实时语音合成+AI驱动叙事控制；",
            "WebSocket通信+Unity集成+VR适配；",
            "FastAPI+Ollama技术栈，Python实现；",
            "可落地的AI NPC解决方案。"
          ]
        }
      ]
    },
    {
      id: "repo-openspeedy",
      category: "opensource",
      subcategory: "游戏工具",
      title: "OpenSpeedy：开源游戏速度修改器，Rust+Tauri 构建跨平台加速工具",
      summary: "game1024/OpenSpeedy是一个开源游戏速度修改器，使用Rust+Tauri构建，支持Windows平台，可修改游戏运行速度实现加速/减速效果。作为PC游戏修改工具，它提供轻量级的速度调控能力，代码完全开源可审计，8月9日仍有更新。",
      source: "GitHub",
      date: "2026-08-09",
      url: "https://github.com/game1024/OpenSpeedy",
      badge: "游戏工具",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["OpenSpeedy", "游戏修改器", "Rust", "Tauri", "速度调控"],
      content: [
        {
          title: "工具特点",
          type: "list",
          items: [
            "开源游戏速度修改器；",
            "Rust+Tauri构建跨平台；",
            "支持Windows平台游戏加速/减速；",
            "轻量级速度调控；",
            "代码完全开源可审计。"
          ]
        }
      ]
    },
    {
      id: "repo-dear-imgui",
      category: "opensource",
      subcategory: "GUI 工具",
      title: "Dear ImGui：C++ 无依赖即时模式 GUI 库，游戏开发调试必备工具",
      summary: "ocornut/imgui是游戏开发领域最流行的即时模式GUI库，以零依赖、极简API、高性能著称，广泛用于游戏内调试面板、工具编辑器、性能分析器等。支持多种渲染后端（DirectX/OpenGL/Vulkan/Metal），是UE/Unity等引擎内部工具和独立游戏开发的标配组件。",
      source: "GitHub",
      date: "2026-09-02",
      url: "https://github.com/ocornut/imgui",
      badge: "GUI库",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["Dear ImGui", "即时模式GUI", "C++", "调试工具", "游戏开发"],
      content: [
        {
          title: "库特点",
          type: "list",
          items: [
            "游戏开发最流行的即时模式GUI库；",
            "零依赖、极简API、高性能；",
            "广泛用于调试面板、工具编辑器、性能分析器；",
            "支持DirectX/OpenGL/Vulkan/Metal后端；",
            "UE/Unity内部工具和独立游戏标配。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-gamedev-complete-guide",
      category: "tutorials",
      subcategory: "综合指南",
      title: "游戏开发完整指南：常用技术/制作流程/岗位分工/学习路线全收录",
      summary: "GitCode发布游戏开发完整指南，涵盖常用技术（Bloom/Motion Blur/DOF/Color Grading/SSR/AO等后处理效果）、渲染性能优化（Draw Call合批/LOD/图集）、制作流程、岗位分工与学习路线。是游戏开发入门到进阶的系统性参考资料。",
      source: "GitCode / AtomGit",
      date: "2026-06-08",
      url: "https://gitcode.csdn.net/6a263dac662f9a54cb7b33f7.html",
      badge: "完整指南",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 82,
      tags: ["游戏开发", "完整指南", "后处理", "性能优化", "学习路线"],
      content: [
        {
          title: "指南内容",
          type: "list",
          items: [
            "后处理效果：Bloom/Motion Blur/DOF/SSR/AO；",
            "渲染优化：Draw Call合批/LOD/图集；",
            "游戏制作完整流程；",
            "岗位分工与职责说明；",
            "从入门到进阶的学习路线。"
          ]
        }
      ]
    },
    {
      id: "tut-shadergraph-nontechnical",
      category: "tutorials",
      subcategory: "Unity 渲染",
      title: "非技术人员也能懂的 ShaderGraph：unity-shadergraph-sandbox 可视化编程入门",
      summary: "CSDN博主推荐unity-shadergraph-sandbox项目，专为非技术人员设计的ShaderGraph可视化编程入门。项目包含溶解、火焰、全息投影、像素化、卡通渲染、旗帜飘动等6个示例效果，每个示例可通过滑块实时调整参数，双击ShaderGraph文件即可打开编辑器学习节点连接。",
      source: "CSDN",
      date: "2026-08-09",
      url: "https://blog.csdn.net/gitblog_01051/article/details/155653344",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "可视化入门",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["ShaderGraph", "非技术入门", "可视化编程", "溶解效果", "sandbox"],
      content: [
        {
          title: "示例效果",
          type: "list",
          items: [
            "Dissolve溶解效果；",
            "Fire火焰动画效果；",
            "Hologram全息投影效果；",
            "Pixelate像素化+Toon卡通渲染；",
            "Flag旗帜飘动效果，滑块实时调参。"
          ]
        }
      ]
    },
    {
      id: "tut-blender-ue5-pirate-chest",
      category: "tutorials",
      subcategory: "UE 资产",
      title: "Blender 到 UE5：风格化交互宝箱完整教程，蓝图开关状态+玩家 proximity 检测",
      summary: "CG Persia发布Blender到UE5风格化交互宝箱教程，涵盖从Blender建模到UE5蓝图交互的完整流程。教程讲解如何设置开关网格为可切换状态、检测玩家接近、接受输入、用Boolean变量追踪状态、通过蓝图时间线驱动开合过渡动画，是资产到玩法的典型实战案例。",
      source: "CG Persia / Udemy",
      date: "2026-08-27",
      url: "https://cgpersia.com/2026/08/udemy-blender-to-ue5-stylized-interactive-pirate-chest-204770.html",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "资产到玩法",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["Blender", "UE5", "交互宝箱", "蓝图", "风格化资产"],
      content: [
        {
          title: "教程要点",
          type: "list",
          items: [
            "Blender建模到UE5蓝图交互完整流程；",
            "开关网格可切换状态设置；",
            "玩家proximity检测+输入接受；",
            "Boolean变量追踪当前状态；",
            "蓝图时间线驱动开合过渡动画。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "ai-perfxcloud-npc-dialogue",
      category: "ai",
      subcategory: "AI NPC",
      title: "PerfXCloud 智能 NPC 对话游戏实现：基于大模型的可自定义地图与角色",
      summary: "CSDN博主详解如何使用PerfXCloud实现智能NPC对话游戏，基于大型语言模型搭建游戏智能对话机器人，可根据需求自定义地图信息和NPC性格、动作及对话。项目基于ChatGPT_Agent开发，展示了从大模型调用到游戏集成的完整技术路径，适合AI游戏原型快速验证。",
      source: "CSDN",
      date: "2026-09-02",
      url: "https://blog.csdn.net/Jc_shudaixiong/article/details/140148321",
      badge: "AI NPC实战",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["PerfXCloud", "智能NPC", "大模型", "对话游戏", "自定义角色"],
      content: [
        {
          title: "实现要点",
          type: "list",
          items: [
            "基于大模型搭建游戏智能对话机器人；",
            "可自定义地图信息和NPC性格/动作/对话；",
            "基于ChatGPT_Agent开发；",
            "从大模型调用到游戏集成完整路径；",
            "适合AI游戏原型快速验证。"
          ]
        }
      ]
    },
    {
      id: "ai-ollama-local-integration",
      category: "ai",
      subcategory: "本地 AI",
      title: "零代码实现游戏 NPC 智能对话：Ollama 本地化 AI 集成 30 分钟指南",
      summary: "CSDN博主发布Ollama本地化AI集成指南，展示如何在30分钟内为游戏添加类ChatGPT智能对话功能，无需深厚AI知识，全程本地化部署保护玩家隐私。指南涵盖Ollama安装、模型选择、API调用、游戏端集成等步骤，是中小团队低成本接入AI对话的实用方案。",
      source: "CSDN",
      date: "2026-08-13",
      url: "https://blog.csdn.net/gitblog_00993/article/details/151809912",
      badge: "本地AI",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["Ollama", "本地AI", "NPC对话", "零代码", "隐私保护"],
      content: [
        {
          title: "集成步骤",
          type: "list",
          items: [
            "30分钟为游戏添加智能对话功能；",
            "Ollama安装与模型选择；",
            "API调用与游戏端集成；",
            "全程本地化部署保护玩家隐私；",
            "中小团队低成本接入AI对话方案。"
          ]
        }
      ]
    },
    {
      id: "ai-unsloth-llm-finetune",
      category: "ai",
      subcategory: "大模型",
      title: "Unsloth 开源 LLM 微调工具：Qwen3.8/GLM-5.3 启用 MTP，推理最高快两倍",
      summary: "AI开源热榜9月3日更新，Unsloth为Qwen3.8和GLM-5.3启用MTP（Multi-Token Prediction）支持，推理速度最高提升两倍。Unsloth是流行的LLM微调开源框架，支持单GPU微调大模型，内存优化显著，是游戏AI开发者定制垂直领域模型的重要工具。",
      source: "GitHub / AI开源热榜",
      date: "2026-09-03",
      url: "https://github.com/unslothai/unsloth",
      badge: "LLM微调",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["Unsloth", "LLM微调", "MTP", "Qwen3.8", "推理加速"],
      content: [
        {
          title: "工具特点",
          type: "list",
          items: [
            "为Qwen3.8/GLM-5.3启用MTP支持；",
            "推理速度最高提升两倍；",
            "单GPU微调大模型，内存优化显著；",
            "游戏AI定制垂直领域模型的重要工具；",
            "开源免费，社区活跃。"
          ]
        }
      ]
    },
    {
      id: "ai-yhengine-3-open-source",
      category: "ai",
      subcategory: "游戏 AI 引擎",
      title: "YHEngine 3.0 游戏 AI 引擎开源：1.2 万亿参数，Apache 2.0 协议全量开放",
      summary: "九游会发布新一代游戏AI引擎YHEngine 3.0，参数规模达1.2万亿，能够理解不同游戏类型的规则和逻辑，从RTS到MMORPG均能无缝适配。引擎采用Apache 2.0协议开源，模型权重、推理代码及部分训练工具均可在官方GitHub获取，在游戏AI领域引发震动。",
      source: "NGA / 九游会",
      date: "2026-08-28",
      url: "https://bbs.nga.cn/tongchuan/rlig/feed/ltgMfORH.htm",
      badge: "AI引擎开源",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["YHEngine", "游戏AI", "1.2万亿参数", "Apache 2.0", "开源"],
      content: [
        {
          title: "引擎能力",
          type: "list",
          items: [
            "1.2万亿参数游戏AI引擎；",
            "理解RTS到MMORPG各类游戏规则；",
            "Apache 2.0协议全量开源；",
            "模型权重+推理代码+部分训练工具开放；",
            "游戏AI领域重大开源事件。"
          ]
        }
      ]
    },
{
      id: "repo-unity-shadergraph-canvas-overlay",
      category: "opensource",
      subcategory: "Unity 工具",
      title: "Unity-Shader-Graph-With-Canvas-Overlay：ShaderGraph 与 Canvas 叠加渲染开源方案",
      summary: "Nichathan-Gaming开源项目，展示如何在Unity中实现ShaderGraph与Canvas Overlay叠加渲染，涵盖透明材质设置、Alpha值获取、Multiply节点连接、Graph Inspector中Surface Type切换为Transparent等关键步骤，8月30日仍有更新。",
      source: "GitHub",
      date: "2026-08-30",
      url: "https://github.com/Nichathan-Gaming/Unity-Shader-Graph-With-Canvas-Overlay",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "Unity工具",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["Unity", "ShaderGraph", "Canvas Overlay", "透明渲染", "开源"],
      content: [
        { title: "实现要点", type: "list", items: ["ShaderGraph与Canvas Overlay叠加渲染", "透明材质设置与Alpha值获取", "Multiply节点连接Base Color", "Surface Type切换为Transparent", "Blending Mode自动设为Alpha"] }
      ]
    },
    {
      id: "ai-genshin-character-instruction",
      category: "ai",
      subcategory: "AI 角色",
      title: "Genshin-Impact-Character-Instruction：原神角色指令微调模型，LoRA 训练游戏角色对话",
      summary: "svjack开源项目，基于LoRA微调的原神角色指令模型，通过大语言模型微调实现游戏角色风格化对话生成。展示如何用角色对话数据微调LLM使AI输出符合特定角色人设和语气，是游戏AI角色个性化的实用参考方案。",
      source: "GitHub",
      date: "2026-06-29",
      url: "https://github.com/svjack/Genshin-Impact-Character-Instruction",
      badge: "角色微调",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["原神", "LoRA微调", "角色对话", "LLM", "AI角色"],
      content: [
        { title: "项目特点", type: "list", items: ["基于LoRA微调的原神角色指令模型", "大语言模型微调实现角色风格化对话", "用角色对话数据训练特定人设和语气", "游戏AI角色个性化实用参考", "开源可复现的训练方案"] }
      ]
    }
  ]
};
