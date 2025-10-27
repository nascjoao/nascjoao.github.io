import getLatestPosts from "../lib/get-latest-posts";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import ToPostDate from "./to-post-date";

export default async function Home() {
  return (
    <main className="flex-1">
      <div className="max-w-lg mx-auto p-4">
        <section>
          <h2 className="text-2xl font-mono mt-8 mb-4">Latest posts</h2>
          <ul>
            {getLatestPosts().map((post) => (
              <li key={post.path} className="mb-2">
                <Link
                  href={post.path}
                  className="hover:text-orange-800 dark:hover:text-orange-200 flex border-b dark:border-neutral-700 border-neutral-300 pb-2 mb-2"
                >
                  <Image
                    src={post.cover}
                    alt={post.title}
                    className="bg-black/10 rounded-md object-cover"
                    width={80}
                    height={80}
                    priority
                  />
                  <article className="w-full align-middle ml-4 @container">
                    <p className="text-sm flex justify-between flex-col @3xs:flex-row">
                      <ToPostDate>{post.date}</ToPostDate>
                      <span>{dayjs(post.date).format("MMMM D, YYYY")}</span>
                    </p>
                    <h3 className="text-xl font-mono my-2">{post.title}</h3>
                    <p className="text-sm line-clamp-2">{post.description}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
