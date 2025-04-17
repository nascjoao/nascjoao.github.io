import { AUTHOR_GITHUB, REPO_NAME } from "@/shared/config";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

import Bunnies from "./bunnies";

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="relative mt-50 flex-col text-center md:text-left md:flex-row p-4 py-12 flex items-center justify-center w-full bg-orange-200/40 dark:bg-neutral-900">
      <Bunnies />
      <Link
        href="/privacy-policy"
        className="text-sm text-neutral-500 dark:text-neutral-400 with-hover inline-block"
      >
        {t("footer.privacy-policy")}
      </Link>
      <span className="hidden md:block mx-2 text-sm text-neutral-500 dark:text-neutral-400">
        •
      </span>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {t.rich("footer.license", {
          cc: (chunks) => (
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="with-hover underline underline-offset-2 inline-block"
            >
              {chunks}
            </a>
          ),
          mit: (chunks) => (
            <a
              href={`https://github.com/${AUTHOR_GITHUB}/${REPO_NAME}/blob/main/LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
              className="with-hover underline underline-offset-2 inline-block"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </footer>
  );
}
