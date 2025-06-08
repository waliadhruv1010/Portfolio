import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'waliadhruv100@gmail.com',
      subject: `${subject} - from ${email}`,
      reply_to: email,
      text: message,
    });

    return Response.json({ status: "OK", data });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      { error: "Email not sent", message: error.message },
      { status: 500 }
    );
  }
}
