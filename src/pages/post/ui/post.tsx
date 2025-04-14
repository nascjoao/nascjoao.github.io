import React from "react";
import { notFound, redirect } from "next/navigation";
import { blogPostsSlugsIndex } from "@/shared/i18n";
import { getAllPostSlugs, getPostContent } from "../lib";
import { getLocale } from "next-intl/server";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = await getPostContent(slug, locale);

  if (!post) {
    const translatedSlug = blogPostsSlugsIndex[slug]?.[locale];

    if (translatedSlug) {
      return redirect(`/blog/${translatedSlug}`);
    }

    return notFound();
  }

  return (
    <>
      <article className="max-w-prose mx-auto grid gap-4 my-20">
        <h1 className="text-4xl">{post.title}</h1>
        <p className="text-2xl">{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}
