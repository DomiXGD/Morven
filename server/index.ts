import cors from "cors";
import express from "express";
import { serverEnv } from "./config";
import { createContactLead } from "./contact-repository";
import { contactSchema } from "./contact-schema";
import { db } from "./db";

const app = express();

const corsOrigin = serverEnv.CORS_ORIGIN === "*" ? true : serverEnv.CORS_ORIGIN;

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

app.get("/api/health", async (_request, response) => {
  try {
    await db.query("select 1");

    return response.json({
      ok: true,
      service: "morven-contact-api",
      database: "connected",
    });
  } catch (error) {
    console.error("[health] PostgreSQL check failed", error);

    return response.status(500).json({
      ok: false,
      service: "morven-contact-api",
      database: "disconnected",
    });
  }
});

app.post("/api/contact", async (request, response) => {
  const parsed = contactSchema.safeParse(request.body);

  if (!parsed.success) {
    return response.status(400).json({
      error: "Los datos del formulario no son validos.",
      issues: parsed.error.flatten(),
    });
  }

  try {
    const lead = await createContactLead(parsed.data);

    return response.status(201).json({
      message: "Mensaje recibido correctamente.",
      leadId: lead.id,
      createdAt: lead.created_at,
    });
  } catch (error) {
    console.error("[contact] Could not persist lead", error);

    return response.status(500).json({
      error: "No se pudo guardar el mensaje.",
    });
  }
});

const server = app.listen(serverEnv.PORT, () => {
  console.log(`Express API ready on http://localhost:${serverEnv.PORT}`);
});

async function shutdown(signal: string) {
  console.log(`[server] ${signal} received, closing services...`);

  server.close(async () => {
    await db.end();
    process.exit(0);
  });
}

process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});
