@echo off
REM Installation script untuk hackton-sparepart-ai (Windows)

echo ==========================================
echo Hackton Sparepart AI - Installation Script
echo ==========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo X Node.js not found. Please install Node.js 16 or higher.
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i

echo + Node.js version: %NODE_VERSION%
echo + NPM version: %NPM_VERSION%
echo.

REM Backend Setup
echo Setting up Backend...
cd backend
echo Downloading backend dependencies...
call npm install

if not exist .env (
    echo Creating .env file from template...
    copy .env.example .env
    echo Warning: Please edit backend\.env and add your Gemini API key
)

cd ..
echo + Backend setup complete
echo.

REM Frontend Setup
echo Setting up Frontend...
cd frontend
echo Downloading frontend dependencies...
call npm install
cd ..
echo + Frontend setup complete
echo.

echo ==========================================
echo + Installation Complete!
echo ==========================================
echo.
echo Next steps:
echo 1. Edit backend\.env and add GEMINI_API_KEY
echo 2. Edit backend\.env and add MONGODB_URI
echo 3. Run backend: cd backend ^&^& npm run dev
echo 4. Run frontend: cd frontend ^&^& npm run dev
echo 5. Open http://localhost:5173 in browser
echo.
echo Happy coding! Rocket
