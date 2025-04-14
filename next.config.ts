import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_WEBSITE_VERSION: version,
  },
  webpack(config, { isServer }) {
    // @ts-expect-error - nextjs/typescript#nextConfig.webpack
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;

    if (!isServer) {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "frontmatter-markdown-loader",
            options: { mode: ["frontmatter", "react"] },
          },
        ],
      });
    }
    return config;
  },
};

const withNextIntl = createNextIntlPlugin("src/shared/i18n");

export default withNextIntl(nextConfig);
