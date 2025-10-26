import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ year: string; slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, slug } = await params;

  try {
    const Post = (await import(`@/posts/${year}/${slug}.mdx`)).default;
    return <Post />;
  } catch {
    notFound();
  }
}
