import { NextResponse } from "next/server";
import { createTransporter, getEmailConfig, escapeHtml } from "@/lib/email";

type ContactPayload = {
  fullName?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  message?: string;
  privacyPolicyAccepted?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const countryCode = body.countryCode?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "No message";
    const privacyPolicyAccepted = Boolean(body.privacyPolicyAccepted);

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const transporter = createTransporter();
    const { toEmail, fromEmail } = getEmailConfig();

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Barvak - Contacto: ${fullName}`,
      text: [
        "Nuevo mensaje de contacto",
        `Nombre: ${fullName}`,
        `Email: ${email}`,
        `Teléfono: ${countryCode} ${phone}`.trim(),
        `Mensaje: ${message}`,
        `Política de privacidad aceptada: ${privacyPolicyAccepted ? "Sí" : "No"}`,
      ].join("\n"),
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(`${countryCode} ${phone}`.trim())}</p>
        <p><strong>Mensaje:</strong> ${escapeHtml(message)}</p>
        <p><strong>Política de privacidad aceptada:</strong> ${privacyPolicyAccepted ? "Sí" : "No"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
