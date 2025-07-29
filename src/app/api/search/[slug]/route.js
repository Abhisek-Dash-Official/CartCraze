import { cartcrazeDB } from "../../../../lib/db";

export async function GET(request, context) {
  const { params } = context;
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return new Response(JSON.stringify(searchResultData), {
      status: 400,
    });
  }

  const tables = ["cares", "travels", "gadgets", "essentials"];
  const searchTerm = slug.toLowerCase();
  let searchResultData = [];

  for (const table of tables) {
    try {
      const [data] = await cartcrazeDB.query(
        `SELECT * FROM ${table} WHERE LOWER(title) LIKE ? OR LOWER(desc_) LIKE ?`,
        [`%${searchTerm}%`, `%${searchTerm}%`]
      );
      searchResultData = [...searchResultData, ...data];
    } catch (error) {
      console.error(`Error searching in ${table}:`, error);
    }
  }

  if (tables.includes(searchTerm)) {
    const [data] = await cartcrazeDB.query(`SELECT * FROM ${searchTerm}`);
    searchResultData = [...searchResultData, ...data];
  }

  if (searchResultData.length === 0) {
    return new Response(JSON.stringify({ error: "No products found" }), {
      status: 404,
    });
  }

  return Response.json(searchResultData);
}
