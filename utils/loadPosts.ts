import { createClient } from "./supabase/client";

const supabase = createClient();

export async function loadPosts(): Promise<string[][]> {
  // setFeed: React.Dispatch<React.SetStateAction<string[][]>>
  const { data: retrievedFeed } = await supabase.from("summaries").select();

  const newFeed: string[][] = retrievedFeed?.map((data: any) => [
    data.title,
    data.author,
    data.summary,
  ]) || [[]];

  // setFeed(newFeed);

  return newFeed;
}