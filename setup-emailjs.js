// EmailJS Setup Helper
// This script helps you configure EmailJS for your contact form

console.log(`
🚀 EMAILJS SETUP FOR AAIRAASSIST CONTACT FORM
==============================================

STEP 1: Create EmailJS Account
-------------------------------
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" and create your account
3. Verify your email address

STEP 2: Add Email Service
-------------------------
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your preferred provider
4. Connect your Gmail account (info@aairaassist.ae)
5. Copy the SERVICE ID (e.g., service_xxxxxxx)

STEP 3: Create Email Template
-----------------------------
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template:

Subject: New Contact Form Submission from {{from_name}}

Body:
Hello AairaAssist Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service}}
Message: {{message}}

Reply to: {{reply_to}}

Best regards,
AairaAssist Contact Form

4. Save and copy the TEMPLATE ID (e.g., template_xxxxxxx)

STEP 4: Get Public Key
----------------------
1. Go to "Account" in EmailJS dashboard
2. Copy your PUBLIC KEY (e.g., xxxxxxxxxxxxxxxxx)

STEP 5: Update Contact.jsx
--------------------------
Replace these lines in src/components/Contact.jsx:

Line 38: const serviceId = 'YOUR_SERVICE_ID';
Line 39: const templateId = 'YOUR_TEMPLATE_ID';
Line 40: const publicKey = 'YOUR_PUBLIC_KEY';

With your actual IDs:
const serviceId = 'service_xxxxxxx';
const templateId = 'template_xxxxxxx';
const publicKey = 'xxxxxxxxxxxxxxxxx';

STEP 6: Test
-----------
1. Run: npm run dev
2. Go to Contact page
3. Fill out and submit the form
4. Check info@aairaassist.ae inbox

✅ Your contact form will send real emails!
`);

// You can run this with: node setup-emailjs.js
