# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
New Contact Form Submission from {{from_name}}
```

### Template Body:
```
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
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Contact.jsx
Replace these placeholders in `src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email for the message

## 7. Production Deployment
- Your EmailJS configuration will work in production
- No additional setup needed for deployment
- Free plan includes 200 emails/month

## Troubleshooting
- Check browser console for errors
- Verify all IDs are correct
- Ensure email service is properly connected
- Check spam folder for test emails
