import { AUTHOR_GITHUB, REPO_NAME, VERSION } from "@/shared/config";
import React from "react";
import ThemeToggle from "./theme-toggle";
import LanguageSelect from "./language-select";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex justify-between items-center p-4 text-black dark:text-white">
      <Link href="/">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={32}
          height={32}
          style={{
            imageRendering: "pixelated",
          }}
          unoptimized
        />
      </Link>
      <div className="flex gap-x-2">
        <LanguageSelect />
        <ThemeToggle />
        <a
          href={`https://github.com/${AUTHOR_GITHUB}/${REPO_NAME}/releases/tag/v${VERSION}`}
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center with-hover px-1"
        >
          {VERSION}
        </a>
      </div>
    </header>
  );
}
