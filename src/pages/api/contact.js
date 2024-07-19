import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, mensaje } = req.body;


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
        from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
        to: "brandonmuro.contacto@gmail.com", 
        subject: "Nuevo mensaje de contacto",
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
        html: `
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `,
      });

      res.status(200).json({ message: 'Mensaje enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el mensaje' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}