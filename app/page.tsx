"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { loadPosts } from "../utils/loadPosts";
import { InfiniteFeed } from "../components/InfiniteFeed";

export default function Page() {
  const supabase = createClient();

  const [feed, setFeed] = useState<string[][]>([]); // [title, author, summary]

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="font-geist-mono text-center mb-6">
        <h1 className="text-3xl font-bold">Feed</h1>
      </div>

      <InfiniteFeed initialFeed={feed} />
    </div>
  );
}
