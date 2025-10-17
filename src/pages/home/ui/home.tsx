import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex-1">
      <div className="max-w-lg mx-auto p-4">
        <code>{process.env.NEXT_PUBLIC_WEBSITE_VERSION}</code>
        <h1 className="text-4xl font-mono">nasc.dev</h1>
        <p className="mt-4">
          Welcome back to my website!
          <br />
          As you can see, things are different here, again.
        </p>
        <Image
          src="/cj.jpg"
          alt="CJ from GTA San Andreas: Ah shit, here we go again"
          className="w-auto h-auto mx-auto"
          width={300}
          height={200}
          priority
        />
        <p className="mt-4">
          I&apos;ve been pretty tired of social media. Wanted to start something
          new and then I thought it would be fun to care about my own space on
          the internet.
        </p>
        <p className="mt-4">
          Previously, this used to be a business card website, with just a few
          links. Now, I&apos;m excited to turn it into a more personal and
          expressive space.
        </p>
        <p className="mt-4">
          Hence, beyond the professional aspects, you can expect to see more
          personal projects, thoughts, and experiments showcased here.
          <br />
          (even those experiments I do in the kitchen)
        </p>
        <p className="mt-4">
          Stay tuned for updates, and feel free to reach out if you want to
          connect!
        </p>
      </div>
    </main>
  );
}
