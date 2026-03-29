import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Paragraph({ children }) {
  return <p className="my-4 text-neutral-700 dark:text-neutral-300">{children}</p>
}

function List({
  children,
  ordered,
}: {
  children: React.ReactNode
  ordered?: boolean
}) {
  let Element = ordered ? 'ol' : 'ul'
  let classes = ordered
    ? 'list-decimal pl-6 space-y-2'
    : 'list-disc pl-6 space-y-2'

  return React.createElement(Element, { className: classes }, children)
}

function Blockquote({ children }) {
  return (
    <blockquote className="mt-6 rounded-2xl border-l-4 border-neutral-300 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900/40">
      {children}
    </blockquote>
  )
}

function SubtitlelessHeading({ children }) {
  return (
    <p className="my-4 text-neutral-700 dark:text-neutral-300">{children}</p>
  )
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: SubtitlelessHeading,
  h3: SubtitlelessHeading,
  h4: SubtitlelessHeading,
  h5: SubtitlelessHeading,
  h6: SubtitlelessHeading,
  p: Paragraph,
  ul: (props) => <List {...props} ordered={false} />,
  ol: (props) => <List {...props} ordered />,
  blockquote: Blockquote,
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
