import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().trim().email("El correo no es valido"),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000, "El mensaje es demasiado largo"),
});

export type ContactPayload = z.infer<typeof contactSchema>;
