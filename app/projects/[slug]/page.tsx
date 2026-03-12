import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getProjectPosts } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let projects = getProjectPosts().filter((project) => !project.metadata.hidde)

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }) {
  let project = getProjectPosts().find(
    (item) => item.slug === params.slug && !item.metadata.hidde
  )
  if (!project) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    tags,
  } = project.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }) {
  let project = getProjectPosts().find(
    (item) => item.slug === params.slug && !item.metadata.hidde
  )

  if (!project) {
    notFound()
  }

  return (
    <section className="page-section">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${baseUrl}${project.metadata.image}`
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/projects/${project.slug}`,
            keywords: project.metadata.tags,
            author: {
              '@type': 'Person',
              name: 'Mein Portfolio',
            },
          }),
        }}
      />
      <h1 className="page-title">
        {project.metadata.title}
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.metadata.publishedAt)}
        </p>
        {project.metadata.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="tag-chip"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <article className="prose max-w-none">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
