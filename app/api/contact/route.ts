import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: "nitrodevteam@gmail.com",
      subject: `[Website Contact] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;background:#f9fafb;border-radius:12px;border:1px solid #e5e7eb">
          <h2 style="color:#0a2818;margin:0 0 16px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 12px;font-weight:600;color:#4a7a5a;width:100px">Name</td>
              <td style="padding:8px 12px;color:#1a3a2a">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;color:#4a7a5a">Email</td>
              <td style="padding:8px 12px;color:#1a3a2a"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;color:#4a7a5a">Subject</td>
              <td style="padding:8px 12px;color:#1a3a2a">${subject}</td>
            </tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#ffffff;border-radius:8px;border:1px solid #e5e7eb">
            <p style="margin:0;color:#1a3a2a;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:20px;font-size:12px;color:#9ca3af">Sent from nitro website contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
