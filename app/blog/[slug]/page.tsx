import { getPostBySlug, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = await formatDate(post.date);

  return <BlogPostClient post={{ ...post, formattedDate }} />;
} 