import { sql } from "@vercel/postgres";
import { Suspense } from "react";
import { redirect, useParams } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function MoviePage({ params }) {
  const movieId = await params.movieId;

  const users = await sql`SELECT * FROM users`;
  const dataMov =
    await sql`SELECT *, users.username AS userm, movies.name AS movie 
FROM comments 
JOIN users ON comments.user_id = users.id
    JOIN movies ON comments.movie_id = movies.id
WHERE movie_id = ${params.movieId}
GROUP BY comments.id, users.id, movies.id;`;

  const movie = dataMov.rows;
  console.log("page load", params.movieId);
  async function handleSendPost(formData) {
    "use server";

    const movieId = params.movieId;
    const content = formData.get("content");
    const username = formData.get("username");
    await sql`INSERT INTO comments (user_id, movie_id, content) VALUES (${username}, ${movieId}, ${content})`;

    revalidatePath(`/dashboard/movie/${movieId}`);
    redirect(`/dashboard/movie/${movieId}`);
  }

  return (
    <section className="flex flex-col gap-4">
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="flex flex-row content-center justify-center gap-4 border-2 p-2 hover:outline-4 hover:outline-red-600">
          <h1 className="">{movie[0].name} </h1>
          <p>
            <i>|| comments:</i>
          </p>
        </div>
        <div
          className=" flex flex-col gap-4 rounded-md bg-red-300 p-2"
          key={movie.id}
        >
          {movie.map((com) => (
            <div className="rounded-sm bg-black p-2" key={com.id}>
              <h3> {com.username}</h3>
              {com.content}
            </div>
          ))}
        </div>

        <form
          id="commentForm"
          className="flex flex-col gap-2 bg-red-400 text-black"
          action={handleSendPost}
        >
          <label htmlFor="username">Username:</label>
          <select name="username" id="usernanme" className="text-black">
            {users.rows.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <label htmlFor="content">Comment: </label>
          <input
            type="textfield"
            name="content"
            id="content"
            className="text-black"
          />
          <button type="submit">POST</button>
        </form>
      </Suspense>
    </section>
  );
}
