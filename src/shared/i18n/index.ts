export { default } from "./request";
import * as en from "./en.json";
export { en };
import * as ptBR from "./pt-br.json";
export { ptBR };
import _blogPostsSlugsIndex from "./blog-posts-slugs-index.json";
export const blogPostsSlugsIndex = _blogPostsSlugsIndex as Record<
  string,
  Record<string, string>
>;
