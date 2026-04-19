import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const toEmail = process.env.CONTACT_EMAIL;
  if (!process.env.RESEND_API_KEY || !toEmail) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    await resend.emails.send({
      from: "Sarra Drine <contact@mail.sarradrine.com>",
      to: toEmail,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSocial: ${social || "N/A"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
