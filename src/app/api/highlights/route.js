import { NextResponse } from "next/server";
import { cartcrazeDB } from "../../../lib/db.js";

export async function POST(request) {
  try {
    const { count = 10 } = await request.json(); // Input

    const [essentials] = await cartcrazeDB.query(
      `SELECT * FROM essentials ORDER BY RAND() LIMIT ?`,
      count
    );
    const [gadgets] = await cartcrazeDB.query(
      `SELECT * FROM gadgets ORDER BY RAND() LIMIT ?`,
      count
    );
    const [travels] = await cartcrazeDB.query(
      `SELECT * FROM travels ORDER BY RAND() LIMIT ?`,
      count
    );

    return NextResponse.json({
      topDeals: essentials,
      flashSales: gadgets,
      trendingBrands: travels.slice(0, count),
    });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
