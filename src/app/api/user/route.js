import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "mobile", "email"];

const clean = (value) => String(value || "").trim();

export async function POST(request) {
  try {
    const body = await request.json();
    const data = {
      formType: "user",
      name: clean(body.name),
      mobile: clean(body.mobile),
      email: clean(body.email),
      message: clean(body.message),
    };

    const missingField = REQUIRED_FIELDS.find((field) => !data[field]);

    if (missingField) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });
    const sheetWebhook =
      process.env.GOOGLE_SHEET_WEBHOOK_USER ||
      process.env.GOOGLE_SHEET_WEBHOOK;

    if (sheetWebhook) {
      await fetch(sheetWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submittedAt,
        }),
      });
    }

    return NextResponse.json({ message: "User request submitted." });
  } catch (error) {
    console.error("User form mail error:", error);

    return NextResponse.json(
      { message: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
