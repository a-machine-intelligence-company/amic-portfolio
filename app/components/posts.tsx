import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts().filter((post) => !post.metadata.hidde)

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 block rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--brand-primary)] shadow-[var(--brand-shadow)]"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-row flex-wrap gap-x-4">
              <p className="text-[var(--brand-subtle-text)] w-[100px] tabular-nums whitespace-nowrap">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-[var(--brand-primary-ink)] dark:text-[var(--brand-text)] tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
