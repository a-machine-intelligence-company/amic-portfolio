export default function Services() {
  return (
    <main className="min-h-screen p-8 bg-black">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white">Services</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Data Consulting</h2>
            <p className="text-gray-300">You bring the data, we analyse and provide insights to improve your overview and decision-making.</p>
          </div>

          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Customized Monitoring</h2>
            <p className="text-gray-300">We build the data architecture and monitoring tools tailored to your needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
