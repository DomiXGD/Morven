import { db } from "./db";
import type { ContactPayload } from "./contact-schema";

export async function createContactLead(payload: ContactPayload) {
  const result = await db.query<{
    id: number;
    created_at: string;
  }>(
    `
      insert into contact_leads (name, email, message)
      values ($1, $2, $3)
      returning id, created_at
    `,
    [payload.name, payload.email, payload.message]
  );

  return result.rows[0];
}
