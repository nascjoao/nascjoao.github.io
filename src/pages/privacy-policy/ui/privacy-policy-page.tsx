import Link from "next/link";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <header>
        <Link
          href="/"
          className="inline-block my-4 ml-4 underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-mono p-4 text-center">Privacy Policy</h1>
      </header>
      <main className="flex-1 max-w-lg mx-auto space-y-4 p-4">
        <p>
          <strong>No personal data is collected or stored.</strong>
        </p>
        <p>
          I&apos;m currently just using{" "}
          <a
            href="https://umami.is/"
            className="underline underline-offset-4 hover:text-orange-800 dark:hover:text-orange-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Umami
          </a>
          , open sourced analytics software that does not track users in
          personally identifiable ways; collecting anonymized data such as page
          views, device types, and operating systems without using cookies or
          identifying users.
        </p>
        <p>
          I can embed third-party content (like YouTube videos) on this site.
          These third-party services may collect data about you. They will know
          you, I won&apos;t.
        </p>
      </main>
    </>
  );
}
