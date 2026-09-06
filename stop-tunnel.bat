@echo off
chcp 65001 >nul 2>&1
title GDPU 资讯站 - 停止本地服务器
cd /d "%~dp0"

cls
echo.
echo   ====================================================
echo      停止本地服务器 (127.0.0.1:8888)
echo   ====================================================
echo.

set FOUND=0

for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":8888" ^| findstr "LISTENING"') do (
    echo   正在结束进程 PID %%p ...
    taskkill /F /PID %%p >nul 2>&1
    set FOUND=1
)

if "%FOUND%"=="0" (
    echo   端口 8888 上没有运行中的服务，无需停止。
) else (
    echo.
    echo   已停止本地服务器。
    echo.
    echo   注意: 此时公网地址 https://frp-use.com:32892/ 将无法访问，
    echo         因为隧道还在，但 8888 端口后面没有内容了。
    echo.
    echo   需要恢复时，重新运行 start-tunnel.bat 即可。
)

echo.
echo   按任意键关闭本窗口...
pause >nul
