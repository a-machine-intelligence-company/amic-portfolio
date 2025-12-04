import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Our Portfolio
      </h1>
      <p className="mb-4">
        {"Wir sind Roman und Severin Weiss und realisieren Projekte in maschinellem Lernen und Datenalayse."}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
