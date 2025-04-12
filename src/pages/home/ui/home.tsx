import { Nav } from "@/widgets/nav";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-xl px-4 py-8">
        <div className="grid gap-4">
          <h1 className="text-4xl">{t("home.welcome")}</h1>
          <p className="text-xl dark:text-neutral-400 whitespace-pre-wrap">
            {t("home.description")}
          </p>
        </div>
      </main>
      <aside className="mx-auto max-w-xl px-4 py-8 bg-amber-500/10 border border-amber-500/20 rounded-xs">
        <h2 className="text-2xl mb-4">{t("home.quick-note.title")}</h2>
        <p>{t("home.quick-note.content")}</p>
      </aside>
    </>
  );
}
