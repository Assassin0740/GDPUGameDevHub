/**
 * 广药 游戏开发情报中枢 · 每日技术情报 - 2026-09-02
 */

window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-02",
    weekday: "星期三",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "全生态技术演进 · 3A工业化与前沿行业情报",
    updateTime: "2026-09-02 08:35",
    editor: "广药技术中枢 & 豆包极客",
    highlights: [
      "💰 英伟达据悉本周将以近140亿美元收购Hugging Face，AI开发生态格局生变",
      "🎮 VAST完成约30亿元B轮+B+轮融资，AI 3D领域累计融资近50亿创纪录",
      "🏭 影眸科技发布Hyper3D WorldGen世界生成模型，一张照片还原可编辑3D场景",
      "📱 Supercell签署收购Metacore及《Merge Mansion》协议，9月底完成交割",
      "🔧 团结引擎1.10.2版本更新，UE5.7威尼斯Demo展示次世代渲染潜力"
    ],
    engineStatus: [
      { name: "Unity 7", type: "unity", status: "Unite Seoul官宣·下一代主版本", badge: "新架构", color: "indigo" },
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 长期支持", badge: "LTS 推荐", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "8月27日版本更新", badge: "全平台适配", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性补丁", badge: "UE5工业化", color: "purple" },
      { name: "UE 6", type: "unreal", status: "2027年底 Early Access", badge: "Verse语言", color: "pink" },
      { name: "Godot 4.4", type: "godot", status: "Jolt物理集成·开源引擎", badge: "轻量开源", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-nvidia-huggingface",
    category: "industry",
    categoryName: "行业热点 · 头条深度",
    tag: "🔥 今日爆炸新闻",
    title: "英伟达据悉本周将以近140亿美元收购Hugging Face，AI游戏开发生态格局生变",
    summary: "财联社9月2日早间消息，英伟达据悉即将于本周达成一项价值近140亿美元的收购Hugging Face协议。Hugging Face作为全球最大AI开源模型社区，拥有Transformers库和模型Hub，是AI开发者的核心基础设施。若交易完成，英伟达将掌控AI模型分发与协作的最大入口，对游戏AI工具链（NPC生成、内容创作、MCP生态）将产生深远影响。此前8月底已有129亿美元收购传闻，本次金额进一步上调。",
    image: "https://aka.doubaocdn.com/s/beUDLZgJiC",
    source: "财联社 / 什么值得买",
    date: "2026-09-02",
    url: "https://www.cls.cn/detail/2471440",
    readTime: "4 分钟深度",
    hotScore: 99,
    tags: ["英伟达", "Hugging Face", "收购", "AI生态", "140亿美元"],
    content: [
      {
        title: "交易要点",
        type: "list",
        items: [
          "英伟达据悉本周达成近140亿美元收购Hugging Face协议；",
          "Hugging Face拥有全球最大AI开源模型社区与Transformers库；",
          "此前8月底已有129亿美元收购传闻，金额进一步上调；",
          "交易将强化英伟达开放模型战略，为AI硬件销售提供新渠道。"
        ]
      },
      {
        title: "对游戏开发的影响",
        type: "text",
        text: "Hugging Face是AI模型的'GitHub'，游戏开发者常用其下载对话模型、图像生成模型和语音模型来构建AI NPC和内容管线。英伟达收购后可能将HF生态与CUDA、ACE Game Agent SDK深度整合，降低游戏AI的部署门槛。同时，MCP（模型上下文协议）生态可能获得更多官方支持，Unity/UE的AI工具链集成将加速。开发者需关注HF模型的开源策略是否变化，以及英伟达是否推出游戏专用的模型托管服务。"
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
      id: "tuanjie-1102-update",
      category: "engine",
      subcategory: "团结引擎",
      title: "团结引擎 1.10.2 版本更新发布，持续优化稳定性与全平台适配",
      summary: "Unity中国旗下团结引擎发布1.10.2版本更新，持续优化引擎稳定性与全平台适配能力。此前1.10.0已推出Infinity粒子系统正式版，AnimGraph 1.0.0正式版也已上线，围绕编辑体验、动画混合与过渡、运行时控制和性能优化进行系统升级。团结引擎已与开放原子开源基金会达成战略合作，全面支持OpenHarmony操作系统。",
      source: "Shulou / Unity官方开发者社区",
      date: "2026-08-27",
      url: "https://www.shulou.com/a613871",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "版本更新",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["团结引擎", "Unity中国", "版本更新", "全平台适配"],
      content: [
        {
          title: "更新要点",
          type: "list",
          items: [
            "团结引擎1.10.2发布，优化稳定性与全平台适配；",
            "1.10.0已推出Infinity粒子系统正式版；",
            "AnimGraph 1.0.0正式版上线，编辑界面全新升级；",
            "动画混合与过渡、运行时控制和性能优化系统升级。"
          ]
        }
      ]
    },
    {
      id: "unity-enterprise-minimum-commitment",
      category: "engine",
      subcategory: "Unity 商业",
      title: "Unity 2026新政：企业版新增最低承诺金制度，大厂被收'保护费'",
      summary: "2026年5月下旬，Unity向部分大型客户发送邮件，正式推行'Unity企业最低承诺计划'新收费机制，要求年收入超过一定规模的企业支付最低承诺金。同时Unity终止向中国地区提供海外商店访问权限。分析认为大厂成本上升，但小团队反而获得免费云服务等利好。",
      source: "什么值得买",
      date: "2026-09-01",
      url: "https://post.m.smzdm.com/p/a5r7ok73/",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "商业政策",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["Unity", "企业版", "收费政策", "最低承诺金"],
      content: [
        {
          title: "新政要点",
          type: "list",
          items: [
            "Unity企业版新增最低承诺金制度，面向大型客户；",
            "终止向中国地区提供海外商店访问权限；",
            "大厂开发成本上升，小团队获免费云服务等利好；",
            "开发者需评估项目规模与授权成本的匹配度。"
          ]
        }
      ]
    },
    {
      id: "unity7-unite-seoul",
      category: "engine",
      subcategory: "Unity",
      title: "Unite Seoul 2026 回顾：Unity 7 正式官宣，下一代编辑器与运行时架构",
      summary: "Unity在Unite Seoul 2026主题演讲中正式宣布Unity 7——编辑器和运行时的下一个主要版本，基于Unity 6.x构建以实现更快迭代和连接。演讲涵盖引擎、变现和协作工具全面更新，标志Unity进入新一代架构周期。",
      source: "Unity 官方博客",
      date: "2026-07-21",
      url: "https://unity.com/blog/unite-seoul-keynote-2026-recap",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "引擎官宣",
      badgeType: "engine",
      readTime: "5 分钟",
      hotScore: 90,
      tags: ["Unity", "Unity 7", "Unite Seoul", "引擎架构"],
      content: [
        {
          title: "核心发布",
          type: "list",
          items: [
            "Unity 7正式官宣，编辑器和运行时下一个主要版本；",
            "基于Unity 6.x基础构建，目标更快迭代与连接；",
            "涵盖引擎、变现和协作工具全面更新；",
            "主题演讲全程可在Unity官网回看。"
          ]
        }
      ]
    },
    {
      id: "ue57-venice-demo",
      category: "engine",
      subcategory: "Unreal",
      title: "UE5.7 次世代技术 Demo 发布：威尼斯水城主题，5090跑4K稳定60FPS",
      summary: "Scans Factory发布全新Unreal Engine 5.7次世代技术Demo，以意大利著名水城威尼斯为主题，充分利用Lumen全局光照和Nanite几何体技术展示最新版UE5引擎在图形和性能上的惊人潜力，RTX 5090可跑4K稳定60FPS。",
      source: "中华网软件 / 快科技",
      date: "2026-09-01",
      url: "https://soft.china.com/article/1518127.html",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "技术Demo",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["UE5.7", "技术Demo", "威尼斯", "Lumen", "Nanite", "4K60FPS"],
      content: [
        {
          title: "Demo亮点",
          type: "list",
          items: [
            "Scans Factory发布UE5.7次世代技术Demo；",
            "以意大利水城威尼斯为主题；",
            "充分利用Lumen全局光照和Nanite几何体技术；",
            "RTX 5090可跑4K稳定60FPS。"
          ]
        }
      ]
    },
    {
      id: "ue6-roadmap-indie",
      category: "engine",
      subcategory: "Unreal",
      title: "UE6 路线图深度解析：Verse优先、跨生态内容互通、MCP连接AI开发管线",
      summary: "Epic在State of Unreal 2026正式公布UE6愿景：合并UE5与UEFN为统一引擎，公开路线图包含三大转变——Verse优先的游戏玩法模型、跨生态系统的可互操作内容与经济、MCP连接的AI辅助开发管线工具。独立开发者需提前锁定迁移策略。",
      source: "GamineAI",
      date: "2026-08-02",
      url: "https://gamineai.com/blog/unreal-engine-6-roadmap-indie-dev-playbook-july-2026",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "路线图",
      badgeType: "engine",
      readTime: "4 分钟",
      hotScore: 87,
      tags: ["UE6", "Verse", "MCP", "路线图", "独立开发者"],
      content: [
        {
          title: "三大转变",
          type: "list",
          items: [
            "Verse优先的游戏玩法模型，逐步替代C++和蓝图；",
            "跨生态系统的可互操作内容与经济体系；",
            "MCP连接的AI辅助开发管线工具；",
            "UE6预计2027年底Early Access，商用版2028-2029年。"
          ]
        }
      ]
    },
    {
      id: "godot44-release",
      category: "engine",
      subcategory: "Godot",
      title: "Godot 4.4 发布：近3000次提交、Jolt物理直接集成，超500位贡献者",
      summary: "开源跨平台游戏引擎Godot 4.4正式发布，包含近3000次提交，重点改进编辑器整体工作流与易用性，将此前作为扩展的Jolt Physics代码直接集成进引擎，同时提升游戏内交互式编辑能力，超过500位贡献者参与。",
      source: "Godot Engine 官方",
      date: "2026-08-25",
      url: "https://godotengine.org/releases/4.4/index.html",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "版本发布",
      badgeType: "engine",
      readTime: "3 分钟",
      hotScore: 89,
      tags: ["Godot", "Godot 4.4", "Jolt Physics", "开源引擎"],
      content: [
        {
          title: "发布亮点",
          type: "list",
          items: [
            "近3000次提交，重点提升编辑器工作流与易用性；",
            "Jolt Physics代码直接集成进引擎；",
            "游戏内交互式编辑能力改进；",
            "超500位贡献者参与本次功能更新。"
          ]
        }
      ]
    },

    // ------------------------- 行业热点 (Industry) -------------------------
    {
      id: "vast-30b-funding",
      category: "industry",
      subcategory: "AI 3D 融资",
      title: "VAST 完成约30亿元B轮+B+轮融资，AI 3D领域累计融资近50亿创历史纪录",
      summary: "AI 3D大模型公司VAST于9月1日官宣完成约30亿元B轮和B+轮融资，经纬创投领投，完美世界、蓝色光标、三七互娱等多家产业资本入局。VAST旗下拥有Tripo系列3D大模型、Project Eden世界模型、Tripo Studio，累计融资近50亿元，刷新AI 3D领域历史纪录。",
      source: "凤凰网科技 / 每日经济新闻",
      date: "2026-09-01",
      url: "http://m.toutiao.com/group/7680524098191278592/",
      image: "https://aka.doubaocdn.com/s/b6bwxj9xD8",
      badge: "30亿融资",
      badgeType: "ai",
      readTime: "3 分钟",
      hotScore: 94,
      tags: ["VAST", "Tripo", "AI 3D", "融资", "完美世界", "三七互娱"],
      content: [
        {
          title: "融资详情",
          type: "list",
          items: [
            "VAST完成约30亿元B轮+B+轮融资，经纬创投领投；",
            "完美世界、蓝色光标、三七互娱等产业资本入局；",
            "旗下Tripo系列3D大模型、Project Eden世界模型；",
            "累计融资近50亿元，刷新AI 3D领域历史纪录。"
          ]
        },
        {
          title: "游戏行业影响",
          type: "text",
          text: "VAST的Tripo已被网易《蛋仔派对》蛋仔工坊用于3D模型拆分功能。AI 3D融资热潮意味着游戏资产生产的自动化工具将快速成熟，中小团队的3D内容生产成本有望大幅下降。完美世界、三七互娱等游戏公司入局，预示AI 3D将成为游戏工业化管线的标配。"
        }
      ]
    },
    {
      id: "yingmou-worldgen",
      category: "industry",
      subcategory: "AI 3D",
      title: "影眸科技发布 Hyper3D WorldGen 世界生成模型：一张照片2-3分钟还原可编辑3D场景",
      summary: "上海影眸科技正式发布Hyper3D WorldGen世界生成模型，用户上传一张客厅实拍图，系统自动识别沙发、地毯、台灯、猫等独立物体，2-3分钟内还原出完整的可编辑3D场景。与VAST 30亿融资同日落地，AI 3D场景竞赛进入产业化分水岭。",
      source: "每日经济新闻 / 今日头条",
      date: "2026-09-02",
      url: "http://m.toutiao.com/group/7680710714697040399/",
      badge: "产品发布",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 91,
      tags: ["影眸科技", "Hyper3D", "世界生成", "AI 3D", "场景重建"],
      content: [
        {
          title: "技术亮点",
          type: "list",
          items: [
            "上传一张实拍图，自动识别独立物体；",
            "2-3分钟还原完整可编辑3D场景；",
            "支持沙发、地毯、台灯、宠物等物体识别分离；",
            "与VAST融资同日落地，AI 3D场景竞赛加速。"
          ]
        }
      ]
    },
    {
      id: "supercell-metacore-acquisition",
      category: "industry",
      subcategory: "手游并购",
      title: "Supercell 签署收购 Metacore 及《Merge Mansion》协议，预计9月底完成交割",
      summary: "Supercell宣布收购Metacore及其热门手游《Merge Mansion》的协议已签署，预计9月底完成交割。交易条款未披露，Merge Mansion团队将成为Supercell员工。Supercell计划结合其运营经验与Merge Mansion现有基础，进一步拓展休闲合并品类。",
      source: "PocketGamer.biz",
      date: "2026-09-01",
      url: "https://www.pocketgamer.biz/supercell-signs-deal-to-acquire-metacore-and-merge-mansion/",
      badge: "手游并购",
      badgeType: "business",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["Supercell", "Metacore", "Merge Mansion", "收购", "手游"],
      content: [
        {
          title: "交易要点",
          type: "list",
          items: [
            "Supercell签署收购Metacore及Merge Mansion协议；",
            "预计9月底完成交割，条款未披露；",
            "Merge Mansion团队将成为Supercell员工；",
            "结合运营经验拓展休闲合并品类。"
          ]
        }
      ]
    },
    {
      id: "august-game-licenses",
      category: "industry",
      subcategory: "版号",
      title: "8月215款游戏版号获批：国产209个进口6个，三七互娱《凡人修仙传》在列",
      summary: "8月31日国家新闻出版署公布2026年8月游戏审批信息，共计215款游戏版号获批（国产209个，进口6个）。今年1-8月累计下发1362款（国产1319款，进口43款）。本次名单包含三七互娱《凡人修仙传》等重点产品，趣糖网络《米姆米姆哈》官宣停运。",
      source: "每日经济新闻",
      date: "2026-09-02",
      url: "http://m.toutiao.com/group/7680705592834425370/",
      badge: "版号获批",
      badgeType: "event",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["游戏版号", "国家新闻出版署", "三七互娱", "凡人修仙传"],
      content: [
        {
          title: "版号概况",
          type: "list",
          items: [
            "8月共215款游戏版号获批（国产209，进口6）；",
            "1-8月累计1362款（国产1319，进口43）；",
            "三七互娱《凡人修仙传》在列；",
            "趣糖网络《米姆米姆哈》官宣停运。"
          ]
        }
      ]
    },
    {
      id: "alibaba-lingxi-sale",
      category: "industry",
      subcategory: "大厂动向",
      title: "阿里巴巴超15亿美元出让灵犀互娱全部股份，大厂游戏业务持续收缩",
      summary: "阿里巴巴将所持灵犀互娱全部股份出让给信宸资本，交易价格超过15亿美元，成为今年国内游戏市场规模最大的股权并购案。此前字节跳动以超60亿美元将沐瞳科技出售给沙特Savvy。游戏依然赚钱，但大厂选择离场，行业格局加速重构。",
      source: "搜狐科技 / 新浪财经",
      date: "2026-08-20",
      url: "https://finance.sina.com.cn/roll/2026-08-20/doc-ininxzpt8768064.shtml.md",
      badge: "股权并购",
      badgeType: "business",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["阿里巴巴", "灵犀互娱", "信宸资本", "字节跳动", "沐瞳科技"],
      content: [
        {
          title: "行业趋势",
          type: "list",
          items: [
            "阿里超15亿美元出让灵犀互娱全部股份；",
            "今年国内游戏市场最大股权并购案；",
            "字节跳动超60亿美元出售沐瞳科技给沙特Savvy；",
            "游戏依然赚钱，但大厂选择收缩离场。"
          ]
        }
      ]
    },
    {
      id: "keling-national-fund",
      category: "industry",
      subcategory: "AI 资本",
      title: "可灵AI完成国家级基金入股：国家AI产业基金注资14亿元，30亿美元融资全部用满",
      summary: "快手旗下可灵AI近日完成国家级基金入股，国家人工智能产业投资基金（规模约600.6亿元）注资14亿元，正大机器人注资约1.31亿元。这是可灵今年7月披露的近30亿美元融资计划的最后交割，额度现已全部用满，两家投资方分别持有约1.14%和0.11%股份。",
      source: "微博 / 澎湃新闻",
      date: "2026-09-02",
      url: "https://m.weibo.cn/detail/5338615372057150",
      badge: "AI 融资",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["可灵", "快手", "国家AI基金", "视频大模型", "融资"],
      content: [
        {
          title: "融资详情",
          type: "list",
          items: [
            "国家AI产业基金注资可灵14亿元；",
            "正大机器人注资约1.31亿元；",
            "近30亿美元融资计划全部用满；",
            "国家基金持股约1.14%，正大机器人约0.11%。"
          ]
        }
      ]
    },

    // ------------------------- 热门游戏 (Games) -------------------------
    {
      id: "onimusha-release",
      category: "games",
      subcategory: "卡普空",
      title: "《鬼武者：剑之道》9月4日发售：卡普空经典IP重启，Steam关注近5万",
      summary: "卡普空《鬼武者：剑之道》将于9月4日正式发售，登陆PC/PS5/Xbox Series/Switch 2。本作是经典动作IP时隔多年的重启之作，以刀光血影的极致剑戟战斗为核心，在面目全非的'京都'中斩杀幻魔，主角为宫本武藏，Steam关注人数已接近5万。",
      source: "杉果娘 / VGTimes",
      date: "2026-08-24",
      url: "http://m.toutiao.com/group/7677543060624032297/",
      image: "https://aka.doubaocdn.com/s/C6AlRgq0MI",
      badge: "9月4日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 91,
      tags: ["鬼武者", "卡普空", "剑戟动作", "宫本武藏", "9月发售"],
      content: [
        {
          title: "游戏亮点",
          type: "list",
          items: [
            "9月4日全平台发售，含Switch 2版本；",
            "经典鬼武者IP时隔多年重启；",
            "主角宫本武藏，极致刀光剑影的剑戟战斗；",
            "背景设定在江户时代初期'京都'，斩杀幻魔。"
          ]
        }
      ]
    },
    {
      id: "silent-hill-townfall",
      category: "games",
      subcategory: "科乐美",
      title: "《寂静岭：Townfall》9月24日发售：Steam已开放预购，豪华版提前2天解锁",
      summary: "《寂静岭：Townfall》将于9月24日登陆PC/PS5，Steam页面已开放预购，标准版售价约新币63元，豪华版可提前2天（9月22日）解锁。本作由苏格兰工作室Screen Burn开发，科乐美全面放权，是系列首款第一人称视角作品，主打精神侵蚀的心理恐怖体验。",
      source: "Steam / PlayStation",
      date: "2026-09-01",
      url: "https://store.steampowered.com/app/1636440/SILENT_HILL_Townfall/",
      image: "https://aka.doubaocdn.com/s/2dfW9gFW8q",
      badge: "9月24日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["寂静岭", "Townfall", "心理恐怖", "科乐美", "第一人称", "Steam预购"],
      content: [
        {
          title: "游戏特色",
          type: "list",
          items: [
            "9月24日登陆PC/PS5，Steam已开放预购；",
            "豪华版可提前2天（9月22日）解锁；",
            "苏格兰工作室Screen Burn开发，科乐美全面放权；",
            "系列首款第一人称视角，主打精神侵蚀心理恐怖。"
          ]
        }
      ]
    },
    {
      id: "dawnwalker-release",
      category: "games",
      subcategory: "前CDPR团队",
      title: "《黎明行者之血》9月3日发售：前《巫师3》开发团队黑暗奇幻开放世界ARPG",
      summary: "《黎明行者之血》（Dawnwalker）将于9月3日发售，由前《巫师3》核心开发团队组建的Rebel Wolves工作室打造。本作是黑暗奇幻开放世界ARPG，玩家扮演半吸血鬼在14世纪欧洲展开冒险，被视为9月最受期待的RPG新作之一。",
      source: "VGTimes / 抖音游戏前瞻",
      date: "2026-09-01",
      url: "https://zh.vgtimes.com/top-and-the-best/152390-%E5%9C%A82026%E5%B9%B49%E6%9C%88%E7%8E%A9%E4%BB%80%E4%B9%88pcps5%E5%92%8C%E4%BB%BB%E5%A4%A9%E5%A0%82switch-2%E7%9A%84%E6%96%B0%E5%8F%91%E8%A1%8C%E6%B8%B8%E6%88%8F.html",
      badge: "9月3日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 87,
      tags: ["黎明行者之血", "Dawnwalker", "Rebel Wolves", "巫师3团队", "开放世界ARPG"],
      content: [
        {
          title: "游戏亮点",
          type: "list",
          items: [
            "9月3日发售，前巫师3核心团队Rebel Wolves打造；",
            "黑暗奇幻开放世界ARPG；",
            "玩家扮演半吸血鬼在14世纪欧洲冒险；",
            "9月最受期待的RPG新作之一。"
          ]
        }
      ]
    },
    {
      id: "september-release-calendar",
      category: "games",
      subcategory: "发售前瞻",
      title: "9月完整发售日历：21款大作全平台覆盖，从魂类到体育竞速应有尽有",
      summary: "Gaming Amigos发布9月完整游戏发售日历，全月21款重点作品覆盖PC/PS5/Xbox/Switch 2。除鬼武者、寂静岭、黎明行者之血外，还包括NBA 2K27（9/4）、EA Sports FC 27（9/19）、漫威金刚狼、加菲猫冒险等，9月堪称近年最密集发售月。",
      source: "Gaming Amigos",
      date: "2026-09-01",
      url: "https://www.gamingamigos.com/post/september-2026-game-releases",
      badge: "发售日历",
      badgeType: "game",
      readTime: "3 分钟",
      hotScore: 85,
      tags: ["9月新游", "发售日历", "NBA2K27", "EA FC27", "漫威金刚狼"],
      content: [
        {
          title: "全月重点",
          type: "list",
          items: [
            "9月3日：黎明行者之血（黑暗奇幻ARPG）；",
            "9月4日：鬼武者剑之道、NBA 2K27；",
            "9月17日：火焰纹章万缕千丝（Switch2独占）；",
            "9月19日：EA Sports FC 27；",
            "9月24日：寂静岭Townfall；9月29日：巫师3重制版。"
          ]
        }
      ]
    },
    {
      id: "witcher3-remaster-countdown",
      category: "games",
      subcategory: "CDPR",
      title: "《巫师3：狂猎》重制版9月29日发售倒计时：光线追踪+重做战斗+更强怪物AI",
      summary: "CDPR《巫师3：狂猎》重制版将于9月29日登陆全平台，已拥有本体的玩家可免费升级。重制版包含光线追踪、重做的移动与战斗系统、升级的骑马操作、更聪明的怪物AI与新能力系统，血与酒、石之心资料片同步免费升级。",
      source: "Gaming Amigos / CDPR",
      date: "2026-09-01",
      url: "https://www.gamingamigos.com/post/september-2026-game-releases",
      image: "https://aka.doubaocdn.com/s/FCvxcueazL",
      badge: "9月29日发售",
      badgeType: "game",
      readTime: "2 分钟",
      hotScore: 90,
      tags: ["巫师3", "重制版", "CDPR", "光线追踪", "免费升级"],
      content: [
        {
          title: "重制内容",
          type: "list",
          items: [
            "9月29日全平台发售，本体玩家免费升级；",
            "光线追踪、重做移动与战斗系统；",
            "升级骑马操作与更聪明的怪物AI；",
            "血与酒、石之心资料片同步免费升级。"
          ]
        }
      ]
    },

    // ------------------------- 开源宝库 (Open Source) -------------------------
    {
      id: "repo-unity-mcp",
      category: "opensource",
      subcategory: "Unity MCP",
      title: "Unity MCP：AI助手与Unity编辑器的桥梁，让LLM管理资产/控制场景/编辑脚本",
      summary: "CoplayDev/unity-mcp是一个Model Context Protocol服务器，作为AI助手与Unity编辑器之间的桥梁。开发者可让LLM管理资产、控制场景、编辑脚本并自动化Unity内任务，支持Gemini、OpenAI、Cursor、Claude、Copilot等主流AI工具，9月1日仍有更新。",
      source: "GitHub",
      date: "2026-09-01",
      url: "https://github.com/CoplayDev/unity-mcp",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "MCP工具",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["Unity", "MCP", "AI助手", "自动化", "LLM"],
      content: [
        {
          title: "项目特点",
          type: "list",
          items: [
            "MCP服务器，桥接AI助手与Unity编辑器；",
            "LLM可管理资产、控制场景、编辑脚本、自动化任务；",
            "支持Gemini/OpenAI/Cursor/Claude/Copilot；",
            "9月1日仍有活跃更新。"
          ]
        }
      ]
    },
    {
      id: "repo-coreai",
      category: "opensource",
      subcategory: "AI Agent",
      title: "CoreAI：让LLM Agent玩你的游戏，GPT-5.6测试通过率达85.7%",
      summary: "NeoXider/CoreAI是一个让LLM agents自主玩游戏的开源框架。v2前沿模型测试中，gpt-5.6-sol在测试套件中达到96.6分、通过率85.7%，gpt-5.6-terra通过率86.2%。框架支持结构化上下文、ReAct工具调用、复杂任务规划与记忆系统。",
      source: "GitHub",
      date: "2026-08-29",
      url: "https://github.com/NeoXider/CoreAI",
      badge: "AI Agent",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 86,
      tags: ["CoreAI", "LLM Agent", "游戏AI", "ReAct", "GPT-5.6"],
      content: [
        {
          title: "框架能力",
          type: "list",
          items: [
            "让LLM agents自主玩游戏的开源框架；",
            "gpt-5.6-sol通过率85.7%，gpt-5.6-terra通过率86.2%；",
            "支持结构化上下文、ReAct工具调用；",
            "复杂任务规划与记忆系统。"
          ]
        }
      ]
    },
    {
      id: "repo-defold",
      category: "opensource",
      subcategory: "游戏引擎",
      title: "Defold：完全免费的跨平台游戏引擎，桌面/主机/移动/Web全覆盖",
      summary: "Defold是一款完全免费使用的跨平台游戏引擎，支持桌面、主机、移动和Web游戏开发。基于C++和Lua，具备轻量、高性能的特点，8月29日仍有更新。适合2D游戏和中小型项目，授权模式友好，无收入分成。",
      source: "GitHub",
      date: "2026-08-29",
      url: "https://github.com/defold/defold",
      badge: "免费引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["Defold", "游戏引擎", "Lua", "跨平台", "免费"],
      content: [
        {
          title: "引擎特点",
          type: "list",
          items: [
            "完全免费的跨平台游戏引擎；",
            "支持桌面/主机/移动/Web全覆盖；",
            "基于C++和Lua，轻量高性能；",
            "无收入分成，授权模式友好。"
          ]
        }
      ]
    },
    {
      id: "repo-redot-engine",
      category: "opensource",
      subcategory: "游戏引擎",
      title: "Redot Engine：Godot的社区分叉版，多平台2D/3D游戏引擎",
      summary: "Redot-Engine/redot-engine是Godot引擎的社区分叉版本，定位为多平台2D和3D游戏引擎。在Godot基础上进行社区驱动的功能扩展和优化，为开发者提供Godot之外的另一种开源引擎选择，适合关注开源引擎生态演进的开发者。",
      source: "GitHub",
      date: "2026-08-29",
      url: "https://github.com/Redot-Engine/redot-engine",
      image: "https://aka.doubaocdn.com/s/i7rEWxhsTE",
      badge: "开源引擎",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Redot", "Godot分叉", "开源引擎", "2D", "3D"],
      content: [
        {
          title: "项目定位",
          type: "list",
          items: [
            "Godot引擎的社区分叉版本；",
            "多平台2D/3D游戏引擎；",
            "社区驱动的功能扩展与优化；",
            "Godot之外的另一种开源引擎选择。"
          ]
        }
      ]
    },

    // ------------------------- 实战教程 (Tutorials) -------------------------
    {
      id: "tut-nvidia-ace-ue5",
      category: "tutorials",
      subcategory: "NVIDIA ACE",
      title: "NVIDIA ACE Game Agent SDK + UE5插件：在设备上构建超快响应AI伙伴",
      summary: "NVIDIA官方教程详解如何使用ACE Game Agent SDK测试版和Unreal Engine 5插件，在设备上构建和部署响应速度超快的AI伙伴。教程覆盖最小化对话延迟、同步全局和动态游戏状态、防止NPC陷入无限循环等关键挑战，是游戏AI开发者的必读指南。",
      source: "NVIDIA 开发者博客",
      date: "2026-06-16",
      url: "https://developer.nvidia.cn/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/",
      image: "https://aka.doubaocdn.com/s/LYzEV2Xanh",
      badge: "官方教程",
      badgeType: "ai",
      readTime: "5 分钟",
      hotScore: 89,
      tags: ["NVIDIA", "ACE", "UE5", "AI伙伴", "NPC", "教程"],
      content: [
        {
          title: "教程要点",
          type: "list",
          items: [
            "使用ACE Game Agent SDK和UE5插件构建设备端AI伙伴；",
            "最小化即时响应的对话延迟；",
            "同步全局和动态游戏状态；",
            "防止NPC陷入无限循环的关键技术。"
          ]
        }
      ]
    },
    {
      id: "tut-unity6-google-play",
      category: "tutorials",
      subcategory: "Unity 性能",
      title: "Google Play × Unity 直播课：9月4日《Getting The Most Out of Unity 6》",
      summary: "Google Play与Unity联合举办线上直播课程，9月4日主题为'Getting The Most Out of Unity 6'。课程覆盖升级常见挑战与解决方案、旨在提升性能的新功能、以及帮助诊断和解决项目瓶颈的强大工具，适合计划升级Unity 6或探索其最新能力的开发者。",
      source: "Google Play Games / Unity",
      date: "2026-09-04",
      url: "https://googleplaygamedev.unity.com/pages/live-sessions",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "直播课程",
      badgeType: "engine",
      readTime: "2 分钟",
      hotScore: 83,
      tags: ["Unity 6", "Google Play", "性能优化", "直播课程", "升级指南"],
      content: [
        {
          title: "课程内容",
          type: "list",
          items: [
            "9月4日直播：Getting The Most Out of Unity 6；",
            "升级常见挑战与解决方案；",
            "提升性能的新功能详解；",
            "诊断和解决项目瓶颈的工具使用。"
          ]
        }
      ]
    },
    {
      id: "tut-ai-agent-game-dev",
      category: "tutorials",
      subcategory: "AI Agent",
      title: "AI Agent如何重构游戏开发流程：从NPC智能进化到玩家行为预测的5个突破",
      summary: "深度技术文章解析AI Agent如何重构游戏开发范式：从脚本驱动的响应式逻辑，演进为具备感知、推理、记忆与持续学习能力的自主实体。覆盖NPC智能进化、玩家行为预测、动态内容生成、自动化测试与个性化体验5个关键技术突破。",
      source: "CSDN / LearnFlow",
      date: "2026-05-23",
      url: "https://blog.csdn.net/LearnFlow/article/details/161341543",
      badge: "深度技术",
      badgeType: "ai",
      readTime: "5 分钟",
      hotScore: 84,
      tags: ["AI Agent", "游戏开发", "NPC", "玩家行为预测", "自动化测试"],
      content: [
        {
          title: "五大突破",
          type: "list",
          items: [
            "NPC智能进化：从状态机到自主实体；",
            "玩家行为预测：个性化体验与动态难度；",
            "动态内容生成：AI驱动的关卡与叙事；",
            "自动化测试：Agent模拟玩家行为发现Bug；",
            "从'预设体验'迈向'动态生成体验'。"
          ]
        }
      ]
    },

    // ------------------------- AI前沿 (AI) -------------------------
    {
      id: "pubg-ally-ai-teammate",
      category: "ai",
      subcategory: "NVIDIA ACE",
      title: "PUBG Ally：NVIDIA ACE驱动的自适应AI队友，理解语音/文字指令独立作战",
      summary: "NVIDIA在Unreal Fest公布PUBG Ally——高度自适应的情境感知AI队友，能根据玩家指令和战场态势动态调整打法。它能独立做出搜刮、战斗、导航等决策，理解语音和文字输入（从闲聊到战术指令），精通PUBG术语、地图点位和物品属性。",
      source: "MEA Tech Watch / NVIDIA",
      date: "2026-09-01",
      url: "https://meatechwatch.com/2026/06/18/nvidia-unreal-fest-news-pubg-ally-nvidia-ace-game-agent-sdk-and-new-nvidia-ace-ue-plugins/",
      badge: "AI队友",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 88,
      tags: ["PUBG", "AI队友", "NVIDIA ACE", "语音指令", "自适应"],
      content: [
        {
          title: "AI队友能力",
          type: "list",
          items: [
            "高度自适应的情境感知AI队友；",
            "根据玩家指令和战场态势动态调整打法；",
            "独立做出搜刮、战斗、导航决策；",
            "理解语音和文字输入，精通PUBG术语与地图。"
          ]
        }
      ]
    },
    {
      id: "indie-ai-artist-training",
      category: "ai",
      subcategory: "AI 美术",
      title: "独立工作室用自家艺术家作品训练AI模型：《Bobium Brawlers》移动端卡牌游戏",
      summary: "独立工作室Atelico开发移动端卡牌骰子对战游戏《Bobium Brawlers》，玩家通过文字描述创造生物。其图像生成模型完全用工作室自家参与艺术家的委托作品训练，CEO由Uber、Meta、SEGA、Creative Assembly老兵组成，将生成式AI作为玩家面向的核心玩法。",
      source: "Omega Technology Solutions",
      date: "2026-09-01",
      url: "https://www.omegatechnologysolutionsgroupinc.com/blog/indie-studio-trains-ai-model-on-its-own-artists-for-mobile-game-9de2b2",
      badge: "AI美术",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 85,
      tags: ["独立游戏", "AI美术", "Bobium Brawlers", "文字生成", "版权合规"],
      content: [
        {
          title: "项目亮点",
          type: "list",
          items: [
            "独立工作室Atelico开发《Bobium Brawlers》；",
            "玩家通过文字描述创造生物；",
            "AI模型完全用自家艺术家作品训练；",
            "团队来自Uber、Meta、SEGA、Creative Assembly。"
          ]
        }
      ]
    },
    {
      id: "36kr-ai-game-investment",
      category: "ai",
      subcategory: "行业报告",
      title: "36氪：AI游戏转向——巨头千亿豪赌、资本抢注AI原生、新产品卷向UGC",
      summary: "36氪深度报道AI游戏行业转向：腾讯、网易、米哈游等巨头将新一代产品重心放在AI上，新势力借此突围。伽马数据《2026中国游戏产业AI发展报告》显示，2026年上半年游戏行业投融资中AI相关项目占比超70%，AI原生游戏和UGC工具成为资本焦点。",
      source: "36氪",
      date: "2026-08-27",
      url: "https://36kr.com/p/3956531735877511",
      badge: "行业报告",
      badgeType: "ai",
      readTime: "4 分钟",
      hotScore: 86,
      tags: ["AI游戏", "36氪", "投融资", "UGC", "伽马数据"],
      content: [
        {
          title: "核心数据",
          type: "list",
          items: [
            "2026上半年游戏投融资中AI相关项目占比超70%；",
            "腾讯、网易、米哈游巨头加码AI游戏；",
            "AI原生游戏和UGC工具成为资本焦点；",
            "新产品卷向UGC方向，玩家创作门槛降低。"
          ]
        }
      ]
    },
    {
      id: "summer-engine-ai-npc",
      category: "ai",
      subcategory: "AI NPC",
      title: "Summer Engine AI NPC生成器：真正的AI NPC不是聊天机器人，是活在世界里的角色",
      summary: "Summer Engine发布AI NPC生成器工具，强调真正的AI NPC不是简单粘贴在游戏里的chatbot，而是有目标、知识和个性、能在游戏世界中实时行为的角色。工具帮助开发者快速构建具备自主行为能力的NPC，区别于传统状态机驱动的固定路径NPC。",
      source: "Summer Engine",
      date: "2026-09-02",
      url: "https://www.summerengine.com/pt/ai-npc-generator",
      badge: "AI NPC工具",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 82,
      tags: ["Summer Engine", "AI NPC", "生成器", "自主行为", "游戏世界"],
      content: [
        {
          title: "核心理念",
          type: "list",
          items: [
            "AI NPC不是chatbot，而是活在游戏世界里的角色；",
            "有目标、知识和个性，实时影响行为；",
            "区别于传统状态机的固定路径NPC；",
            "工具帮助开发者快速构建自主行为NPC。"
          ]
        }
      ]
    },
    {
      id: "roblox-npc-ai-skill",
      category: "ai",
      subcategory: "Roblox",
      title: "Roblox NPC AI Skill：生产级NPC与AI系统模式，支持寻路与自定义动画绑定",
      summary: "NeverSight发布Roblox专用的生产级NPC与AI系统Skill，提供高性能、可维护的NPC构建模式。核心包括使用HumanoidDescription和CreateHumanoidModelFromDescriptionAsync构建角色（推荐R15）、可配置外观与配饰、自定义动画绑定，以及集成PathfindingService的AI寻路模式。",
      source: "LobeHub / NeverSight",
      date: "2026-09-01",
      url: "https://lobehub.com/skills/neversight-skills_feed-npc-ai",
      badge: "Roblox工具",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 80,
      tags: ["Roblox", "NPC AI", "寻路", "动画绑定", "生产级"],
      content: [
        {
          title: "Skill功能",
          type: "list",
          items: [
            "Roblox专用生产级NPC与AI系统模式；",
            "HumanoidDescription构建角色（推荐R15）；",
            "可配置外观与配饰、自定义动画绑定；",
            "集成PathfindingService的AI寻路模式。"
          ]
        }
      ]
    },
    {
      id: "unity-ai-asset-store",
      category: "industry",
      subcategory: "Unity 生态",
      title: "Unity 上线 AI 资产商店：62% 工作室已使用 AI 工具，第三方 AI 工具获官方分发渠道",
      summary: "Unity推出AI资产商店功能，开发者可在店内发现和购买用于生成对话、图形和其他游戏资产的第三方工具。Unity最新游戏开发报告显示62%的工作室已使用AI工具，AI辅助生产正成为开发者基础能力。第三方AI工具制造商获得Unity开发者市场入口，Unity股价应声上涨。",
      source: "TEXXR",
      date: "2026-09-01",
      url: "https://texxr.com/841567/unity-adds-ai-asset-store-boosts-stock",
      image: "https://aka.doubaocdn.com/s/KPsgp8dIF3",
      badge: "AI生态",
      badgeType: "ai",
      readTime: "2 分钟",
      hotScore: 84,
      tags: ["Unity", "AI资产商店", "AI工具", "62%工作室", "第三方工具"],
      content: [
        {
          title: "核心要点",
          type: "list",
          items: [
            "Unity上线AI资产商店，第三方AI工具获官方分发渠道；",
            "62%工作室已使用AI工具，AI辅助生产成基础能力；",
            "支持生成对话、图形和游戏资产的工具入驻；",
            "消息公布后Unity股价应声上涨。"
          ]
        }
      ]
    }
  ]
};
