import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Philippine Sponge Database — Case Study | Gliezel Ann Pajarilla",
  description:
    "How the Philippine Sponge Database was rebuilt at PGC Diliman: ETL pipeline, curator admin panel, audit trail, and self-hosted deployment.",
};

const meta = [
  { label: "Role", value: "Full-stack Developer" },
  { label: "Organization", value: "PGC Diliman × UP MSI" },
  { label: "Timeline", value: "2026 – Present" },
  { label: "Contribution", value: "~127 of 135 commits" },
];

const architecture = [
  { label: "Users", nodes: ["Public visitors", "Researchers & students", "Curators (admin)"] },
  { label: "Application", nodes: ["Next.js App Router", "Server actions + Zod", "API routes + OpenAPI"], app: true },
  { label: "Services", nodes: ["PostgreSQL + Prisma", "Keycloak (NextAuth)", "MinIO object storage"] },
  { label: "Platform", nodes: ["Docker", "Helm on k3s", "Gitea Actions CI/CD"] },
];

const pipeline = [
  { title: "Load", body: "Parse OTU and sample CSVs into staging tables. Blank rows are skipped and missing headers are flagged." },
  { title: "Normalize", body: "Standardize headers, dates (ISO 8601 and MM/DD/YYYY), and researcher name aliases." },
  { title: "Deduplicate", body: "Remove exact duplicate rows and drop null-OTU copies of rows that already have an OTU." },
  { title: "Promote", body: "Move staging rows to live tables in foreign-key order: location, site, researcher, sample, images, sequences." },
  { title: "Ingest images", body: "Copy specimen photos from Google Drive into MinIO." },
  { title: "Thumbnails", body: "Generate 300px JPEG thumbnails and mark each image READY." },
  { title: "GPS & deploy", body: "Load GPS sites with aliasing and forward-fill, then run the whole pipeline as a Kubernetes Job." },
];

const features = [
  { title: "Bulk import with diff preview", body: "Curators upload CSV or Excel and see each row marked NEW, CHANGED, or UNCHANGED before applying it. Works for samples, OTUs, and GPS sites." },
  { title: "Curator admin panel", body: "Keycloak role-gated dashboards for samples, OTUs, and GPS coordinates, with sortable tables, inline edits, and thumbnail previews." },
  { title: "Audit trail", body: "Every create, update, archive, restore, and delete is logged with who made it and the old and new values." },
  { title: "Soft-delete versioning", body: "Records are archived instead of deleted, so a curator can restore them." },
  { title: "Fuzzy search", body: "PostgreSQL pg_trgm search, with name normalization to merge duplicate researcher, site, and location names." },
  { title: "Gallery & API docs", body: "A specimen image gallery and public OpenAPI docs." },
];

const before = [
  "Separate Express backend",
  "Supabase, with credentials in source",
  "Raw SQL scripts, no migrations",
  "Hardcoded localhost URLs and wildcard CORS",
  "ESLint disabled, with debug logs left in",
];

const now = [
  "Server actions and API routes in one Next.js app",
  "PostgreSQL with Prisma migrations",
  "Keycloak auth with an admin role",
  "Self-hosted MinIO for images and sequence files",
  "Docker, Helm/k3s, and CI with Vitest, Cypress, and Playwright",
];

// Add GIFs here once they're cleared for public use, e.g.
// { src: "/assets/projects/sponge-db/search.gif", caption: "Searching by color and form" }
const demoMedia: { src: string; caption: string }[] = [];

const lessons = [
  { title: "Stage before you promote", body: "Loading into staging tables first meant bad rows could be checked and rejected before they reached live data." },
  { title: "Make every change traceable", body: "With an audit log and archiving, curators can edit shared scientific data without worrying about losing it." },
  { title: "Track work against a roadmap", body: "Breaking the rebuild into WBS items with acceptance criteria made it clear what was done and what was blocked." },
];

