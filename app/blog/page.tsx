import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Gedanken, Tutorials und Hintergrundwissen.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Unser Blog</h1>
      <BlogPosts />
    </section>
  )
}