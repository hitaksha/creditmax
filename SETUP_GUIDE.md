# CreditMax Website - Complete Setup Guide

## Why Double-Clicking index.html Shows a Blank Page

Your website is built with React and Vite, which means:
- The HTML file is just a template
- JavaScript needs to compile and run to show content
- It requires a development server to work properly

## Quick Setup (5 Minutes)

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download and install the LTS version
3. Restart your computer after installation

### Step 2: Open Command Prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter

### Step 3: Navigate to Your Website Folder
```bash
cd C:\path\to\your\website\folder
```
*Replace with your actual folder path*

### Step 4: Install Dependencies
```bash
npm install
```
*This downloads all required packages (takes 1-2 minutes)*

### Step 5: Start the Website
```bash
npm run dev
```

### Step 6: Open in Browser
- Look for a line like: `Local: http://localhost:5173`
- Copy this URL and paste it in your browser
- Your website will now load properly!

## Alternative: Use VS Code (Easier Method)

1. Download **Visual Studio Code** (free): https://code.visualstudio.com/
2. Install the **Live Server** extension
3. Open your website folder in VS Code
4. Right-click `index.html` → "Open with Live Server"

## For Production (When Ready to Go Live)

When you want to host on www.creditmax.in:

1. Run this command:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web hosting service

3. Point your GoDaddy domain to your hosting provider

## Troubleshooting

### "npm is not recognized"
- Node.js isn't installed properly
- Restart your computer after installing Node.js

### Still seeing blank page?
- Make sure you're using the URL from the terminal (localhost:5173)
- Don't use file:// URLs - they won't work

### Need help?
Contact us:
- Email: info@creditmax.in
- Phone: +91 9987593277

---

**Important**: Always use `npm run dev` to view your website locally. The double-click method won't work for React applications.