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
echo      公网访问地址 (手机 / 外网):
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
echo        1. 必须用 https://
echo           用 http:// 会被 SakuraFrp 拒绝，返回 501
echo.
echo        2. 证书为自签名
echo           手机会提示"连接不安全"
echo           点 高级 - 继续访问 即可正常打开
echo.
echo        3. 手机无需与电脑在同一 WiFi
echo.
echo        4. 关闭本窗口不会停止服务器
echo           需要停止时请运行 stop-tunnel.bat
echo.
echo   ----------------------------------------------------
echo.

choice /c YN /n /m "  是否在浏览器中打开公网地址? (Y=是 / N=否): "
if not errorlevel 2 start "" https://frp-use.com:32892/

echo.
echo   按任意键关闭本窗口...
pause >nul
