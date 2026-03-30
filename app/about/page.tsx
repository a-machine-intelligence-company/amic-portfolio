import Image from 'next/image'

const teamMembers = [
  {
    name: 'Roman Weiss',
    // role: 'Romans Rolle',
    focus: 'datenbasierte Optimierung & modellbasierte Entscheidungen',
    bio:
      'Arbeitet an der Schnittstelle von Modellierung, Datenanalyse und Praxis, um fundierte und robuste Entscheidungen zu ermöglichen.',
    traits: ['Strukturiert', 'Neugierig', 'Praxisnah'],
    imageUrl: '/about/roman.jpg',
    imagePosition: 'center 28%',
    socials: {
      linkedin: 'https://www.linkedin.com/in/roman-weiss-69929a303/?trk=opento_sprofile_details',
      github: 'https://github.com/romanweiss123',
      email: 'mailto:roman.weiss@hotmail.com',
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
    imagePosition: 'center 42%',
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
    <section className="page-section text-[var(--brand-text)]">
      <div className="relative space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-subtle-text)]">
          Über uns
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Wir gestalten Produkte und Entscheidungen durch Daten.
        </h1>
        <p className="max-w-3xl text-lg text-[var(--brand-text)]">
          Wir sind ein kleines Team mit Fokus auf datenbasierten Systemen um die
          Prozesse, Entscheidungen und Produkte unserer Auftraggeber zu verbessern.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="group flex h-full flex-col gap-6 section-card transition hover:-translate-y-1 hover:border-[var(--brand-primary)]"
          >
            <div className="flex flex-col gap-4">
              <div className="relative h-56 overflow-hidden rounded-2xl ring-1 ring-[var(--brand-border)] sm:h-64">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 32rem, (min-width: 768px) 46vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: member.imagePosition }}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-sm font-medium text-[var(--brand-subtle-text)]">
                  {member.focus}
                </p>
              </div>
            </div>

            <p className="text-[var(--brand-text)]">{member.bio}</p>

            <div className="flex flex-wrap gap-2">
              {member.traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-muted-surface)] px-3 py-1 text-xs font-medium text-[var(--brand-text)]"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 text-sm">
              <a
                href={member.socials.linkedin}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 py-2 text-xs font-semibold text-[var(--brand-subtle-text)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                href={member.socials.github}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 py-2 text-xs font-semibold text-[var(--brand-subtle-text)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href={member.socials.email}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 py-2 text-xs font-semibold text-[var(--brand-subtle-text)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
              >
                <EmailIcon />
                Email
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="section-card">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-subtle-text)]">
              Unser Ansatz
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Klarheit, Wirkung, Nachhaltigkeit
            </h3>
          </div>
          <div className="text-sm text-[var(--brand-text)]">
            Wir charakterisieren Teams nicht nur über Rollen, sondern über die
            Wirkung, die sie liefern: klare Erkenntnisse, belastbare Systeme und
            messbare Fortschritte.
          </div>
          <div className="text-sm text-[var(--brand-text)]">
            Diese Haltung übersetzen wir in Projekte, die Menschen und Prozesse
            verbinden und langfristig tragfähig sind.
          </div>
        </div>
      </section>
    </section>
  )
}
