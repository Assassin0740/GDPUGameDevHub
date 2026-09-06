@echo off
chcp 65001 >nul 2>&1
title GDPU 资讯站 - 内网穿透一键启动
cd /d "%~dp0"

cls
echo.
echo   ====================================================
echo      GDPU 游戏开发情报中枢 - 内网穿透一键启动
echo   ====================================================
echo.
echo   工作目录: %CD%
echo.

REM ---------- 1. 检查 Python 是否可用 ----------
where python >nul 2>&1
if errorlevel 1 (
    echo   [错误] 未检测到 Python，无法启动本地服务器。
    echo.
    echo   请先安装 Python，或手动启动一个监听 8888 端口的服务。
    echo.
    pause
    exit /b 1
)

REM ---------- 2. 检查 8888 端口是否已被占用 ----------
netstat -ano | findstr ":8888" | findstr "LISTENING" >nul 2>&1
if not errorlevel 1 (
    echo   [跳过] 端口 8888 已有服务在运行，无需重复启动。
) else (
    echo   [启动] 正在启动本地服务器 127.0.0.1:8888 ...
    start "" /MIN cmd /c python -m http.server 8888 --bind 127.0.0.1
    timeout /t 3 >nul
    echo   [完成] 本地服务器已启动。
)

echo.
echo   ----------------------------------------------------
echo.
echo      ① 正式地址 (推荐 · 证书合法 · 手机不报"不安全"):
echo.
echo          https://gdpugamedevhub.pages.dev/
echo.
echo      ② 临时预览 (自签名证书 · 手机会报"不安全", 仅临时自测用):
echo.
echo          https://frp-use.com:32892/
echo.
echo      本地访问地址:
echo.
echo          http://127.0.0.1:8888/
echo.
echo   ----------------------------------------------------
echo.
echo      使用须知:
echo.
echo        1. 对外正式分享 / 手机打开，请用 ① 的 Cloudflare Pages 地址
echo           (gdpugamedevhub.pages.dev) —— 证书合法，绝不会报"不安全"。
echo.
echo        2. ② 的 frp-use.com:32892 是 SakuraFrp 内网穿透，隧道服务端
echo           使用自签名证书，浏览器必然提示"连接不安全"。这是证书问题，
echo           本地无法消除，仅临时自测可用，点 高级-继续访问 即可。
echo.
echo        3. frp 必须用 https://，用 http:// 会被 SakuraFrp 拒绝(501)。
echo.
echo        4. 手机无需与电脑在同一 WiFi。
echo.
echo        5. 关闭本窗口不会停止服务器，停止请运行 stop-tunnel.bat。
echo.
echo   ----------------------------------------------------
echo.

choice /c YN /n /m "  是否在浏览器中打开正式地址(gdpugamedevhub.pages.dev)? (Y=是 / N=否): "
if not errorlevel 2 start "" https://gdpugamedevhub.pages.dev/

echo.
echo   按任意键关闭本窗口...
pause >nul
