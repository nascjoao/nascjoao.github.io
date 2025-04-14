import { describe, expect, it, vi } from "vitest";
import Post, { generateStaticParams } from "./post";
import * as lib from "../lib";
import { notFound, redirect } from "next/navigation";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

vi.mock("../lib", async () => {
  const actual = await vi.importActual<typeof import("../lib")>("../lib");
  return {
    ...actual,
    getAllPostSlugs: vi.fn(),
    getPostContent: vi.fn(),
  };
});

vi.mock("@/shared/i18n", async () => {
  const actual =
    await vi.importActual<typeof import("@/shared/i18n")>("@/shared/i18n");
  return {
    ...actual,
    blogPostsSlugsIndex: {
      example: {
        "pt-br": "exemplo-traduzido",
      },
    },
  };
});

describe("Post", () => {
  it("should redirect if post is not found but translatedSlug exists", async () => {
    vi.mock(import("next-intl/server"), async (importOriginal) => {
      const original = await importOriginal();
      return {
        ...original,
        getLocale: vi.fn().mockResolvedValue("pt-br"),
      };
    });
    vi.mocked(lib.getPostContent).mockResolvedValue(null);
    const slug = "example";
    const locale = "pt-br";

    vi.mocked(redirect).mockClear();

    await Post({ params: Promise.resolve({ slug, locale }) });
    expect(redirect).toHaveBeenCalledWith("/blog/exemplo-traduzido");
  });

  it("should call notFound if post and translatedSlug don't exist", async () => {
    vi.mocked(lib.getPostContent).mockResolvedValue(null);
    const slug = "does-not-exist";
    const locale = "en";

    vi.mocked(notFound).mockClear();

    await Post({ params: Promise.resolve({ slug, locale }) });
    expect(notFound).toHaveBeenCalled();
  });

  it("should render post content if it exists", async () => {
    const mockPost = {
      title: "Test Post",
      description: "Test description",
      content: "<h2>Hello World</h2>",
    };
    vi.mocked(lib.getPostContent).mockResolvedValue(mockPost);
    const slug = "example";
    const locale = "en";

    const { getByText, getByRole } = render(
      <NextIntlClientProvider locale={locale} messages={{}}>
        {await Post({ params: Promise.resolve({ slug, locale }) })}
      </NextIntlClientProvider>,
    );

    expect(getByText("Test Post")).toBeInTheDocument();
    expect(getByText("Test description")).toBeInTheDocument();
    expect(getByRole("heading", { level: 2 })).toHaveTextContent("Hello World");
  });
});

describe("generateStaticParams", () => {
  it("should call getAllPostSlugs and return its result", async () => {
    const mockData = [{ slug: "hello" }, { slug: "world" }];
    vi.mocked(lib.getAllPostSlugs).mockResolvedValue(mockData);

    const result = await generateStaticParams();
    expect(result).toEqual(mockData);
  });
});
