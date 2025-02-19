import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // Required for Gmail
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
      }
    });

    // Verify SMTP connection
    await transporter.verify();

    // 1. Send notification email to admin
    const adminMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    // 2. Send confirmation email to sender
    const userMailOptions = {
      from: `"Neel Sapariya" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: 'Thank you for your message',
      text: `
        Dear ${name},

        Thank you for contacting me. I have received your message and will get back to you as soon as possible.

        For your reference, here's a copy of your message:
        ${message}

        Best regards,
        Neel Sapariya
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
          
          <p>For your reference, here's a copy of your message:</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 15px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <p>Best regards,<br>Neel Sapariya</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: 'Something went wrong. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 