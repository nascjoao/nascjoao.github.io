import fs from "fs";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("fs");
vi.mock("@/shared/config", () => ({
  supportedLocales: ["en", "pt-br"],
}));

import getAllPostSlugs from "./get-all-posts-slug";

describe("getAllPostSlugs", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return slugs for markdown files in all locales", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    // @ts-expect-error - TODO: Fix type error
    vi.mocked(fs.readdirSync).mockImplementation((dir: string) => {
      if (dir.includes("content/blog/en")) return ["hello.md", "about.md"];
      if (dir.includes("content/blog/pt-br")) return ["ola.md"];
      return [];
    });

    const result = getAllPostSlugs();

    expect(result).toEqual([
      { slug: "hello" },
      { slug: "about" },
      { slug: "ola" },
    ]);
  });

  it("should return empty array if directory doesn't exist", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    const result = getAllPostSlugs();
    expect(result).toEqual([]);
  });
});
