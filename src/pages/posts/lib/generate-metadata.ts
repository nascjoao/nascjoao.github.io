import { Metadata } from "next";
import matter from "gray-matter";
import PostPageProps from "../model/post-page-props";
import fs from "fs";
import path from "path";

export default async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { year, slug } = await params;

  try {
    const postFilePath = path.join(
      process.cwd(),
      "src",
      "posts",
      year,
      `${slug}.mdx`,
    );
    const fileContents = fs.readFileSync(postFilePath, "utf8");
    const { data } = matter(fileContents);

    return {
      metadataBase: new URL("https://nasc.dev"),
      title: data.title || "Untitled Post",
      description: data.description || "No description available.",
      openGraph: {
        title: data.title || "Untitled Post",
        description: data.description || "No description available.",
        images: data.cover ? [{ url: data.cover }] : [],
      },
    };
  } catch {
    return {
      title: "Post not found",
    };
  }
}
