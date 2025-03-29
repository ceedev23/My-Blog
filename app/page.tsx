import Link from "next/link";
import Background from "./components/Background";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen relative">
      <Background />
      <header className="border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-100">My Blog</h1>
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
        {/* Hero Section */}
        <section className="relative h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image
            src="/assets/images/blogHero.png"
            alt="Blog Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
            <div className="p-8">
              <h2 className="text-4xl font-bold text-white mb-4">Welcome to My Blog</h2>
              <p className="text-gray-200 text-lg max-w-2xl">
                Exploring ideas, sharing knowledge, and documenting my journey in technology and development.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Latest Posts</h2>
          <div className="grid gap-8">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 shadow-sm hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-100 mb-6">About Me</h2>
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 shadow-sm">
            <p className="text-gray-400">
              Welcome to my blog! I&apos;m passionate about sharing my thoughts and experiences on various topics.
              Here you&apos;ll find articles about technology, personal development, and more.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              © 2025 My Blog. All rights reserved.
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
