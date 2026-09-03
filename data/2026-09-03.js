/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-03
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-03",
    weekday: "星期四",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-03 08:35",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "🚀 Unity 6.6 正式发布：CoreCLR核心组件落地，Unity 6.7 LTS前最后一个非LTS版本",
      "🎮 《鬼武者：剑之道》媒体评分解禁：IGN 10分满分，M站PS5版86分、Switch2版89分",
      "💰 米哈游领投《月圆之夜》制作人创业项目，Roguelike新游研发中",
      "🤖 Game-NPC-Brain-LLM v2.0发布：Gemma-2 2B本地零成本AI大脑，支持Unity/UE/Godot",
      "📱 Android XR 更新：Unity/Unreal/Godot三大引擎XR支持全面升级"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9月2日正式发布·CoreCLR落地", badge: "最新功能版", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 长期支持", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "8月27日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁", badge: "UE5工业化", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "Verse语言", color: "pink" },
      { name: "Godot 4.4", type: "godot", status: "Jolt物理集成·开源引擎", badge: "轻量开源", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-unity-66-release",
    category: "engine",
    categoryName: "引擎前沿 · 头条深度",
    tag: "🔥 引擎重磅更新",
    title: "Unity 6.6 正式发布：CoreCLR 核心组件落地，性能/编译/工作流/2D 全面升级",
    summary: "Unity于9月2日正式发布Unity 6.6，这是四季度Unity 6.7 LTS发布前的最后一个非LTS版本。本次更新最大亮点是实现了作为Unity 7基础的全新CoreCLR核心组件，同时在性能、编译速度、工作流、2D图形、编辑器界面和多平台支持方面带来重大改进。新增'Enter Play'受限模式，进一步优化迭代效率。韩国媒体报道称Unity 6.6标志着开发周期整体改善的关键节点。",
    image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
    source: "Developpez / ILovePCBang / Unity",
    date: "2026-09-02",
    url: "https://jeux.developpez.com/actu/386721/Unity-6-6-est-desormais-disponible-avec-des-ameliorations-majeures-en-performances-compilation-flux-de-travail-graphismes-2D-interface-et-plateformes/",
    readTime: "4 分钟深度",
    hotScore: 97,
    tags: ["Unity 6.6", "CoreCLR", "LTS", "性能优化", "编译速度"],
    content: [
      {
        title: "核心更新要点",
        type: "list",
        items: [
          "Unity 6.6正式发布，Unity 6.7 LTS前最后一个非LTS版本；",
          "实现Unity 7基础的CoreCLR核心组件，为下一代运行时铺路；",
          "性能、编译速度、工作流、2D图形、编辑器界面全面改进；",
          "新增'Enter Play'受限模式，优化迭代效率；",
          "多平台支持升级，覆盖桌面/移动/主机/Web。"
        ]
      },
      {
        title: "开发者建议",
        type: "text",
        text: "Unity 6.6作为LTS前的最后一个功能版本，建议生产项目继续使用Unity 6.3 LTS，但技术预研团队可提前评估6.6的CoreCLR性能提升和编译速度改进，为6.7 LTS迁移做准备。CoreCLR的落地意味着Unity 7的运行时架构正在逐步成型，关注C#生态与Unity的深度整合趋势。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 投融资 / 展会展讯 / 市场报告" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 核心玩法剖析 / 独立神作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "架构设计 / 图形渲染 / 性能优化指南" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / MCP" }
  ],
  items: [
    // ------------------------- 引擎前沿 (Engine) -------------------------
    {
      id: "unity-66-korean-detail",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 6.6 韩媒深度解析：开发周期整体改善，CoreCLR 为 Unity 7 奠基",
      summary: "韩国媒体ILovePCBang详细解析Unity 6.6：作为四季度Unity 6.7 LTS前的最后一个非LTS版本，6.6实现了Unity 7基础的CoreCLR核心组件，在开发周期全流程带来改善。文章指出CoreCLR的落地是Unity运行时架构演进的关键里程碑。",
      source: "ILovePCBang",
      date: "2026-09-02",
      url: "https://www.ilovepcbang.com/news/articleView.html?idxno=201346",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "深度解析",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 88,
      tags: ["Unity 6.6", "CoreCLR", "Unity 7", "开发周期"],
      content: [
        {
          title: "解析要点",
          type: "list",
          items: [
            "Unity 6.6是6.7 LTS前最后一个非LTS版本；",
            "CoreCLR核心组件实现，为Unity 7运行时奠基；",
            "开发周期全流程改善，编译与迭代效率提升；",
            "建议技术预研团队评估6.6，为LTS迁移做准备。"
          ]
        }
      ]
    },
    {
      id: "android-xr-three-engines",
      category: "engine",
      subcategory: "XR",
      title: "Android XR 更新：Unity / Unreal / Godot 三大引擎 XR 支持全面升级",
      summary: "Android开发者官方发布XR更新，通过OpenXR标准确保Unity、Unreal Engine和Godot三大引擎获得最佳XR开发工具。Unreal Engine支持现已进入开发者预览版，目标版本5.6.1，集成基于OpenXR并支持AndroidXR厂商特定API。",
      source: "Android Developers",
      date: "2026-08-26",
      url: "https://developer.android.google.cn/blog/posts/android-xr-updates-for-unity-unreal-and-godot",
      badge: "XR更新",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["Android XR", "OpenXR", "Unity", "Unreal", "Godot"],
      content: [
        {
          title: "更新内容",
          type: "list",
          items: [
            "通过OpenXR标准统一三大引擎XR支持；",
            "Unreal Engine XR支持进入开发者预览（目标5.6.1）；",
            "支持AndroidXR厂商特定API；",
            "独立开发者和大厂均能获得最佳XR工具。"
          ]
        }
      ]
    },
    {
      id: "unity6-graphics-optimization",
      category: "engine",
      subcategory: "Unity 渲染",
      title: "Unity 6 图形性能优化官方指南：OnDemandRendering API 按需渲染降本增效",
      summary: "Unity官方文档详解6000.4版本图形性能优化：使用OnDemandRendering API降低渲染帧率，适用于菜单、暂停界面、回合制游戏等静态内容场景。可在输入时临时提高帧率保持响应性，与Adaptive Performance配合效果更佳，同时覆盖CPU/GPU渲染工作减少。",
      source: "Unity 官方文档",
      date: "2026-09-01",
      url: "https://docs.unity3d.com/6000.4/Documentation/Manual/OptimizingGraphicsPerformance.html",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "官方优化",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["Unity 6", "图形优化", "OnDemandRendering", "Adaptive Performance"],
      content: [
        {
          title: "优化要点",
          type: "list",
          items: [
            "OnDemandRendering API按需降低渲染帧率；",
            "适用于菜单/暂停/回合制等静态场景；",
            "输入时临时提高帧率保持响应性；",
            "与Adaptive Performance配合效果更佳。"
          ]
        }
      ]
    },
    {
      id: "ue58-realtime-render-guide",
      category: "engine",
      subcategory: "Unreal",
      title: "UE 5.8 实时渲染优化官方指南：移动端性能预算与瓶颈检测工具",
      summary: "Epic官方发布UE 5.8实时渲染优化指南，详细介绍如何识别并优化移动设备性能，包括性能预算因素、项目打包最佳实践、检测性能瓶颈的工具使用。覆盖Lumen/Nanite在移动端的配置策略，帮助开发者在有限资源下获得最逼真实时渲染效果。",
      source: "Epic Games 官方文档",
      date: "2026-08-04",
      url: "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/guidelines-for-optimizing-rendering-for-real-time-in-unreal-engine",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "官方指南",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 86,
      tags: ["UE5.8", "实时渲染", "移动端优化", "性能预算", "Lumen"],
      content: [
        {
          title: "指南要点",
          type: "list",
          items: [
            "识别并优化移动设备性能的完整指南；",
            "性能预算因素分析与项目打包最佳实践；",
            "检测性能瓶颈的工具使用方法；",
            "Lumen/Nanite移动端配置策略。"
          ]
        }
      ]
    },
    {
      id: "three-engines-license-2026",
      category: "engine",
      subcategory: "引擎对比",
      title: "2026三大引擎授权模式对比：UE免费+5%分成、Unity订阅制、Godot MIT全免费",
      summary: "SHAttered发布2026年三大引擎最新对比：UE 5.8为5.x最终大版（免费+5%分成），Unity 6.4为订阅制闭源，Godot 4.7.1为MIT全开源。文章用2026年7月官方数据逐项对比功能、授权、性能，帮助开发者根据项目规模和预算选择合适引擎。",
      source: "SHAttered",
      date: "2026-07-29",
      url: "https://shattered.io/unreal-engine-vs-unity-vs-godot/",
      badge: "选型对比",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 83,
      tags: ["引擎对比", "授权模式", "UE5.8", "Unity 6.4", "Godot 4.7"],
      content: [
        {
          title: "授权对比",
          type: "list",
          items: [
            "UE 5.8：免费+5%分成（5.x最终大版）；",
            "Unity 6.4：订阅制闭源，企业版有最低承诺金；",
            "Godot 4.7.1：MIT全开源零成本；",
            "数据基于2026年7月官方发布，选型需结合项目规模。"
          ]
        }
      ]
    },
    {
      id: "unity-ugs-update",
      category: "engine",
      subcategory: "Unity 服务",
      title: "Unity Gaming Services 更新：Google Play Billing Library 升级至 9.0",
      summary: "Unity游戏服务（UGS）发布更新，Google Play Billing Library升级至9.0，云API版本更新，Cloud Save SDK升级至3.4，Vivox SDK升级至16.11.0。同时更新了最低支持编辑器版本要求，开发者需关注依赖兼容性。",
      source: "Unity 官方文档",
      date: "2026-08-20",
      url: "https://docs.unity.com/en-us/services/release-notes",
      badge: "服务更新",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Unity", "UGS", "Billing Library", "Cloud Save", "Vivox"],
      content: [
        {
          title: "更新内容",
          type: "list",
          items: [
            "Google Play Billing Library升级至9.0；",
            "Cloud Save SDK 3.4、Vivox SDK 16.11.0；",
            "云API版本同步更新；",
            "最低支持编辑器版本要求更新，注意依赖兼容。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "onimusha-review-scores",
      category: "industry",
      subcategory: "游戏评测",
      title: "《鬼武者：剑之道》媒体评分解禁：IGN 10分满分，M站PS5版86分、Switch2版89分",
      summary: "卡普空《鬼武者：剑之道》全球媒体评分解禁。IGN给出10分满分，盛赞'叙事与战斗双双拉满的动作游戏杰作'。Metacritic平台PS5版86分（73家好评6家中评），PC版82分，Switch 2版高达89分。GameSpot给出80分，VGC给出3/5分，评价呈现分化。",
      source: "新浪新闻 / 3DM",
      date: "2026-09-01",
      url: "https://www.sina.cn/news/detail/5338358034468062.html",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "媒体评分",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 93,
      tags: ["鬼武者", "IGN 10分", "Metacritic", "媒体评分", "卡普空"],
      content: [
        {
          title: "评分概况",
          type: "list",
          items: [
            "IGN 10分满分：叙事与战斗双双拉满的杰作；",
            "Metacritic PS5版86分（73好评6中评）；",
            "Switch 2版89分，PC版82分，XSX版83分；",
            "GameSpot 80分，VGC 3/5分，评价有分化。"
          ]
        }
      ]
    },
    {
      id: "onimusha-gamescom-awards",
      category: "industry",
      subcategory: "科隆展会",
      title: "《鬼武者：剑之道》科隆斩获'最佳玩法'与'最佳PlayStation游戏'两项大奖",
      summary: "在2026科隆游戏展颁奖典礼上，卡普空《鬼武者：剑之道》表现亮眼，一举斩获'最佳玩法'与'最佳PlayStation游戏'两项重磅大奖。官方回应表示感谢玩家与媒体支持。游戏将于9月4日正式发售，媒体高分与展会奖项双重加持。",
      source: "游民星空",
      date: "2026-09-01",
      url: "https://www.gamersky.com/news/258246/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "科隆大奖",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 89,
      tags: ["鬼武者", "科隆展", "最佳玩法", "最佳PS游戏", "卡普空"],
      content: [
        {
          title: "获奖情况",
          type: "list",
          items: [
            "科隆游戏展斩获'最佳玩法'大奖；",
            "同时获得'最佳PlayStation游戏'奖；",
            "媒体评分与展会奖项双重加持；",
            "9月4日正式发售，期待值拉满。"
          ]
        }
      ]
    },
    {
      id: "mihaoyue-investment",
      category: "industry",
      subcategory: "投融资",
      title: "米哈游领投《月圆之夜》制作人创业项目：离开大厂想自由做一辈子游戏",
      summary: "《月圆之夜》制作人小木匠2025年10月离开巨人网络自主创业，12月与真格、Monolith确定合作意向并获天使轮。2026年8月米哈游领投，真格、Monolith继续跟投。团队正在研发一款新的Roguelike游戏，玩家在每个关卡获得奖励强化自己。",
      source: "游戏葡萄 / 今日头条",
      date: "2026-09-02",
      url: "http://m.toutiao.com/group/7680824526682260002/",
      badge: "米哈游领投",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 87,
      tags: ["米哈游", "月圆之夜", "小木匠", "Roguelike", "创业融资"],
      content: [
        {
          title: "创业历程",
          type: "list",
          items: [
            "《月圆之夜》制作人小木匠2025年10月离开巨人网络；",
            "12月获真格、Monolith天使轮；",
            "2026年8月米哈游领投，真格、Monolith跟投；",
            "正在研发新Roguelike游戏，关卡奖励强化机制。"
          ]
        }
      ]
    },
    {
      id: "orbit-twins-release",
      category: "industry",
      subcategory: "游戏发售",
      title: "《轨道双子星》今日发售：Switch 2 独占双人合作，致敬 80 年代经典动画",
      summary: "独立团队打造的复古双人合作冒险游戏《轨道双子星》（Orbitals）于9月3日正式发售，任天堂Switch 2平台独占。游戏支持中文及中文配音，致敬80年代经典动画美学，还有线下快闪活动同步进行。是Switch 2首发后又一款独占佳作。",
      source: "IT之家 / 微博",
      date: "2026-09-03",
      url: "https://m.weibo.cn/detail/5338972790457592",
      badge: "今日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["轨道双子星", "Switch 2", "双人合作", "独占", "复古动画"],
      content: [
        {
          title: "游戏亮点",
          type: "list",
          items: [
            "9月3日发售，Switch 2平台独占；",
            "复古双人合作冒险，致敬80年代经典动画；",
            "支持中文及中文配音；",
            "线下快闪活动同步进行。"
          ]
        }
      ]
    },
    {
      id: "game-companies-vast-investment",
      category: "industry",
      subcategory: "AI 3D",
      title: "游戏厂商密集入股 AI 3D 公司 VAST：半年累计融资 50 亿，完美世界/三七互娱入局",
      summary: "《科创板日报》报道，游戏厂商正密集入股AI 3D公司VAST。VAST完成B轮和B+轮融资合计约30亿元，产业投资方包括完美世界、蓝色光标、三七互娱、延趣游戏等，不到半年累计融资约50亿元，创下AI 3D领域融资纪录。Tripo已接入网易《蛋仔派对》。",
      source: "科创板日报 / 东方财富",
      date: "2026-09-02",
      url: "https://caifuhao.eastmoney.com/news/20260902115529363022180",
      image: "https://aka.doubaocdn.com/s/b6bwxj9xD8",
      badge: "产业资本",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["VAST", "Tripo", "AI 3D", "完美世界", "三七互娱", "蛋仔派对"],
      content: [
        {
          title: "投资格局",
          type: "list",
          items: [
            "VAST半年累计融资约50亿元，创AI 3D纪录；",
            "完美世界、三七互娱、延趣游戏等产业资本入局；",
            "Tripo已接入网易《蛋仔派对》3D模型拆分；",
            "游戏厂商加速布局AI 3D内容生产管线。"
          ]
        }
      ]
    },
    {
      id: "best-llm-game-dev-2026",
      category: "industry",
      subcategory: "AI 工具",
      title: "2026 游戏开发 7 款最佳 LLM 对比：长上下文、截图引导、成本逐项实测",
      summary: "SoonLab发布2026年游戏开发最佳LLM对比报告，覆盖7款主流大模型在游戏开发场景的表现。Moonshot Kimi K3开源模型支持长上下文和截图引导优化，API定价为缓存命中$0.30/M token、缓存未命中$3/M、输出$15/M。报告逐项对比上下文窗口、代码生成、成本和适用场景。",
      source: "SoonLab",
      date: "2026-09-02",
      url: "https://www.soonlab.ai/blog/best-llm-for-game-development/",
      badge: "LLM对比",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 85,
      tags: ["LLM", "游戏开发", "Kimi K3", "大模型对比", "成本分析"],
      content: [
        {
          title: "对比要点",
          type: "list",
          items: [
            "7款主流LLM在游戏开发场景逐项对比；",
            "Kimi K3开源，长上下文+截图引导优化；",
            "API定价：缓存命中$0.30/M，输出$15/M token；",
            "按上下文窗口、代码生成、成本推荐适用场景。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "onimusha-ign-10-review",
      category: "games",
      subcategory: "卡普空",
      title: "IGN 满分评测《鬼武者：剑之道》：战斗系统足以载入史册，攻防快感前所未见",
      summary: "IGN为《鬼武者：剑之道》打出10分满分，评测指出本作同时完成两件事：讲好了令人动容的武士故事，打造了足以载入史册的动作战斗系统。主角宫本武藏拥有轻攻击/重攻击/短连段，攻击与冲刺均不消耗体力，防守端涵盖弹反、闪避和'一闪'反击。",
      source: "IGN / 今日头条",
      date: "2026-09-01",
      url: "http://m.toutiao.com/group/7680532234088776230/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "IGN 10分",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 91,
      tags: ["鬼武者", "IGN", "满分评测", "战斗系统", "一闪"],
      content: [
        {
          title: "评测亮点",
          type: "list",
          items: [
            "IGN 10分：叙事与战斗双双拉满的杰作；",
            "宫本武藏轻/重攻击+短连段，不消耗体力；",
            "防守端：弹反、闪避、'一闪'反击系统；",
            "BOSS战被媒体盛赞为壮观。"
          ]
        }
      ]
    },
    {
      id: "onimusha-score-controversy",
      category: "games",
      subcategory: "游戏评测",
      title: "《鬼武者》评分争议：IGN 总部满分 vs 日本 7 分德国 6 分，差异根源在哪",
      summary: "《鬼武者：剑之道》媒体评分引发讨论：IGN总部给出10分满分，但日本媒体仅7分、德国媒体仅6分。Metacritic PS5版62家媒体均分86，PC版17家均分82，Opencritic均分85，GameSpot 8分。分析认为IGN满分源于评测者对剑戟动作的主观偏好，主流媒体普遍定位为'佳作'。",
      source: "什么值得买",
      date: "2026-09-02",
      url: "http://m.toutiao.com/group/7680874357152891443/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "评分争议",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["鬼武者", "评分争议", "IGN", "Metacritic", "媒体差异"],
      content: [
        {
          title: "争议分析",
          type: "list",
          items: [
            "IGN总部10分 vs 日本7分 vs 德国6分；",
            "Metacritic PS5版86分，PC版82分；",
            "IGN满分源于评测者对剑戟动作的主观偏好；",
            "主流媒体普遍定位为'佳作'而非'神作'。"
          ]
        }
      ]
    },
    {
      id: "onimusha-pc-score-detail",
      category: "games",
      subcategory: "卡普空",
      title: "《鬼武者：剑之道》M站 PC 版均分 85：GameSpot 80 分，VGC 3/5 分",
      summary: "3DM报道《鬼武者：剑之道》Metacritic PC版均分85分，外媒GameSpot给出80分好评，VGC给出3/5分。游戏延续系列极致动作玩法，'一闪'反击系统是核心特色，采用真人影星外貌作为主角形象。XSX版83分，各平台评价整体正面。",
      source: "3DM游戏网",
      date: "2026-09-01",
      url: "https://m.3dmgame.com/news/202609/3951971.html",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "PC版评分",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["鬼武者", "Metacritic", "PC版", "GameSpot", "一闪"],
      content: [
        {
          title: "评分详情",
          type: "list",
          items: [
            "Metacritic PC版均分85分；",
            "GameSpot 80分好评，VGC 3/5分；",
            "'一闪'反击系统为核心特色；",
            "采用真人影星外貌作为主角形象。"
          ]
        }
      ]
    },
    {
      id: "onimusha-switch2-89",
      category: "games",
      subcategory: "卡普空",
      title: "《鬼武者：剑之道》Switch 2 版 M 站 89 分：全平台最高，6 家媒体全好评",
      summary: "游侠网报道《鬼武者：剑之道》Metacritic各平台评分：PS5版86分、PC版82分、Switch 2版高达89分（6家媒体全好评）、XSX版83分。Switch 2版成为全平台评分最高版本，媒体盛赞BOSS战壮观，整体收获业界颇为正面的反响。",
      source: "游侠网",
      date: "2026-09-01",
      url: "https://3g.ali213.net/news/html/1035693.html",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "Switch2最高",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["鬼武者", "Switch 2", "Metacritic 89", "全平台最高", "BOSS战"],
      content: [
        {
          title: "各平台评分",
          type: "list",
          items: [
            "Switch 2版89分（6家全好评），全平台最高；",
            "PS5版86分，PC版82分，XSX版83分；",
            "媒体盛赞BOSS战壮观；",
            "整体收获业界颇为正面的反响。"
          ]
        }
      ]
    },
    {
      id: "onimusha-ichigeki-system",
      category: "games",
      subcategory: "卡普空",
      title: "《鬼武者：剑之道》'一闪'战斗系统深度解析：完美时机触发的爽快反击",
      summary: "3DM深度解析《鬼武者：剑之道》核心'一闪'系统：在敌人攻击瞬间精准按键触发完美反击，造成巨大伤害并带有华丽演出。IGN评测称战斗系统足以载入史册，攻击与冲刺不消耗体力的设计让攻防节奏极为流畅，配合弹反和闪避形成多层次战斗体验。",
      source: "3DM游戏网",
      date: "2026-09-01",
      url: "https://m.3dmgame.com/news/202609/3951957.html",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "战斗解析",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["鬼武者", "一闪", "战斗系统", "弹反", "动作游戏"],
      content: [
        {
          title: "战斗系统",
          type: "list",
          items: [
            "'一闪'：敌人攻击瞬间精准按键触发完美反击；",
            "攻击与冲刺不消耗体力，攻防节奏流畅；",
            "弹反+闪避+一闪形成多层次防守；",
            "IGN称战斗系统足以载入史册。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-game-npc-brain-llm",
      category: "opensource",
      subcategory: "AI NPC",
      title: "Game-NPC-Brain-LLM v2.0：Gemma-2 2B 本地零成本 AI 大脑，支持 Unity/UE/Godot",
      summary: "gugu-2/Game-NPC-Brain-LLM发布v2.0，是一个完整的本地零API成本AI NPC引擎。基于Gemma-2 2B + Coqui XTTS-v2，支持Unity、Unreal Engine 5和Godot 4。相比竞品每次API调用$0.01，本引擎100%本地运行零成本，9月2日仍有活跃更新。",
      source: "GitHub",
      date: "2026-09-02",
      url: "https://github.com/gugu-2/Game-NPC-Brain-LLM",
      badge: "AI NPC引擎",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["AI NPC", "Gemma-2", "本地运行", "Unity", "UE5", "Godot"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "完整的本地零API成本AI NPC引擎v2.0；",
            "基于Gemma-2 2B + Coqui XTTS-v2语音；",
            "支持Unity、UE5、Godot 4三大引擎；",
            "100%本地运行，竞品$0.01/次调用，本项目零成本。"
          ]
        }
      ]
    },
    {
      id: "repo-opengame",
      category: "opensource",
      subcategory: "AI 生成",
      title: "OpenGame：端到端 AI 生成网页游戏框架，一条 Prompt 生成可玩游戏+源码",
      summary: "SmiLerich/opengame是一个开源Agentic Coding框架，可从单条Prompt端到端生成网页游戏。2026年4月正式发布，提供可玩Demo画廊——每个游戏由AI从Prompt生成，悬停预览玩法，点击查看在线版本或完整源码归档，9月2日仍有更新。",
      source: "GitHub",
      date: "2026-09-02",
      url: "https://github.com/SmiLerich/opengame",
      badge: "AI生成游戏",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["OpenGame", "AI生成", "网页游戏", "Agentic", "端到端"],
      content: [
        {
          title: "框架能力",
          type: "list",
          items: [
            "从单条Prompt端到端生成网页游戏；",
            "可玩Demo画廊，悬停预览玩法；",
            "每个游戏提供在线版本和完整源码；",
            "2026年4月正式发布，arXiv论文可查。"
          ]
        }
      ]
    },
    {
      id: "repo-open-party-lab",
      category: "opensource",
      subcategory: "派对游戏",
      title: "Open Party Lab：开源浏览器派对游戏平台，手机当手柄+AI 辅助小游戏 SDK",
      summary: "Hartwich/Open-Party-Lab是开源浏览器派对游戏平台，支持共享主机屏幕、手机控制器、权威服务器逻辑和可复用小游戏SDK。专为AI辅助社区开发设计，支持本地多人和在线派对，9月1日仍有活跃更新。",
      source: "GitHub",
      date: "2026-09-01",
      url: "https://github.com/Hartwich/Open-Party-Lab",
      badge: "派对游戏",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["派对游戏", "浏览器", "手机控制器", "AI辅助", "开源"],
      content: [
        {
          title: "平台特点",
          type: "list",
          items: [
            "开源浏览器派对游戏平台；",
            "共享主机屏幕+手机控制器；",
            "权威服务器逻辑+可复用小游戏SDK；",
            "专为AI辅助社区开发设计。"
          ]
        }
      ]
    },
    {
      id: "repo-qtmesheditor",
      category: "opensource",
      subcategory: "3D 工具",
      title: "QtMeshEditor：免费 3D 资产工具，合并动画/40+ 格式转换/AI 编辑材质",
      summary: "fernandotonon/QtMeshEditor是面向独立游戏开发者的免费3D资产工具，支持合并动画、40+种3D格式互转、AI辅助材质编辑。基于Qt开发，支持glTF/FBX/OGRE等格式，9月2日仍有更新，是独立开发者处理3D资产的实用工具。",
      source: "GitHub",
      date: "2026-09-02",
      url: "https://github.com/fernandotonon/QtMeshEditor",
      badge: "3D工具",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["3D工具", "QtMeshEditor", "格式转换", "AI材质", "独立开发"],
      content: [
        {
          title: "工具功能",
          type: "list",
          items: [
            "免费3D资产工具，面向独立开发者；",
            "合并动画、40+种3D格式互转；",
            "AI辅助材质编辑；",
            "支持glTF/FBX/OGRE等主流格式。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-unity-perf-notes",
      category: "tutorials",
      subcategory: "Unity 性能",
      title: "Unity 性能优化实战笔记：Draw Call 批处理/光照烘焙/纹理压缩全流程",
      summary: "CSDN博主整理Unity性能优化完整笔记：渲染优化涵盖静态批处理、动态批处理、GPU Instancing、纹理图集；光照优化使用光照贴图烘焙、减少实时光源；内存优化涵盖纹理压缩、资源卸载、对象池。附具体参数配置和常见瓶颈排查方法。",
      source: "CSDN",
      date: "2026-09-01",
      url: "https://blog.csdn.net/2302_76776557/article/details/146568627",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "性能优化",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 84,
      tags: ["Unity", "性能优化", "Draw Call", "光照烘焙", "对象池"],
      content: [
        {
          title: "优化清单",
          type: "list",
          items: [
            "渲染：静态/动态批处理、GPU Instancing、纹理图集；",
            "光照：光照贴图烘焙、减少实时光源、禁用阴影；",
            "内存：纹理压缩、资源卸载、对象池复用；",
            "附具体参数配置和瓶颈排查方法。"
          ]
        }
      ]
    },
    {
      id: "tut-aaa-perf-optimization",
      category: "tutorials",
      subcategory: "AAA 优化",
      title: "AAA 游戏引擎性能优化完整指南：降低延迟/物理优化/Unity+UE C++ 技术详解",
      summary: "Dre Dyson发布AAA游戏引擎性能优化完整指南，覆盖从延迟分析到物理优化的全流程。Day 4-14深入Unreal C++优化和Unity差异点，包括对象池、数据导向设计、内存布局、多线程调度等经过验证的技术，适合有 shipped 项目经验的开发者。",
      source: "Dre Dyson",
      date: "2026-06-03",
      url: "https://dredyson.com/how-i-mastered-aaa-game-engine-performance-optimization-a-complete-step-by-step-guide-to-reducing-latency-optimizing-physics-and-unlocking-proven-c-techniques-in-unreal-engine-and-unity/",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "AAA优化",
      badgeType: "engine",
      readTime: "5 分钟",
      hotScore: 85,
      tags: ["AAA", "性能优化", "Unreal C++", "Unity", "延迟优化", "数据导向"],
      content: [
        {
          title: "指南结构",
          type: "list",
          items: [
            "Day 1-3：延迟分析与基础优化建立信心；",
            "Day 4-14：Unreal C++优化与Unity差异点；",
            "对象池、数据导向设计、内存布局优化；",
            "多线程调度与物理优化的验证技术。"
          ]
        }
      ]
    },
    {
      id: "tut-mobile-perf-tencent",
      category: "tutorials",
      subcategory: "手游优化",
      title: "手游性能优化实战：Unity 次世代手游从 25 帧到稳定 60 帧的核心方案",
      summary: "腾讯云开发者社区分享次世代Unity手游优化实战：优化前帧率波动25-35帧、发热严重、中低端机闪退。CPU优化合并静态模型使Draw Call从2200降至800，AI检测频率从每帧改为每8帧，CPU负载从75%降至40%。GPU优化涵盖中低端机贴图降级和特效裁剪。",
      source: "腾讯云开发者社区",
      date: "2026-04-16",
      url: "https://cloud.tencent.com/developer/article/2655874",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "手游优化",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 83,
      tags: ["手游优化", "Unity", "Draw Call", "CPU优化", "GPU优化", "60帧"],
      content: [
        {
          title: "优化成果",
          type: "list",
          items: [
            "优化前25-35帧波动，优化后稳定60帧；",
            "CPU：Draw Call 2200→800，AI检测每帧→每8帧；",
            "CPU负载75%→40%；",
            "GPU：中低端机贴图降级+特效裁剪，解决闪退。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "ai-npc-from-tool-to-human",
      category: "ai",
      subcategory: "AI NPC",
      title: "游戏 NPC 装了一辈子'工具人'，大模型要让它真正'成人'了",
      summary: "什么值得买深度文章分析大模型如何改变游戏NPC：本质是将'预设-匹配'范式转变为'理解-生成'范式。传统行为树是感知→匹配预设→触发行为，大模型驱动的NPC是感知→理解语义→结合角色设定→生成合理反应。当玩家说'你这把剑不错'，NPC能理解并做出个性化回应。",
      source: "什么值得买",
      date: "2026-08-22",
      url: "https://post.m.smzdm.com/p/aggxpx5d/",
      badge: "AI NPC",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 84,
      tags: ["AI NPC", "大模型", "行为树", "理解生成", "游戏叙事"],
      content: [
        {
          title: "范式转变",
          type: "list",
          items: [
            "传统：感知→匹配预设→触发行为（状态机/行为树）；",
            "大模型：感知→理解语义→结合角色设定→生成反应；",
            "NPC能理解玩家话语的隐含意图并个性化回应；",
            "从'工具人'迈向有记忆、有性格的'成人'。"
          ]
        }
      ]
    },
    {
      id: "ai-opensource-models-games",
      category: "ai",
      subcategory: "AI 模型",
      title: "2026 最佳开源生成式 AI 游戏模型指南：语音/图像/3D 全链路选型",
      summary: "Cinevva发布2026最佳开源生成式AI游戏模型指南，覆盖语音生成（Qwen3-TTS支持3秒声音克隆、10种语言，Apache 2.0；Chatterbox支持情绪控制）、图像生成、3D模型生成等全链路。语音生成已超越'游戏够用'门槛，小团队也能实现自然语音叙事。",
      source: "Cinevva",
      date: "2026-07-01",
      url: "https://app.cinevva.com/guides/frontier-gen-ai-models",
      badge: "AI模型指南",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["开源AI", "Qwen3-TTS", "语音生成", "图像生成", "3D生成"],
      content: [
        {
          title: "模型推荐",
          type: "list",
          items: [
            "Qwen3-TTS：3秒声音克隆、10种语言、Apache 2.0；",
            "Chatterbox：情绪控制、5秒克隆、23种语言、MIT；",
            "语音生成已超越'游戏够用'门槛；",
            "小团队可实现自然语音叙事和情感表达。"
          ]
        }
      ]
    },
    {
      id: "fab-gen-ai-plugin",
      category: "ai",
      subcategory: "UE 生态",
      title: "Fab 平台 Gen AI 插件更新：支持 GPT-5.5 / Claude 4.7 / Gemini 3.1 / Grok 4.1",
      summary: "Fab平台上架全新Gen AI插件，支持所有主流LLM API：OpenAI GPT-5.5、Anthropic Claude Sonnet/Opus/Haiku 4.7、Google Gemini 3.1 flash/pro、XAI Grok 4.1 Fast、DeepSeek v3.2。附带完整C++源码，支持OpenAI兼容模式无缝切换阿里云等国产模型。",
      source: "Fab / Epic",
      date: "2026-09-02",
      url: "https://www.fab.com/listings/68e7f092-1fea-4e6d-8d31-c6b96b06a02e",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "Fab插件",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["Fab", "Gen AI", "GPT-5.5", "Claude 4.7", "Gemini 3.1", "UE"],
      content: [
        {
          title: "插件能力",
          type: "list",
          items: [
            "支持GPT-5.5、Claude 4.7、Gemini 3.1、Grok 4.1；",
            "附带完整C++源码；",
            "OpenAI兼容模式，无缝切换国产模型；",
            "适用于UE项目的AI对话/NPC/内容生成。"
          ]
        }
      ]
    },
    {
      id: "ai-npc-api-comparison",
      category: "ai",
      subcategory: "AI API",
      title: "2026 游戏 AI NPC 对话 API 选型：OpenRouter 替代方案成本低 30-50%",
      summary: "Intelli Verse X发布游戏AI NPC对话API对比指南，推荐OpenRouter替代方案：内置记忆与RAG（无需Pinecone/Weaviate）、原生支持流式输出和200K上下文、头像生成。成本$0.24/M token，比OpenRouter生产环境低30-50%，美国本土数据合规。",
      source: "Intelli Verse X",
      date: "2026-07-28",
      url: "https://intelli-verse-x.ai/blogs/openrouter-alternative-game-ai-npc-dialogue-apis",
      badge: "API选型",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["AI NPC", "API", "OpenRouter", "RAG", "成本优化"],
      content: [
        {
          title: "方案优势",
          type: "list",
          items: [
            "内置记忆与RAG，无需额外向量数据库；",
            "原生流式输出+200K上下文窗口；",
            "成本$0.24/M token，比OpenRouter低30-50%；",
            "美国本土数据驻留，合规就绪。"
          ]
        }
      ]
    },
    {
      id: "sits2026-ai-npc-engineering",
      category: "ai",
      subcategory: "AI 工程",
      title: "SITS2026 大会披露：AI Agent 游戏 NPC 三大工程实践与性能拐点数据",
      summary: "CSDN博主整理SITS2026奇点智能技术大会AI Agent游戏NPC应用分享：首次系统性将LLM推理、记忆向量库与实时环境感知模块耦合应用于开放世界NPC。NPC可基于玩家历史交互、当前场景和角色设定做出超越传统状态机的行为决策，披露了三大不可复制的工程实践和性能拐点数据。",
      source: "CSDN / SITS2026",
      date: "2026-04-13",
      url: "https://blog.csdn.net/DevPath/article/details/160111983",
      badge: "大会分享",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 81,
      tags: ["SITS2026", "AI Agent", "NPC", "LLM", "记忆向量库", "工程实践"],
      content: [
        {
          title: "工程实践",
          type: "list",
          items: [
            "LLM推理+记忆向量库+实时环境感知三模块耦合；",
            "NPC基于玩家历史交互和当前场景做决策；",
            "超越传统状态机与行为树的响应边界；",
            "披露三大工程实践与性能拐点数据。"
          ]
        }
      ]
    },
    {
      id: "ai-whispers-from-star",
      category: "ai",
      subcategory: "AI 游戏",
      title: "Awesome AI Game 榜单更新：《Whispers from the Star》登顶 AI NPC 游戏热度榜",
      summary: "awesome-ai-game榜单2026年6月更新，《Whispers from the Star》位列AI NPC游戏热度榜首。游戏中玩家引导被困在外星的Stella，通过实时语音和文字交流，玩家的话语决定她的生死，被评为当前AI NPC游戏的最高水准标杆。榜单按热度排序并附评测结论。",
      source: "GitHub / awesome-ai-game",
      date: "2026-09-03",
      url: "https://github.com/bowen-aigame/awesome-ai-game",
      badge: "AI游戏榜",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["AI游戏", "Whispers from the Star", "AI NPC", "awesome-list", "实时语音"],
      content: [
        {
          title: "榜单亮点",
          type: "list",
          items: [
            "《Whispers from the Star》登顶AI NPC热度榜；",
            "实时语音+文字交流，玩家话语决定角色生死；",
            "被评为当前AI NPC游戏最高水准标杆；",
            "榜单按热度排序，附评测结论。"
          ]
        }
      ]
    }
  ]
};
