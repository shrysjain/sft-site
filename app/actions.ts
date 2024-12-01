"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";

export async function submitJoinRequest(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  console.log(`New join request from ${name} (${email}): ${message}`);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Solve for Tomorrow Join Requests" <>`,
    to: process.env.NODEMAILER_RECEIVER,
    subject: "New Join Request",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  });

  redirect("/thank-you");
}
