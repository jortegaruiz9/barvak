import nodemailer from "nodemailer";

function envOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export function createTransporter() {
  const smtpHost = envOrThrow("SMTP_HOST");
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpUser = envOrThrow("SMTP_USER");
  const smtpPass = envOrThrow("SMTP_PASS");

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export function getEmailConfig() {
  const smtpUser = envOrThrow("SMTP_USER");
  return {
    toEmail: process.env.CONTACT_TO_EMAIL ?? smtpUser,
    fromEmail: process.env.CONTACT_FROM_EMAIL ?? smtpUser,
  };
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
