import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, services } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const serviceList = services?.length
    ? `\n\nInterested in:\n${services.map((s: string) => `  • ${s}`).join('\n')}`
    : '';

  const { error } = await resend.emails.send({
    from: 'Soulshine Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL || 'jordan@jordanfurr.com',
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}${serviceList}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
