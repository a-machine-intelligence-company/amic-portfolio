const services = [
  {
    title: 'Datenwert-Monitoring',
    description:
      'Wir bieten massgeschneiderte Lösungen um Datenmengen zu strukturieren, eine maschinelle Analyse und Aufbereitung, sodass die gewonnen Erkenntnisse menschlich interpretiert werden können. Wir helfen Ihnen den Wert Ihrer Daten zu nutzen und optimierte Entscheidungen für Ihr Unternehmen zu treffen.',
  },
  {
    title: 'Handlungsplan-Entwicklung',
    description:
      'Wir entwickeln einen passgenauen Handlungsplan für Ihre Datenlandschaft, von der Konzeptphase über die den Architekturaufbau bis zur Implementierung. Unser Fokus liegt auf der Entwicklung von Lösungen, die nicht nur technisch robust, sondern auch verständlich und nachhaltig sind.',
  },
  {
    title: 'Begleitung und Performance-Monitoring',
    description:
      'Wir begleiten Sie im Betrieb. Es ist zentral die Leistung Ihrer Datenlösungen kontinuierlich zu überwachen und zu optimieren, um sicherzustellen, dass sie den gewünschten Mehrwert für Sie liefern.',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
            Angebot
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Leistungen mit Fokus auf Wirkung und Klarheit.
          </h1>
          <p className="max-w-3xl text-lg text-neutral-200">
            Unternehmen sammeln im täglichen Betrieb Daten über ihre eigenen Tätigkeiten und Kompetenzen. Wir helfen Ihnen dabei, Ihre Datenwerte zu analysieren, sinnvoll zu strukturieren,
            und entwickeln einen klaren Handlungsplan anhand Ihrer Bedürfnisse und Ziele.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-w-[260px] flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.7)] backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 sm:min-w-[320px] lg:min-w-[360px]"
            >
              <h2 className="text-xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="text-sm text-neutral-200">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
