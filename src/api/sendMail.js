import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS-Header für Cross-Origin Requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST erlaubt' });
  }

  const { name, email, message } = req.body;

  // Konfiguration deines Email-Providers (z.B. Gmail, Strato, IONOS)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Deine eigene Adresse als Absender
      to: "contact@maik-groth.com", 
      replyTo: email, // Damit du direkt dem Kunden antworten kannst
      subject: `Neue Nachricht von ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Nachricht:</strong><br>${message}</p>`,
    });

    return res.status(200).json({ success: true, message: "Email gesendet!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}