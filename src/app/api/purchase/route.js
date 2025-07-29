import fs from "fs";
import path from "path";
const filePath = path.join(
  process.cwd(),
  "src/app/Data/userData/userPurchases.json"
);

export async function POST(req) {
  const user = await req.json();

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
