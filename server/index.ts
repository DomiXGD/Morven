import cors from "cors";
import express from "express";
import { contactSchema } from "./contact-schema";

const app = express();
const port = Number(process.env.PORT ?? 4001);

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "morven-contact-api" });
});

app.post("/api/contact", (request, response) => {
  const parsed = contactSchema.safeParse(request.body);

  if (!parsed.success) {
    return response.status(400).json({
      error: "Los datos del formulario no son validos.",
      issues: parsed.error.flatten(),
    });
  }

  const { name, email, message } = parsed.data;

  console.log("[contact] New message received:", {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return response.status(200).json({
    message: "Mensaje recibido correctamente.",
  });
});

app.listen(port, () => {
  console.log(`Express API ready on http://localhost:${port}`);
});
