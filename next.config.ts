import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_WEBSITE_VERSION: version,
  },
};

const withNextIntl = createNextIntlPlugin("src/shared/i18n");

export default withNextIntl(nextConfig);
