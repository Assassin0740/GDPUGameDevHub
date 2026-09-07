/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-07
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-07",
    weekday: "星期一",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-07 08:20",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "🎮 2026科隆游戏展余温：巫师3重制版9/29免费升级、FF7启示、米哈游双新作领衔",
      "💰 巨人网络联合东方证券成立27.85亿创投合伙企业，布局游戏生态投资",
      "🤖 Game-NPC-Brain-LLM v2.0开源：Gemma-2 2B本地零API成本AI NPC，支持Unity/UE5/Godot",
      "🔧 Unity URP性能优化官方指南更新：禁用Opaque Texture/HDR可显著提升帧率",
      "📉 网石下半年新作从5款缩减至3款，增长空白担忧扩大；完美世界游戏收入降9.19%盈转亏"
    ],
    engineStatus: [
      { name: "Unity 6.5", type: "unity", status: "最新功能版·URP性能优化指南更新", badge: "最新版", color: "indigo" },
      { name: "Unity 6.3 LTS", type: "unity", status: "官方 LTS 支持至2027年12月", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "微信小游戏图形性能最佳实践", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "AnimGen机器学习角色控制器教程", badge: "UE5工业化", color: "purple" },
      { name: "Godot 4.7.2", type: "godot", status: "最新稳定版·开源海战游戏活跃", badge: "轻量开源", color: "emerald" },
      { name: "flutter3d", type: "godot", status: "Flutter GPU独立3D引擎实现", badge: "新兴引擎", color: "pink" }
    ]
  },
  hero: {
    id: "hero-gamescom-2026",
    category: "games",
    categoryName: "热门游戏 · 头条深度",
    tag: "🔥 科隆游戏展",
    title: "2026 科隆游戏展汇总：巫师 3 重制版 9/29 免费升级、FF7 启示、米哈游双新作领衔",
    summary: "2026科隆游戏展开幕夜放出大量重磅内容：《巫师3：狂猎 重制版》官宣9月29日上线，拥有原版玩家可免费升级，同步公布全新DLC「旧时曲」衔接巫师4世界观；《最终幻想7：启示》确认发售日；米哈游带来全新IP《源初之结Nodus Fall》等双新作；网易《无限大》定档2027年1月15日；Remedy《控制：共振》9月24日上线。国产游戏参展规模创历届新高。",
    image: "https://aka.doubaocdn.com/s/FCvxcueazL",
    source: "3DM / 游侠网 / 科隆游戏展官方",
    date: "2026-08-26",
    url: "https://m.3dmgame.com/news/202608/3951447.html",
    readTime: "4 分钟深度",
    hotScore: 95,
    tags: ["科隆游戏展", "巫师3重制版", "FF7启示", "米哈游", "网易无限大", "控制共振"],
    content: [
      {
        title: "重磅新作一览",
        type: "list",
        items: [
          "巫师3狂猎重制版9/29上线，原版玩家免费升级；",
          "全新DLC「旧时曲」公布，衔接巫师4世界观；",
          "最终幻想7：启示确认发售日；",
          "米哈游全新IP《源初之结Nodus Fall》亮相；",
          "网易《无限大》定档2027年1月15日PC/主机；",
          "Remedy《控制：共振》9月24日正式上线。"
        ]
      },
      {
        title: "行业影响",
        type: "text",
        text: "2026科隆游戏展是GTA6发售前最后一次大型行业展会，各大厂商集中释放重磅内容。国产游戏参展规模创历届新高，14款中国厂商研发或发行的游戏亮相开幕夜，最佳移动游戏五项提名首次全部被国产游戏包揽，标志着国产游戏全球话语权的显著提升。巫师3重制版的免费升级策略和全新DLC也为经典IP重制树立了新标杆。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 投融资 / 财报 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "科隆展 / 3A大作 / 发售日历 / 热门新作" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "C#架构 / 渲染优化 / 动画系统 / 设计模式" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI NPC / 智能体 / 自动化管线 / 大模型" }
  ],
  items: [
    // ------------------------- 引擎前沿 (Engine) -------------------------
    {
      id: "unity-urp-performance-config",
      category: "engine",
      subcategory: "Unity 渲染",
      title: "Unity URP 性能配置官方指南：禁用 Opaque Texture/HDR 可显著提升帧率",
      summary: "Unity官方文档更新URP性能配置指南（6000.5版本），建议禁用Opaque Texture避免存储不透明快照，Deferred路径下禁用Rendering Layers减少额外渲染目标，不需要HDR时禁用HDR计算，如需要则设为32 Bit精度。还包括减少主光阴影距离、降低LUT尺寸、设置Grading Mode为Low Dynamic Range等具体优化项。",
      source: "Unity 官方文档",
      date: "2026-08-31",
      url: "https://docs.unity3d.com/6000.5/Documentation/Manual/urp/configure-for-better-performance.html",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "官方指南",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["Unity URP", "性能优化", "Opaque Texture", "HDR", "渲染配置"],
      content: [
        {
          title: "优化要点",
          type: "list",
          items: [
            "禁用Opaque Texture避免存储不透明快照；",
            "Deferred路径禁用Rendering Layers；",
            "不需要HDR时禁用，需要则设32 Bit精度；",
            "减少主光阴影投射距离；",
            "Grading Mode设为Low Dynamic Range；",
            "降低LUT尺寸到可接受最低值。"
          ]
        }
      ]
    },
    {
      id: "unity-urp-hdrp-comparison",
      category: "engine",
      subcategory: "Unity 渲染",
      title: "Unity URP 与 HDRP 管线深度对比：GPU Instancing/SRP Batcher/Compute Shader 优化全解析",
      summary: "CSDN博主发布URP与HDRP管线深度对比，URP优化包括GPU Instancing大量重复物体自动合批、SRP Batcher减少Draw Call、LOD Group动态细节层级、轻量级粒子系统；HDRP优化包括Compute Shader用于Cluster-Based Lighting、异步计算利用GPU多队列、资源流式加载。文章从适用场景、性能特征、优化手段三维度对比。",
      source: "CSDN",
      date: "2026-08-09",
      url: "https://blog.csdn.net/2302_76776557/article/details/147005969",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "管线对比",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["URP", "HDRP", "GPU Instancing", "SRP Batcher", "Compute Shader"],
      content: [
        {
          title: "对比维度",
          type: "list",
          items: [
            "URP: GPU Instancing/SRP Batcher/LOD Group；",
            "HDRP: Compute Shader/异步计算/资源流式加载；",
            "URP适合移动端/独立/VR/AR；",
            "HDRP适合高端PC/主机/影视写实；",
            "从适用场景/性能特征/优化手段三维度对比。"
          ]
        }
      ]
    },
    {
      id: "ue5-anim-blueprint-sequencer",
      category: "engine",
      subcategory: "Unreal 动画",
      title: "UE5 动画蓝图与 Sequencer 混合官方文档：Slot 节点连接 Final Animation Pose",
      summary: "Epic官方文档更新UE5动画蓝图与Sequencer混合使用指南，详解在Content/Mannequin中创建Anim Blueprint，拖入ThirdPersonIdle连接到Slot节点再连接到Final Animation Pose节点。文档涵盖插槽（Slot）节点的作用、动画蓝图与Sequencer的混合流程、角色动画的分层控制，是UE5动画系统的核心参考。",
      source: "Epic Games 官方文档",
      date: "2026-09-05",
      url: "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/blending-animation-blueprints-with-sequencer-in-unreal-engine",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "官方文档",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["UE5", "动画蓝图", "Sequencer", "Slot节点", "Final Animation Pose"],
      content: [
        {
          title: "操作要点",
          type: "list",
          items: [
            "在Content/Mannequin创建Anim Blueprint；",
            "拖入ThirdPersonIdle动画；",
            "连接到Slot插槽节点；",
            "Slot连接到Final Animation Pose；",
            "实现动画蓝图与Sequencer混合控制。"
          ]
        }
      ]
    },
    {
      id: "ue5-animgen-ml-tutorial",
      category: "engine",
      subcategory: "Unreal 动画",
      title: "UE5 AnimGen 社区教程：机器学习角色控制器，训练自有数据+MetaHuman 动捕结合",
      summary: "Epic开发者社区发布AnimGen社区教程，AnimGen允许用户在UE中使用机器学习创建角色控制器。教程系列涵盖从自有数据训练系统、与Game Animation Sample Project结合、与MetaHuman Animator无标记动捕结合的完整流程。是UE5机器学习动画的前沿实践指南。",
      source: "Epic Developer Community",
      date: "2026-09-02",
      url: "https://forums.unrealengine.com/t/community-tutorial-animgen/2743773",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "ML动画",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["UE5", "AnimGen", "机器学习", "角色控制器", "MetaHuman"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "机器学习创建角色控制器；",
            "从自有数据训练AnimGen系统；",
            "与Game Animation Sample Project结合；",
            "与MetaHuman Animator无标记动捕结合；",
            "UE5机器学习动画前沿实践。"
          ]
        }
      ]
    },
    {
      id: "flutter3d-engine",
      category: "engine",
      subcategory: "新兴引擎",
      title: "flutter3d：基于 Flutter GPU 的独立 3D 引擎实现，9 月 6 日活跃更新",
      summary: "pleiondev/flutter3d是在Flutter GPU上独立实现的3D引擎，在其之上构建了一个游戏引擎。项目使用Dart语言开发，利用Flutter的GPU渲染能力实现3D图形，为Flutter开发者提供了进入3D游戏开发的新路径。GitHub 3d-game分类下9月6日仍有活跃更新。",
      source: "GitHub",
      date: "2026-09-06",
      url: "https://github.com/pleiondev/flutter3d",
      badge: "新兴引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["flutter3d", "Flutter GPU", "Dart", "3D引擎", "跨平台"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "Flutter GPU上的独立3D引擎实现；",
            "Dart语言开发；",
            "在3D引擎之上构建游戏引擎；",
            "为Flutter开发者提供3D游戏路径；",
            "9月6日仍有活跃更新。"
          ]
        }
      ]
    },
    {
      id: "tuanjie-wechat-minigame-perf",
      category: "engine",
      subcategory: "团结引擎",
      title: "团结引擎微信小游戏图形性能最佳实践：URP 优于自带，GPU Skinning 提升 50%",
      summary: "Unity官方开发者社区技术问答更新团结引擎微信小游戏图形性能实践，使用PackageManager安装URP性能更好，自带Bloom有20+个pass可用SRP实现轻量化版本。性能测试显示使用unlit color shader，在骁龙865上300个角色动画，GPU skinning相比SIMD有50%的提升，但提升幅度取决于实际顶点数。",
      source: "Unity 官方开发者社区",
      date: "2026-09-03",
      url: "https://developer.unity.cn/ask/question/65939d9aedbc2a528a0bd980",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "性能实践",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["团结引擎", "微信小游戏", "URP", "GPU Skinning", "性能优化"],
      content: [
        {
          title: "性能要点",
          type: "list",
          items: [
            "PackageManager安装URP性能优于自带；",
            "自带Bloom有20+pass可用SRP轻量化；",
            "骁龙865上300角色动画测试；",
            "GPU skinning比SIMD提升50%；",
            "提升幅度取决于实际顶点数。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "giant-network-vc-fund",
      category: "industry",
      subcategory: "投融资",
      title: "巨人网络联合东方证券成立 27.85 亿创投合伙企业，布局游戏生态投资",
      summary: "企查查APP显示，杭州石溪兆易一号创业投资合伙企业（有限合伙）成立，出资额27.85亿元，经营范围包含创业投资（限投资未上市企业）。股权穿透显示由上海巨人网络科技有限公司、浙商证券投资有限公司、东方证券全资子公司上海东方证券创新投资有限公司等共同持股，巨人网络持续加码游戏生态投资。",
      source: "人民财讯 / 企查查",
      date: "2026-09-01",
      url: "https://www.egsea.com/quotation/stock-info/sz002558.html",
      badge: "创投基金",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["巨人网络", "东方证券", "27.85亿", "创投", "游戏生态"],
      content: [
        {
          title: "基金信息",
          type: "list",
          items: [
            "杭州石溪兆易一号创投合伙企业成立；",
            "出资额27.85亿元；",
            "巨人网络/浙商证券/东方证券共同持股；",
            "经营范围限投资未上市企业；",
            "巨人网络持续加码游戏生态投资。"
          ]
        }
      ]
    },
    {
      id: "huya-q2-earnings",
      category: "industry",
      subcategory: "财报",
      title: "虎牙 Q2 财报：总收入 17.4 亿元同比增 11%，连续六个季度同比增长",
      summary: "虎牙公司（NYSE:HUYA）公布2026年第二季度财报，总收入同比增长11.0%至17.4亿元，连续六个季度同比增长。其中游戏相关服务、广告及其他收入持续增长，新游储备充沛、多款产品蓄势待发。游戏直播平台在行业调整期展现出稳健的盈利能力。",
      source: "经济观察网 / 虎牙",
      date: "2026-08-11",
      url: "http://www.eeo.com.cn/2026/0811/994521.shtml",
      badge: "Q2财报",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["虎牙", "Q2财报", "17.4亿", "连续六季增长", "游戏直播"],
      content: [
        {
          title: "财报要点",
          type: "list",
          items: [
            "Q2总收入17.4亿同比增11%；",
            "连续六个季度同比增长；",
            "游戏相关服务收入持续增长；",
            "新游储备充沛多款蓄势待发；",
            "游戏直播平台稳健盈利。"
          ]
        }
      ]
    },
    {
      id: "netmarble-new-games-reduced",
      category: "industry",
      subcategory: "大厂动向",
      title: "网石下半年新作从 5 款缩减至 3 款，增长空白担忧扩大",
      summary: "据BNK投资证券分析，网石（Netmarble）2026年Q2销售额7492亿韩元环比增15%，营业利润801亿韩元环比增50.8%，表面业绩呈恢复趋势。但公司将下半年新作上线计划从5款缩减至3款，引发市场对增长空白的担忧，盈利能力恢复的可持续性受到质疑。",
      source: "Prime Economy（韩国）",
      date: "2026-09-07",
      url: "https://m.newsprime.co.kr/section_view.html?no=746648",
      badge: "大厂动向",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["网石", "Netmarble", "新作缩减", "Q2财报", "增长担忧"],
      content: [
        {
          title: "业绩与隐忧",
          type: "list",
          items: [
            "Q2销售额7492亿韩元环比增15%；",
            "营业利润801亿韩元环比增50.8%；",
            "下半年新作从5款缩减至3款；",
            "增长空白担忧扩大；",
            "盈利能力恢复可持续性质疑。"
          ]
        }
      ]
    },
    {
      id: "perfect-world-h1-loss",
      category: "industry",
      subcategory: "财报",
      title: "完美世界半年报：游戏收入 26.39 亿同比降 9.19%，归母净利亏损 8879 万",
      summary: "完美世界2026年半年报显示，游戏业务整体营业收入26.39亿元较上年同期减少9.19%，归母净利润亏损8879.21万元，扣非净利润亏损1.28亿元。影视业务实现营收1.03亿元同比减少86.56%。公司表示将聚焦核心游戏业务，优化产品管线，期待新游上线带动业绩反转。",
      source: "新浪财经 / 完美世界",
      date: "2026-08-20",
      url: "https://finance.sina.com.cn/jjxw/2026-08-20/doc-ininyncn1948665.shtml.md",
      badge: "中报亏损",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["完美世界", "半年报", "26.39亿", "盈转亏", "游戏业务"],
      content: [
        {
          title: "财报数据",
          type: "list",
          items: [
            "游戏业务营收26.39亿同比降9.19%；",
            "归母净利亏损8879万元；",
            "扣非净利亏损1.28亿元；",
            "影视业务营收1.03亿同比降86.56%；",
            "聚焦核心游戏业务优化管线。"
          ]
        }
      ]
    },
    {
      id: "gaming-company-h1-surge",
      category: "industry",
      subcategory: "财报",
      title: "某游戏公司半年报：营收 47.97 亿同比增 86%，归母净利 14.28 亿增 50%",
      summary: "东方财富研究报告显示，某游戏公司2026年上半年实现营业收入47.97亿元同比增长86.06%，归母净利润14.28亿元同比增长50.34%，扣非归母净利润11.67亿元同比增长24.31%，经营活动现金流净额14.63亿元同比增长98.66%。新游表现亮眼，IP储备丰富，非经常性损益约2.61亿元。",
      source: "东方财富 / 宏观研究报告",
      date: "2026-09-06",
      url: "https://data.eastmoney.com/report/info/AP202609061829078971.html",
      badge: "业绩高增",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["游戏公司", "半年报", "47.97亿", "增86%", "IP储备"],
      content: [
        {
          title: "业绩亮点",
          type: "list",
          items: [
            "营收47.97亿同比增86.06%；",
            "归母净利14.28亿同比增50.34%；",
            "扣非净利11.67亿同比增24.31%；",
            "经营现金流14.63亿同比增98.66%；",
            "新游表现亮眼IP储备丰富。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "gc26-opening-night-summary",
      category: "games",
      subcategory: "科隆展",
      title: "GC26 开幕夜汇总：网易《无限大》定档 2027、《控制：共振》9/24 上线",
      summary: "游侠网发布2026科隆游戏展开幕夜完整汇总，网易《无限大》都市开放世界动作游戏定档2027年1月15日登陆PC主机，大量杭州上海城市实机；《控制：共振》全新独立扩展9月24日上线，曼哈顿异变场景实机；《战争机器：E-Day》等重磅作品亮相，黑暗奇幻4人合作动作游戏公布。",
      source: "游侠网",
      date: "2026-08-26",
      url: "https://3g.ali213.net/news/html/1034341.html",
      badge: "科隆展汇总",
      badgeType: "event",
      readTime: "4 分钟",
      hotScore: 84,
      tags: ["GC26", "网易无限大", "控制共振", "战争机器", "开幕夜"],
      content: [
        {
          title: "开幕夜重点",
          type: "list",
          items: [
            "网易《无限大》定档2027年1月15日；",
            "都市开放世界，杭州上海城市实机；",
            "《控制：共振》9月24日上线；",
            "《战争机器：E-Day》亮相；",
            "黑暗奇幻4人合作动作游戏公布。"
          ]
        }
      ]
    },
    {
      id: "gamescom-7min-overview",
      category: "games",
      subcategory: "科隆展",
      title: "科隆展 7 分钟速览：米哈游双新作、巫师 3 重制+DLC、FF7 启示全整理",
      summary: "抖音发布科隆游戏展7分钟速览，米哈游全新IP《源初之结Nodus Fall》正式亮相，另一款新作同步公布；《巫师3》重制版确认9月29日免费更新，全新大型DLC「旧时曲」全球首曝，衔接巫师4世界观；《最终幻想7：启示》确认发售日；《地铁2035》等作品亮相。",
      source: "抖音 / 科隆展速览",
      date: "2026-08-26",
      url: "https://www.iesdouyin.com/share/video/7678272887345679616",
      badge: "速览",
      badgeType: "event",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["科隆展", "米哈游", "源初之结", "巫师3重制", "FF7启示"],
      content: [
        {
          title: "速览要点",
          type: "list",
          items: [
            "米哈游全新IP《源初之结Nodus Fall》；",
            "巫师3重制版9/29免费更新；",
            "DLC「旧时曲」衔接巫师4世界观；",
            "FF7启示确认发售日；",
            "地铁2035等作品亮相。"
          ]
        }
      ]
    },
    {
      id: "witcher3-remaster-dlc",
      category: "games",
      subcategory: "巫师3",
      title: "巫师 3 重制版 9/29 免费升级+「旧时曲」DLC，衔接《巫师 4》世界观",
      summary: "科隆展上《巫师3：狂猎 重制版》官宣9月29日上线，拥有Switch版巫师3的玩家无论数字版还是实体版都可免费下载重制版。全新大型DLC「旧时曲」全球首曝预告，这是巫师3时隔十年的全新资料片，直接衔接未来《巫师4》的世界观，暗影火炬城制作组新作《动物朋克》也放出实机演示。",
      source: "抖音 / 科隆展",
      date: "2026-08-26",
      url: "https://www.iesdouyin.com/share/video/7678133561987288335",
      image: "https://aka.doubaocdn.com/s/FCvxcueazL",
      badge: "巫师3",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["巫师3重制版", "旧时曲DLC", "免费升级", "巫师4", "动物朋克"],
      content: [
        {
          title: "重制与DLC",
          type: "list",
          items: [
            "重制版9月29日上线；",
            "原版玩家免费升级（数字/实体均可）；",
            "DLC「旧时曲」时隔十年全新资料片；",
            "衔接巫师4世界观；",
            "暗影火炬城组新作《动物朋克》实机演示。"
          ]
        }
      ]
    },
    {
      id: "dawnwalker-release",
      category: "games",
      subcategory: "新作发售",
      title: "《黎明行者之血》9 月 3 日全平台发售，前巫师 3 核心团队打造暗黑奇幻 RPG",
      summary: "《黎明行者之血》（The Blood of Dawnwalker）于9月3日全平台发售，由前巫师3核心团队打造，暗黑奇幻RPG加开放世界玩法。玩家白天扮演有技能有魔法的剑士，夜晚则变身为吸血鬼，双重形态切换是核心玩法。科隆展上获得大量关注，被视为9月最值得体验的RPG新作。",
      source: "抖音 / 科隆展",
      date: "2026-08-26",
      url: "https://www.iesdouyin.com/share/video/7678207656087096585",
      badge: "新作发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["黎明行者之血", "前巫师3团队", "暗黑RPG", "吸血鬼", "开放世界"],
      content: [
        {
          title: "游戏特色",
          type: "list",
          items: [
            "9月3日全平台发售；",
            "前巫师3核心团队打造；",
            "暗黑奇幻RPG+开放世界；",
            "白天剑士/夜晚吸血鬼双重形态；",
            "9月最值得体验RPG新作。"
          ]
        }
      ]
    },
    {
      id: "control-resonant-preview",
      category: "games",
      subcategory: "新作发售",
      title: "《控制：共振》9 月 24 日发售：主角换为前作女主弟弟，高速 ACT 更像鬼泣",
      summary: "Remedy的《控制：共振》定档9月24日正式发售，科幻超自然题材。本作主角换成了上一代女主的弟弟，动作系统大幅增强，玩起来更像鬼泣那种高速ACT，重力变化和武器多种形态是核心特色，大锤武器抡圆攻击体验爽快。科隆展上放出完整实机演示。",
      source: "抖音 / 科隆展",
      date: "2026-08-26",
      url: "https://www.iesdouyin.com/share/video/7678101839811841286",
      badge: "9月24日",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["控制共振", "Remedy", "高速ACT", "9月24日", "超自然"],
      content: [
        {
          title: "游戏亮点",
          type: "list",
          items: [
            "9月24日正式发售；",
            "主角换为前作女主弟弟；",
            "动作系统增强更像鬼泣高速ACT；",
            "重力变化+武器多种形态；",
            "大锤武器抡圆攻击爽快。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-game-npc-brain-llm",
      category: "opensource",
      subcategory: "AI NPC",
      title: "Game-NPC-Brain-LLM v2.0：Gemma-2 2B 本地零 API 成本 AI NPC 引擎",
      summary: "gugu-2/Game-NPC-Brain-LLM是Ultimate Game NPC Engine v2.0，一个完整的本地零API成本AI NPC大脑。基于Gemma-2 2B + Coqui XTTS-v2构建，完全支持Unity、Unreal Engine 5和Godot 4。与竞品每次API调用0.01美元相比，本引擎100%本地运行每次调用0成本，Apache-2.0协议开源。",
      source: "GitHub",
      date: "2026-09-02",
      url: "https://github.com/gugu-2/Game-NPC-Brain-LLM",
      badge: "AI NPC引擎",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["Game-NPC-Brain", "Gemma-2 2B", "本地AI", "零API成本", "Unity/UE/Godot"],
      content: [
        {
          title: "引擎特点",
          type: "list",
          items: [
            "Gemma-2 2B+Coqui XTTS-v2本地运行；",
            "100%本地零API成本；",
            "完整支持Unity/UE5/Godot 4；",
            "竞品每次调用$0.01 vs 本引擎$0；",
            "Apache-2.0协议开源。"
          ]
        }
      ]
    },
    {
      id: "repo-ai-game-npc-framework",
      category: "opensource",
      subcategory: "AI NPC",
      title: "AI-Game-NPC-Framework：跨引擎 Unity/Roblox，PostgreSQL 持久记忆+人格注入",
      summary: "blackcream3130/AI-Game-NPC-Framework是跨引擎AI NPC框架，提供Unity(C#)和Roblox即用客户端脚本。使用PostgreSQL+Docker存储玩家-NPC聊天历史实现持久记忆，NPC能记住过去互动。人格注入系统可轻松配置独特性格（如让NPC像特定动漫角色），内置轻量级网关，9月6日仍有更新。",
      source: "GitHub",
      date: "2026-09-06",
      url: "https://github.com/blackcream3130/AI-Game-NPC-Framework",
      badge: "AI NPC框架",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["AI NPC框架", "Unity", "Roblox", "PostgreSQL", "人格注入"],
      content: [
        {
          title: "框架能力",
          type: "list",
          items: [
            "跨引擎Unity(C#)/Roblox客户端；",
            "PostgreSQL+Docker持久记忆；",
            "NPC记住过去互动；",
            "人格注入系统配置独特性格；",
            "轻量级网关，9月6日更新。"
          ]
        }
      ]
    },
    {
      id: "repo-operation-steel-tide",
      category: "opensource",
      subcategory: "Godot 游戏",
      title: "operation-steel-tide：开源 Godot 海战游戏，9 月 5 日活跃更新",
      summary: "AetherRadar/operation-steel-tide是开源Godot海战游戏，在GitHub game-development C#分类下9月5日仍有活跃更新。项目展示了Godot引擎在2D/2.5D海战游戏开发中的应用，包含舰船控制、海战系统、关卡设计等完整游戏功能，是学习Godot游戏开发的实用参考项目。",
      source: "GitHub",
      date: "2026-09-05",
      url: "https://github.com/AetherRadar/operation-steel-tide",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "Godot游戏",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["operation-steel-tide", "Godot", "海战游戏", "开源游戏", "C#"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "开源Godot海战游戏；",
            "9月5日仍有活跃更新；",
            "舰船控制与海战系统；",
            "完整关卡设计；",
            "Godot游戏开发实用参考。"
          ]
        }
      ]
    },
    {
      id: "repo-simpsons-ps3-remake",
      category: "opensource",
      subcategory: "重制引擎",
      title: "TheSimpsonsGame-PS3：《辛普森一家》PS3 版重制引擎模块，C# 实现",
      summary: "Superposition28/TheSimpsonsGame-PS3是《辛普森一家》游戏PS3版的RemakeEngine模块，使用C#实现。项目在GitHub game-development C#分类下9月5日更新，旨在为经典PS3游戏构建现代重制引擎，包含Discord社区支持。是游戏重制/逆向工程领域的有趣开源项目。",
      source: "GitHub",
      date: "2026-09-05",
      url: "https://github.com/Superposition28/TheSimpsonsGame-PS3",
      badge: "重制引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 77,
      tags: ["辛普森一家", "PS3", "重制引擎", "C#", "逆向工程"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "《辛普森一家》PS3版重制引擎；",
            "C#实现RemakeEngine模块；",
            "9月5日GitHub活跃更新；",
            "经典游戏现代重制；",
            "Discord社区支持。"
          ]
        }
      ]
    },
    {
      id: "repo-diablo-web",
      category: "opensource",
      subcategory: "浏览器游戏",
      title: "diablo_web：React+TypeScript+WASM 暗黑类浏览器游戏客户端，9 月 6 日更新",
      summary: "JohnImril/diablo_web是暗黑破坏神风格的浏览器游戏客户端，使用React、TypeScript、Vite构建，集成WebAssembly运行时和Canvas渲染。项目在GitHub browser-game分类下9月6日仍有更新，展示了现代Web技术栈构建ARPG游戏的完整方案，是浏览器游戏开发的前沿参考。",
      source: "GitHub",
      date: "2026-09-06",
      url: "https://github.com/JohnImril/diablo_web",
      badge: "浏览器ARPG",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["diablo_web", "React", "TypeScript", "WASM", "Canvas渲染"],
      content: [
        {
          title: "技术栈",
          type: "list",
          items: [
            "暗黑破坏神风格浏览器客户端；",
            "React+TypeScript+Vite构建；",
            "WebAssembly运行时集成；",
            "Canvas渲染；",
            "9月6日仍有活跃更新。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-unity-story-system",
      category: "tutorials",
      subcategory: "Unity C#",
      title: "Unity C# 剧情系统实战：StoryNode/TriggerCondition/FlowController 模块化架构",
      summary: "CSDN博主发布沉浸式射击游戏C#剧情系统实战全解析，提出模块化架构：StoryNode管理事件单元（对话/动画/场景切换），TriggerCondition实现动态触发，FlowController协调流程推进。关键技术包括基于协程的节点生命周期控制、空间分割优化触发检测、状态机管理分支选择，平衡枪战快感与叙事沉浸。",
      source: "CSDN",
      date: "2026-09-05",
      url: "https://blog.csdn.net/qq_33060405/article/details/154275661",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "剧情系统",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 81,
      tags: ["Unity C#", "剧情系统", "StoryNode", "状态机", "协程"],
      content: [
        {
          title: "架构设计",
          type: "list",
          items: [
            "StoryNode管理对话/动画/场景切换；",
            "TriggerCondition实现动态触发；",
            "FlowController协调流程推进；",
            "协程控制节点生命周期；",
            "空间分割优化触发检测；",
            "状态机管理分支选择。"
          ]
        }
      ]
    },
    {
      id: "tut-unity-core-loop",
      category: "tutorials",
      subcategory: "Unity C#",
      title: "Unity C# 从零到精通：构建核心游戏循环、UI 系统与动态敌人 AI",
      summary: "CSDN博主发布Unity C#项目深化教程，涵盖单例模式确保全局唯一GameManager实例、状态机使用GameState枚举和ChangeState方法管理游戏阶段、时间控制通过Time.timeScale实现暂停/加速。教程还包括UI系统构建、动态敌人AI系统设计，是从基础到项目实战的完整学习路径。",
      source: "CSDN",
      date: "2026-09-04",
      url: "https://blog.csdn.net/Kiradzy/article/details/147618922",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "C#实战",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 80,
      tags: ["Unity C#", "游戏循环", "单例模式", "状态机", "敌人AI"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "单例模式全局唯一GameManager；",
            "GameState枚举+ChangeState状态机；",
            "Time.timeScale实现暂停/加速；",
            "UI系统构建；",
            "动态敌人AI系统设计。"
          ]
        }
      ]
    },
    {
      id: "tut-game-architecture",
      category: "tutorials",
      subcategory: "架构设计",
      title: "游戏架构实战从入门到精通：云游戏/AI/分布式/微服务十条架构准则",
      summary: "CSDN博主发布游戏架构实战深度文章，指出云游戏、AI、分布式、微服务彻底成为主流，跨平台无缝协作，工具和脚本自动生成，一切在架构中高度标准化，工程师更多管数据流和接口。文章总结十条架构准则：先做模块划分分层清晰、各模块边界职责明确、数据流与接口规范一致、可扩展易维护等。",
      source: "CSDN",
      date: "2026-09-05",
      url: "https://blog.csdn.net/qq_33060405/article/details/154583364",
      badge: "架构准则",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 79,
      tags: ["游戏架构", "云游戏", "分布式", "微服务", "架构准则"],
      content: [
        {
          title: "架构趋势",
          type: "list",
          items: [
            "云游戏/AI/分布式/微服务成主流；",
            "跨平台无缝协作；",
            "工具脚本自动生成；",
            "架构高度标准化；",
            "工程师更多管数据流和接口；",
            "十条架构准则总结。"
          ]
        }
      ]
    },
    {
      id: "tut-unity-2d-architecture",
      category: "tutorials",
      subcategory: "Unity C#",
      title: "Unity3D 可扩展 2D 游戏架构毕设：状态机模式 PlayerController 实战",
      summary: "CSDN博主发布Unity3D简单小游戏毕设教程，从零实现可扩展的2D游戏架构。核心使用状态机模式，PlayerController的Update中只需调用_stateMachine.Update()，PlayerIdleState等状态类实现Enter/Exit/Update方法。教程涵盖跳跃攻击等状态切换、可扩展架构设计，是设计模式在游戏中的实战应用。",
      source: "CSDN",
      date: "2026-08-04",
      url: "https://blog.csdn.net/2600_94959810/article/details/158287071",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "状态机实战",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 78,
      tags: ["Unity", "2D架构", "状态机", "PlayerController", "设计模式"],
      content: [
        {
          title: "架构要点",
          type: "list",
          items: [
            "可扩展2D游戏架构；",
            "状态机模式核心设计；",
            "PlayerController调用stateMachine.Update；",
            "PlayerIdleState等状态类实现；",
            "Enter/Exit/Update方法完整实现；",
            "跳跃攻击状态切换。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "ai-gamedev-guide-2026",
      category: "ai",
      subcategory: "AI游戏开发",
      title: "2026 AI 游戏开发实战指南：从 NVIDIA ACE 到 Summer Engine，三大范式转变",
      summary: "CSDN博主发布2026 AI游戏开发实战指南，指出2026年是AI游戏开发从实验性玩具走向生产力工具的关键拐点。NVIDIA发布ACE Game Agent SDK让AI角色拥有真正智能；UniGen在ICSE 2026展示91.4%时间缩减；Summer Engine以Build-Play-Fix循环重新定义游戏开发工作流。这些技术指向三个范式转变。",
      source: "CSDN",
      date: "2026-09-04",
      url: "https://blog.csdn.net/2401_88352165/article/details/164115416",
      badge: "AI实战指南",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 84,
      tags: ["AI游戏开发", "NVIDIA ACE", "UniGen", "Summer Engine", "范式转变"],
      content: [
        {
          title: "三大技术",
          type: "list",
          items: [
            "NVIDIA ACE Game Agent SDK AI角色智能；",
            "UniGen ICSE 2026展示91.4%时间缩减；",
            "Summer Engine Build-Play-Fix循环；",
            "从实验性玩具到生产力工具拐点；",
            "三大范式转变重塑开发流程。"
          ]
        }
      ]
    },
    {
      id: "ai-gemma3-npc",
      category: "ai",
      subcategory: "AI NPC",
      title: "Gemma3NPC：基于 Gemma 3 的实时智能 NPC 交互解决方案",
      summary: "CSDN博主发布Gemma3NPC实时智能NPC交互解决方案，专注于实现游戏中NPC的实时智能交互。方案基于Gemma 3大模型，解决传统NPC对话僵化、缺乏上下文理解的问题，实现NPC能够根据玩家行为和对话历史动态生成回应，是游戏AI角色落地的实用技术方案。",
      source: "CSDN",
      date: "2026-09-04",
      url: "https://blog.csdn.net/weixin_42525482/article/details/160637923",
      badge: "Gemma3 NPC",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["Gemma3NPC", "Gemma 3", "实时NPC", "智能交互", "大模型"],
      content: [
        {
          title: "方案特点",
          type: "list",
          items: [
            "基于Gemma 3大模型；",
            "实时NPC智能交互；",
            "解决传统NPC对话僵化问题；",
            "根据玩家行为动态生成回应；",
            "对话历史上下文理解。"
          ]
        }
      ]
    },
    {
      id: "ai-inworld-platform",
      category: "ai",
      subcategory: "AI工具",
      title: "Inworld：AI 游戏开发平台，动态 NPC 自适应认知+实时对话+深度引擎集成",
      summary: "Inworld是AI游戏开发平台，让工作室构建具有自适应认知的动态NPC，支持实时对话和深度Unity与Unreal Engine集成。平台采用freemium定价模式，适用于游戏开发、互动娱乐、教育科技、VR/AR制作等场景。核心能力包括NPC行为设计、游戏对话脚本编写、角色记忆系统，是AI NPC落地的成熟SaaS方案。",
      source: "SwitchTools",
      date: "2026-09-03",
      url: "https://www.switchtools.io/tool/inworld",
      badge: "AI平台",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["Inworld", "AI NPC", "自适应认知", "Unity/UE集成", "SaaS"],
      content: [
        {
          title: "平台能力",
          type: "list",
          items: [
            "动态NPC自适应认知；",
            "实时对话系统；",
            "深度Unity/UE集成；",
            "NPC行为设计与对话脚本；",
            "角色记忆系统，freemium定价。"
          ]
        }
      ]
    },
    {
      id: "ai-bitpart-platform",
      category: "ai",
      subcategory: "AI工具",
      title: "Bitpart AI：引擎无关 NPC 行为平台，持久记忆+自适应对话+上下文驱动",
      summary: "Bitpart AI是引擎无关的NPC行为平台，为游戏角色提供持久记忆、自适应对话和运行时上下文驱动响应。平台免费使用，面向高级开发者，适用于游戏开发、VR互动媒体、影视VFX、教育科技。核心能力包括NPC行为创作、动态对话生成、游戏AI集成、角色记忆系统，是Convai/Inworld之外的新选择。",
      source: "SwitchTools",
      date: "2026-09-05",
      url: "https://www.switchtools.io/tool/bitpart-ai",
      badge: "NPC行为平台",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["Bitpart AI", "NPC行为", "持久记忆", "引擎无关", "免费"],
      content: [
        {
          title: "平台特点",
          type: "list",
          items: [
            "引擎无关NPC行为平台；",
            "持久记忆+自适应对话；",
            "运行时上下文驱动响应；",
            "免费使用面向高级开发者；",
            "Convai/Inworld之外的新选择。"
          ]
        }
      ]
    },
    {
      id: "ai-unity-architecture-skill",
      category: "ai",
      subcategory: "AI辅助开发",
      title: "Unity Architecture AI 辅助架构设计工具：事件系统/ScriptableObject 变量/MVC 模式",
      summary: "LobeHub上的Unity Architecture技能为AI辅助Unity架构设计提供完整方案，涵盖GameEventListener事件系统（设计器可在Inspector可视化接线、系统解耦、事件复用）、ScriptableObject变量跨场景共享数据、MVC/MVP模式分离数据表现逻辑。是AI辅助游戏架构设计的实用工具集。",
      source: "LobeHub",
      date: "2026-09-02",
      url: "https://lobehub.com/skills/cryptorabea-claude_unity_dev_plugin-unity-architecture",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "AI架构工具",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 77,
      tags: ["Unity Architecture", "AI辅助", "事件系统", "ScriptableObject", "MVC"],
      content: [
        {
          title: "架构方案",
          type: "list",
          items: [
            "GameEventListener事件系统；",
            "Inspector可视化接线；",
            "ScriptableObject变量跨场景共享；",
            "MVC/MVP分离数据表现逻辑；",
            "AI辅助游戏架构设计工具集。"
          ]
        }
      ]
    }
  ]
};
