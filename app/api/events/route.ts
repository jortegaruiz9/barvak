import { NextResponse } from "next/server";
import { createTransporter, getEmailConfig, escapeHtml } from "@/lib/email";

type EventPayload = {
  fullName?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  message?: string;
  privacyPolicyAccepted?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EventPayload;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const countryCode = body.countryCode?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const eventType = body.eventType?.trim() ?? "No especificado";
    const eventDate = body.eventDate?.trim() ?? "No especificada";
    const message = body.message?.trim() ?? "Sin comentarios";
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
      subject: `Barvak - Evento: ${eventType}`,
      text: [
        "Nueva solicitud de evento",
        `Nombre: ${fullName}`,
        `Email: ${email}`,
        `Teléfono: ${countryCode} ${phone}`.trim(),
        `Tipo de evento: ${eventType}`,
        `Fecha tentativa: ${eventDate}`,
        `Comentarios: ${message}`,
        `Política de privacidad aceptada: ${privacyPolicyAccepted ? "Sí" : "No"}`,
      ].join("\n"),
      html: `
        <h2>Nueva solicitud de evento</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(`${countryCode} ${phone}`.trim())}</p>
        <p><strong>Tipo de evento:</strong> ${escapeHtml(eventType)}</p>
        <p><strong>Fecha tentativa:</strong> ${escapeHtml(eventDate)}</p>
        <p><strong>Comentarios:</strong> ${escapeHtml(message)}</p>
        <p><strong>Política de privacidad aceptada:</strong> ${privacyPolicyAccepted ? "Sí" : "No"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Events form error:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
