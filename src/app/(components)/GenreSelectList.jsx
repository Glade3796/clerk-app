import { sql } from "@vercel/postgres";

export async function getStaticProps() {
 
  console.log("server", genres);
  return { props: { genres } };
}

export default function GenreSelectList({ genres }) {
  console.log(props);
  return; // <select onChange={handleChange}>
  //   <option>default</option>
  //   {genres.rows.map((genre) => (
  //     <option value={genre.id} key={genre.id}>
  //       {genre.name}
  //     </option>
  //   ))}
  // </select>
}
