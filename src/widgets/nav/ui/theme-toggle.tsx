"use client";

import React from "react";
import Sun from "pixelarticons/svg/sun-alt.svg";
import Moon from "pixelarticons/svg/moon.svg";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/shared/lib/client";

function ThemeBasedIcon({ theme }: { theme?: string }) {
  const Icon = theme === "dark" ? Moon : Sun;
  return (
    <Icon
      aria-live="polite"
      role="img"
      className="size-6 fill-black dark:fill-white"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    />
  );
}

function ThemeIconLoading() {
  return <div className="size-6 skeleton" />;
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { withClientMounted } = useIsMounted();

  const ThemeIcon = withClientMounted(ThemeBasedIcon, {
    fallback: ThemeIconLoading,
  });

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 with-hover"
    >
      <ThemeIcon theme={theme} />
    </button>
  );
}
