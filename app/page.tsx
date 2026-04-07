import Link from 'next/link'

export default function Page() {
  return (
    <section className="page-section">
      <div className="max-w-3xl space-y-5">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--brand-subtle-text)]">
          Willkommen bei amic.
        </p>
        <h1 className="page-title">
          Wir entwickeln datengetriebene Lösungen.
        </h1>
        <p className="page-copy text-[var(--brand-subtle-text)]">
          Wir sind ein Team aus Ingenieuren und realisieren Projekte im
          Wechselspiel zwischen maschinellem Lernen, Datenanalysen,
          Nachhaltigkeit und gesellschaftlichem Fortschritt.
        </p>
        <div>
          <Link href="/contact" className="btn-brand">
            Mein Datenpotential jetzt nutzen!
          </Link>
        </div>
      </div>
      <div className="space-y-8">
        <div className="mt-6 space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--brand-primary-ink)] dark:text-[var(--brand-text)]">
            Kontakt
          </h2>
          <p className="page-copy-compact text-[var(--brand-subtle-text)]">
            Lassen Sie uns Ihr Vorhaben in die Tat umsetzen - schreiben Sie uns,
            wir freuen uns über Ihre Nachricht.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-[var(--brand-primary-ink)] dark:text-[var(--brand-text)]">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-3">
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Welche Projekte passen zu euch?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="page-copy-compact mt-3 text-[var(--brand-subtle-text)]">
                Wir arbeiten an praxisnahen Anwendungen rund um Daten und
                maschinelles Lernen - von Strategieentwicklung, Prototypen bis
                zu produktiven Loesungen.
              </p>
            </details>
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Was wird benötigt um loszulegen?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="page-copy-compact mt-3 text-[var(--brand-subtle-text)]">
                Teilen Sie uns Ihre Projektidee und Anforderungen mit - wir
                begleiten Sie von der Vision bis zur Umsetzung.
              </p>
            </details>
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Wie schnell könnt ihr starten?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="page-copy-compact mt-3 text-[var(--brand-subtle-text)]">
                In der Regel innerhalb weniger Wochen - abhängig von Umfang
                und Verfügbarkeit.
              </p>
            </details>
            <details className="group rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Wie erreicht man euch?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="page-copy-compact mt-3 text-[var(--brand-subtle-text)]">
                Am besten über die Kontaktseite - wir melden uns zeitnah
                zurück.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
