import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function getPostContent(slug: string, locale: string) {
  const postDir = path.join(process.cwd(), "content/blog", locale);
  const filePath = path.join(postDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    title: data.title,
    description: data.description,
    content: htmlContent,
  };
}
