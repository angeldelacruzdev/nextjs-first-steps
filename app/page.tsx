import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col  justify-between p-24">
      <span className="text-5xl">Hola mundo </span>

      <Link href={'/about'}>About Page</Link>
    </main>
  );
}
