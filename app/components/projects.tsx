import Link from 'next/link'
import { formatDate, getProjectPosts } from 'app/projects/utils'

export function ProjectPosts() {
  let allProjects = getProjectPosts()

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
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${project.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <div className="flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {project.metadata.title}
                </p>
                {project.metadata.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    {project.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-neutral-200 px-2 py-0.5 dark:border-neutral-800"
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
