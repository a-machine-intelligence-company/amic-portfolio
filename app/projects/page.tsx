import { ProjectPosts } from 'app/components/projects'

export const metadata = {
  title: 'Projekte',
  description: 'Laufende Arbeiten und Referenzen aus unserer Praxis.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projekte</h1>
      <ProjectPosts />
    </section>
  )
}