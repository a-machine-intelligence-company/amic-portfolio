const services = [
  {
    title: 'Datenwert-Monitoring',
    description:
      'Wir bieten massgeschneiderte Lösungen um Datenmengen zu strukturieren, eine maschinelle Analyse und Aufbereitung, sodass die gewonnen Erkenntnisse menschlich interpretiert werden können. Wir helfen Ihnen den Wert Ihrer Daten zu nutzen und optimierte Entscheidungen für Ihr Unternehmen zu treffen.',
  },
  {
    title: 'Handlungsplan-Entwicklung',
    description:
      'Wir entwickeln einen passgenauen Handlungsplan für Ihre Datenlandschaft, von der Konzeptphase über den Architekturaufbau bis zur Implementierung. Unser Fokus liegt auf der Entwicklung von Lösungen, die nicht nur technisch robust, sondern auch verständlich und nachhaltig sind.',
  },
  {
    title: 'Begleitung und Performance-Monitoring',
    description:
      'Wir begleiten Sie im Betrieb. Es ist zentral die Leistung Ihrer Datenlösungen kontinuierlich zu überwachen und zu optimieren, um sicherzustellen, dass sie den gewünschten Mehrwert für Sie liefern.',
  },
]

export default function Services() {
  return (
    <section className="page-section text-neutral-900 dark:text-neutral-100">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Angebot
        </p>
        <h1 className="page-title">
          Leistungen mit Fokus auf Wirkung und Klarheit.
        </h1>
        <p className="max-w-3xl text-lg text-neutral-700 dark:text-neutral-300">
          Unternehmen sammeln im täglichen Betrieb Daten über ihre eigenen Tätigkeiten
          und Kompetenzen. Wir helfen Ihnen dabei, Ihre Datenwerte zu analysieren,
          sinnvoll zu strukturieren und einen klaren Handlungsplan anhand Ihrer
          Bedürfnisse und Ziele zu entwickeln.
        </p>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="section-card px-5 py-5 transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)]"
          >
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-sm text-[var(--brand-subtle-text)]">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
