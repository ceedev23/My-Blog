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
              <h1 className="text-4xl font-bold text-white">
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
            className="prose prose-invert max-w-none text-gray-400 
              [&>p]:text-gray-400 [&>p]:mb-6 [&>p]:leading-relaxed
              [&>h1]:text-white [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-8
              [&>h2]:text-gray-400 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-8
              [&>h3]:text-gray-400 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-6
              [&>h4]:text-gray-400 [&>h4]:text-xl [&>h4]:font-bold [&>h4]:mb-4 [&>h4]:mt-6
              [&>strong]:text-gray-400 [&>strong]:font-semibold
              [&>code]:text-gray-400 [&>code]:bg-gray-800/50 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded
              [&>pre]:text-gray-400 [&>pre]:bg-gray-800/50 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:mb-6
              [&>ul]:text-gray-400 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
              [&>ol]:text-gray-400 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
              [&>li]:text-gray-400 [&>li]:mb-2
              [&>blockquote]:text-gray-400 [&>blockquote]:border-l-4 [&>blockquote]:border-gray-700 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6
              [&>blockquote>p]:text-gray-400 [&>blockquote>p]:mb-0"
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