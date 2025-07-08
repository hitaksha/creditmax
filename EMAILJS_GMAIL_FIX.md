# Fix EmailJS Gmail Authentication Error

## The Problem
Error: "412 Gmail_API: Request had insufficient authentication scopes"

This happens when your Gmail service in EmailJS doesn't have proper permissions.

## Solution Steps

### Step 1: Delete Current Gmail Service
1. Go to EmailJS Dashboard: https://dashboard.emailjs.com/
2. Click "Email Services" in left sidebar
3. Find your Gmail service and click the **trash/delete icon**
4. Confirm deletion

### Step 2: Create New Gmail Service (Properly)
1. Click "Add New Service"
2. Select "Gmail" 
3. **IMPORTANT**: When the Google login popup appears:
   - Make sure you're logged into the Gmail account you want to use
   - **Grant ALL permissions** when Google asks
   - Don't skip any permission screens
4. Complete the setup and copy your new Service ID

### Step 3: Alternative - Use Different Email Provider
If Gmail keeps giving issues, try these instead:

**Option A: Use Outlook/Hotmail**
1. Create a free Outlook.com account if needed
2. In EmailJS, choose "Outlook" service
3. Follow setup instructions

**Option B: Use Yahoo Mail**
1. Create a free Yahoo.com account if needed  
2. In EmailJS, choose "Yahoo" service
3. Follow setup instructions

### Step 4: Update Your Website
Replace the Service ID in your ContactForm.tsx:

```javascript
const serviceId = 'service_YOUR_NEW_ID'; // Your new Service ID
```

### Step 5: Test Again
1. Save the file
2. Fill out the contact form
3. Submit and check your email

## Pro Tip: Gmail App Password Method

If you keep having Gmail issues:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use SMTP service** in EmailJS instead of Gmail API:
   - Choose "Add New Service" → "SMTP"
   - Use these settings:
     - SMTP Server: smtp.gmail.com
     - Port: 587
     - Username: your-email@gmail.com
     - Password: [the app password you generated]

## Quick Fix: Use Contact Email Directly

If EmailJS keeps giving problems, you can temporarily update the form to show your contact details:

```javascript
// In ContactForm.tsx, replace the handleSubmit function with:
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Create email content
  const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Loan Type: ${formData.loanType}
Amount: ${formData.amount}
Message: ${formData.message}
  `;
  
  // Open user's email client
  const mailtoLink = `mailto:info@creditmax.in?subject=Loan Application from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
  window.open(mailtoLink);
  
  setIsSubmitted(true);
  // Reset form...
};
```

This will open the user's email client with pre-filled information.

## Need Help?
Contact: info@creditmax.in | +91 9987593277