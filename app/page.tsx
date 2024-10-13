import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Our Portfolio
      </h1>
      <p className="mb-4">
        {"We’re passionate explorers of AI, automation, and the limitless potential of data. From AI and LLMs to advanced data analytics, we’re always learning, building, and pushing boundaries. On this page, you’ll discover a selection of our most exciting projects. Feel free to reach out with any questions, feedback, or ideas — we’d love to hear from you!"}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
