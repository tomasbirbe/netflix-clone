import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-xl">Home</h1>
      <Link href={"/browse"} className="underline-offset-4 hover:underline" prefetch={true}>
        Go to main page
      </Link>
    </main>
  );
}
