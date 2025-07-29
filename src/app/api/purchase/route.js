import { cartcrazeDB } from "../../../lib/db";

import fs from "fs";
import path from "path";
const filePath = path.join(
  process.cwd(),
  "src/app/Data/userData/userPurchases.json"
);

export async function POST(req) {
  const user = await req.json();

  const products = user.products;
  const allowedCategories = ["gadgets", "essentials", "travels", "cares"];
  for (const item of products) {
    const category = item.category.toLowerCase();

    if (!allowedCategories.includes(category)) {
      return new Response(`Invalid category: ${category}`, { status: 400 });
    }

    const result = await cartcrazeDB.query(
      `UPDATE ${category} SET stock = stock - ? WHERE id = ? AND stock >= ?`,
      [item.quantity, item.id, item.quantity]
    );

    // Check if update was successful
    if (result.affectedRows === 0) {
      return new Response(
        `Product not found or insufficient stock: ${item.id}`,
        { status: 409 }
      );
    }
  }

  // Handle JSON file operations
  let existingData = [];
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    if (!(fileContent.trim() === "")) {
      existingData = JSON.parse(fileContent);
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      existingData = [];
    } else {
      console.error("Error reading or parsing JSON file:", err);
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  existingData.push(user);

  const updatedJsonString = JSON.stringify(existingData, null, 2);
  fs.writeFileSync(filePath, updatedJsonString, "utf8");

  return new Response("Success", { status: 200 });
}
