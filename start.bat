@echo off
title SolarBag System Launcher
echo ===================================================
echo     DANG KHOI DONG HE THONG WEBSITE SOLARBAG
echo ===================================================
echo.
echo [1/2] Dang khoi dong Backend SQLite Server (Port 5000)...
start "SolarBag Backend (Port 5000)" cmd /k "node server.js"

echo [2/2] Dang khoi dong Frontend Vite (Port 5173)...
start "SolarBag Frontend (Port 5173)" cmd /k "npm run dev"

echo.
echo ===================================================
echo   HE THONG DA KHOI CHAY THANH CONG!
echo   - Website SolarBag: http://localhost:5173/
echo   - Backend API SQLite: http://localhost:5000/
echo   - Trang quan tri du lieu: http://localhost:5173/admin
echo ===================================================
echo.
pause

