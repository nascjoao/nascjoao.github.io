import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_WEBSITE_VERSION: version,
  },
};

export default nextConfig;
