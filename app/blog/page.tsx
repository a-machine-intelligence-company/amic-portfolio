import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projekte',
  description: 'Schau dir unsere Projekte an.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Unser Blog</h1>
      <BlogPosts />
    </section>
  )
}
