import { ProjectPosts } from 'app/components/projects'

export const metadata = {
  title: 'Projekte',
  description: 'Laufende Arbeiten und Referenzen aus unserer Praxis.',
}

export default function Page() {
  return (
    <section className="page-section">
      <h1 className="page-title">Projekte</h1>
      <ProjectPosts />
    </section>
  )
}
