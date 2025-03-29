"use client";

import Link from "next/link";
import Background from "@/app/components/Background";

interface Post {
  title: string;
  date: string;
  formattedDate: string;
  readingTime: string;
  content: string;
}

interface BlogPostClientProps {
  post: Post;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
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
              <h1 className="text-4xl font-bold text-gray-100">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center text-sm text-gray-400">
                <time>{post.formattedDate}</time>
                <span className="mx-2">·</span>
                <span>{post.readingTime}</span>
              </div>
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
        <article className="prose prose-invert max-w-none bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800/50 shadow-sm">
          <div 
            className="text-gray-400"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
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