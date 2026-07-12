import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = [
  "name",
  "mobile",
  "city",
  "state",
  "vehicleType",
  "vehicleCount",
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
      city: clean(body.city),
      state: clean(body.state),
      vehicleType: clean(body.vehicleType),
      vehicleCount: clean(body.vehicleCount),
    };

    const missingField = REQUIRED_FIELDS.find((field) => !data[field]);

    if (missingField) {
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
      from: `"Swarikaro Partner Form" <${user}>`,
      to: "karoswari@gmail.com",
      replyTo: user,
      subject: `New Swarikaro partner interest - ${data.city}, ${data.state}`,
      text: [
        "New partner interest submitted on Swarikaro.",
        "",
        `Name: ${data.name}`,
        `Mobile: ${data.mobile}`,
        `City: ${data.city}`,
        `State: ${data.state}`,
        `Vehicle Type: ${data.vehicleType}`,
        `Number of Vehicles: ${data.vehicleCount}`,
        `Submitted At: ${submittedAt}`,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17394a">
          <h2 style="color:#f97316">New Swarikaro Partner Interest</h2>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${emailData.name}</td></tr>
            <tr><td><strong>Mobile</strong></td><td>${emailData.mobile}</td></tr>
            <tr><td><strong>City</strong></td><td>${emailData.city}</td></tr>
            <tr><td><strong>State</strong></td><td>${emailData.state}</td></tr>
            <tr><td><strong>Vehicle Type</strong></td><td>${emailData.vehicleType}</td></tr>
            <tr><td><strong>Number of Vehicles</strong></td><td>${emailData.vehicleCount}</td></tr>
            <tr><td><strong>Submitted At</strong></td><td>${submittedAt}</td></tr>
          </table>
        </div>
      `,
    });

    await fetch(process.env.GOOGLE_SHEET_WEBHOOK, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...data,
    submittedAt,
  }),
});
    return NextResponse.json({ message: "Partner interest submitted." });
  } catch (error) {
    console.error("Partner interest mail error:", error);

    return NextResponse.json(
      { message: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
