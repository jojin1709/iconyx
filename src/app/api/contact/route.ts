import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, type, iconName, category, useCase, refUrl } = body;
    let message = body.message;

    if (type === 'icon-request') {
      if (!iconName || !category || !useCase) {
        return NextResponse.json({ error: 'Missing required icon request fields' }, { status: 400 });
      }
      message = `Icon Request Details:\n- Icon Name: ${iconName}\n- Category: ${category}\n- Use Case: ${useCase}\n- Reference URL: ${refUrl || 'N/A'}`;
    }

    const requesterName = name || 'Iconyx Request';
    const requesterEmail = email || 'no-reply@iconyx.app';

    if (!requesterName || !requesterEmail || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.RECEIVER_EMAIL || 'iconyxforicons@gmail.com';

    if (!host || !port || !user || !pass) {
      console.error('Email service environment variables are not fully configured.');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port),
      secure: port === '465',
      auth: { user, pass }
    });

    const subject = type === 'icon-request'
      ? `Iconyx Icon Request: ${iconName}`
      : `Iconyx Contact Form: Message from ${requesterName}`;

    const mailOptions = {
      from: `"${requesterName}" <${user}>`,
      replyTo: requesterEmail,
      to: receiver,
      subject,
      text: `Type: ${type || 'general'}\nName: ${requesterName}\nEmail: ${requesterEmail}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('SMTP send failed:', err);
    return NextResponse.json({ error: 'Failed to send message via email service' }, { status: 500 });
  }
}
