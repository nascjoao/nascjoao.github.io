import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();
  return (
    <>
      <main className="[box-shadow:0_0_20px_20px_#fff5e7] dark:[box-shadow:0_0_20px_20px_var(--color-neutral-950)] mx-auto max-w-xl px-4 py-8 bg-[#fff5e7] dark:bg-neutral-950">
        <div className="grid gap-4">
          <h1 className="text-4xl">{t("home.welcome")}</h1>
          <p className="text-xl dark:text-neutral-400 whitespace-pre-wrap">
            {t("home.description")}
          </p>
        </div>
      </main>
      <div className="flex-1">
        <aside className="[box-shadow:0_0_20px_20px_#fff5e7] dark:[box-shadow:0_0_20px_20px_var(--color-neutral-950)] mx-auto max-w-xl bg-[#fff5e7] dark:bg-neutral-950">
          <div className="px-4 py-8 bg-amber-500/10 border border-amber-500/20 rounded-xs">
            <h2 className="text-2xl mb-4">{t("home.quick-note.title")}</h2>
            <p>{t("home.quick-note.content")}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
