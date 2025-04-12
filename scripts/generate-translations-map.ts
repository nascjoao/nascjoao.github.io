import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const BLOG_PATH = path.join(process.cwd(), "content/blog");
const OUTPUT_PATH = path.join(
  process.cwd(),
  "src",
  "shared",
  "i18n",
  "blog-posts-slugs-index.json",
);

interface Translation {
  language: string;
  slug: string;
}

interface PostMeta {
  slug: string;
  locale: string;
  translations: Translation[];
}

async function collectPostMetadata(): Promise<PostMeta[]> {
  const files = await glob(`${BLOG_PATH}/**/*.md`);

  return Promise.all(
    files.map(async (filePath) => {
      const fileContent = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(fileContent);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, locale, filename] = filePath.split(path.sep).slice(-3);
      const slug = filename.replace(/\.md$/, "");

      return {
        slug,
        locale,
        translations: (data.translations ?? []) as Translation[],
      };
    }),
  );
}

function validateMutualLinks(posts: PostMeta[]) {
  const warnings: string[] = [];
  const index = new Map<string, PostMeta>();

  for (const post of posts) {
    index.set(`${post.locale}:${post.slug}`, post);
  }

  for (const post of posts) {
    for (const translation of post.translations) {
      const target = index.get(`${translation.language}:${translation.slug}`);
      if (!target) {
        warnings.push(
          `Missing translation target: '${post.slug}' -> '${translation.slug}' (${translation.language})`,
        );
        continue;
      }
      const back = target.translations.find(
        (r) => r.language === post.locale && r.slug === post.slug,
      );
      if (!back) {
        warnings.push(
          `Unilateral translation: '${post.slug}' -> '${translation.slug}' (${translation.language}) has no reciprocal link`,
        );
      }
    }
  }

  return warnings;
}

function buildTranslationIndex(posts: PostMeta[]) {
  const index: Record<string, Record<string, string>> = {};

  for (const post of posts) {
    index[post.slug] = {};
    for (const t of post.translations) {
      index[post.slug][t.language] = t.slug;
    }
  }

  return index;
}

async function main() {
  const posts = await collectPostMetadata();
  const warnings = validateMutualLinks(posts);
  const index = buildTranslationIndex(posts);

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2), "utf8");
  console.log("✅ Translation index generated at:", OUTPUT_PATH);

  if (warnings.length > 0) {
    console.warn("\n⚠️ Translation warnings:");
    for (const warning of warnings) {
      console.warn("  -", warning);
    }
  }
}

main().catch((err) => {
  console.error("❌ Failed to generate translation index:", err);
  process.exit(1);
});
