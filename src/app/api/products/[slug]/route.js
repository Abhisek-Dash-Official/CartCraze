import { cartcrazeDB } from "../../../../lib/db";

export async function GET(request, context) {
  const { params } = context;
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  if (!slug || !id || !category) {
    return new Response(JSON.stringify({ error: "Missing query params..." }), {
      status: 400,
    });
  }

  const allowed = ["cares", "travels", "gadgets", "essentials"];
  const categoryLower = category.toLowerCase();

  if (!allowed.includes(categoryLower)) {
    return new Response(JSON.stringify({ error: "Invalid category" }), {
      status: 400,
    });
  }

  try {
    const [rows] = await cartcrazeDB.query(
      `SELECT * FROM ${categoryLower} WHERE id = ?`,
      [id]
    );

    if (!rows || rows.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    return Response.json(rows[0]);
  } catch (err) {
    console.error("DB Query Error: ", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
