/**
 * 广药 游戏开发情报中枢 · 每日技术情报数据 (2026-08-30 星期日)
 * GDPU GAMEDEV HUB INTELLIGENCE DATA
 */
window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-08-30",
    weekday: "星期日",
    title: "广药 游戏开发情报中枢 · 周末技术特刊",
    subtitle: "科隆游戏展收官前瞻 · 虚幻5/Unity多端工业化与AI技术演进",
    updateTime: "2026-08-30 18:00",
    editor: "广药技术情报中枢 & GDPU极客团队",
    highlights: [
      "Gamescom 2026 科隆展盛大收官：虚幻5多端工业化大作与独立游戏技术创新汇总",
      "Godot 4.4 RC4 正式推出：默认集成 Jolt 3D 物理引擎，性能跃升 40%",
      "Unity 6 移动端 Vulkan 渲染管线 GPU 常驻资源优化白皮书发布",
      "UE5.5 Nanite 骨骼蒙皮与实时微多边形动画工业化实战解析",
      "开源宝库：Rust ECS 引擎 Bevy 0.14 与 Google Filament 物理渲染器更新"
    ],
    engineStatus: [
      { name: "Unity 6.3", type: "unity", status: "官方 LTS 长期支持", badge: "LTS", color: "blue" },
      { name: "团结引擎 1.10.2", type: "tuanjie", status: "微信小游戏深度优化", badge: "小游戏", color: "cyan" },
      { name: "UE 5.8.2", type: "unreal", status: "Hotfix 稳定性升级", badge: "工业化", color: "purple" },
      { name: "Godot 4.4 RC4", type: "godot", status: "Jolt 物理引擎集成", badge: "开源先锋", color: "emerald" }
    ]
  },
  hero: {
    id: "hero-20260830-gamescom-tech",
    category: "games",
    categoryName: "热门游戏 · 科隆展技术特稿",
    tag: "🔥 周末深度头条",
    title: "Gamescom 2026 工业化技术收官综述：虚幻5次世代管线与跨端生态大爆发",
    summary: "科隆游戏展2026圆满闭幕，本届展会成为次世代图形与跨端引擎技术的集中阅兵。从 Nanite 植被微多边形渲染到本地端侧 AI 智能 NPC 管线，各大工作室全面展示了在 PC、主机与移动端三端同源架构下的最新工业化落地成果...",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&auto=format&fit=crop&q=80",
    source: "Gamescom Tech Summit // GDPU 深度研报",
    date: "2026-08-30",
    url: "https://www.gamescom.global/",
    readTime: "5 分钟深度",
    hotScore: 99,
    badges: ["科隆展", "虚幻5", "3A工业化"],
    tags: ["科隆展", "虚幻5", "工业化", "Nanite", "跨端研发"],
    content: [
      {
        title: "三大工业化技术趋势",
        type: "list",
        items: [
          "Nanite 骨骼蒙皮与实时流送全面普及，超高模资产直通引擎无需烘焙法线",
          "PC / 主机 / 手游三端同源资产管线成熟，Shader 自动变体剥离与 LOD 自动化生成",
          "大语言模型与 MCP 协议深度融合游戏编辑器，关卡生成效率提升 300%"
        ]
      },
      {
        title: "行业落地启示",
        type: "text",
        text: "对于国内高校与独立开发者而言，工业化标准的演进使得小团队也能依托成熟的开源工具链与商用引擎生态，产出具备接近 3A 视效水准的精品内容。"
      }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🌐", desc: "全生态技术与行业情报汇总" },
    { id: "engine", name: "引擎前沿", icon: "⚡", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 图形学渲染技术" },
    { id: "industry", name: "行业热点", icon: "📈", desc: "大厂动态 / 投融资 / 科隆展会 / 市场报告" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "3A大作追踪 / 核心玩法拆解 / 独立游戏" },
    { id: "opensource", name: "开源宝库", icon: "📦", desc: "GitHub 精选开源项目 / 工具链 / 框架库" },
    { id: "tutorials", name: "实战教程", icon: "🛠️", desc: "架构设计 / 性能调优 / 工业化实战指南" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI Agent / 智能NPC / 自动化管线 / MCP" }
  ],
  items: [
    {
      id: "godot-44-rc4-jolt",
      category: "engine",
      subcategory: "Godot",
      title: "Godot 4.4 RC4 发布：默认集成 Jolt 3D 物理引擎，复杂碰撞吞吐量提升 40%",
      summary: "Godot 团队宣布 4.4 版本的第 4 个候选发布版，正式将 Jolt 物理引擎作为官方默认 3D 物理求解器，在大规模刚体碰撞与 Ragdoll 模拟下 CPU 开销大幅降低。",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      source: "Godot Engine Official",
      date: "2026-08-30",
      url: "https://godotengine.org/",
      badge: "RC4 发布",
      readTime: "3 分钟",
      hotScore: 95,
      tags: ["Godot", "Jolt Physics", "物理引擎", "性能优化"],
      content: [
        {
          title: "核心升级特性",
          type: "list",
          items: [
            "原生多线程物理步进（Physics Step）调度优化",
            "Continuous Collision Detection (CCD) 连续碰撞检测性能提升",
            "修复高频物理刚体穿模与约束关节求解抖动问题"
          ]
        }
      ]
    },
    {
      id: "unity-6-vulkan-gpu-res",
      category: "engine",
      subcategory: "Unity",
      title: "Unity 6 移动端 Vulkan 渲染管线 GPU 常驻资源优化白皮书",
      summary: "Unity 官方技术团队发布最新指南，深入解析在 Android 设备上利用 Vulkan API 实现 Descriptor Set 缓存与 GPU 常驻内存管理，消除运行期 Bindless 开销。",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
      source: "Unity Tech Blog",
      date: "2026-08-30",
      url: "https://blog.unity.com/",
      badge: "深度技术",
      readTime: "4 分钟",
      hotScore: 92,
      tags: ["Unity", "Vulkan", "渲染管线", "移动端优化", "GPU"],
      content: [
        {
          title: "技术要点",
          type: "list",
          items: [
            "Transient Resource 内存复用机制避免额外 Alloc",
            "Vulkan Pipeline Layout 与 Shader 变体剥离方案",
            "在骁龙 8 Gen3 及天玑 9300 上的功耗对比测试"
          ]
        }
      ]
    },
    {
      id: "ue55-nanite-skeletal-mesh",
      category: "engine",
      subcategory: "Unreal",
      title: "虚幻引擎 5.5 Nanite 骨骼蒙皮与实时微多边形动画工业化实操",
      summary: "Epic Games 深度剖析 UE5.5 中 Nanite 支持骨骼蒙皮网格体（Skeletal Mesh）的内部机制，告别传统 LOD 烘焙，实现角色资产与环境同级别微多边形渲染。",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
      source: "Unreal Engine Documentation",
      date: "2026-08-30",
      url: "https://www.unrealengine.com/",
      badge: "UE5.5 特性",
      readTime: "5 分钟",
      hotScore: 96,
      tags: ["Unreal", "UE5", "Nanite", "骨骼蒙皮", "动画系统"],
      content: [
        {
          title: "实战指南",
          type: "list",
          items: [
            "启用 Nanite 蒙皮网格体的前置工程设置与材质要求",
            "显存占用（VRAM）评估与实时 Cluster 流送控制",
            "配合 Lumen 实现角色自发光微结构的次表面散射"
          ]
        }
      ]
    },
    {
      id: "tuanjie-wechat-minigame-firstpack",
      category: "engine",
      subcategory: "团结引擎",
      title: "团结引擎 1.10.2 微信小游戏首包极致瘦身：动态代码剔除与 Shader 预热",
      summary: "团结引擎针对 20MB 微信小游戏代码包限制，推出全新增量代码剥离工具，结合 WebAssembly 模块拆分与 Shader 预编译，首屏加载时间缩短 55%。",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      source: "团结引擎官方文档",
      date: "2026-08-30",
      url: "https://tuanjie.unity.cn/",
      badge: "小游戏优化",
      readTime: "3 分钟",
      hotScore: 90,
      tags: ["团结引擎", "微信小游戏", "首包优化", "WebAssembly"],
      content: [
        {
          title: "优化策略",
          type: "list",
          items: [
            "非关键 C# 代码模块转为远程分包动态下载",
            "ASTC 纹理按需流式解码与 GPU 显存释放",
            "Shader 预热避免运行时即时编译引起的掉帧卡顿"
          ]
        }
      ]
    },
    {
      id: "gamescom-2026-awards-summary",
      category: "industry",
      subcategory: "展会动态",
      title: "科隆游戏展 Gamescom 2026 大奖揭晓：国产 3A 与虚幻 5 叙事动作游戏斩获多项大奖",
      summary: "2026 科隆游戏展评审委员会揭晓全场最佳奖项，多款基于虚幻 5 开发的国产与海外硬核动作游戏包揽最佳视觉设计、最佳动作游戏与最佳独立创新奖。",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
      source: "IGN / Gamescom Jury",
      date: "2026-08-30",
      url: "https://www.ign.com/",
      badge: "行业焦点",
      readTime: "3 分钟",
      hotScore: 97,
      tags: ["科隆展", "游戏大奖", "国产3A", "行业趋势"],
      content: [
        {
          title: "获奖亮点",
          type: "list",
          items: [
            "最佳动作游戏由虚幻 5 动作新标杆摘得",
            "独立游戏赛道中基于 Godot 开发的像素物理机制作品获得高度赞誉",
            "跨端同源与全球化发行成为 80% 参展团队的标准配置"
          ]
        }
      ]
    },
    {
      id: "sony-ps-2026-h2-ue5-lineup",
      category: "industry",
      subcategory: "大厂动态",
      title: "索尼 PlayStation 发布 2026 下半年前瞻：虚幻 5 大作集群与 PS5 Pro 增强版就绪",
      summary: "索尼互动娱乐发布下半年产品技术路线图，全面披露利用 PSSR AI 超分辨率技术优化虚幻 5 大作的实际运行表现，支持 4K 60FPS 光追稳定运行。",
      source: "PlayStation Blog",
      date: "2026-08-30",
      url: "https://blog.playstation.com/",
      badge: "大厂动作",
      readTime: "3 分钟",
      hotScore: 89,
      tags: ["索尼", "PS5 Pro", "虚幻5", "光线追踪", "PSSR"],
      content: [
        {
          title: "硬件与技术升级",
          type: "list",
          items: [
            "PSSR 机器学习超分辨率算法相比传统 FSR 细节提升显著",
            "硬件加速光线追踪管线（Hardware RT）吞吐量翻倍"
          ]
        }
      ]
    },
    {
      id: "black-myth-anniv-patch-rt-tech",
      category: "games",
      subcategory: "国产3A",
      title: "《黑神话：悟空》周年技术剖析：全景光线追踪与帧生成多平台架构解密",
      summary: "游戏科学技术团队在周年专栏中分享了全景光追（Path Tracing）在 PC 与次世代主机上的多分辨率间接光照与着色器执行重排序（SER）实战经验。",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
      source: "Game Science Tech Notes",
      date: "2026-08-30",
      url: "https://www.heishenhua.com/",
      badge: "国产3A标杆",
      readTime: "4 分钟",
      hotScore: 98,
      tags: ["黑神话", "国产3A", "光追", "虚幻5", "图形学"],
      content: [
        {
          title: "核心技术提炼",
          type: "list",
          items: [
            "利用 ReSTIR 算法解决复杂植被环境下的高动态间接光噪点",
            "毛发 Strand Hair 与 Nanite 网格体碰撞深度优化",
            "着色器执行重排序（SER）带来 25% 纯光追性能提升"
          ]
        }
      ]
    },
    {
      id: "gta6-destruction-streaming-patent",
      category: "games",
      subcategory: "GTA6",
      title: "R星全新物理破坏与实时大数据流送管线专利拆解：为 GTA6 次世代体验铺路",
      summary: "最新公开的专利文档显示，Rockstar 研发了一种基于八叉树动态层级和 GPU 异步 Compute 的大规模物理破坏与建筑流送系统，支持数万个可交互碎块实时运算。",
      source: "Tech Gaming Patent Watch",
      date: "2026-08-30",
      url: "https://www.rockstargames.com/",
      badge: "3A大作前瞻",
      readTime: "4 分钟",
      hotScore: 96,
      tags: ["GTA6", "R星", "物理破坏", "计算着色器", "3A研发"],
      content: [
        {
          title: "专利技术剖析",
          type: "list",
          items: [
            "分级破坏网格体（Hierarchical Voronoi Fracture）实时切分",
            "与流送系统（Streaming System）无缝结合的高密度物理刚体管线",
            "支持网络联机状态下的高精度确定性物理状态同步"
          ]
        }
      ]
    },
    {
      id: "bevy-014-rust-ecs-engine",
      category: "opensource",
      subcategory: "Rust 引擎",
      title: "Bevy 0.14 正式发布：Rust 跨平台数据驱动 ECS 游戏引擎迎来重大突破",
      summary: "GitHub 超 3.5 万星的开源 Rust 游戏引擎 Bevy 发布 0.14 版本，全面重构了渲染图（Render Graph），引入自主开发的 GPU 驱动级视锥剔除与自动合批机制。",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      source: "GitHub // bevyengine/bevy",
      date: "2026-08-30",
      url: "https://github.com/bevyengine/bevy",
      badge: "GitHub 35K+",
      readTime: "3 分钟",
      hotScore: 93,
      tags: ["Bevy", "Rust", "ECS", "开源引擎", "GitHub"],
      content: [
        {
          title: "核心升级",
          type: "list",
          items: [
            "全新的 Auto-Exposure 与 Bloom 后处理管线",
            "大幅提升并发 System 调度的 CPU 核心利用率",
            "提供官方 WebAssembly / WebGPU 浏览器运行支持"
          ]
        }
      ]
    },
    {
      id: "google-filament-pbr-engine",
      category: "opensource",
      subcategory: "图形库",
      title: "Google Filament 物理渲染器更新：支持 WebGPU 后端与轻量级实时全局光照",
      summary: "Google 开源的跨平台 PBR 渲染引擎 Filament 发布新版本，带来更纯粹的材料模型定义与移动端/嵌入式设备上的高帧率运行能力。",
      source: "GitHub // google/filament",
      date: "2026-08-30",
      url: "https://github.com/google/filament",
      badge: "Google开源",
      readTime: "3 分钟",
      hotScore: 91,
      tags: ["Filament", "Google", "PBR", "WebGPU", "开源渲染器"],
      content: [
        {
          title: "特性摘要",
          type: "list",
          items: [
            "极简材质定义语法，支持物理准确的双层清漆与各向异性",
            "零依赖轻量 C++ 库，可轻松嵌入各类自研游戏引擎或编辑器"
          ]
        }
      ]
    },
    {
      id: "unity-zero-gc-objectpool-guide",
      category: "tutorials",
      subcategory: "架构设计",
      title: "资深架构师：Unity 零 GC（0 GC）对象池与内存常驻实战指南",
      summary: "在重度动作游戏与弹幕射击游戏中，频繁的 Instantiate/Destroy 会造成严重的垃圾回收（GC Alloc）停顿。本文深度剖析高并发零 GC 对象池与 Struct 紧凑内存布局设计。",
      source: "GDPU 游戏架构专栏",
      date: "2026-08-30",
      url: "https://github.com/",
      badge: "架构深度",
      readTime: "4 分钟",
      hotScore: 94,
      tags: ["Unity", "0 GC", "性能调优", "对象池", "C#架构"],
      content: [
        {
          title: "战术设计要点",
          type: "list",
          items: [
            "使用 NativeArray 与 MemoryPool<T> 替代托管引用集合",
            "闭包与 Lambda 表达式的内存泄漏排查技巧",
            "结合 Profiler 与 Memory Profiler 追踪 GC.Alloc 真实调用栈"
          ]
        }
      ]
    },
    {
      id: "ai-npc-mcp-agent-pipeline",
      category: "ai",
      subcategory: "AI Agent",
      title: "AI 智能 NPC 实时对话与 MCP 协议工业化实战：从大模型推理到动作状态机驱动",
      summary: "探讨如何通过 MCP（Model Context Protocol）协议将大语言模型与 Unity / 虚幻引擎的状态机无缝连接，实现不仅能聊天、更能根据环境做出战斗与求助决策的活体 NPC。",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80",
      source: "AI GameDev Lab",
      date: "2026-08-30",
      url: "https://modelcontextprotocol.io/",
      badge: "AI 前沿",
      readTime: "4 分钟",
      hotScore: 95,
      tags: ["AI Agent", "智能NPC", "MCP", "状态机", "大模型"],
      content: [
        {
          title: "核心系统架构",
          type: "list",
          items: [
            "端侧量化模型（ONNX / Llama.cpp）保证毫秒级首字延迟",
            "MCP 工具调用将 NPC 意图精准映射为游戏动画与移动指令",
            "基于短期记忆与长期情感权重的自主行为决策树"
          ]
        }
      ]
    }
  ]
};