export default function SpongeDbCaseStudy() {
  return (
    <div>
      <nav className="case-nav">
        <div className="container">
          <Link href="/#projects" className="case-back">
            ← Back to portfolio
          </Link>
        </div>
      </nav>

      <header className="case-hero">
        <div className="container">
          <small className="case-eyebrow">Case Study</small>
          <h1 className="case-title">Philippine Sponge Database</h1>
          <p className="case-lede">
            A rebuild of the Philippine Sponge Guide, the database of marine
            sponge specimens collected by the UP Marine Science Institute. It
            started as an internship prototype and is now production software
            with a data pipeline, curator tools, and self-hosted
            infrastructure.
          </p>

          <figure className="case-shot surface-card">
            <Image
              src="/assets/projects/sponge_db_site.jpg"
              alt="Philippine Sponge Database home page with a search bar over an underwater photo of sponges, and counts of samples, collection sites, locations, and barcode sequences"
              width={1486}
              height={812}
              sizes="(max-width: 1200px) 100vw, 1150px"
              priority
            />
          </figure>

          <div className="case-meta">
            {meta.map((item) => (
              <div key={item.label} className="surface-card case-meta-item">
                <span className="case-meta-label">{item.label}</span>
                <span className="case-meta-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="case-section section-alt">
        <div className="container">
          <h2 className="case-heading">Architecture</h2>
          <p className="case-intro">
            A single Next.js app serves both the public site and the admin
            panel. Everything runs on PGC&apos;s own k3s cluster.
          </p>

          <div className="arch">
            {architecture.map((layer, idx) => (
              <div key={layer.label}>
                {idx > 0 && <div className="arch-arrow" aria-hidden="true">↓</div>}
                <div className={`surface-card arch-layer ${layer.app ? "is-app" : ""}`}>
                  <div className="arch-label">{layer.label}</div>
                  <div className="arch-nodes">
                    {layer.nodes.map((node) => (
                      <span key={node} className="arch-node">
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="container">
          <h2 className="case-heading">The data pipeline</h2>
          <p className="case-intro">
            Researcher spreadsheets go through a 7-stage ETL pipeline before
            they become live records.
          </p>

          <ol className="pipeline">
            {pipeline.map((step) => (
              <li key={step.title} className="surface-card pipeline-step">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="case-section section-alt">
        <div className="container">
          <h2 className="case-heading">What I built</h2>
          <p className="case-intro">
            Tools for the curators who maintain the data, plus search and
            browsing for researchers, students, and the public.
          </p>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="surface-card feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {demoMedia.length > 0 && (
        <section className="case-section">
          <div className="container">
            <h2 className="case-heading">In action</h2>
            <div className="demo-grid">
              {demoMedia.map((media) => (
                <figure key={media.src} className="surface-card demo-card">
                  {/* GIFs are animated, so skip next/image optimization */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={media.src} alt={media.caption} loading="lazy" />
                  <figcaption>{media.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="case-section">
        <div className="container">
          <h2 className="case-heading">From internship prototype to production</h2>
          <p className="case-intro">
            I first built the Philippine Sponge Guide during the 2025 PGC internship. The rebuild started by auditing that
            codebase and fixing its security and structural problems.
          </p>

          <div className="compare">
            <div className="surface-card compare-col">
              <h3>Internship prototype</h3>
              <div className="text-muted-small">2025</div>
              <ul>
                {before.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card compare-col is-now">
              <h3>Production rebuild</h3>
              <div className="text-muted-small">2026 – Present</div>
              <ul>
                {now.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section section-alt">
        <div className="container">
          <h2 className="case-heading">What I learned</h2>
          <div className="lessons">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="surface-card lesson">
                <h3>{lesson.title}</h3>
                <p>{lesson.body}</p>
              </div>
            ))}
          </div>
          <p className="case-note">
            The production source code is hosted privately by the Philippine
            Genome Center.
          </p>
        </div>
      </section>

      <footer className="glee-footer">
        <div className="container">
          © {new Date().getFullYear()} Gliezel Ann Pajarilla.
        </div>
      </footer>
    </div>
  );
}
