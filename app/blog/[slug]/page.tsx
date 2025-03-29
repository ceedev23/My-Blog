import { getPostBySlug, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = await formatDate(post.date);

  return <BlogPostClient post={{ ...post, formattedDate }} />;
} 