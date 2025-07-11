import nodemailer from 'nodemailer';

// Wrap in async function
async function sendEmail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.secureserver.net', // GoDaddy SMTP
    port: 465,
    secure: true,
    auth: {
      user: 'info@creditmax.in',   // Your GoDaddy email
      pass: 'YOUR_APP_PASSWORD',   // Replace with app password
    },
  });

  const mailOptions = {
    from: 'info@creditmax.in',
    to: 'yourpersonalgmail@gmail.com',
    subject: 'SMTP Test from Node.js',
    text: 'This is a test email from CreditMax SMTP setup.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

// Call the async function
sendEmail();
