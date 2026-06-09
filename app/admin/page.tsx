export const dynamic = "force-dynamic";

type AdminLead = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

type AdminLeadsResponse = {
  leads: AdminLead[];
  stats: {
    total: number;
    today: number;
    showing: number;
  };
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

async function getAdminLeads() {
  const apiBaseUrl = process.env.API_INTERNAL_URL ?? "http://localhost:4001";
  const adminApiKey = process.env.ADMIN_API_KEY ?? "morven-admin-key";

  const response = await fetch(`${apiBaseUrl}/api/admin/leads?limit=100`, {
    headers: {
      "x-admin-key": adminApiKey,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudo cargar el panel administrativo.");
  }

  return (await response.json()) as AdminLeadsResponse;
}

export default async function AdminPage() {
  const data = await getAdminLeads();
  const latestLead = data.leads[0] ?? null;

  return (
    <main className="min-h-[100svh] overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(109,40,217,0.18),transparent_28%),linear-gradient(180deg,#090909_0%,#05070d_100%)] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="brand-mono text-xs uppercase tracking-[0.35em] text-[var(--primary)]">Morven Admin</p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Solicitudes y clientes potenciales</h1>
              <p className="max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                Panel interno para revisar las solicitudes enviadas desde la landing y monitorear el flujo de nuevos prospectos.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
              API y base de datos conectadas
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Total leads</p>
            <p className="mt-3 text-4xl font-semibold text-white">{data.stats.total}</p>
            <p className="mt-2 text-sm text-white/55">Solicitudes acumuladas en la base de datos.</p>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Hoy</p>
            <p className="mt-3 text-4xl font-semibold text-white">{data.stats.today}</p>
            <p className="mt-2 text-sm text-white/55">Ingresos registrados desde el inicio del dia.</p>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Ultimo ingreso</p>
            <p className="mt-3 text-lg font-semibold text-white">{latestLead ? latestLead.name : "Sin registros"}</p>
            <p className="mt-2 text-sm text-white/55">
              {latestLead ? formatDate(latestLead.created_at) : "Todavia no llegan solicitudes."}
            </p>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
          <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 px-5 py-4 sm:px-6">
              <div>
                <p className="text-lg font-semibold text-white">Bandeja de solicitudes</p>
                <p className="text-sm text-white/55">Mostrando las {data.stats.showing} mas recientes.</p>
              </div>
            </div>

            {data.leads.length === 0 ? (
              <div className="px-6 py-16 text-center text-white/60">Aun no hay solicitudes registradas en la base de datos.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/8 text-left">
                  <thead className="bg-white/[0.02]">
                    <tr className="brand-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                      <th className="px-5 py-4 font-medium sm:px-6">Lead</th>
                      <th className="px-5 py-4 font-medium">Correo</th>
                      <th className="px-5 py-4 font-medium">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/6">
                    {data.leads.map((lead) => (
                      <tr key={lead.id} className="align-top">
                        <td className="px-5 py-4 sm:px-6">
                          <div className="font-medium text-white">{lead.name}</div>
                          <div className="mt-2 max-w-xl text-sm leading-6 text-white/62">{lead.message}</div>
                        </td>
                        <td className="px-5 py-4 text-sm text-white/82">{lead.email}</td>
                        <td className="px-5 py-4 text-sm text-white/62">{formatDate(lead.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </article>

          <aside className="space-y-6">
            <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
              <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-[var(--primary)]">Resumen operativo</p>
              <div className="mt-4 space-y-4 text-sm leading-6 text-white/68">
                <p>Este panel consume los leads directamente desde PostgreSQL a traves del API privado de Express.</p>
                <p>El acceso al panel esta protegido por autenticacion basica y el endpoint admin usa una llave interna.</p>
                <p>Cuando quieras, el siguiente paso natural es agregar estados tipo nuevo, contactado, propuesta y cliente.</p>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(109,40,217,0.18),rgba(109,40,217,0.05))] p-5 sm:p-6">
              <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-white/70">Siguiente mejora</p>
              <h2 className="mt-3 text-xl font-semibold text-white">Pipeline comercial</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Si quieres convertir esto en un mini CRM, puedo agregar estado por lead, notas internas y filtros por fecha o correo.
              </p>
            </article>
          </aside>
        </section>
      </div>
    </main>
  );
}
