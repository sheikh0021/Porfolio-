import { NextRequest, NextResponse } from "next/server";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "sheikhrehan2121@gmail.com";

function buildEmailBody(name: string, email: string, message: string) {
  return `New portfolio contact form message

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio contact form. Reply directly to ${email}.`;
}

async function sendViaWeb3Forms(
  name: string,
  email: string,
  message: string,
  accessKey: string
) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `Portfolio message from ${name}`,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Web3Forms failed to send email");
  }

  return data;
}

async function sendViaResend(
  name: string,
  email: string,
  message: string,
  apiKey: string
) {
  const from =
    process.env.RESEND_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: buildEmailBody(name, email, message),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Resend failed to send email");
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    if (web3formsKey) {
      await sendViaWeb3Forms(name, email, message, web3formsKey);
    } else if (resendKey) {
      await sendViaResend(name, email, message, resendKey);
    } else {
      console.error(
        "Contact form misconfigured: set WEB3FORMS_ACCESS_KEY or RESEND_API_KEY"
      );
      return NextResponse.json(
        {
          error: `Email delivery is not configured yet. Please email ${CONTACT_EMAIL} directly.`,
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send your message. Please try again or email sheikhrehan2121@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
