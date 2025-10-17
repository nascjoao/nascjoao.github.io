import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-sans",
});

const fontHeading = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "nasc.dev",
  description:
    "My personal website where I share my projects, blog posts, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable}`}>
      {process.env.NODE_ENV === "production" && (
        <head>
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="83dd86aa-f1b0-47f3-8603-836352b58173"
          ></script>
        </head>
      )}
      <body className="antialiased bg-[#fff5e7] dark:bg-neutral-950 min-h-svh flex flex-col text-neutral-900 dark:text-neutral-100">
        {children}
        <footer className="text-center text-sm p-4 mt-8 border-t border-neutral-300 dark:border-neutral-700 grid gap-4">
          <h2 className="font-mono font-bold">nasc.dev</h2>
          <ul className="space-x-4">
            <li className="inline">
              <a
                href="mailto:oi@nasc.dev"
                className="underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
              >
                Email (check spam folder)
              </a>
            </li>
            <li className="inline">
              <a
                href="https://github.com/nascjoao"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
              >
                GitHub
              </a>
            </li>
            <li className="inline">
              <a
                href="https://linkedin.com/in/nascjoao"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="w-fit mx-auto">
            <Link href="/privacy-policy">Privacy policy</Link> • Content
            licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/deed"
              className="underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-NC 4.0
            </a>
            ; Code licensed under{" "}
            <a
              href="https://github.com/nascjoao/nascjoao.github.io/blob/main/LICENSE"
              className="underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
