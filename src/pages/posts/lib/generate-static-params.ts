import fs from "fs";
import path from "path";

export default async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const years = fs.readdirSync(postsDirectory);

  const params: { year: string; slug: string }[] = [];

  years.forEach((year) => {
    const yearPath = path.join(postsDirectory, year);
    if (fs.statSync(yearPath).isDirectory()) {
      const filenames = fs.readdirSync(yearPath);
      filenames
        .filter((filename) => filename.endsWith(".mdx"))
        .forEach((filename) => {
          params.push({
            year,
            slug: filename.replace(/\.mdx$/, ""),
          });
        });
    }
  });

  return params;
}
