# CreditMax Website - Local Setup Guide

## Prerequisites

Before running the website locally, make sure you have:

1. **Node.js** installed on your computer
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - This will also install npm (Node Package Manager)

## Setup Instructions

### Step 1: Extract and Navigate
1. Extract the downloaded ZIP file to a folder on your PC
2. Open Command Prompt (Windows) or Terminal (Mac/Linux)
3. Navigate to the website folder:
   ```bash
   cd path/to/your/website/folder
   ```

### Step 2: Install Dependencies
Run this command to install all required packages:
```bash
npm install
```

### Step 3: Start the Development Server
Run this command to start the website:
```bash
npm run dev
```

### Step 4: Open in Browser
- The terminal will show a local URL (usually `http://localhost:5173`)
- Open this URL in your web browser
- The website will automatically reload when you make changes

## Building for Production

To create a production-ready version:
```bash
npm run build
```

This creates a `dist` folder with optimized files that you can upload to any web hosting service.

## Troubleshooting

### Common Issues:

1. **"npm is not recognized"**
   - Node.js is not installed or not in PATH
   - Reinstall Node.js and restart your computer

2. **Port already in use**
   - Another application is using port 5173
   - The terminal will suggest an alternative port

3. **Dependencies not found**
   - Run `npm install` again
   - Delete `node_modules` folder and run `npm install`

## Email Form Setup

To receive form submissions:

1. Sign up at https://www.emailjs.com/
2. Create an email service and template
3. Replace these values in `src/components/ContactForm.tsx`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID` 
   - `YOUR_PUBLIC_KEY`

## Hosting Options

### Option 1: Local Network Access
To access from other devices on your network:
```bash
npm run dev -- --host
```

### Option 2: Production Hosting
1. Run `npm run build`
2. Upload the `dist` folder contents to your web hosting service
3. Point your domain to the hosting service

## Support

For technical support, contact: info@creditmax.in
Phone: +91 9987593277