import React from "react";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1">
      <div className="max-w-lg mx-auto p-4">{children}</div>
    </main>
  );
}
