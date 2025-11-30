export default function Services() {
  return (
    <main className="min-h-screen p-8 bg-black">
      <section className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white">Services</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-300">Building responsive, fast, and modern web applications using Next.js and React.</p>
          </div>

          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-gray-300">Designing intuitive user experiences and clean, elegant interfaces.</p>
          </div>

          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">SEO Optimization</h2>
            <p className="text-gray-300">Improving search visibility with best‑practice content and technical SEO.</p>
          </div>

          <div className="p-6 bg-gray-900 shadow rounded-2xl">
            <h2 className="text-2xl font-semibold mb-2">Consulting</h2>
            <p className="text-gray-300">Helping you choose the right tech stack and architecture for your product.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
