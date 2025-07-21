import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, subject, html } = req.body;

    // Validate required fields
    if (!to || !subject || !html) {
      return res.status(400).json({ 
        error: 'Missing required fields: to, subject, html' 
      });
    }

    const data = await resend.emails.send({
      from: 'Katly Designs <noreply@tanshidigitalsolutions.site>', // Replace with your verified domain
      to: [to],
      subject: subject,
      html: html,
      headers: {
        'List-Unsubscribe': `<mailto:unsubscribe@tanshidigitalsolutions.site>, <${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/unsubscribe>`
      }
    });

    console.log('Email sent successfully:', data);
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}
