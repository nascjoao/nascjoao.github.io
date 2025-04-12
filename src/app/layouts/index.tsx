import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import { STORAGE_THEME_KEY } from "@/shared/config";

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
      <body
        className={`${fontSans.variable} ${fontHeading.variable} antialiased bg-orange-100/50 dark:bg-neutral-950`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            disableTransitionOnChange
            storageKey={STORAGE_THEME_KEY}
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId="G-0TKEP0ZS0B" />
      )}
    </html>
  );
}
