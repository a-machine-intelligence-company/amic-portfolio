import Link from 'next/link'

export default function Page() {
  return (
    <section className="page-section">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-subtle-text)]">
          Data Intelligence
        </p>
        <h1 className="page-title">
          Wir entwickeln datengetriebene Loesungen mit messbarer Wirkung.
        </h1>
        <p className="text-base text-[var(--brand-subtle-text)]">
          Wir sind Roman und Severin Weiss und realisieren Projekte im
          Wechselspiel zwischen maschinellem Lernen, Datenanalysen,
          Nachhaltigkeit und gesellschaftlichem Fortschritt.
        </p>
        <div>
          <Link href="/contact" className="btn-brand">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
      <div className="space-y-8">
        <div className="mt-6 space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--brand-primary-ink)] dark:text-[var(--brand-text)]">
            Kontakt
          </h2>
          <p className="text-sm text-[var(--brand-subtle-text)]">
            Lassen Sie uns Ihr Vorhaben in die Tat umsetzen - schreiben Sie uns,
            wir freuen uns ueber Ihre Nachricht.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--brand-primary-ink)] dark:text-[var(--brand-text)]">
            Haeufige gestellte Fragen
          </h2>
          <div className="space-y-3">
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Welche Projekte passen zu euch?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[var(--brand-subtle-text)]">
                Wir arbeiten an praxisnahen Anwendungen rund um Daten und
                maschinelles Lernen - von Strategieentwicklung, Prototypen bis
                zu produktiven Loesungen.
              </p>
            </details>
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Was wird benoetigt um loszulegen?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[var(--brand-subtle-text)]">
                Teilen Sie uns Ihre Projektidee und Anforderungen mit - wir
                begleiten Sie von der Vision bis zur Umsetzung.
              </p>
            </details>
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Wie schnell koennt ihr starten?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[var(--brand-subtle-text)]">
                In der Regel innerhalb weniger Wochen - abhaengig von Umfang
                und Verfuegbarkeit.
              </p>
            </details>
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Wie erreicht man euch?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[var(--brand-subtle-text)]">
                Am besten ueber die Kontaktseite - wir melden uns zeitnah
                zurueck.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
