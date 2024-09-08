"use server";
import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs/server";

export async function savePreferredTheme({
  theme,
}: {
  theme: "dark" | "light";
}) {
  const user = await currentUser();
  const userId = user?.id;

  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }

  const client = await sql.connect();

  try {
    // Try to update the existing theme preference
    const { rowCount } = await client.sql`
      UPDATE user_preferences
      SET preferred_theme = ${theme}
      WHERE user_id = ${userId};
    `;

    if (rowCount === 0) {
      // If no rows were updated, insert a new row
      await client.sql`
        INSERT INTO user_preferences (user_id, preferred_theme)
        VALUES (${userId}, ${theme});
      `;
    }

    console.log("Theme preference saved successfully in the database.");
  } catch (error) {
    console.error("Error saving theme preference:", error);
    throw new Error("Failed to save theme preference");
  } finally {
    client.release();
  }

  // Return only serializable data
  return { success: true };
}
