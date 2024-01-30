// import { NextResponse } from "next/server";
// import { auth, currentUser } from "@clerk/nextjs";
// import { sql } from "@vercel/postgres";

// export async function GET() {
//     const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
// }

// export async function GET_user() {
//   const user = await currentUser();

//   if (!user) {
//     return new Response("Unauthorized", { status: 401 });
//   }
//   return NextResponse.json({ user });
// }

// export async function GET() {
//   const { userId, getToken } = auth();

//   if (!userId) {
//     return new Response("Unauthorized", { status: 401 });
//   }

//   const token = { template: "supabase" };

//   // Fetch data from Supabase and return it.
//   const data = { supabaseData: "Hello World" };

//   return NextResponse.json({ data });
// }
