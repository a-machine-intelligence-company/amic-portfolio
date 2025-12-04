export default function Services() {
  return (
    <main className="min-h-screen p-8 bg-black">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white">Angebote</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Datenberatung</h2>
            <p className="text-gray-300">Sie bringen die Daten, wir analysieren und liefern Erkenntnisse zur Verbesserung Ihrer Übersicht und Entscheidungsfindung.</p>
          </div>

          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Maßgeschneidertes Monitoring</h2>
            <p className="text-gray-300">Wir erstellen die Datenarchitektur und Überwachungstools, die auf Ihre Bedürfnisse zugeschnitten sind.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
