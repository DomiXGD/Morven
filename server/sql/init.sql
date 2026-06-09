create table if not exists contact_leads (
  id bigserial primary key,
  name varchar(100) not null,
  email varchar(255) not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_contact_leads_email on contact_leads (email);
create index if not exists idx_contact_leads_created_at on contact_leads (created_at desc);
