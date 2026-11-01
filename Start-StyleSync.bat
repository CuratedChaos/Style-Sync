@echo off
setlocal
cd /d "%~dp0"
echo.
echo  StyleSync - Smart Virtual Trial Room
 echo Starting local server at http://127.0.0.1:8000/
echo Keep this window open while using the app. Press Ctrl+C to stop the server.
echo.
start "" /b cmd /c "timeout /t 2 /nobreak >nul ^& start http://127.0.0.1:8000/"
py -m http.server 8000
pause
