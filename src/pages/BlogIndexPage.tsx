import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'agent-workflow',
    title: 'How I Think About Structuring Agent Work',
    date: 'April 2026',
  },
]

export function BlogIndexPage() {
  return (
    <main className="w-[50vw] mx-auto px-6 py-16">
      <nav className="flex items-center gap-1.5 text-sm text-zinc-400 mb-10">
        <Link to="/" className="hover:text-zinc-700 transition-colors">Home</Link>
        <span className="text-zinc-300">›</span>
        <span className="text-zinc-700">Blog</span>
      </nav>
      <h1 className="text-2xl font-semibold text-zinc-900 mb-3">Blog</h1>
      <p className="text-xs text-zinc-400 mb-6">Notes about building with AI</p>

      <section className="mb-14 max-w-2xl">
        <div className="divide-y divide-zinc-100">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="flex items-baseline justify-between gap-6 py-4 group">
              <span className="text-zinc-600 text-sm leading-relaxed group-hover:text-zinc-900 transition-colors">{post.title}</span>
              <span className="text-xs text-zinc-400 shrink-0">{post.date}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
