import dotenv from "dotenv";
import { getPosts } from "./api.js";

dotenv.config();

async function main() {
  const posts = await getPosts(process.env.API_URL);
  console.log("Posts recibidos:", posts.slice(0, 3));
}

main();
