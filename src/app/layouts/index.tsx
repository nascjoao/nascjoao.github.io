import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { STORAGE_THEME_KEY } from "@/shared/config";
import { Nav } from "@/widgets/nav";
import { Footer } from "@/widgets/footer";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontHeading = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-heading",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      {process.env.NODE_ENV === "production" && (
        <head>
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="83dd86aa-f1b0-47f3-8603-836352b58173"
          ></script>
        </head>
      )}
      <body
        className={`${fontSans.variable} ${fontHeading.variable} antialiased bg-[#fff5e7] dark:bg-neutral-950 min-h-svh flex flex-col`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            disableTransitionOnChange
            storageKey={STORAGE_THEME_KEY}
          >
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
