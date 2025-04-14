import getPostContent from "./get-post-content";
import { beforeEach, describe, expect, it, vi } from "vitest";
import fs from "fs";

vi.mock("fs");

vi.mock("gray-matter", () => ({
  default: () => ({
    data: {
      title: "Test Post",
      description: "Test description",
    },
    content: "# Hello World",
  }),
}));

vi.mock("remark", () => ({
  remark: () => ({
    use: () => ({
      process: async () => ({
        toString: () => "<h1>Hello World</h1>",
      }),
    }),
  }),
}));

describe("getPostContent", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should return parsed post content when file exists", async () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue(`
      ---
      title: "Test Post"
      description: "Test description"
      ---
      # Hello World
    `);

    const result = await getPostContent("slug", "en");

    expect(result?.title).toBe("Test Post");
    expect(result?.description).toBe("Test description");
    expect(result?.content).toContain("<h1>Hello World</h1>");
  });

  it("should return null if file does not exist", async () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);

    const result = await getPostContent("slug", "en");
    expect(result).toBeNull();
  });
});
