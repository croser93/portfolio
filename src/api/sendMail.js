import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. CORS Header setzen (erlaubt Angular den Zugriff)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. Preflight-Anfrage (OPTIONS) sofort bestätigen
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. Sicherstellen, dass es ein POST ist
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Nur POST erlaubt' });
  }

  const { name, email, message } = req.body;

  // 4. Nodemailer Transporter
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
      from: process.env.EMAIL_USER, // Deine IONOS Mail
      to: "contact@maik-groth.com", 
      replyTo: email,               // Der User, der das Formular ausfüllt
      subject: `Kontaktanfrage von ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Nachricht:</strong><br>${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);
    return res.status(500).json({ error: error.message });
  }
}