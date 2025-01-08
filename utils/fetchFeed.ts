"use server";

import { loadPosts } from "./loadPosts";

export async function fetchFeed(
  setFeed: React.Dispatch<React.SetStateAction<string[][]>>
) {
  const posts = await loadPosts();
}
