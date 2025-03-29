import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import Background from "../components/Background";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen relative">
      <Background />
      <header className="border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <Link 
                href="/"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 mb-4"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <h1 className="text-4xl font-bold text-white">
                All Posts
              </h1>
              <p className="mt-2 text-gray-400">
                A collection of all my thoughts and ideas
              </p>
            </div>
            <nav className="flex gap-6">
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {/* Posts Grid */}
          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-blue-400">
                        <span className="px-2 py-1 bg-blue-500/10 rounded-full">
                          {post.readingTime}
                        </span>
                      </div>
                      <time className="text-sm text-gray-400">
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-300">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                      >
                        Read more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-2">No posts yet</h3>
              <p className="text-gray-400">Check back later for new content!</p>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-800/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              © 2024 My Blog. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
} 