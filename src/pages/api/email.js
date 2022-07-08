import { createTransport } from 'nodemailer';

const { NEXT_PUBLIC_SMTP_MAIL, NEXT_PUBLIC_SMTP_PASS } = process.env;

export default async function(req, res) {
  try {
    const transporter = createTransport({
      host: 'smtp.umbler.com',
      port: '587',
      secure: false,
      auth: {
        user: NEXT_PUBLIC_SMTP_MAIL,
        pass: NEXT_PUBLIC_SMTP_PASS,
      },
    });
  
    const { name, email, message } = JSON.parse(req.body);
  
    const data = {
      from: NEXT_PUBLIC_SMTP_MAIL,
      to: NEXT_PUBLIC_SMTP_MAIL,
      replyTo: email,
      subject: name,
      text: message
    }
    
    await transporter.sendMail(data);
    res.status(200).json({ message: 'sent' });
  } catch (error) {
    res.status(400).json(error.message)
  }
}