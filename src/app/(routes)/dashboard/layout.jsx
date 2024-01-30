import Link from "next/link";

export default function Layout({ children, genres }) {
  console.log("ss", genres);
  return (
    <main className="flex w-full flex-col content-center items-center">
      <div className="flex w-full flex-row content-center justify-center gap-8 ">
        <h1 className="p1">Dashboard:</h1>

        <nav className="p-1">
          <Link href="/dashboard">Movies</Link>
        </nav>

        <nav className="flex flex-row gap-4 bg-gray-700 p-1">
          <p>sort:</p>
          <Link href="/dashboard">default </Link>

          <Link href="/dashboard?sort=asc">asc</Link>

          <Link href="/dashboard?sort=des">desc</Link>
        </nav>
      </div>{" "}
      {children}
    </main>
  );
}
