const steps = [
  {
    number: '01',
    eyebrow: 'Datenwert-Analyse',
    title: 'Ausgangslage',
    lead: 'Wir besprechen gemeinsam den Ist-Zustand Ihrer Datenlandschaft und helfen Ihnen, den Wert Ihrer Daten zu erkennen.',
    questions: [
      'Was sind Ihre Kernkompetenzen?',
      'Welche datengetriebenen Tools nutzen Sie bereits?',
    ],
  },
  {
    number: '02',
    eyebrow: 'Strategieberatung',
    title: 'Ausrichtung',
    lead: 'Gemeinsam definieren wir klare Ziele, identifizieren Optimierungspotenziale und setzen Prioritäten.',
    questions: [
      'Wo möchten Sie hin?',
      'Welche Prozesse gilt es zu optimieren?',
      'Vor welchen Herausforderungen stehen Sie?',
    ],
  },
  {
    number: '03',
    eyebrow: 'Handlungsplan-Entwicklung',
    title: 'Massnahmen & Umsetzung',
    lead: 'Wir entwickeln einen passgenauen Handlungsplan — von der Konzeptphase über den Architekturaufbau bis zur Implementierung.',
    questions: [
      'Was?',
      'In welcher Zeit?',
      'Zu welchem Zweck?',
    ],
  },
  {
    number: '04',
    eyebrow: 'Begleitung & Monitoring',
    title: 'Kontrolle & Ausblick',
    lead: 'Wir begleiten Sie im Betrieb und überwachen die Leistung Ihrer Datenlösungen kontinuierlich.',
    questions: [
      'Sind wir angekommen?',
      'Haben sich neue Herausforderungen offenbart?',
    ],
  },
]

export default function Services() {
  return (
    <section className="page-section text-[var(--brand-text)]">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-subtle-text)]">
          Angebot
        </p>
        <h1 className="page-title">Leistungen mit Fokus auf Wirkung und Klarheit.</h1>
        <p className="page-copy text-[var(--brand-text)]">
          Unternehmen sammeln im täglichen Betrieb Daten über ihre eigenen Tätigkeiten und
          Kompetenzen. Wir begleiten Sie auf Ihrer Daten-Reise — von der ersten Analyse bis zum
          nachhaltigen Betrieb.
        </p>
      </div>

      <div>
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1
          return (
            <div key={step.number} className="relative flex gap-5 md:gap-7 pb-6 last:pb-0">
              {/* Connector line to next step */}
              {!isLast && (
                <div
                  className="absolute left-5 top-10 bottom-0 w-px"
                  style={{ backgroundColor: 'var(--brand-border)' }}
                />
              )}

              {/* Step number circle */}
              <div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold"
                style={
                  isLast
                    ? {
                        borderColor: 'var(--brand-accent)',
                        backgroundColor: 'var(--brand-accent)',
                        color: 'var(--brand-heading)',
                      }
                    : {
                        borderColor: 'var(--brand-primary)',
                        backgroundColor: 'var(--brand-surface)',
                        color: 'var(--brand-primary)',
                      }
                }
              >
                {step.number}
              </div>

              {/* Card */}
              <article className="section-card flex-1 min-w-0 space-y-3 transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--brand-subtle-text)]">
                    {step.eyebrow}
                  </p>
                  <h2 className="text-xl font-semibold text-[var(--brand-heading)] mt-1">
                    {step.title}
                  </h2>
                </div>
                <p className="page-copy-compact text-[var(--brand-subtle-text)]">{step.lead}</p>
                <ul className="space-y-2">
                  {step.questions.map((q) => (
                    <li
                      key={q}
                      className="flex items-center gap-2.5 text-sm text-[var(--brand-text)]"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: 'var(--brand-accent)' }}
                      />
                      {q}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
