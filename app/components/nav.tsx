'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Startseite',
  },
  '/services': {
    name: 'Angebote',
  },
  '/projects': {
    name: 'Projekte',
  },
  '/blog': {
    name: 'Blog',
  },
  '/about': {
    name: 'Über uns',
  },
  '/contact': {
    name: 'Kontakt',
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="mb-12 pt-1">
      <div className="lg:sticky lg:top-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-baseline gap-2.5 text-[var(--brand-primary)]"
          aria-label="Zur Startseite"
        >
          <span className="brand-script text-5xl leading-none">amic</span>
          <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
        </Link>
        <nav
          className="fade relative flex flex-row items-start overflow-x-auto scroll-pr-6"
          id="nav"
        >
          <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive =
                path === '/' ? pathname === path : pathname.startsWith(path)
              return (
                <Link
                  key={path}
                  href={path}
                  className={`border-b text-sm font-medium transition ${
                    isActive
                      ? 'border-[var(--brand-primary)] text-[var(--brand-primary)]'
                      : 'border-transparent text-[var(--brand-subtle-text)] hover:text-[var(--brand-primary)]'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
