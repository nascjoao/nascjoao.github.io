import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  test: {
    workspace: [
      {
        extends: true,
        test: {
          include: ["src/**/*.test.tsx"],
          setupFiles: [
            "src/app/config/setup-tests.base.ts",
            "src/app/config/setup-tests.jsdom.ts",
          ],
          name: "React",
          environment: "jsdom",
        },
      },
      {
        extends: true,
        test: {
          include: ["src/**/*.test.ts"],
          setupFiles: ["src/app/config/setup-tests.base.ts"],
          name: "Node",
          environment: "node",
        },
      },
    ],
    coverage: {
      exclude: [
        "next.config.ts",
        "postcss.config.mjs",
        "public/**",
        "**/*.d.ts",
        "**/index.ts",
        "src/app/layouts/**",
        "**/config/**",
      ],
      include: ["src/**"],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
