import Link from 'next/link'
import { formatDate, getProjectPosts } from 'app/projects/utils'

export function ProjectPosts() {
  let allProjects = getProjectPosts().filter((project) => !project.metadata.hidde)

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="mb-4 block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 p-4 transition hover:border-neutral-300 dark:hover:border-neutral-700"
            href={`/projects/${project.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3 md:items-center">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div className="flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {project.metadata.title}
                </p>
                {project.metadata.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
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
            </div>
          </Link>
        ))}
    </div>
  )
}
