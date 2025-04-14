import fs from "fs";
import path from "path";
import { supportedLocales } from "@/shared/config";

export default function getAllPostSlugs() {
  const locales = supportedLocales;

  return locales.flatMap((locale) => {
    const dir = path.join(process.cwd(), "content/blog", locale);
    if (!fs.existsSync(dir)) return [];

    return fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".md"))
      .map((filename) => ({
        slug: filename.replace(/\.md$/, ""),
      }));
  });
}
