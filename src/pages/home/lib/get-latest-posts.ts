import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getLatestPosts() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const years = fs.readdirSync(postsDirectory);

  const allPosts = years.flatMap((year) => {
    const yearDirectory = path.join(postsDirectory, year);
    const fileNames = fs.readdirSync(yearDirectory);

    return fileNames.map((fileName) => {
      const filePath = path.join(yearDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.title,
        path: `/blog/${year}/${fileName.replace(/\.mdx?$/, "")}`,
        description: data.description,
        date: data.date,
        cover: data.cover,
        coverAlt: data.coverAlt || "",
      };
    });
  });

  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts.slice(0, 5);
}
