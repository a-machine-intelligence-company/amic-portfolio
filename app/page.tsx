import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Unser Portfolio
      </h1>
      <div className="my-8">
        <p className="text-base text-neutral-700 dark:text-neutral-300">
          Wir sind Roman und Severin Weiss und realisieren Projekte im
          Wechselspiel zwischen maschinellem Lernen, Datenanalysen,
          Nachhaltigkeit und gesellschaftlichem Fortschritt.
        </p>
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">Häufige gestellte Fragen</h2>
          <div className="space-y-3">
            <details className="group rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Welche Projekte passen zu euch?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Wir arbeiten an praxisnahen Anwendungen rund um Daten und maschinellem Lernen
                 - von Beratung, Prototypen bis zu produktiven Lösungen.
              </p>
            </details>
            <details className="group rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Was wird benötigt um loszulegen?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Teilen Sie uns Ihre Projektidee und Anforderungen mit - wir begleiten Sie von der Vision bis zur Umsetzung.
              </p>
            </details>
            <details className="group rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Wie schnell könnt ihr starten?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                In der Regel innerhalb weniger Wochen - abhängig von Umfang
                und Verfügbarkeit.
              </p>
            </details>
            <details className="group rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                <span>Wie erreicht man euch?</span>
                <span className="text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Am besten über die Kontaktseite - wir melden uns zeitnah
                zurück.
              </p>
            </details>
          </div>
        </div>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
