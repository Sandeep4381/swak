import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = [
  "name",
  "mobile",
  "email",
  "city",
  "subject",
  "inquiryType",
  "message",
];

const clean = (value) => String(value || "").trim();
const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request) {
  try {
    const body = await request.json();
    const data = {
      name: clean(body.name),
      mobile: clean(body.mobile),
      email: clean(body.email),
      city: clean(body.city),
      subject: clean(body.subject),
      inquiryType: clean(body.inquiryType),
      message: clean(body.message),
      consent: Boolean(body.consent),
    };

    const missingField = REQUIRED_FIELDS.find((field) => !data[field]);

    if (missingField || !data.consent) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    if (!host || !user || !pass) {
      return NextResponse.json(
        { message: "Mail service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const emailData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]),
    );

    await transporter.sendMail({
      from: `"Swarikaro Contact Form" <${user}>`,
      to: "swarikaro@gmail.com",
      replyTo: data.email,
      subject: `New Swarikaro ${data.inquiryType} enquiry - ${data.subject}`,
      text: [
        "New contact enquiry submitted on Swarikaro.",
        "",
        `Name: ${data.name}`,
        `Mobile: ${data.mobile}`,
        `Email: ${data.email}`,
        `City: ${data.city}`,
        `Subject: ${data.subject}`,
        `Inquiry Type: ${data.inquiryType}`,
        `Message: ${data.message}`,
        "Privacy and Terms Consent: Yes",
        `Submitted At: ${submittedAt}`,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17394a">
          <h2 style="color:#f97316">New Swarikaro Contact Enquiry</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${emailData.name}</td></tr>
            <tr><td><strong>Mobile</strong></td><td>${emailData.mobile}</td></tr>
            <tr><td><strong>Email</strong></td><td>${emailData.email}</td></tr>
            <tr><td><strong>City</strong></td><td>${emailData.city}</td></tr>
            <tr><td><strong>Subject</strong></td><td>${emailData.subject}</td></tr>
            <tr><td><strong>Inquiry Type</strong></td><td>${emailData.inquiryType}</td></tr>
            <tr><td><strong>Message</strong></td><td>${emailData.message}</td></tr>
            <tr><td><strong>Privacy and Terms Consent</strong></td><td>Yes</td></tr>
            <tr><td><strong>Submitted At</strong></td><td>${submittedAt}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ message: "Contact enquiry submitted." });
  } catch (error) {
    console.error("Contact mail error:", error);

    return NextResponse.json(
      { message: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
