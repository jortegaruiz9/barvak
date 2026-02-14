import { NextResponse } from "next/server";
import { createTransporter, getEmailConfig, escapeHtml } from "@/lib/email";

type ComplaintPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  age?: string;
  incidentDate?: string;
  description?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ComplaintPayload;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const age = body.age?.trim() ?? "No especificada";
    const incidentDate = body.incidentDate?.trim() ?? "No especificada";
    const description = body.description?.trim() ?? "Sin descripción";

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
      subject: `Barvak - Denuncia ASODHEA: ${fullName}`,
      text: [
        "Nueva denuncia ASODHEA",
        `Nombre del denunciante: ${fullName}`,
        `Email: ${email}`,
        `Teléfono: ${phone}`,
        `Edad: ${age}`,
        `Fecha del incidente: ${incidentDate}`,
        `Descripción: ${description}`,
      ].join("\n"),
      html: `
        <h2>Nueva denuncia ASODHEA</h2>
        <p><strong>Nombre del denunciante:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Edad:</strong> ${escapeHtml(age)}</p>
        <p><strong>Fecha del incidente:</strong> ${escapeHtml(incidentDate)}</p>
        <p><strong>Descripción:</strong> ${escapeHtml(description)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Complaint form error:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
