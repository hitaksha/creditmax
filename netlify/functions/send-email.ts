import { Handler } from '@netlify/functions'
import nodemailer from 'nodemailer'

const handler: Handler = async (event) => {
  const data = JSON.parse(event.body || '{}')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD, // App password, not regular Gmail password
    },
  })

  const mailOptions = {
    from: `"CreditMax" <${process.env.EMAIL_USERNAME}>`,
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
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email' }) }
  }
}

export { handler }
