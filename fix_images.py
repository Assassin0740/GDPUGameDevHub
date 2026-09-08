import re

p = "data/2026-09-08.js"
s = open(p, encoding="utf-8").read()

m = {
    # 黑神话钟馗（东方志怪脸谱 / 脸模） -> Pexels 中国戏曲脸谱图
    "hero-black-myth-zhongkui-cast": "https://images.pexels.com/photos/14010688/pexels-photo-14010688.jpeg",
    "zhongkui-face-cast": "https://images.pexels.com/photos/7032138/pexels-photo-7032138.jpeg",
    "zhongkui-dev-philosophy": "https://images.pexels.com/photos/30639094/pexels-photo-30639094.jpeg",
    # Unity / DOTS / 教程 -> Unsplash 代码/科技类
    "unity-66-webgpu": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "unity-65-vs-63-lts": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    "repo-unity-dots-sample": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    "tut-dots-intro": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    "tut-dots-inventory": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "tut-dots-best-practices": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    # Godot / Redot / UE5 -> Unsplash 游戏/科技类
    "godot-472-stability": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    "redot-263-beta1": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    "godot-47-changelog-guide": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    "ue5-agora-realtime-animation": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
}

for k, v in m.items():
    pat = re.compile(r'("id":\s*"%s".*?)("image":\s*")[^"]*(")' % re.escape(k), re.S)
    s2, n = pat.subn(lambda mo, v=v: mo.group(1) + mo.group(2) + v + mo.group(3), s, count=1)
    print(("OK " if n == 1 else "MISS ") + k)
    s = s2

open(p, "w", encoding="utf-8").write(s)
print("done")
