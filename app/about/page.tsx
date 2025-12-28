import Image from 'next/image'

const teamMembers = [
  {
    name: 'Roman Weiss',
    role: 'Romans Rolle',
    focus: 'Romans Fokus',
    bio:
      'Romans bio',
    traits: ['Eigenschaft 1', 'Eigenschaft 2', 'Eigenschaft 3'],
    imageUrl: '/about/roman.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com',
      email: 'mailto:hello@yourdomain.com',
    },
  },
  {
    name: 'Severin Weiss',
    // role: 'Systems Builder',
    focus: 'Datenprodukte & KI Verständlichkeit',
    bio:
      'Entwickelt robuste Algorithmen und Monitoring, damit Datenprodukte zuverlässig wachsen und verständlich werden.',
    traits: ['Lösungsorientiert', 'Individuell', 'Ganzheitlich'],
    imageUrl: '/about/severin.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/severin-weiss-32a44422a/',
      github: 'https://github.com/weisev-repo',
      email: 'mailto:se_weiss@protonmail.com',
    },
  },
]

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 6.9h4v10.1h-4V10.4Zm6.9 0h3.8v1.4h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v4.6h-4v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.2v4.1h-4V10.4Z"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.2-3.36-1.2-.46-1.17-1.1-1.48-1.1-1.48-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.82.1-.66.36-1.08.65-1.33-2.22-.26-4.55-1.12-4.55-4.98 0-1.1.39-2.01 1.03-2.72-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.22 2.44.1 2.7.64.71 1.03 1.62 1.03 2.72 0 3.87-2.34 4.72-4.57 4.98.37.32.7.94.7 1.9v2.82c0 .26.18.58.68.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm16 10V9.3l-8 5-8-5V17h16Z"
      />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 overflow-hidden">

        <div className="relative space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
            Ueber uns
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Datenarbeit mit Haltung und Hands-on Mentalitaet
          </h1>
          <p className="max-w-3xl text-lg text-neutral-200">
            Wir sind ein kleines Team mit Fokus auf maschinelles Lernen,
            Nachhaltigkeit und sozialem Fortschritt. Unsere Arbeit verbindet
            praezise Analyse mit klaren Produktentscheidungen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.7)] backdrop-blur transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="flex flex-col gap-4">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl ring-1 ring-white/15 md:h-56">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {member.name}
                  </h2>
                  <p className="text-sm text-neutral-300">{member.role}</p>
                  <p className="text-sm font-medium text-neutral-200">
                    {member.focus}
                  </p>
                </div>
              </div>

              <p className="text-neutral-200">{member.bio}</p>

              <div className="flex flex-wrap gap-2">
                {member.traits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-neutral-200"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 text-sm">
                <a
                  href={member.socials.linkedin}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
                <a
                  href={member.socials.github}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  href={member.socials.email}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white"
                >
                  <EmailIcon />
                  Email
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="rounded-3xl bg-white/5 px-8 py-10 text-white ring-1 ring-white/10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">
                Unser Ansatz
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Klarheit, Wirkung, Nachhaltigkeit
              </h3>
            </div>
            <div className="text-sm text-neutral-200">
              Wir charakterisieren Teams nicht nur ueber Rollen, sondern ueber
              die Wirkung, die sie liefern: klare Erkenntnisse, belastbare
              Systeme und messbare Fortschritte.
            </div>
            <div className="text-sm text-neutral-200">
              Diese Haltung uebersetzen wir in Projekte, die Menschen und
              Prozesse verbinden und langfristig tragfaehig sind.
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
