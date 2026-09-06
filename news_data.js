/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-06
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-06",
    weekday: "星期日",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-06 08:25",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "💰 VAST完成约30亿元B轮/B+轮融资，同步发布Tripo P2.0原生四边面3D模型，半个游戏圈入局",
      "📋 8月215款游戏版号获批创年内新高，年内累计发放1362款，三七/恺英/腾讯在列",
      "🎮 9月游戏秋季攻势开幕：漫威金刚狼9/15、寂静岭Townfall 9/24、巫师3重制版9/29",
      "🔧 三大引擎2026选型指南集中更新：Unity 6.5/UE 5.8.2/Godot 4.7.2格局解析",
      "🤖 GPT-6 Astra内测实测：一个提示词生成10v10光环风格FPS，浏览器直接可玩"
    ],
    engineStatus: [
      { name: "Unity 6.5", type: "unity", status: "最新功能版·WebGPU生产就绪", badge: "最新版", color: "indigo" },
      { name: "Unity 6.3 LTS", type: "unity", status: "官方 LTS 支持至2027年12月", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "全局动态实时光照支持移动端", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁·MetaHuman升级", badge: "UE5工业化", color: "purple" },
      { name: "Godot 4.7.2", type: "godot", status: "最新稳定版·Star 13.7万", badge: "轻量开源", color: "emerald" },
      { name: "Godot 4.8", type: "godot", status: "开发预览·3D拖尾+多重反弹AO", badge: "开发中", color: "pink" }
    ]
  },
  hero: {
    id: "hero-vast-tripo-p2",
    category: "industry",
    categoryName: "行业热点 · 头条深度",
    tag: "🔥 融资+技术发布",
    title: "VAST 完成约 30 亿元 B 轮/B+ 轮融资，同步发布 Tripo P2.0 原生四边面 3D 模型",
    summary: "Tripo AI母公司VAST宣布完成B轮及B+轮融资合计约30亿元，由经纬创投领投，完美世界、三七互娱、蓝色光标、延趣游戏等半个游戏圈参投。不到半年累计融资约50亿元，刷新3D原生智能领域融资纪录。同步发布旗舰3D原生基座模型Tripo P2.0，是全球首个支持原生四边面拓扑网格的3D生成模型，已为网易《蛋仔派对》《燕云十六声》提供技术支持。",
    image: "https://aka.doubaocdn.com/s/b6bwxj9xD8",
    source: "新浪财经 / 36氪 / GameLook",
    date: "2026-09-01",
    url: "https://finance.sina.com.cn/stock/relnews/cn/2026-09-01/doc-iniqixxs8249027.shtml",
    readTime: "4 分钟深度",
    hotScore: 96,
    tags: ["VAST", "Tripo P2.0", "30亿融资", "AI 3D生成", "四边面拓扑", "游戏圈参投"],
    content: [
      {
        title: "融资与技术要点",
        type: "list",
        items: [
          "B轮+B+轮合计约30亿元，经纬创投领投；",
          "完美世界/三七互娱/蓝色光标/延趣游戏等参投；",
          "不到半年累计融资约50亿元，刷新3D原生智能纪录；",
          "同步发布Tripo P2.0，全球首个原生四边面拓扑网格3D模型；",
          "已为网易《蛋仔派对》《燕云十六声》提供3D技术支持。"
        ]
      },
      {
        title: "行业影响",
        type: "text",
        text: "VAST此次融资标志着AI 3D生成从概念验证进入工业化落地阶段。Tripo P2.0的原生四边面拓扑网格解决了传统AI生成3D模型三角面过多、难以直接进入生产管线的痛点，使生成模型可直接用于游戏资产制作流程。半个游戏圈参投表明大厂对AI 3D资产生成的战略重视，预计将加速游戏开发中3D资产生产效率的提升，对中小团队降低美术成本意义重大。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 投融资 / 财报 / 版号 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 发售日历 / 热门新作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "DOTS / 性能优化 / 架构设计 / 渲染指南" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / 大模型" }
  ],
  items: [
    // ------------------------- 引擎前沿 (Engine) -------------------------
    {
      id: "engine-selection-guide-2026",
      category: "engine",
      subcategory: "引擎对比",
      title: "三大引擎 2026 零基础选型指南：Unity 6.5 / UE 5.8.2 / Godot 4.7.2 格局解析",
      summary: "CSDN博主发布2026年三大游戏引擎零基础选型指南，Unity当前有6.5 Update且6.3 LTS为最新长期支持版支持至2027年12月；Unreal公开版本线为UE 5.8并已发布5.8.2热修复；Godot最新稳定版为4.7.2，4.8仍在开发预览。文章从学习曲线、渲染能力、授权模式三个维度给出选型建议。",
      source: "CSDN",
      date: "2026-09-05",
      url: "https://blog.csdn.net/2401_85555433/article/details/164269282",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&auto=format&fit=crop&q=80",
      badge: "选型指南",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["Unity", "UE5", "Godot", "引擎对比", "2026选型"],
      content: [
        {
          title: "版本现状",
          type: "list",
          items: [
            "Unity 6.5 Update + 6.3 LTS支持至2027年12月；",
            "UE 5.8公开版本线，5.8.2热修复已发布；",
            "Godot 4.7.2最新稳定版，4.8开发预览中；",
            "从学习曲线/渲染能力/授权模式三维度选型；",
            "零基础开发者推荐Unity入门。"
          ]
        }
      ]
    },
    {
      id: "engine-ultimate-comparison",
      category: "engine",
      subcategory: "引擎对比",
      title: "三大游戏引擎终极对比：渲染能力/学习成本/授权模式一文说透",
      summary: "什么值得买发布三大引擎深度对比，Epic的MegaGrants计划为符合条件的开发者提供资助，但虚幻引擎中文资源相对较少，中小团队踩坑成本较高。Godot社区爆发式增长，GitHub Star突破13.7万，六年间Steam上线游戏从56款暴涨至1229款，itch.io累计作品超3.65万款。",
      source: "什么值得买",
      date: "2026-09-03",
      url: "https://post.m.smzdm.com/p/a6zq8mqo/",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "深度对比",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["引擎对比", "渲染能力", "Godot爆发", "MegaGrants", "授权模式"],
      content: [
        {
          title: "对比要点",
          type: "list",
          items: [
            "Epic MegaGrants为开发者提供资助；",
            "UE中文资源较少，中小团队踩坑成本高；",
            "Godot GitHub Star突破13.7万；",
            "Steam Godot游戏6年从56款增至1229款；",
            "itch.io累计Godot作品超3.65万款。"
          ]
        }
      ]
    },
    {
      id: "godot-future-outlook",
      category: "engine",
      subcategory: "Godot",
      title: "Godot 未来展望：2024-2026 技术里程碑与引擎发展趋势预测",
      summary: "CSDN博主发布Godot未来展望深度文章，梳理2024-2026技术里程碑，包含save_migration_report等新API、GDScript演进、渲染器重构路线。文章对比Godot与Unity/Unreal的竞争优势：完全免费vs收入分成vs5%分成，完全开源vs部分开源vs源码可用，成本优势和透明度明显。",
      source: "CSDN",
      date: "2026-09-05",
      url: "https://blog.csdn.net/gitblog_00062/article/details/151102981",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "Godot展望",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["Godot", "未来展望", "技术里程碑", "GDScript", "开源优势"],
      content: [
        {
          title: "发展趋势",
          type: "list",
          items: [
            "2024-2026技术里程碑梳理；",
            "save_migration_report等新API引入；",
            "GDScript持续演进；",
            "渲染器重构路线图；",
            "完全免费+完全开源的竞争优势。"
          ]
        }
      ]
    },
    {
      id: "android-xr-engine-updates",
      category: "engine",
      subcategory: "XR/VR",
      title: "Android XR 更新：Unity / Unreal / Godot 三大引擎 OpenXR 支持全面扩展",
      summary: "Android Developers官方博客发布Android XR更新，通过OpenXR标准承诺确保无论大型工作室还是独立开发者都能获得最佳工具。Unreal Engine支持现已进入开发者预览，目标版本5.6.1，基于OpenXR构建并支持AndroidXR厂商特定API。Direct Preview功能可快速预览XR内容。",
      source: "Android Developers",
      date: "2026-08-26",
      url: "https://developer.android.google.cn/blog/posts/android-xr-updates-for-unity-unreal-and-godot",
      badge: "XR官方",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["Android XR", "OpenXR", "Unity", "Unreal", "Godot"],
      content: [
        {
          title: "更新要点",
          type: "list",
          items: [
            "通过OpenXR标准统一三大引擎支持；",
            "UE支持进入开发者预览，目标5.6.1；",
            "基于OpenXR+AndroidXR厂商特定API；",
            "Direct Preview快速预览XR内容；",
            "大型工作室和独立开发者均受益。"
          ]
        }
      ]
    },
    {
      id: "godot-rise-segmentfault",
      category: "engine",
      subcategory: "Godot",
      title: "开源游戏引擎 Godot 正在悄然崛起：4.7.2 稳定版与 4.8 开发预览双线推进",
      summary: "SegmentFault发布Godot崛起分析文章，目前最新稳定版是4.7.2，同时维护3.6.3长期支持分支。4.8版本已进入开发测试阶段，将带来3D拖尾特效节点、多重反弹环境光遮蔽等新能力。文章认为Godot是没有商业包袱又足够灵活的游戏引擎，值得认真评估。",
      source: "SegmentFault 思否",
      date: "2026-09-03",
      url: "https://segmentfault.com/a/1190000048264092",
      image: "https://aka.doubaocdn.com/s/pyDIg3Vstm",
      badge: "Godot崛起",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["Godot", "4.7.2", "4.8预览", "3D拖尾", "开源引擎"],
      content: [
        {
          title: "版本动态",
          type: "list",
          items: [
            "4.7.2为最新稳定版；",
            "3.6.3长期支持分支同步维护；",
            "4.8进入开发测试阶段；",
            "新增3D拖尾特效节点；",
            "多重反弹环境光遮蔽等新能力。"
          ]
        }
      ]
    },
    {
      id: "unity-ue-godot-2026-devto",
      category: "engine",
      subcategory: "引擎对比",
      title: "Unity vs Unreal vs Godot (2026)：语言/授权/平台/渲染管线全面对比",
      summary: "DEV Community发布2026年三大引擎对比，Unreal使用C++和蓝图，当前版本5.5，授权为收入100万美元以下免费、超出部分5%分成，支持全平台。其渲染管线是实时视觉质量行业标杆，Nanite虚拟化几何体和Lumen全局光照领先。Unity使用C#，Godot使用GDScript且完全免费开源。",
      source: "DEV Community",
      date: "2026-08-29",
      url: "https://dev.to/oceanviewgames/which-game-engine-should-you-use-unity-vs-unreal-vs-godot-2026-4ndj",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=80",
      badge: "英文对比",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 78,
      tags: ["Unity", "Unreal", "Godot", "Nanite", "Lumen"],
      content: [
        {
          title: "对比维度",
          type: "list",
          items: [
            "Unreal: C++/蓝图，5.5版，5%分成；",
            "Unity: C#，分层定价+运行时费用；",
            "Godot: GDScript，完全免费开源；",
            "UE渲染管线为实时视觉质量标杆；",
            "Nanite+Lumen领先其他引擎。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "tencent-revenue-half-industry",
      category: "industry",
      subcategory: "市场分析",
      title: "腾讯游戏收入接近行业一半，头部集中加剧：上半年腾讯游戏收入约 1301 亿元",
      summary: "新浪财经分析，上半年腾讯单家厂商游戏收入已接近游戏行业国内外销售收入总和的一半，加上网易两家合计占比接近七成。行业大盘增长属于结构性增长，中长尾产品并未普惠，增量高度集中于少数长青产品与平台级新品。今年上半年腾讯游戏收入合计约1301亿元同比增长约10%。",
      source: "新浪财经",
      date: "2026-09-02",
      url: "https://finance.sina.com.cn/wm/2026-09-02/doc-iniqmfsw4612575.shtml.md",
      badge: "市场分析",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 84,
      tags: ["腾讯", "网易", "头部集中", "1301亿", "结构性增长"],
      content: [
        {
          title: "数据要点",
          type: "list",
          items: [
            "腾讯游戏收入接近行业国内外总和一半；",
            "腾讯+网易合计占比接近七成；",
            "上半年腾讯游戏收入约1301亿同比增10%；",
            "增量集中于少数长青产品与平台级新品；",
            "中长尾产品未普惠，结构性增长明显。"
          ]
        }
      ]
    },
    {
      id: "giant-network-dark-horse",
      category: "industry",
      subcategory: "财报",
      title: "爆款游戏赚钱效应几何：巨人网络成业绩黑马，完美世界盈转亏",
      summary: "南方都市报统计22家A股游戏公司2026年中报，总营收达645.87亿元同比增长20.20%，游戏业务营收合计505.70亿元同比增长22.12%。巨人网络成为业绩黑马，完美世界则盈转亏。随着8月中下旬巨人网络、恺英网络、吉比特、世纪华通等财报陆续公布，A股游戏上半年成绩单正式揭晓。",
      source: "南方都市报 / 今日头条",
      date: "2026-09-04",
      url: "http://m.toutiao.com/group/7681591117036585472/",
      badge: "中报分析",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["巨人网络", "完美世界", "A股游戏", "中报", "645.87亿"],
      content: [
        {
          title: "财报数据",
          type: "list",
          items: [
            "22家A股游戏公司总营收645.87亿同比增20.2%；",
            "游戏业务营收505.70亿同比增22.12%；",
            "巨人网络成为业绩黑马；",
            "完美世界盈转亏；",
            "恺英/吉比特/世纪华通财报陆续公布。"
          ]
        }
      ]
    },
    {
      id: "tencent-godot-investment",
      category: "industry",
      subcategory: "投融资",
      title: "腾讯重金押注 Godot 商业化，投资 W4 瞄准中国市场独立游戏生态",
      summary: "抖音报道腾讯重金押注Godot商业化，瞄准中国市场。腾讯早在2012年就投资了Epic Games（虚幻引擎母公司），现在又押注W4（Godot商业化公司）。如果UE代表成熟重型面向大型商业开发的引擎，Godot则代表成本更低、更加开放、社区驱动的开源路线，腾讯同时布局两条路线。",
      source: "抖音 / 游戏引擎观察",
      date: "2026-09-01",
      url: "https://www.iesdouyin.com/share/video/7680506645541047567",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "腾讯布局",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["腾讯", "Godot", "W4", "开源引擎", "双路线布局"],
      content: [
        {
          title: "投资逻辑",
          type: "list",
          items: [
            "腾讯重金押注Godot商业化；",
            "2012年已投资Epic Games；",
            "现又押注W4（Godot商业化公司）；",
            "UE=成熟重型商业引擎；",
            "Godot=低成本开放社区驱动路线。"
          ]
        }
      ]
    },
    {
      id: "august-game-licenses-215",
      category: "industry",
      subcategory: "版号",
      title: "8 月 215 款游戏版号获批创年内新高，年内累计发放 1362 款",
      summary: "国家新闻出版署8月31日发布2026年8月份国产网络游戏审批信息，共209款国产网络游戏获得版号，另有6款进口网络游戏获批，合计215款创年内新高。今年1-8月累计下发游戏版号1362款（国产1319款、进口43款）。主要获批产品包括盛趣《龙之谷：经典》、三七互娱《凡人修仙传：大道》、腾讯《弈决三国》等。",
      source: "财联社 / 国家新闻出版署",
      date: "2026-08-31",
      url: "http://m.toutiao.com/group/7680167702995960363/",
      badge: "版号放量",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["版号", "215款", "年内新高", "1362款", "三七互娱"],
      content: [
        {
          title: "版号数据",
          type: "list",
          items: [
            "8月215款获批创年内新高；",
            "国产209款+进口6款；",
            "1-8月累计1362款（国产1319+进口43）；",
            "盛趣《龙之谷：经典》获批；",
            "三七《凡人修仙传：大道》、腾讯《弈决三国》在列。"
          ]
        }
      ]
    },
    {
      id: "vast-36kr-deep-dive",
      category: "industry",
      subcategory: "投融资",
      title: "VAST 半年融资约 50 亿：曾经的非共识玩家，成了「世界的基座」",
      summary: "36氪深度报道VAST融资历程，B轮和B+轮合计约30亿元由经纬创投领投，其余投资方包括完美世界、蓝色光标、芯动能投资、延趣游戏、中科创达等。创始人曾设想可能还要讲十年3D技术才能成熟，如今VAST已成为多个行业3D内容生产的默认基础设施，不到半年累计融资约50亿元。",
      source: "36氪",
      date: "2026-09-01",
      url: "https://36kr.com/p/3964267974008322",
      image: "https://aka.doubaocdn.com/s/b6bwxj9xD8",
      badge: "深度报道",
      badgeType: "business",
      readTime: "4 分钟",
      hotScore: 84,
      tags: ["VAST", "50亿融资", "3D生成", "经纬创投", "世界基座"],
      content: [
        {
          title: "融资历程",
          type: "list",
          items: [
            "B轮+B+轮约30亿，经纬创投领投；",
            "完美世界/蓝色光标/延趣游戏等参投；",
            "不到半年累计融资约50亿元；",
            "从非共识玩家到3D内容生产基础设施；",
            "Tripo已接入网易/拓竹/影视动画等多领域。"
          ]
        }
      ]
    },
    {
      id: "vast-tripo-p2-release",
      category: "industry",
      subcategory: "技术发布",
      title: "VAST 发布 Tripo P2.0：全球首个原生四边面拓扑网格 3D 基座模型",
      summary: "VAST同步融资发布旗舰3D原生基座模型Tripo P2.0，是全球首个支持原生四边面拓扑网格的3D生成模型。相较于传统侧重视觉效果的AI 3D模型，P2.0重点让生成模型更方便进入后续制作流程，四边面拓扑可直接用于绑定、雕刻和细分。游戏领域已为网易《蛋仔派对》蛋仔工坊3D模型拆分功能提供技术支持。",
      source: "腾讯新闻 / VAST官方",
      date: "2026-09-02",
      url: "http://news.qq.com/rain/a/20260902A05HAU00",
      image: "https://aka.doubaocdn.com/s/b6bwxj9xD8",
      badge: "技术发布",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["Tripo P2.0", "四边面拓扑", "3D生成", "VAST", "游戏资产"],
      content: [
        {
          title: "技术突破",
          type: "list",
          items: [
            "全球首个原生四边面拓扑网格3D模型；",
            "生成模型可直接进入制作流程；",
            "四边面拓扑支持绑定/雕刻/细分；",
            "网易《蛋仔派对》3D模型拆分已接入；",
            "《燕云十六声》万物太极玩法合作。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "september-2026-game-recommendations",
      category: "games",
      subcategory: "发售日历",
      title: "2026 年 9 月游戏推荐：秋季攻势开幕，GTA6 发售前的大作狂欢",
      summary: "A9VG发布9月游戏推荐，9月绝对是游戏大月，《空轨2nd》《漫威金刚狼》《鬼武者 剑之道》等大作都将亮相。在GTA6发售前的节点，这些大作能让玩家这段时间充实起来。文章包含发售日、平台、中文支持等详细信息，是9月选购游戏的完整参考。",
      source: "A9VG电玩部落",
      date: "2026-09-01",
      url: "https://bbs.a9vg.com/upfile/get/d09db10d0cafd324ddae5da83520a538/forum.php?mobile=2&mod=viewthread&tid=9072413",
      badge: "9月推荐",
      badgeType: "game",
      readTime: "4 分钟",
      hotScore: 83,
      tags: ["9月游戏", "漫威金刚狼", "鬼武者", "空轨2nd", "GTA6前"],
      content: [
        {
          title: "9月重点",
          type: "list",
          items: [
            "《空轨2nd》重制版登场；",
            "《漫威金刚狼》PS5独占；",
            "《鬼武者 剑之道》卡普空新作；",
            "GTA6发售前最后的大作窗口；",
            "含发售日/平台/中文支持详细信息。"
          ]
        }
      ]
    },
    {
      id: "switch-september-new-games",
      category: "games",
      subcategory: "Switch",
      title: "Switch 9 月新游推荐：巫师 3 狂猎重制版 9/29 免费升级，火纹新作来袭",
      summary: "抖音发布Switch 1/2平台9月新游推荐，《巫师3：狂猎》重制版将于9月29日发售（42.3GB），拥有Switch版巫师3的玩家无论数字版还是实体版都可以免费下载重制版。此外还有《轨道双子星Orbitals》9月3日发售（11.8GB，双人合作），火焰纹章新作也将在本月亮相。",
      source: "抖音 / Switch新游",
      date: "2026-09-01",
      url: "https://www.iesdouyin.com/share/video/7680414965546700058",
      image: "https://aka.doubaocdn.com/s/FCvxcueazL",
      badge: "Switch新游",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["Switch", "巫师3重制版", "9月29日", "免费升级", "火焰纹章"],
      content: [
        {
          title: "9月Switch阵容",
          type: "list",
          items: [
            "巫师3狂猎重制版9/29发售，42.3GB；",
            "Switch版老玩家免费升级重制版；",
            "轨道双子星Orbitals 9/3双人合作；",
            "火焰纹章新作本月亮相；",
            "港区中文支持确认。"
          ]
        }
      ]
    },
    {
      id: "top-5-september-games",
      category: "games",
      subcategory: "发售日历",
      title: "Top 5 九月必玩游戏：寂静岭 Townfall 9/24、Control Resonant 同日发售",
      summary: "TalkEsport发布9月最受期待的5款游戏，《寂静岭：Townfall》9月24日登陆PC和PS5，主角Simon回到St. Amelia群岛发现小镇被遗弃笼罩在神秘中，是系列标志性心理恐怖风格。Remedy的《Control Resonant》也在9月24日发售。文章还涵盖了漫威金刚狼等重磅作品。",
      source: "TalkEsport",
      date: "2026-09-04",
      url: "https://www.talkesport.com/editorials/top-video-game-releases-september-2026/",
      image: "https://aka.doubaocdn.com/s/2dfW9gFW8q",
      badge: "9月必玩",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["寂静岭", "Control Resonant", "9月24日", "心理恐怖", "Remedy"],
      content: [
        {
          title: "重点发售",
          type: "list",
          items: [
            "寂静岭Townfall 9/24登陆PC/PS5；",
            "主角Simon回到St. Amelia群岛；",
            "系列标志性心理恐怖风格；",
            "Control Resonant同日9/24发售；",
            "两年内第三部寂静岭作品。"
          ]
        }
      ]
    },
    {
      id: "15-biggest-september-games",
      category: "games",
      subcategory: "发售日历",
      title: "15 款 9 月最大发售游戏：厂商集体避开 GTA6 档期，9 月成近年最忙",
      summary: "GamingBolt发布9月15款最大发售游戏盘点，指出9月可能是近年来最忙的9月，因为每个开发商和发行商都在试图避开GTA6的发售档期。文章详细介绍了每款游戏的亮点、发售日期和平台，包括漫威金刚狼、黎明行者之血、鬼武者剑之道等重磅作品。",
      source: "GamingBolt",
      date: "2026-09-02",
      url: "https://gamingbolt.com/15-biggest-games-launching-in-september-2026",
      badge: "发售盘点",
      badgeType: "game",
      readTime: "4 分钟",
      hotScore: 82,
      tags: ["9月发售", "GTA6档期", "漫威金刚狼", "黎明行者之血", "鬼武者"],
      content: [
        {
          title: "9月格局",
          type: "list",
          items: [
            "9月成近年来最忙的发售月；",
            "厂商集体避开GTA6档期；",
            "漫威金刚狼PS5独占；",
            "黎明行者之血全平台；",
            "鬼武者剑之道卡普空重启之作。"
          ]
        }
      ]
    },
    {
      id: "h2-2026-blockbuster-preview",
      category: "games",
      subcategory: "发售前瞻",
      title: "2026 下半年重磅大作前瞻：战神劳菲/漫威金刚狼/寂静岭/控制共振云集",
      summary: "抖音发布2026下半年到一年即将发布的重磅3A大作盘点，包括索尼State of Play公布的《战神：劳菲》（PS5独占，推测2027年）、《漫威金刚狼》（9月15日）、《寂静岭Townfall》（9月24日）、《控制共振》、《鬼武者剑之道》、《影之刃零》、《真三国无双2猛将传复刻版》等。",
      source: "抖音 / 3A大作前瞻",
      date: "2026-09-04",
      url: "https://www.iesdouyin.com/share/video/7681609806125405930",
      badge: "大作前瞻",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["战神劳菲", "漫威金刚狼", "寂静岭", "控制共振", "影之刃零"],
      content: [
        {
          title: "下半年阵容",
          type: "list",
          items: [
            "战神：劳菲PS5独占（推测2027）；",
            "漫威金刚狼9月15日PS5独占；",
            "寂静岭Townfall 9月24日；",
            "控制共振Remedy新作；",
            "鬼武者剑之道/影之刃零/真三国无双2复刻。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-coreai-llm-agents",
      category: "opensource",
      subcategory: "AI游戏",
      title: "CoreAI：LLM Agents 自主玩游戏，GPT-5.6-sol suite 得分 96.6 排名第一",
      summary: "NeoXider/CoreAI是一个让LLM agents自主玩游戏的开源框架，v2 frontier sweep评测显示GPT-5.6-sol以suite得分96.6、通过率85.7%排名第一，GPT-5.6-terra以93.0分、86.2%通过率紧随其后。框架提供CoreAI Game-Creation Benchmark v2用于前沿模型对比，9月5日仍有活跃更新。",
      source: "GitHub",
      date: "2026-09-05",
      url: "https://github.com/NeoXider/CoreAI",
      badge: "AI游戏框架",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["CoreAI", "LLM agents", "游戏AI", "GPT-5.6", "基准测试"],
      content: [
        {
          title: "框架特点",
          type: "list",
          items: [
            "LLM agents自主玩游戏的开源框架；",
            "GPT-5.6-sol suite得分96.6排名第一；",
            "通过率85.7%领先其他模型；",
            "Game-Creation Benchmark v2评测；",
            "9月5日仍有活跃更新。"
          ]
        }
      ]
    },
    {
      id: "repo-awesome-ai-game",
      category: "opensource",
      subcategory: "AI游戏",
      title: "Awesome AI Game：AI 游戏精选列表，收录 LLM 驱动 NPC/AI 地牢主/神经网络渲染",
      summary: "bowen-aigame/awesome-ai-game是一个AI游戏精选列表，明确定义AI游戏为包含实时AI元素的游戏——LLM驱动的NPC对话、AI裁判、AI地牢主、神经网络渲染世界等。区别于仅用AI工具制作的游戏（AI-generated games），这个列表关注的是与AI一起玩的游戏，9月3日仍有更新。",
      source: "GitHub",
      date: "2026-09-03",
      url: "https://github.com/bowen-aigame/awesome-ai-game",
      badge: "精选列表",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["Awesome AI Game", "LLM NPC", "AI地牢主", "神经网络渲染", "精选列表"],
      content: [
        {
          title: "列表定义",
          type: "list",
          items: [
            "收录包含实时AI元素的游戏；",
            "LLM驱动NPC对话/AI裁判/AI地牢主；",
            "神经网络渲染世界；",
            "区别于仅用AI工具制作的游戏；",
            "关注与AI一起玩而非AI做的游戏。"
          ]
        }
      ]
    },
    {
      id: "repo-gdevelop",
      category: "opensource",
      subcategory: "游戏引擎",
      title: "GDevelop：开源跨平台 2D/3D/多人游戏引擎，无代码可视化编程，9 月 5 日更新",
      summary: "4ian/GDevelop是一款开源、跨平台的2D/3D/多人游戏引擎，专为所有人设计，支持无代码可视化编程。使用JavaScript开发，支持HTML5游戏导出，兼容移动端和桌面端。GitHub Topics显示其在2d-game分类下持续活跃，9月5日仍有更新，是独立开发者和教育领域的热门选择。",
      source: "GitHub",
      date: "2026-09-05",
      url: "https://github.com/4ian/GDevelop",
      badge: "开源引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["GDevelop", "开源引擎", "无代码", "2D/3D", "跨平台"],
      content: [
        {
          title: "引擎特点",
          type: "list",
          items: [
            "开源跨平台2D/3D/多人游戏引擎；",
            "无代码可视化编程；",
            "JavaScript开发，HTML5导出；",
            "兼容移动端和桌面端；",
            "9月5日仍有活跃更新。"
          ]
        }
      ]
    },
    {
      id: "repo-mattpocock-skills",
      category: "opensource",
      subcategory: "AI工具",
      title: "mattpocock/skills：真实工程师 Agent 技能目录开源，GitHub 热榜日增 1601 星",
      summary: "mattpocock/skills在9月4日GitHub热榜排名第一，单日新增1601颗星。项目把真实工程师的agents技能目录公开出来，沉淀类型系统、前端开发和智能体协作经验。今天的信号是来自真实工程实践的智能体技能目录、让编码智能体优先选择更少代码的工程方法，对游戏开发自动化管线有参考价值。",
      source: "GitHub / 抖音热榜",
      date: "2026-09-04",
      url: "https://github.com/mattpocock/skills",
      badge: "GitHub热榜",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["mattpocock", "Agent技能", "GitHub热榜", "类型系统", "智能体协作"],
      content: [
        {
          title: "项目亮点",
          type: "list",
          items: [
            "GitHub热榜第一，日增1601星；",
            "真实工程师Agent技能目录公开；",
            "沉淀类型系统/前端/智能体协作经验；",
            "让编码智能体优先选择更少代码；",
            "对游戏开发自动化管线有参考价值。"
          ]
        }
      ]
    },
    {
      id: "repo-retrohack-typing",
      category: "opensource",
      subcategory: "浏览器游戏",
      title: "RetroHack：复古 CRT 风格打字游戏，React/TypeScript 构建，随机弹窗干扰",
      summary: "Salama-Malek/RetroHack-Salama-Edition是一个复古CRT风格的打字游戏，使用React/TypeScript和Vite构建。游戏特色是随机弹出干扰窗口（pop-up distractions），支持英文和俄文字符串。在GitHub game-dev话题下9月4日更新，是浏览器游戏开发和复古UI设计的有趣参考项目。",
      source: "GitHub",
      date: "2026-09-04",
      url: "https://github.com/Salama-Malek/RetroHack-Salama-Edition",
      badge: "浏览器游戏",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["RetroHack", "打字游戏", "CRT风格", "React", "TypeScript"],
      content: [
        {
          title: "游戏特色",
          type: "list",
          items: [
            "复古CRT风格打字游戏；",
            "React/TypeScript+Vite构建；",
            "随机弹出干扰窗口增加难度；",
            "支持英文和俄文字符串；",
            "浏览器游戏开发参考项目。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "ue58-ai-plugin-comparison",
      category: "tutorials",
      subcategory: "UE AI",
      title: "UE5.8 AI 插件怎么选：官方 vs 第三方深度对比，MetaHuman 动画与 NPC 智能",
      summary: "什么值得买发布UE5.8 AI插件深度对比，角色动画方面MetaHumanAnimator支持单摄像头无标记全身动捕，MeshtoMetaHuman可将任意人体网格一键转为标准数字人，ControlRig物理绑定进入Beta。MetaHuman人群插件可批量生成实时NPC，第三方方案如UE5-MCP可通过自然语言指令创建会躲避障碍物的AI。",
      source: "什么值得买",
      date: "2026-09-03",
      url: "https://post.m.smzdm.com/p/arz2pmvw/",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "UE AI对比",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["UE5.8", "AI插件", "MetaHuman", "NPC智能", "UE5-MCP"],
      content: [
        {
          title: "对比要点",
          type: "list",
          items: [
            "MetaHumanAnimator单摄像头无标记全身动捕；",
            "MeshtoMetaHuman一键转标准数字人；",
            "ControlRig物理绑定进入Beta；",
            "MetaHuman人群插件批量生成实时NPC；",
            "第三方UE5-MCP自然语言创建AI行为。"
          ]
        }
      ]
    },
    {
      id: "unity-dots-getting-started",
      category: "tutorials",
      subcategory: "Unity DOTS",
      title: "Unity DOTS 入门官方教程：数据导向技术栈架构与 CPU/内存性能优化",
      summary: "Unity Learn官方发布DOTS入门教程，讲解CPU和内存性能对于构建沉浸式响应体验的关键作用。DOTS是允许Unity开发者充分利用硬件特性的软件架构，采用数据导向设计(DOD)而非面向对象编程(OOP)。教程涵盖ECS、Job System、Burst编译器的核心概念和入门实践。",
      source: "Unity Learn",
      date: "2026-09-04",
      url: "https://learn.unity.com/course/basics-dots-jobs-entities/tutorial/get-acquainted-with-dots?version=2022.3",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "官方教程",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["Unity DOTS", "ECS", "数据导向", "性能优化", "Burst"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "CPU/内存性能对沉浸式体验的关键作用；",
            "DOTS数据导向技术栈架构；",
            "DOD vs OOP设计理念对比；",
            "ECS+Job System+Burst核心概念；",
            "入门级实践项目指导。"
          ]
        }
      ]
    },
    {
      id: "dots-2-performance-handbook",
      category: "tutorials",
      subcategory: "Unity DOTS",
      title: "DOTS 2.0 性能跃迁实战手册：绕过 Burst 编译陷阱、修复 ECS 内存抖动、提升 3.7 倍帧率",
      summary: "CSDN博主发布DOTS 2.0性能跃迁实战手册，由20年Unity引擎专家亲授。DOTS 2.0核心突破在于ECS与Burst编译器、Job System和C# Native Collections深度耦合，形成零抽象开销执行闭环，所有运行时调度绕过传统Mono运行时直接映射至CPU SIMD指令流与缓存行对齐内存布局。",
      source: "CSDN",
      date: "2026-04-29",
      url: "https://blog.csdn.net/ByteShoal/article/details/160622257",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "性能实战",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 83,
      tags: ["DOTS 2.0", "Burst编译", "ECS内存", "3.7倍帧率", "SIMD"],
      content: [
        {
          title: "性能要点",
          type: "list",
          items: [
            "ECS+Burst+Job+Native Collections深度耦合；",
            "零抽象开销执行闭环；",
            "绕过Mono运行时直接映射CPU SIMD；",
            "缓存行对齐内存布局；",
            "5个关键调优节点提升3.7倍帧率。"
          ]
        }
      ]
    },
    {
      id: "unity-burst-compiler-optimization",
      category: "tutorials",
      subcategory: "Unity DOTS",
      title: "Unity Burst 编译器深度优化：用 [BurstCompile] 编译 HPC# 代码最大化性能",
      summary: "Unity Learn官方教程讲解如何最大化Burst编译器性能，应使用Burst编译尽可能多的DOD代码。可通过添加[BurstCompile]属性指示Burst编译符合High-Performance C#(HPC#)标准的任何代码，在ECS代码中通常意味着为Job structs和System函数添加该属性，教程还涵盖C#语言支持限制。",
      source: "Unity Learn",
      date: "2026-09-04",
      url: "https://learn.unity.com/tutorial/part-3-4-getting-the-most-out-of-burst?version=2022.3",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "Burst优化",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["Burst编译器", "HPC#", "ECS", "Job System", "性能优化"],
      content: [
        {
          title: "优化要点",
          type: "list",
          items: [
            "用Burst编译尽可能多的DOD代码；",
            "[BurstCompile]属性标记HPC#代码；",
            "ECS中为Job structs添加属性；",
            "System函数同样支持Burst编译；",
            "C#语言支持限制说明。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "gpt6-astra-game-creation",
      category: "ai",
      subcategory: "AI游戏生成",
      title: "GPT-6 Astra 内测实测：一个提示词生成 10v10 光环风格 FPS，浏览器直接可玩",
      summary: "凤凰网科技报道GPT-6 Astra首批内测结果，开发者Matthew Berman让Astra制作了一款《糖豆人》风格闯关游戏，旋转杆、摆锤、冲线淘汰一应俱全。另一位开发者只用一个提示词，就让Astra配合Tesana Game Maker做出10对10的《光环》风格多人FPS，地图、武器、玩法从操作界面到关卡都有模有样。",
      source: "凤凰网科技",
      date: "2026-09-05",
      url: "https://tech.ifeng.com/c/8w9CZwjjof5",
      badge: "GPT-6实测",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 88,
      tags: ["GPT-6 Astra", "AI游戏生成", "FPS", "糖豆人", "Tesana Game Maker"],
      content: [
        {
          title: "实测结果",
          type: "list",
          items: [
            "Matthew Berman用Astra制作糖豆人风格闯关游戏；",
            "旋转杆/摆锤/冲线淘汰完整实现；",
            "一个提示词生成10v10光环风格FPS；",
            "配合Tesana Game Maker完成多人FPS；",
            "浏览器直接可玩，操作界面完整。"
          ]
        }
      ]
    },
    {
      id: "nvidia-stanford-nitrogen",
      category: "ai",
      subcategory: "游戏AI",
      title: "NVIDIA 与斯坦福发布 NitroGen：开源游戏 AI 精通 1000 款游戏",
      summary: "AI D-A-M-N报道，NVIDIA和斯坦福研究人员发布NitroGen开源游戏AI，打破了之前的局限性。这款AI能够精通1000款游戏，采用计算机视觉和强化学习结合的方法，在游戏AI领域实现了量子级飞跃。开源发布意味着研究者和开发者可以自由使用和改进这一模型。",
      source: "AI D-A-M-N",
      date: "2026-09-02",
      url: "https://ai-damn.com/nvidia-and-stanford-unleash-open-source-gaming-ai-that-masters-1-000-titles-1766963010862",
      badge: "开源AI",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["NVIDIA", "斯坦福", "NitroGen", "游戏AI", "1000款游戏"],
      content: [
        {
          title: "技术突破",
          type: "list",
          items: [
            "NVIDIA+斯坦福联合发布NitroGen；",
            "开源游戏AI精通1000款游戏；",
            "计算机视觉+强化学习结合；",
            "游戏AI领域量子级飞跃；",
            "开源自由使用和改进。"
          ]
        }
      ]
    },
    {
      id: "xingbugudi-ai-npc-test",
      category: "ai",
      subcategory: "AI NPC",
      title: "《星布谷地》二测揭秘：四个 AI NPC 用记忆、情绪和协作重塑游戏社交",
      summary: "什么值得买报道米哈游《星布谷地》第二次封闭测试（星旅测试），核心亮点是引入由米哈游自研AI驱动的多个智能NPC角色。这些角色不再依赖传统脚本对话，而是具备长期记忆、情绪系统和协作能力，能够根据玩家行为动态调整互动方式，重塑游戏社交体验。",
      source: "什么值得买 / 米哈游",
      date: "2026-09-04",
      url: "https://post.m.smzdm.com/p/am963kpz/",
      badge: "米哈游AI",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 84,
      tags: ["星布谷地", "米哈游", "AI NPC", "长期记忆", "情绪系统"],
      content: [
        {
          title: "AI NPC特点",
          type: "list",
          items: [
            "米哈游自研AI驱动智能NPC；",
            "不再依赖传统脚本对话；",
            "具备长期记忆能力；",
            "情绪系统动态调整互动；",
            "NPC协作能力重塑游戏社交。"
          ]
        }
      ]
    },
    {
      id: "convai-ai-conversation-platform",
      category: "ai",
      subcategory: "AI工具",
      title: "Convai：AI Agent 平台构建游戏实时对话角色，支持语音交互与 UE 插件",
      summary: "Convai是一个AI agent平台，专为游戏和虚拟世界构建实时对话角色，支持语音交互、知识基础（knowledge grounding）和Unreal Engine插件。平台允许开发者为NPC赋予真实的对话能力，角色可以理解上下文、回答问题并执行动作，是游戏AI角色落地的成熟解决方案。",
      source: "SwitchTools",
      date: "2026-09-02",
      url: "https://www.switchtools.io/tool/convai",
      badge: "AI平台",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Convai", "AI对话", "实时NPC", "UE插件", "语音交互"],
      content: [
        {
          title: "平台能力",
          type: "list",
          items: [
            "AI agent平台构建实时对话角色；",
            "支持语音交互和知识基础；",
            "Unreal Engine官方插件；",
            "NPC理解上下文/回答问题/执行动作；",
            "游戏AI角色落地成熟方案。"
          ]
        }
      ]
    }
  ]
};
