"use server";
import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs/server";

export async function fetchPreferredTheme() {
  const user = await currentUser();
  const userId = user?.id;

  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const client = await sql.connect();

  try {
    // Try to update the existing theme preference
    const { rows } = await client.sql`
      SELECT preferred_theme
      FROM user_preferences
      WHERE user_id = ${userId};
    `;

    if (rows.length === 0) {
      return { theme: "light" };
    }

    const theme = rows[0].preferred_theme;

    return { theme };
  } catch (error) {
    console.error("Error fetching theme preference:", error);
    throw new Error("Failed to fetch theme preference");
  } finally {
    client.release();
  }
}
