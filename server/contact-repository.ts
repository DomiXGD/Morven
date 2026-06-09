import { db } from "./db";
import type { ContactPayload } from "./contact-schema";

export type ContactLead = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

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

export async function listContactLeads(limit = 100) {
  const sanitizedLimit = Math.min(Math.max(limit, 1), 200);

  const [leadsResult, totalResult, todayResult] = await Promise.all([
    db.query<ContactLead>(
      `
        select id, name, email, message, created_at
        from contact_leads
        order by created_at desc
        limit $1
      `,
      [sanitizedLimit]
    ),
    db.query<{ count: string }>("select count(*)::text as count from contact_leads"),
    db.query<{ count: string }>(
      `
        select count(*)::text as count
        from contact_leads
        where created_at >= date_trunc('day', now())
      `
    ),
  ]);

  return {
    leads: leadsResult.rows,
    stats: {
      total: Number(totalResult.rows[0]?.count ?? 0),
      today: Number(todayResult.rows[0]?.count ?? 0),
      showing: leadsResult.rows.length,
    },
  };
}
