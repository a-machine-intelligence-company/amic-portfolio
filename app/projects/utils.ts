import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  tags?: string[]
  hidde?: boolean
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    if (key.trim() === 'hidde') {
      metadata.hidde = value === 'true'
      return
    }
    if (key.trim() === 'tags') {
      metadata.tags = value
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
      return
    }
    metadata[key.trim() as keyof Metadata] = value
  })

  if (metadata.hidde === undefined) {
    metadata.hidde = false
  }

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getProjectPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'projects', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `vor ${yearsAgo} Jahr${yearsAgo === 1 ? '' : 'en'}`
  } else if (monthsAgo > 0) {
    formattedDate = `vor ${monthsAgo} Monat${monthsAgo === 1 ? '' : 'en'}`
  } else if (daysAgo > 0) {
    formattedDate = `vor ${daysAgo} Tag${daysAgo === 1 ? '' : 'en'}`
  } else {
    formattedDate = 'Heute'
  }

  let fullDate = targetDate.toLocaleString('de-DE', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
