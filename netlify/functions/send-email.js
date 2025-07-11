const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const data = JSON.parse(event.body || '{}');

  const transporter = nodemailer.createTransport({
    host: 'smtp.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"CreditMax Website" <${process.env.EMAIL_USERNAME}>`,
    to: 'info@creditmax.in',
    subject: `New Loan Application from ${data.name}`,
    html: `
      <h2>New Loan Application</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Loan Type:</strong> ${data.loanType}</p>
      <p><strong>Amount:</strong> ₹${data.amount}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
