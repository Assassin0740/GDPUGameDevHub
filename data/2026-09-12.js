/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-12
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-12",
    weekday: "星期六",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-12 08:40",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "🏆 Godot 首次在 GMTK Game Jam 超越 Unity：47% 参赛作品使用 Godot，Unity 降至 34%",
      "🔧 Godot 4.8 dev 5 发布：Mip-level 纹理流送、2D 编辑器工具栏重做等新特性上线",
      "🤖 Ramen 发布 Aura 1.0：面向 Unity/UE 的 AI 开发 Agent，Verification Agent + 持久项目记忆",
      "💰 完美世界《异环》全球流水破 20 亿，Q3 起逐步释放业绩",
      "📰 游戏厂商重拳打击泄密内鬼：米哈游、腾讯、叠纸纷纷通过法律手段维权"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9/1正式发布·WebGPU移出实验阶段", badge: "最新版", color: "indigo" },
      { name: "Unity 6.3 LTS", type: "unity", status: "官方LTS支持至2027年12月", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.3", type: "tuanjie", status: "9/9新版·创世版9月内测", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix维护·Inside Unreal直播", badge: "UE5工业化", color: "purple" },
      { name: "Godot 4.8 dev5", type: "godot", status: "9/10开发快照·Mip纹理流送", badge: "开发版", color: "emerald" },
      { name: "Godot 4.7.2", type: "godot", status: "最新稳定版·GMTK Game Jam登顶", badge: "轻量开源", color: "pink" }
    ]
  },
  hero: {
    id: "hero-godot-gmtk-surpass-unity",
    category: "engine",
    categoryName: "引擎前沿 · 头条深度",
    tag: "🏆 历史性时刻",
    title: "Godot 首次在 GMTK Game Jam 超越 Unity：47% 作品用开源引擎，Unity 降至 34%",
    summary: "2026年GMTK Game Jam创下历史纪录：在10511件提交作品中，47%（约4900款）使用Godot引擎开发，Unity首次跌至第二位仅占34%（约3600款）。这是GMTK Game Jam举办九年来Godot首次超越Unity，标志着开源游戏引擎在独立开发者生态中的影响力达到新高度。GameMaker以5%位列第三，Unreal Engine占3%。Godot 4.x系列的持续成熟、MIT免费协议、以及轻量高效的特性正在加速独立开发者迁移。",
    image: "",
    source: "PlayGround.ru / GMTK Game Jam 官方统计",
    date: "2026-09-09",
    url: "https://www.playground.ru/misc/news/godot_vpervye_oboshel_unity_na_gmtk_game_jam_pochti_polovina_vseh_igr_sozdana_na_otkrytom_dvizhke-1862976",
    readTime: "4 分钟深度",
    hotScore: 97,
    tags: ["Godot", "GMTK Game Jam", "Unity", "开源引擎", "独立游戏", "历史性超越"],
    content: [
      {
        title: "核心数据",
        type: "list",
        items: [
          "10511件提交作品，Godot占47%（约4900款）；",
          "Unity占34%（约3600款），首次跌至第二；",
          "GameMaker占5%，Unreal Engine占3%；",
          "GMTK Game Jam举办九年来Godot首次登顶；",
          "Godot 4.x系列成熟度显著提升驱动迁移。"
        ]
      },
      {
        title: "行业影响分析",
        type: "text",
        text: "Godot在全球最大独立游戏开发赛事中超越Unity，是开源引擎生态的里程碑事件。驱动因素包括：Godot 4.x系列渲染与编辑器能力的大幅提升、MIT协议零成本无收入分成、轻量安装包与快速启动体验、以及社区资产的持续丰富。对引擎行业而言，这意味着独立开发者的选择正在从「默认Unity」转向「按需选择」，Godot在2D和轻量3D领域已具备极强竞争力。对商业引擎厂商而言，独立开发者生态的流失将长期影响人才储备与技术口碑。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 财报 / 投融资 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "新作发售 / 展会发布 / 热门追踪" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "DOTS / C# / 性能优化 / 架构设计" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI NPC / 智能体 / 生成式AI / 大模型工具" }
  ],
  items: [
    {
      id: "godot-48-dev5",
      category: "engine",
      subcategory: "Godot",
      title: "Godot 4.8 dev 5 发布：Mip-level 纹理流送、2D 编辑器工具栏重做",
      summary: "Godot Engine发布4.8 dev5开发快照，带来Mip-level纹理流送系统、alpha test覆盖保留、2D编辑器工具栏全面重做等新特性。这是4.8系列的第五个开发快照，功能密度显著高于前几个dev版本，4.8正式版预计将在渲染管线和编辑器体验上有较大提升。",
      source: "Godot Engine 官方论坛",
      date: "2026-09-10",
      url: "https://forum.godotengine.org/t/dev-snapshot-godot-4-8-dev-5/144030",
      image: "",
      badge: "开发快照",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 88,
      tags: ["Godot 4.8", "dev5", "纹理流送", "2D编辑器", "开源引擎"],
      content: [
        {
          title: "新特性一览",
          type: "list",
          items: [
            "Mip-level纹理流送系统；",
            "Alpha test覆盖保留优化；",
            "2D编辑器工具栏全面重做；",
            "4.8系列第五个开发快照；",
            "功能密度高于前几个dev版本。"
          ]
        },
        {
          title: "开发者建议",
          type: "text",
          text: "dev版本适合提前评估4.8新特性，但不建议用于生产项目。关注纹理流送对移动端和Web导出的性能影响，以及2D工具栏重做对工作流的改变。4.8正式版预计将在渲染效率和编辑器体验上有明显提升。"
        }
      ]
    },
    {
      id: "tuanjie-1103-release",
      category: "engine",
      subcategory: "团结引擎",
      title: "团结引擎 1.10.3 版本更新发布，微信小游戏生态持续优化",
      summary: "Unity中国发布团结引擎1.10.3版本更新，持续优化微信小游戏性能与稳定性。团结引擎作为Unity中国特供版本，聚焦国内平台适配与小游戏生态，1.10.x系列在图形性能、包体优化和开发者工具链上持续迭代。",
      source: "Unity 官方开发者社区",
      date: "2026-09-09",
      url: "https://unity.cn/releases/full/202",
      image: "",
      badge: "版本更新",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["团结引擎", "1.10.3", "微信小游戏", "Unity中国", "性能优化"],
      content: [
        {
          title: "版本要点",
          type: "list",
          items: [
            "团结引擎1.10.3正式发布；",
            "微信小游戏性能与稳定性优化；",
            "图形性能持续迭代；",
            "包体优化与工具链改进；",
            "国内平台适配聚焦。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Unity中国发布团结引擎1.10.3版本更新，持续优化微信小游戏性能与稳定性。团结引擎作为Unity中国特供版本，聚焦国内平台适配与小游戏生态，1.10.x系列在图形性能、包体优化和开发者工具链上持续迭代。"
        }
      ]
    },
    {
      id: "unity-genesis-edition",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 创世版 9 月启动内测：支持 OpenHarmony 与 AliOS 国产系统",
      summary: "Unity中国引擎首款产品Unity创世版（Genesis Edition）将于9月邀请少量开发者参与内测，10-11月扩大内测范围，12月正式发布。除主流平台外，创世版还将支持信创平台，包括国产操作系统、国产CPU等，是Unity本土化战略的重要一步。",
      source: "Shulou / CTOnews",
      date: "2026-09-09",
      url: "https://www.shulou.com/a597541",
      image: "",
      badge: "创世版内测",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["Unity创世版", "Genesis Edition", "OpenHarmony", "AliOS", "信创", "国产系统"],
      content: [
        {
          title: "发布节奏",
          type: "list",
          items: [
            "9月邀请少量开发者内测；",
            "10-11月扩大内测范围；",
            "12月正式发布；",
            "支持OpenHarmony与AliOS；",
            "适配国产CPU与信创平台。"
          ]
        },
        {
          title: "战略意义",
          type: "text",
          text: "Unity创世版支持国产操作系统是跨国引擎厂商本土化战略的关键一步。在信创政策推动下，游戏引擎对国产平台的适配能力将成为国内开发者选型的重要考量。对开发者而言，创世版提供了从Unity项目平滑迁移到国产平台的路径，降低了信创适配的技术门槛。"
        }
      ]
    },
    {
      id: "nvidia-godot-pathtracing",
      category: "engine",
      subcategory: "Godot / NVIDIA",
      title: "NVIDIA 投资开源 Godot Path-Tracing Fork：MIT 协议全功能路径追踪分支",
      summary: "NVIDIA在GDC 2026发布了Godot的Path-Tracing Fork，不是专有插件也不是闭源SDK，而是MIT协议的完整GitHub Fork。该分支为Godot带来硬件级路径追踪能力，与Godot主线独立发展的Vulkan Ray-Tracing形成两条技术路线，展示了NVIDIA对开源游戏引擎生态的战略投入。",
      source: "DEV Community",
      date: "2026-09-10",
      url: "https://dev.to/ziva/nvidia-investiert-in-eine-open-source-game-engine-was-die-daten-zeigen-40d6",
      image: "",
      badge: "NVIDIA投资",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 86,
      tags: ["NVIDIA", "Godot", "Path Tracing", "MIT协议", "开源", "光线追踪"],
      content: [
        {
          title: "技术路线",
          type: "list",
          items: [
            "NVIDIA发布Godot Path-Tracing Fork；",
            "MIT协议完整开源，非专有插件；",
            "硬件级路径追踪能力；",
            "Godot主线独立发展Vulkan Ray-Tracing；",
            "两条技术路线并行推进。"
          ]
        },
        {
          title: "行业影响",
          type: "text",
          text: "NVIDIA以完整Fork而非插件的方式投入Godot生态，表明其对开源引擎的战略重视。这与NVIDIA在UE和Unity中的深度合作形成互补——通过支持Godot，NVIDIA将其RTX技术栈延伸到更广泛的独立开发者群体。对Godot社区而言，NVIDIA的Fork提供了生产级路径追踪参考，但也引发了关于主线是否会吸收这些特性的讨论。"
        }
      ]
    },
    {
      id: "jetbrains-gamedev-day-2026",
      category: "engine",
      subcategory: "开发者活动",
      title: "JetBrains GameDev Day 2026 开放注册：AI 辅助 Figma-to-Unity、Godot 程序化世界生成",
      summary: "JetBrains开放GameDev Day 2026活动注册，今年议程涵盖Unity/UE/Godot/自研引擎的实战分享与技术深潜。亮点包括AI辅助Figma-to-Unity集成、Godot程序化世界生成、ECS迁移实战、跨运行时C#/C++调试、UE性能分析等，是游戏开发者年度技术盛会。",
      source: "JetBrains 官方博客",
      date: "2026-09-03",
      url: "https://blog.jetbrains.com/dotnet/2026/09/03/register-now-for-jetbrains-gamedev-day-2026/",
      image: "",
      badge: "开发者大会",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["JetBrains", "GameDev Day", "AI辅助开发", "Figma-to-Unity", "Godot", "ECS"],
      content: [
        {
          title: "议程亮点",
          type: "list",
          items: [
            "AI辅助Figma-to-Unity集成；",
            "Godot程序化世界生成；",
            "ECS迁移实战分享；",
            "跨运行时C#/C++调试；",
            "UE性能分析与CI排障；",
            "覆盖Unity/UE/Godot/自研引擎。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "JetBrains开放GameDev Day 2026活动注册，今年议程涵盖Unity/UE/Godot/自研引擎的实战分享与技术深潜。亮点包括AI辅助Figma-to-Unity集成、Godot程序化世界生成、ECS迁移实战、跨运行时C#/C++调试、UE性能分析等，是游戏开发者年度技术盛会。"
        }
      ]
    },
    {
      id: "ue5-zebra-inside-unreal",
      category: "engine",
      subcategory: "Unreal 动画",
      title: "Inside Unreal 直播：Bringing Zebra to Life——UE 5.8 角色动画实战",
      summary: "Epic举办Inside Unreal直播「Bringing Zebra to Life: Animating in Unreal Engine 5.8」，展示在UE 5.8中进行角色动画制作的完整工作流。直播涵盖MetaHuman绑定、Sequencer镜头编辑、动画蓝图与状态机、以及UE 5.8新增动画工具的实战应用，是UE动画开发者的重要学习资源。",
      source: "Epic Developer Community",
      date: "2026-09-09",
      url: "https://forums.unrealengine.com/tags/c/general/announcements/49/unreal-engine/705",
      image: "",
      badge: "Inside Unreal",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["UE 5.8", "Inside Unreal", "角色动画", "MetaHuman", "Sequencer"],
      content: [
        {
          title: "直播内容",
          type: "list",
          items: [
            "Bringing Zebra to Life动画实战；",
            "UE 5.8角色动画完整工作流；",
            "MetaHuman绑定与Sequencer编辑；",
            "动画蓝图与状态机实战；",
            "UE 5.8新增动画工具应用。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Epic举办Inside Unreal直播「Bringing Zebra to Life: Animating in Unreal Engine 5.8」，展示在UE 5.8中进行角色动画制作的完整工作流。直播涵盖MetaHuman绑定、Sequencer镜头编辑、动画蓝图与状态机、以及UE 5.8新增动画工具的实战应用。"
        }
      ]
    },
    {
      id: "shanghai-ai-arm-gaming",
      category: "industry",
      subcategory: "AI与硬件",
      title: "上海大厂官宣用 AI 变革游戏研发：与 arm 合作神经技术，超分插帧落地移动端",
      summary: "上海某游戏大厂官宣与arm围绕神经技术展开深度合作，通过引擎原生集成及生态共建，推动超分、插帧等AI图形技术落地。目标是为移动端带来更清晰画面与更流畅帧率，覆盖游戏、车载与工业边缘三类场景，中国开发者卷画质卷性能最终要落到主流机型跑得动。",
      source: "竞核",
      date: "2026-09-12",
      url: "https://cgames.com/contents/2/12353.html",
      image: "",
      badge: "AI图形技术",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 84,
      tags: ["AI图形", "arm", "超分", "插帧", "移动端", "神经技术"],
      content: [
        {
          title: "合作要点",
          type: "list",
          items: [
            "与arm围绕神经技术深度合作；",
            "引擎原生集成AI超分/插帧；",
            "目标移动端更清晰画面更流畅帧率；",
            "覆盖游戏/车载/工业边缘三类场景；",
            "生态共建推动技术落地。"
          ]
        },
        {
          title: "行业意义",
          type: "text",
          text: "AI超分与插帧技术在移动端的引擎级集成，是移动游戏画质提升的重要方向。通过与arm的底层合作，AI图形技术可以更高效地利用移动端NPU算力，降低功耗开销。对开发者而言，引擎级AI图形能力意味着无需自行集成复杂SDK即可获得画质提升，但需关注不同芯片平台的兼容性。"
        }
      ]
    },
    {
      id: "gaming-leak-crackdown",
      category: "industry",
      subcategory: "行业治理",
      title: "游戏厂商重拳打击泄密「内鬼」：米哈游、腾讯、叠纸纷纷法律维权",
      summary: "中国经营报报道，米哈游、腾讯、叠纸游戏等厂商纷纷通过法律手段打击游戏内容泄密行为。上海高院公布了一起《崩坏：星穹铁道》版本泄密案例：玩家获取并破解测试版软件包，将内容发布在社交媒体甚至提供给他人。游戏厂商对未公布内容的保护力度持续加大。",
      source: "中国经营报 / 今日头条",
      date: "2026-09-12",
      url: "http://m.toutiao.com/group/7684372366297760307/",
      image: "",
      badge: "行业治理",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["泄密", "米哈游", "腾讯", "叠纸", "法律维权", "星穹铁道"],
      content: [
        {
          title: "案例要点",
          type: "list",
          items: [
            "米哈游/腾讯/叠纸纷纷法律维权；",
            "星穹铁道版本泄密案：玩家破解测试包；",
            "泄密内容发布社交媒体并传播他人；",
            "上海高院公布典型案例；",
            "厂商对未公布内容保护力度加大。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "中国经营报报道，米哈游、腾讯、叠纸游戏等厂商纷纷通过法律手段打击游戏内容泄密行为。上海高院公布了一起《崩坏：星穹铁道》版本泄密案例：玩家获取并破解测试版软件包，将内容发布在社交媒体甚至提供给他人。游戏厂商对未公布内容的保护力度持续加大。"
        }
      ]
    },
    {
      id: "netease-invest-kepler-hit",
      category: "industry",
      subcategory: "投融资",
      title: "网易投资的 Kepler Interactive 跑出黑马：《光与影：33号远征队》Steam 全球畅销榜夺冠",
      summary: "网易少数股权投资的发行商Kepler Interactive旗下新作《光与影：33号远征队》成为Steam全球畅销榜冠军，被称为「2025年度游戏」大黑马。网易全资收购的草蜢工作室也推出了《罗密欧是个绝命侠》。网易通过投资+收购双轨布局海外精品游戏发行，收获显著成效。",
      source: "GameLook / 新浪新闻",
      date: "2026-09-12",
      url: "https://www.sina.cn/media/1651799567",
      image: "",
      badge: "投资回报",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["网易", "Kepler Interactive", "光与影", "Steam畅销榜", "草蜢工作室", "海外投资"],
      content: [
        {
          title: "投资布局",
          type: "list",
          items: [
            "网易少数股权Kepler Interactive；",
            "《光与影：33号远征队》Steam畅销夺冠；",
            "被称2025年度游戏大黑马；",
            "全资收购草蜢工作室；",
            "《罗密欧是个绝命侠》已上线。"
          ]
        },
        {
          title: "战略解读",
          type: "text",
          text: "网易通过少数股权投资+全资收购双轨布局海外精品游戏，正在收获回报。Kepler模式的特点是保留开发团队独立性，网易提供发行和资源支持。这种「轻控制、重赋能」的投资策略与腾讯的少数股权投资模式类似，但网易更聚焦于精品单机和独立游戏领域。"
        }
      ]
    },
    {
      id: "perfect-world-yihuan-2b",
      category: "industry",
      subcategory: "财报",
      title: "完美世界《异环》全球流水破 20 亿，Q3 起逐步释放业绩",
      summary: "完美世界2026半年报披露，4月底推出的重磅新游《异环》截至8月18日已取得全球累计流水超20亿元，业绩贡献将在Q3起逐步释放。公司长青游戏矩阵持续扩充，电竞业务稳步深化，经营性现金流为正，为长期发展筑牢根基。",
      source: "完美世界官方网站",
      date: "2026-08-25",
      url: "https://www.wanmei.com/wmnews/wmnews2026/20260825/263724.shtml",
      image: "",
      badge: "流水破20亿",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["完美世界", "异环", "20亿流水", "Q3业绩", "出海", "长青矩阵"],
      content: [
        {
          title: "业绩要点",
          type: "list",
          items: [
            "《异环》全球累计流水超20亿元；",
            "截至8月18日数据；",
            "Q3起逐步释放业绩贡献；",
            "长青游戏矩阵持续扩充；",
            "经营性现金流为正。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "完美世界2026半年报披露，4月底推出的重磅新游《异环》截至8月18日已取得全球累计流水超20亿元，业绩贡献将在Q3起逐步释放。公司长青游戏矩阵持续扩充，电竞业务稳步深化，经营性现金流为正，为长期发展筑牢根基。"
        }
      ]
    },
    {
      id: "36kr-ai-gaming-h1",
      category: "industry",
      subcategory: "市场分析",
      title: "36氪深度：AI 改写游戏规则之后，75+ 公司半年报里谁在增长？",
      summary: "36氪发布深度报道，梳理75+游戏公司2026年半年报，分析AI如何改写游戏行业竞争规则。腾讯上半年游戏总收入1301亿元同比增约10%，《王者荣耀》春节档单月IAP创近2亿美元历史新高；网易上半年游戏收入约507亿元，Q2同比增速近10%。行业分化加剧，AI成为核心变量。",
      source: "36氪",
      date: "2026-09-08",
      url: "https://36kr.com/p/3974631758950662",
      image: "",
      badge: "半年报深度",
      badgeType: "business",
      readTime: "4 分钟",
      hotScore: 85,
      tags: ["36氪", "AI游戏", "半年报", "腾讯", "网易", "行业分化"],
      content: [
        {
          title: "核心数据",
          type: "list",
          items: [
            "腾讯上半年游戏收入1301亿同比增10%；",
            "王者荣耀春节档单月IAP近2亿美元；",
            "网易上半年游戏收入507亿，Q2增近10%；",
            "75+公司半年报全景梳理；",
            "AI成为行业竞争核心变量。"
          ]
        },
        {
          title: "分析视角",
          type: "text",
          text: "AI正在从三个维度改写游戏行业规则：一是研发效率提升降低中小团队门槛；二是AI NPC和动态内容改变玩家体验；三是AI驱动的用户获取和运营优化重塑流量格局。头部厂商凭借数据和算力优势在AI转型中领先，但AI也为差异化创新的中小团队提供了弯道超车机会。管理层留给游戏团队的窗口期有限，把握不住可能就得让位。"
        }
      ]
    },
    {
      id: "netease-harmony-delay",
      category: "industry",
      subcategory: "平台生态",
      title: "网易游戏集体缺席鸿蒙原生版：宣布合作近三年仍仅兼容运行",
      summary: "网易旗下《蛋仔派对》《逆水寒》手游等主力游戏均未推出鸿蒙原生版本，用户只能通过卓易通兼容运行。网易早在2023年12月就宣布与华为达成鸿蒙生态合作，被称为业内第一家启动鸿蒙原生应用开发的游戏公司，但近三年过去仍未落地原生版本，引发玩家对适配进度的质疑。",
      source: "今日头条 / 手机小百科",
      date: "2026-09-12",
      url: "http://m.toutiao.com/group/7684258869400519191/",
      image: "",
      badge: "鸿蒙适配",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["网易", "鸿蒙", "原生应用", "蛋仔派对", "逆水寒", "适配进度"],
      content: [
        {
          title: "现状梳理",
          type: "list",
          items: [
            "网易主力游戏未推鸿蒙原生版；",
            "仅能通过卓易通兼容运行；",
            "2023年12月宣布鸿蒙合作；",
            "曾称业内第一家启动鸿蒙开发；",
            "近三年未落地原生版本。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "网易旗下《蛋仔派对》《逆水寒》手游等主力游戏均未推出鸿蒙原生版本，用户只能通过卓易通兼容运行。网易早在2023年12月就宣布与华为达成鸿蒙生态合作，被称为业内第一家启动鸿蒙原生应用开发的游戏公司，但近三年过去仍未落地原生版本。"
        }
      ]
    },
    {
      id: "nhl27-launch",
      category: "games",
      subcategory: "新作发售",
      title: "EA SPORTS NHL 27 正式发售：登陆 Xbox Series X|S 与 PS5",
      summary: "EA SPORTS NHL 27于9月11日正式发售，登陆Xbox Series X|S和PS5平台。作为EA年度冰球系列新作，NHL 27带来画面升级、玩法改进和全新模式，是体育游戏爱好者秋季档的重要作品。Xbox官方将其列入9月第二周重点新游阵容。",
      source: "Xbox Wire",
      date: "2026-09-11",
      url: "https://news.xbox.com/en-us/2026/09/04/next-week-on-xbox-new-games-for-september-7-to-11/",
      image: "",
      badge: "正式发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 78,
      tags: ["NHL 27", "EA SPORTS", "冰球", "Xbox Series", "PS5", "体育游戏"],
      content: [
        {
          title: "发售信息",
          type: "list",
          items: [
            "NHL 27于9月11日正式发售；",
            "登陆Xbox Series X|S和PS5；",
            "EA年度冰球系列新作；",
            "画面升级与玩法改进；",
            "全新模式加入。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "EA SPORTS NHL 27于9月11日正式发售，登陆Xbox Series X|S和PS5平台。作为EA年度冰球系列新作，NHL 27带来画面升级、玩法改进和全新模式，是体育游戏爱好者秋季档的重要作品。"
        }
      ]
    },
    {
      id: "yihuan-ar-ciftis",
      category: "games",
      subcategory: "国产游戏",
      title: "完美世界《异环》服贸会 AR 展示：把「海特洛市」搬进首钢园",
      summary: "2026年服贸会上，完美世界自研超自然都市开放世界RPG《异环》将游戏中的「海特洛市」搬到首钢园7号馆。参观者戴上AR眼镜，平面游戏场景瞬间「跃」出屏幕，霓虹楼宇与悬浮轨道仿佛触手可及。该作也是今年国产游戏出海最具代表性的产品之一。",
      source: "北京日报 / 今日头条",
      date: "2026-09-11",
      url: "http://m.toutiao.com/group/7684046995132039734/",
      image: "",
      badge: "服贸会AR",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 81,
      tags: ["异环", "完美世界", "服贸会", "AR", "海特洛市", "国产出海"],
      content: [
        {
          title: "展示亮点",
          type: "list",
          items: [
            "《异环》海特洛市搬进首钢园；",
            "AR眼镜让游戏场景跃出屏幕；",
            "霓虹楼宇与悬浮轨道可触可感；",
            "首钢园7号馆北京大视听展区；",
            "国产游戏出海代表产品。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "2026年服贸会上，完美世界自研超自然都市开放世界RPG《异环》将游戏中的「海特洛市」搬到首钢园7号馆。参观者戴上AR眼镜，平面游戏场景瞬间「跃」出屏幕，霓虹楼宇与悬浮轨道仿佛触手可及。该作也是今年国产游戏出海最具代表性的产品之一。"
        }
      ]
    },
    {
      id: "nintendo-direct-sep-2026",
      category: "games",
      subcategory: "直面会",
      title: "Nintendo Direct 9 月汇总：Bluey 新游、Cairn 登 Switch 2、弹丸论破合集",
      summary: "任天堂9月Direct发布会公布多款新作：Bluey's Happy Snaps定档10月15日； critically acclaimed攀岩游戏Cairn将于2027年初登陆Switch 2并提供试玩；弹丸论破2x2合集2027年1月14日登陆全Switch平台。秋季任天堂内容阵容持续丰富。",
      source: "Indy100",
      date: "2026-09-11",
      url: "https://www.indy100.com/gaming/nintendo-direct-news-trailers-announcements-2677840543",
      image: "",
      badge: "Nintendo Direct",
      badgeType: "event",
      readTime: "3 分钟",
      hotScore: 82,
      tags: ["Nintendo Direct", "Switch 2", "Bluey", "Cairn", "弹丸论破", "任天堂"],
      content: [
        {
          title: "发布会重点",
          type: "list",
          items: [
            "Bluey's Happy Snaps定档10月15日；",
            "Cairn 2027年初登Switch 2，今日试玩；",
            "弹丸论破2x2合集2027年1月14日；",
            "全Switch平台支持；",
            "秋季内容阵容持续丰富。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "任天堂9月Direct发布会公布多款新作：Bluey's Happy Snaps定档10月15日；攀岩游戏Cairn将于2027年初登陆Switch 2并提供试玩；弹丸论破2x2合集2027年1月14日登陆全Switch平台。秋季任天堂内容阵容持续丰富。"
        }
      ]
    },
    {
      id: "sept-2026-biggest-launches",
      category: "games",
      subcategory: "发售日历",
      title: "2026 年 9 月 15 款大作发售指南：漫威金刚狼、巫师 3 重制版领衔",
      summary: "GamingBolt发布9月15款最大游戏发售指南：漫威金刚狼9月15日PS5独占发售，Insomniac打造Logan跨多地点动作冒险；巫师3重制版9月29日上线；NBA 2K27等体育年货如期而至；Crimson Moon等新作也在本月登场。秋季游戏旺季正式开启。",
      source: "GamingBolt",
      date: "2026-09-02",
      url: "https://gamingbolt.com/15-biggest-games-launching-in-september-2026",
      image: "",
      badge: "发售指南",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["9月大作", "漫威金刚狼", "巫师3重制版", "NBA 2K27", "发售日历", "秋季旺季"],
      content: [
        {
          title: "重点作品",
          type: "list",
          items: [
            "漫威金刚狼9/15 PS5独占；",
            "巫师3重制版9/29上线；",
            "NBA 2K27体育年货如期；",
            "Crimoon Moon等新作登场；",
            "15款最大游戏全景指南。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "GamingBolt发布9月15款最大游戏发售指南：漫威金刚狼9月15日PS5独占发售，Insomniac打造Logan跨多地点动作冒险；巫师3重制版9月29日上线；NBA 2K27等体育年货如期而至；Crimson Moon等新作也在本月登场。秋季游戏旺季正式开启。"
        }
      ]
    },
    {
      id: "epic-free-games-sep10",
      category: "games",
      subcategory: "平台福利",
      title: "Epic Games Store 9 月 10 日起双免费：Astral Ascent + Luftrausers",
      summary: "Epic Games Store确认9月10日起送出两款免费游戏：Astral Ascent（ roguelite平台动作）和Luftrausers（复古飞行射击），领取持续至9月17日。这是Epic自8月以来首次双免费周，替换此前的Alone With You单免费模式。",
      source: "GameLuster",
      date: "2026-09-05",
      url: "https://gameluster.com/epic-games-store-free-games-2/",
      image: "",
      badge: "喜加一",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["Epic Games", "免费游戏", "Astral Ascent", "Luftrausers", "喜加一"],
      content: [
        {
          title: "免费信息",
          type: "list",
          items: [
            "9月10日起双免费；",
            "Astral Ascent roguelite平台动作；",
            "Luftrausers复古飞行射击；",
            "领取持续至9月17日；",
            "8月以来首次双免费周。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Epic Games Store确认9月10日起送出两款免费游戏：Astral Ascent（roguelite平台动作）和Luftrausers（复古飞行射击），领取持续至9月17日。这是Epic自8月以来首次双免费周。"
        }
      ]
    },
    {
      id: "repo-agent-ecologies",
      category: "opensource",
      subcategory: "AI NPC",
      title: "agent-ecologies：多 Agent OS for Autonomous AI NPCs，9 月 11 日活跃更新",
      summary: "israriqbal/agent-ecologies是面向自主AI NPC的多智能体操作系统，支持React像素艺术世界、MCP工具调用、多Agent协作、虚拟世界模拟。集成Anthropic和DeepSeek模型，FastAPI后端，9月11日仍有活跃更新。是AI NPC生态系统级别的开源项目。",
      source: "GitHub",
      date: "2026-09-11",
      url: "https://github.com/israriqbal/agent-ecologies",
      image: "",
      badge: "多Agent OS",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["agent-ecologies", "多Agent", "AI NPC", "MCP", "自主智能体", "虚拟世界"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "多智能体OS for自主AI NPC；",
            "React像素艺术虚拟世界；",
            "MCP工具调用与多Agent协作；",
            "集成Anthropic/DeepSeek模型；",
            "FastAPI后端，9月11日活跃更新。"
          ]
        },
        {
          title: "价值判断",
          type: "text",
          text: "agent-ecologies的定位是「AI NPC的操作系统」，不仅提供单个NPC的智能，还支持多Agent在共享世界中的协作与生态演化。这种系统级思路比单一NPC框架更接近真实游戏世界的AI需求，适合研究AI社会模拟和动态叙事的开发者关注。"
        }
      ]
    },
    {
      id: "repo-coreai-unity",
      category: "opensource",
      subcategory: "AI NPC",
      title: "CoreAI：Unity LLM NPC 框架，函数调用+持久记忆+本地 4GB 模型即可运行",
      summary: "NeoXider/CoreAI是Unity框架，让LLM驱动的NPC和Agent直接调用游戏代码。支持函数调用、工具使用、持久记忆和运行时Lua，可在本地4GB模型或任何OpenAI兼容API上运行。无需云密钥，无需脚本化对话树，9月10日仍有更新。",
      source: "GitHub",
      date: "2026-09-10",
      url: "https://github.com/NeoXider/CoreAI",
      image: "",
      badge: "Unity AI框架",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["CoreAI", "Unity", "LLM NPC", "函数调用", "持久记忆", "本地模型"],
      content: [
        {
          title: "核心能力",
          type: "list",
          items: [
            "LLM驱动NPC直接调用游戏代码；",
            "函数调用与工具使用；",
            "持久记忆系统；",
            "运行时Lua脚本支持；",
            "本地4GB模型或OpenAI兼容API；",
            "无需云密钥无需对话树。"
          ]
        },
        {
          title: "开发者价值",
          type: "text",
          text: "CoreAI的核心优势是「NPC能直接操作游戏世界」——通过函数调用，LLM不只是生成对话，还能触发游戏机制、移动角色、改变状态。本地4GB模型可运行意味着隐私敏感项目和离线场景也能使用，是Unity AI NPC领域最成熟的开源方案之一。"
        }
      ]
    },
    {
      id: "repo-npc-forge",
      category: "opensource",
      subcategory: "AI工具",
      title: "NPC Forge：AI 角色生成器，RAG 驱动自主 NPC+记忆+语音 UI，9 月 10 日更新",
      summary: "EthanPerello/npc-forge是面向游戏、桌游RPG和叙事创作的AI角色生成器，可创建含个性、任务、对话、物品和肖像的详细NPC。支持与角色聊天、AI编辑肖像，RAG驱动自主NPC带记忆和语音UI，基于LLaMA 3.3 & Groq实现亚秒级延迟，完全免费开源。",
      source: "GitHub",
      date: "2026-09-10",
      url: "https://github.com/EthanPerello/npc-forge",
      image: "",
      badge: "AI角色生成",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["NPC Forge", "AI角色", "RAG", "语音UI", "LLaMA 3.3", "Groq", "免费开源"],
      content: [
        {
          title: "功能亮点",
          type: "list",
          items: [
            "创建含个性/任务/对话/物品的NPC；",
            "AI生成角色肖像并可编辑；",
            "RAG驱动自主NPC带记忆；",
            "语音UI支持；",
            "LLaMA 3.3 & Groq亚秒级延迟；",
            "完全免费开源无账号。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "EthanPerello/npc-forge是面向游戏、桌游RPG和叙事创作的AI角色生成器，可创建含个性、任务、对话、物品和肖像的详细NPC。支持与角色聊天、AI编辑肖像，RAG驱动自主NPC带记忆和语音UI，基于LLaMA 3.3 & Groq实现亚秒级延迟，完全免费开源。"
        }
      ]
    },
    {
      id: "repo-limboai-godot",
      category: "opensource",
      subcategory: "Godot 插件",
      title: "LimboAI：Godot 4 行为树与状态机插件，9 月 4 日活跃更新",
      summary: "limbonaut/limboai是为Godot 4设计的行为树（Behavior Trees）和状态机（State Machines）插件，为Godot游戏提供成熟的AI决策框架。支持可视化行为树编辑、状态机转换、黑板数据共享，是Godot生态中最活跃的AI决策插件之一。",
      source: "GitHub",
      date: "2026-09-04",
      url: "https://github.com/limbonaut/limboai",
      image: "",
      badge: "Godot AI插件",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["LimboAI", "Godot 4", "行为树", "状态机", "AI决策", "可视化编辑"],
      content: [
        {
          title: "插件能力",
          type: "list",
          items: [
            "Godot 4行为树与状态机插件；",
            "可视化行为树编辑器；",
            "状态机转换管理；",
            "黑板（Blackboard）数据共享；",
            "Godot生态最活跃AI决策插件。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "limbonaut/limboai是为Godot 4设计的行为树和状态机插件，为Godot游戏提供成熟的AI决策框架。支持可视化行为树编辑、状态机转换、黑板数据共享，是Godot生态中最活跃的AI决策插件之一。"
        }
      ]
    },
    {
      id: "repo-gdevelop",
      category: "opensource",
      subcategory: "游戏引擎",
      title: "GDevelop：开源跨平台 2D/3D/多人游戏引擎，vibe-coding 友好，9 月 7 日更新",
      summary: "4ian/GDevelop是开源跨平台游戏引擎，支持2D/3D/多人游戏开发，无需编程即可通过事件系统构建游戏。项目拥抱vibe-coding趋势，支持AI辅助开发，JavaScript技术栈，9月7日仍有活跃更新。是无代码/低代码游戏开发的主流选择。",
      source: "GitHub",
      date: "2026-09-07",
      url: "https://github.com/4ian/GDevelop",
      image: "",
      badge: "开源引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 79,
      tags: ["GDevelop", "开源引擎", "2D/3D", "无代码", "vibe-coding", "JavaScript"],
      content: [
        {
          title: "引擎特点",
          type: "list",
          items: [
            "开源跨平台2D/3D/多人游戏引擎；",
            "事件系统无需编程；",
            "拥抱vibe-coding与AI辅助；",
            "JavaScript技术栈；",
            "9月7日活跃更新。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "4ian/GDevelop是开源跨平台游戏引擎，支持2D/3D/多人游戏开发，无需编程即可通过事件系统构建游戏。项目拥抱vibe-coding趋势，支持AI辅助开发，JavaScript技术栈，9月7日仍有活跃更新。是无代码/低代码游戏开发的主流选择。"
        }
      ]
    },
    {
      id: "tut-ollama-local-npc",
      category: "tutorials",
      subcategory: "AI集成",
      title: "零代码实现游戏 NPC 智能对话：Ollama 本地化 AI 集成完整指南",
      summary: "CSDN发布零代码游戏NPC智能对话教程，基于Ollama本地化运行Llama 2、Mistral、Gemma等大语言模型，实现NPC对话的自然生成与上下文理解。教程涵盖Ollama安装配置、模型选择、游戏集成方案、性能优化，适合希望在本地运行AI NPC的开发者。",
      source: "CSDN",
      date: "2026-08-31",
      url: "https://blog.csdn.net/gitblog_00993/article/details/151809912",
      image: "",
      badge: "本地化AI",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 81,
      tags: ["Ollama", "本地AI", "NPC对话", "零代码", "Llama", "Mistral"],
      content: [
        {
          title: "教程内容",
          type: "list",
          items: [
            "Ollama安装与配置；",
            "Llama 2/Mistral/Gemma模型选择；",
            "NPC对话自然生成；",
            "游戏集成方案；",
            "本地化性能优化；",
            "零代码入门路径。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "CSDN发布零代码游戏NPC智能对话教程，基于Ollama本地化运行Llama 2、Mistral、Gemma等大语言模型，实现NPC对话的自然生成与上下文理解。教程涵盖Ollama安装配置、模型选择、游戏集成方案、性能优化，适合希望在本地运行AI NPC的开发者。"
        }
      ]
    },
    {
      id: "tut-unity-mcp-integration",
      category: "tutorials",
      subcategory: "AI工具",
      title: "Unity-MCP 编辑器与运行时集成：在游戏中嵌入 AI 功能的完整方案",
      summary: "CSDN发布Unity-MCP完整集成方案，通过AI技能、MCP工具和CLI命令行界面，为Unity开发者提供完整的AI开发和测试流程。任何C#方法只需一行代码即可转为AI工具，兼容Claude Code、Gemini、Copilot、Cursor等，免费使用，是Unity AI开发工具链的重要拼图。",
      source: "CSDN",
      date: "2026-08-30",
      url: "https://blog.csdn.net/gitblog_00911/article/details/152153648",
      image: "",
      badge: "MCP集成",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 83,
      tags: ["Unity-MCP", "MCP", "AI工具", "C#方法转工具", "Claude Code", "Cursor"],
      content: [
        {
          title: "方案要点",
          type: "list",
          items: [
            "AI技能+MCP工具+CLI三合一；",
            "一行代码将C#方法转为AI工具；",
            "兼容Claude Code/Gemini/Copilot/Cursor；",
            "完整AI开发与测试流程；",
            "免费使用无限制。"
          ]
        },
        {
          title: "实战价值",
          type: "text",
          text: "Unity-MCP的核心价值是让AI Agent能直接操作Unity编辑器和运行时——通过MCP协议，AI可以调用游戏内方法、查询状态、执行测试。这是AI驱动游戏开发从「写代码」到「操作编辑器」的关键一步，与Ramen Aura等商业产品形成开源替代。"
        }
      ]
    },
    {
      id: "tut-ue5-nanite-lumen",
      category: "tutorials",
      subcategory: "渲染技术",
      title: "UE5 两大杀器 Nanite 与 Lumen 深度解析：影视级画质与帧率能否兼得？",
      summary: "什么值得买发布UE5 Nanite与Lumen技术深度解析，从技术定位、开发效率、性能表现三维度对比。Nanite聚焦几何表达力突破实现数十亿多边形实时渲染，Lumen聚焦全动态光影实时计算。开发效率上Nanite让美术资产直接导入无需减面，Lumen让光照迭代从数周缩短至数天。",
      source: "什么值得买",
      date: "2026-09-01",
      url: "https://post.m.smzdm.com/p/aqrg46m7/",
      image: "",
      badge: "渲染深析",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 82,
      tags: ["UE5", "Nanite", "Lumen", "虚拟几何体", "全局光照", "性能分析"],
      content: [
        {
          title: "对比维度",
          type: "list",
          items: [
            "Nanite：数十亿多边形实时渲染；",
            "Lumen：全动态光影实时计算；",
            "Nanite让美术直接导入无需减面；",
            "Lumen光照迭代从数周缩至数天；",
            "性能表现需结合硬件评估。"
          ]
        },
        {
          title: "技术解读",
          type: "text",
          text: "Nanite和Lumen是UE5的两大核心技术突破，但两者在不同硬件上的性能表现差异较大。Nanite对几何细节的提升是革命性的，但在植被等alpha-tested材质上仍有局限；Lumen的动态光照效果惊艳但在复杂场景下GPU开销显著。开发者需根据目标平台和美术风格做针对性优化，而非默认全开。"
        }
      ]
    },
    {
      id: "tut-generative-ai-gamedev",
      category: "tutorials",
      subcategory: "AI开发",
      title: "生成式 AI 正在从内部改变游戏开发：Unity 元数据、UE PCG 与自动化工具的边界",
      summary: "Urban Splatter发布深度分析，探讨生成式AI如何从内部改变游戏开发。Unity声明AI生成资产含嵌入元数据，开发者仍需负责应用商店声明和使用权验证；UE的PCG框架可生成建筑/生物群系/大世界，但程序化生成不等于生成式AI。自动化工具需要准确标签，生成代码可能行为异常需清理。",
      source: "Urban Splatter",
      date: "2026-09-11",
      url: "https://www.urbansplatter.com/2026/09/why-generative-ai-is-changing-games-from-the-inside-out/",
      image: "",
      badge: "AI深度分析",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 80,
      tags: ["生成式AI", "Unity元数据", "UE PCG", "自动化工具", "资产合规", "开发流程"],
      content: [
        {
          title: "核心观点",
          type: "list",
          items: [
            "Unity AI生成资产含嵌入元数据；",
            "开发者需负责应用商店声明；",
            "UE PCG程序化生成≠生成式AI；",
            "自动化工具需准确标签；",
            "生成代码可能行为异常需清理。"
          ]
        },
        {
          title: "分析视角",
          type: "text",
          text: "生成式AI在游戏开发中的应用正在从「辅助工具」走向「流程嵌入」，但也带来新的治理挑战。Unity的元数据方案试图解决AI资产溯源问题，UE的PCG则坚持程序化生成的确定性路径。开发者需要在效率提升与质量控制、合规风险之间找到平衡，不能盲目信任AI生成内容。"
        }
      ]
    },
    {
      id: "ai-ramen-aura-10",
      category: "ai",
      subcategory: "AI开发工具",
      title: "Ramen 发布 Aura 1.0：面向 Unity/UE 的 AI 开发 Agent，Verification Agent+持久项目记忆",
      summary: "Ramen正式发布Aura 1.0，其AI开发Agent面向Unity和Unreal Engine开发者。1.0版本带来重新设计的界面、Verification Agent前沿级性能、更快的Blueprint生成、持久项目记忆、多项目支持、Auto模式无限使用，定价低于beta测试，新增Mac支持并登陆Fab商店。",
      source: "GamesBeat",
      date: "2026-09-09",
      url: "https://gamesbeat.com/ramen-launches-aura-1-0-to-push-agentic-ai-in-game-development/",
      image: "",
      badge: "Aura 1.0",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 87,
      tags: ["Ramen", "Aura 1.0", "AI开发Agent", "Unity", "Unreal", "Verification Agent", "Fab"],
      content: [
        {
          title: "1.0 新特性",
          type: "list",
          items: [
            "重新设计的用户界面；",
            "Verification Agent前沿级性能；",
            "更快的Blueprint生成；",
            "持久项目记忆；",
            "多项目支持+Auto模式无限使用；",
            "新增Mac支持，登陆Fab商店。"
          ]
        },
        {
          title: "行业意义",
          type: "text",
          text: "Aura 1.0是AI游戏开发Agent领域的重要里程碑——Verification Agent意味着AI生成的代码和蓝图可以自动验证正确性，持久项目记忆让AI理解项目上下文而非每次从零开始。登陆Fab商店也表明Epic对AI开发工具的生态接纳。对开发者而言，这代表AI从「代码补全」进化到「自主开发+验证」的新阶段。"
        }
      ]
    },
    {
      id: "ai-super-npc",
      category: "ai",
      subcategory: "AI NPC",
      title: "Super NPC：通用 AI NPC 系统，几行代码接入，完全本地运行",
      summary: "Super NPC是通用AI NPC系统，只需几行代码即可为任何游戏添加智能、有情感、带持久记忆的NPC。系统完全在玩家本地硬件上运行，支持语音合成集成和多语言。路线图包括Unity Asset Store包和Godot Asset Library插件，是轻量化本地AI NPC的实用方案。",
      source: "PyPI",
      date: "2026-09-06",
      url: "https://pypi.org/project/supernpc/",
      image: "",
      badge: "通用AI NPC",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Super NPC", "本地AI", "持久记忆", "情感NPC", "语音合成", "Python"],
      content: [
        {
          title: "系统特点",
          type: "list",
          items: [
            "几行代码接入任何游戏；",
            "智能有情感带持久记忆的NPC；",
            "完全本地运行无云依赖；",
            "语音合成集成；",
            "多语言支持；",
            "Unity/Godot插件在路线图中。"
          ]
        },
        {
          title: "摘要速读",
          type: "text",
          text: "Super NPC是通用AI NPC系统，只需几行代码即可为任何游戏添加智能、有情感、带持久记忆的NPC。系统完全在玩家本地硬件上运行，支持语音合成集成和多语言。路线图包括Unity Asset Store包和Godot Asset Library插件。"
        }
      ]
    },
    {
      id: "ai-character-engine",
      category: "ai",
      subcategory: "AI NPC",
      title: "AI Character Engine：Drop-in AI NPC 框架，三层记忆+动态亲密度，单接口接入任意游戏",
      summary: "aivrar/ai-character-engine是即插即用AI NPC框架，将LLM驱动的Agent变为可信角色，通过工具调用做出自主决策，构建三层渐隐记忆系统，并发展与玩家的动态亲密度。只需实现一个GamePlugin接口即可接入任何游戏——从酒馆模拟到空间站。",
      source: "GitHub",
      date: "2026-09-07",
      url: "https://github.com/aivrar/ai-character-engine",
      image: "",
      badge: "Drop-in框架",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["AI Character Engine", "Drop-in", "三层记忆", "动态亲密度", "工具调用", "跨游戏"],
      content: [
        {
          title: "框架设计",
          type: "list",
          items: [
            "即插即用AI NPC框架；",
            "工具调用自主决策；",
            "三层渐隐记忆系统；",
            "与玩家动态亲密度；",
            "单GamePlugin接口接入任意游戏。"
          ]
        },
        {
          title: "设计亮点",
          type: "text",
          text: "AI Character Engine的设计哲学是「角色可信度」——三层记忆系统让NPC记住重要事件但遗忘细节，动态亲密度让关系随互动演化，工具调用让NPC不只是说话还能行动。GamePlugin接口的抽象设计使其可以快速适配不同游戏引擎和玩法类型，是AI NPC框架中架构最清晰的方案之一。"
        }
      ]
    },
    {
      id: "ai-opengameagent",
      category: "ai",
      subcategory: "AI Agent",
      title: "OpenGameAgent：开源 C# Agent 运行时，支持 Unity/Godot/UE 的 AI NPC 与游戏内 Agent",
      summary: "EricSun0218/OpenGameAgent是开源C# Agent运行时，专为AI NPC和游戏内Agent设计。提供结构化上下文、ReAct工具使用、复杂任务规划、记忆系统和可靠动作执行，原生支持Unity、Godot、Unreal Engine和服务器。是跨引擎AI Agent的开源基础设施。",
      source: "GitHub",
      date: "2026-09-08",
      url: "https://github.com/EricSun0218/OpenGameAgent",
      image: "",
      badge: "开源Agent运行时",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["OpenGameAgent", "C#", "Agent运行时", "ReAct", "Unity", "Godot", "Unreal"],
      content: [
        {
          title: "核心能力",
          type: "list",
          items: [
            "开源C# Agent运行时；",
            "结构化上下文管理；",
            "ReAct工具使用范式；",
            "复杂任务规划与记忆系统；",
            "可靠动作执行；",
            "原生支持Unity/Godot/UE/服务器。"
          ]
        },
        {
          title: "技术价值",
          type: "text",
          text: "OpenGameAgent的定位是「游戏AI Agent的.NET标准运行时」——用C#实现意味着与Unity和Godot的C#生态无缝集成，同时通过语言绑定支持UE。ReAct范式让Agent具备推理-行动-观察的循环能力，记忆系统支持长期对话和任务状态追踪，是跨引擎AI Agent基础设施的重要开源项目。"
        }
      ]
    }
  ]
};
