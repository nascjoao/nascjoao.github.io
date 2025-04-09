import { getTranslations } from "next-intl/server";
import LanguageSelect from "./language-select";

export default async function Home() {
  const t = await getTranslations();
  return (
    <>
      <header className="flex justify-end items-center p-4 text-white">
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
    </>
  );
}
