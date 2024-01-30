import { sql } from "@vercel/postgres";
import Link from "next/link";
import { Suspense } from "react";

export default async function MoviesPage({ searchParams }) {
  const dataMov =
    await sql`SELECT movies.id, movies.name, movies.genre_id, genres.name AS genre  FROM movies
   JOIN genres ON movies.genre_id = genres.id
   GROUP BY movies.id, genres.id;`;
  const dataCom =
    await sql`SELECT *, users.username FROM comments JOIN users ON comments.user_id = users.id GROUP BY comments.id, users.id;`;
  const comments = dataCom.rows;
  const movies = dataMov.rows;
  if (searchParams.sort == "asc") {
    movies.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (searchParams.sort == "des") { 
  console.log(searchParams.sort);
  return (
    <section className="flex flex-col gap-4">
      <nav className="flex flex-row gap-4">
        <Link href="/dashboard">default </Link>

        <Link href="/dashboard?sort=asc">asc</Link>

        <Link href="/dashboard?sort=des">desc</Link>
      </nav>
      <Suspense fallback={<p>Loading feed...</p>}>
        {movies.map((movie) => (
          <div
            className=" flex flex-col gap-4 rounded-md bg-red-300 p-2"
            key={movie.id}
          >
            <Link href={`/dashboard/movie/${movie.id}`}>
              <div className="flex flex-row content-center justify-center gap-4 border-2 p-2 hover:outline-4 hover:outline-red-600">
                <h1 className="text-black">{movie.name} </h1>
                <p>
                  <i>|| {movie.genre}</i>
                </p>
              </div>
            </Link>
            {comments
              .filter((com) => com.movie_id == movie.id)
              .map((com) => (
                <div className="rounded-sm bg-black p-2" key={com.id}>
                  <h3> {com.username}</h3>
                  {com.content}
                </div>
              ))}
          </div>
        ))}
      </Suspense>
    </section>
  );
}
