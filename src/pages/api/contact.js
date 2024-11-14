import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { subject, text, html } = req.body;
    const to = "voluntred@gmail.com"

    // Validación básica
    if (!subject || (!text && !html)) {
      return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    try {
      // Envía el correo
      await transporter.sendMail({
        from: `"VoluntRED" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: subject,
        text: text,
        html: html || text, // Si no se proporciona HTML, usa el texto plano
      });

      res.status(200).json({ message: 'Mensaje enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el mensaje', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}