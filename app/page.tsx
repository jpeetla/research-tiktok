"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { SummaryCard } from "../components/SummaryCard";

export default function Page() {
  const supabase = createClient();

  const [feed, setFeed] = useState<string[][]>([]); // [title, author, summary]

  useEffect(() => {
    async function loadFeed() {
      const { data: retrievedFeed } = await supabase.from("summaries").select();
      console.log(retrievedFeed);
      setFeed(
        retrievedFeed?.map((data: any) => [
          data.title,
          data.author,
          data.summary,
        ]) || [[]]
      );
    }

    loadFeed();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="font-geist-mono text-center mb-6">
        <h1 className="text-3xl font-bold">Feed</h1>
      </div>

      {feed.map((data, index) => {
        return (
          <SummaryCard
            key={index}
            title={data[0]}
            author={data[1]}
            summary={data[2]}
          />
        );
      })}
    </div>
  );
}
