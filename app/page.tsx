import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * from users`;

  console.log("hosssssssein", rows);

  return (
    <span>{rows[0].family}</span>
  );
}
