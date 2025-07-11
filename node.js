import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: 'info@creditmax.in',
    pass: 'YOUR_PASSWORD_HERE',
  },
});

transporter.sendMail({
  from: 'info@creditmax.in',
  to: 'yourpersonalemail@gmail.com',
  subject: 'Test Email from Node Script',
  text: 'This is a test email sent from Node.js using GoDaddy SMTP',
}).then(info => {
  console.log('Email sent:', info.response);
}).catch(err => {
  console.error('Error sending:', err);
});
