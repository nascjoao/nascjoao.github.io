import { getTranslations } from "next-intl/server";
import LanguageSelect from "./language-select";
import { AUTHOR_GITHUB, REPO_NAME, VERSION } from "@/shared/config";

export default async function Home() {
  const t = await getTranslations();
  return (
    <>
      <header className="flex justify-between items-center p-4 text-black dark:text-white">
        <a
          href={`https://github.com/${AUTHOR_GITHUB}/${REPO_NAME}/releases/tag/v${VERSION}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {VERSION}
        </a>
        <LanguageSelect />
      </header>
      <main className="mx-auto max-w-xl px-4 py-8">
        <div className="grid gap-4">
          <h1 className="text-4xl font-bold">{t("home.welcome")}</h1>
          <p className="text-xl dark:text-neutral-400 whitespace-pre-wrap">
            {t("home.description")}
          </p>
        </div>
      </main>
      <aside className="mx-auto max-w-xl px-4 py-8 bg-amber-500/10 border border-amber-500/20 rounded-md">
        <h2 className="text-2xl font-bold mb-4">
          {t("home.quick-note.title")}
        </h2>
        <p>{t("home.quick-note.content")}</p>
      </aside>
    </>
  );
}
