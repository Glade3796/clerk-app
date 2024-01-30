import { currentUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function PageDashboard({ params }) {
  const { rows } = await sql`SELECT * FROM genres`;

  async function selectGenre(formData) {
    "use server";

    const genre = formData.get("genres");

    redirect(`/dashboard/${genre}`);
  }

  //   return (
  //     <form action={selectGenre}>
  //       <label htmlFor="genres">
  //         <select name="genres">
  //           {rows.map((genre) => (
  //             <option value={genre.id} key={genre.id}>
  //               {genre.name}
  //             </option>
  //           ))}
  //         </select>
  //         <button type="submit">GO!</button>
  //       </label>
  //     </form>
  //   );
}
