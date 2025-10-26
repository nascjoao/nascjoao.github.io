import { notFound } from "next/navigation";
import PostPageProps from "../model/post-page-props";

export default async function PostPage({ params }: PostPageProps) {
  const { year, slug } = await params;

  try {
    const Post = (await import(`@/posts/${year}/${slug}.mdx`)).default;
    return <Post />;
  } catch {
    notFound();
  }
}
