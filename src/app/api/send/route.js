// Force Node.js runtime (required for resend SDK to work on Vercel)
export const config = {
  runtime: 'nodejs',
};

import { Resend } from 'resend';

// Initialize Resend with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// POST request handler
export async function POST(req) {
  try {
    // Extract data from the request body
    const { email, subject, message } = await req.json();

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'waliadhruv100@gmail.com',  // Replace with your target email
      subject: `${subject} - from ${email}`,
      reply_to: email,
      text: message,
    });

    // Return success response
    return Response.json({ status: 'OK', data });
  } catch (error) {
    console.error('Email sending error:', error);

    // Return error response
    return Response.json(
      {
        error: 'Email not sent',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
