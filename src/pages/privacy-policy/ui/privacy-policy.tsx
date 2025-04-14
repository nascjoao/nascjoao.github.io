import { getTranslations } from "next-intl/server";
import React from "react";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations();
  return (
    <main className="max-w-prose mx-auto grid gap-4 my-20 flex-1">
      <h1 className="text-4xl">{t("privacy-policy.title")}</h1>
      <p className="whitespace-pre-wrap">
        {t.rich("privacy-policy.description", {
          strong: (chunks) => (
            <strong className="font-semibold">{chunks}</strong>
          ),
          analytics: (chunks) => (
            <a
              href="https://umami.is/"
              target="_blank"
              rel="noopener noreferrer"
              className="with-hover inline-block underline underline-offset-2"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </main>
  );
}
