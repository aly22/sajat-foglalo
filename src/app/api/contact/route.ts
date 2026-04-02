import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "A név legalább 2 karakter legyen."),
  email: z.string().email("Érvénytelen email cím."),
  businessName: z.string().optional(),
  category: z.string().optional(),
  features: z.object({
    bankkartyasFizetes: z.boolean().optional(),
    husegprogram: z.boolean().optional(),
    egyebFunkciok: z.boolean().optional(),
  }).optional(),
  salonCount: z.number().min(1).optional(),
});

export async function POST(req: Request) {
  const result = contactSchema.safeParse(await req.json());

  if (!result.success) {
    return NextResponse.json({ error: result.error.issues[0].message }, { status: 400 });
  }

  const { name, businessName, email, category, features, salonCount } = result.data;

  const featureList = [
    features?.bankkartyasFizetes && "Bankkártyás előlegfizetés",
    features?.husegprogram && "Hűségprogram",
    features?.egyebFunkciok && "Egyéb funkciók",
  ].filter(Boolean);
  const featuresText = featureList.length > 0 ? featureList.join(", ") : "Nincs";

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: `Új érdeklődés: ${name}`,
      text: `Új érdeklődés érkezett a idopontfoglalom.hu oldalról.\n\nNév: ${name}\nVállalkozás neve: ${businessName || "Nincs megadva"}\nEmail: ${email}\nVállalkozás típusa: ${category || "Nincs megadva"}\nSzalonok száma: ${salonCount || 1}\nIgényelt funkciók: ${featuresText}`,
      html: `
        <h2>Új érdeklődés</h2>
        <p><strong>Név:</strong> ${name}</p>
        <p><strong>Vállalkozás neve:</strong> ${businessName || "Nincs megadva"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Vállalkozás típusa:</strong> ${category || "Nincs megadva"}</p>
        <p><strong>Szalonok száma:</strong> ${salonCount || 1}</p>
        <p><strong>Igényelt funkciók:</strong> ${featuresText}</p>
        <p>A idopontfoglalom.hu oldalról érkezett.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Hiba történt a küldés során." }, { status: 500 });
  }
}
