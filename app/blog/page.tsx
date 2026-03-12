import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Gedanken, Tutorials und Hintergrundwissen.',
}

export default function Page() {
  return (
    <section className="page-section">
      <h1 className="page-title">Unser Blog</h1>
      <BlogPosts />
    </section>
  )
}
