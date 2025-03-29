import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
        >
          Return Home
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 