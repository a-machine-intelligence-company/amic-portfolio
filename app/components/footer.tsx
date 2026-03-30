function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-12 mt-12 border-t border-[var(--brand-border)] pt-6">
      <div className="mb-4 flex items-baseline gap-2 text-[var(--brand-primary)]">
        <p className="brand-script text-4xl leading-none">amic</p>
        <span className="h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
      </div>
      <ul className="mt-3 flex flex-col space-x-0 space-y-2 text-sm text-[var(--brand-subtle-text)] md:flex-row md:space-x-6 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-[var(--brand-primary)]"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">RSS</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-[var(--brand-primary)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-[var(--brand-primary)]"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Quellcode ansehen</p>
          </a>
        </li>
      </ul>
      <p className="mt-6 text-sm text-[var(--brand-subtle-text)]">
        © {new Date().getFullYear()} MIT-Lizenz
      </p>
    </footer>
  )
}
