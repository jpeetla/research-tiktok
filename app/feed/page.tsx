import { getServerSession } from "next-auth";
import { authConfig, logInIsRequiredServer } from "../../utils/auth";
import { loadPosts } from "../../utils/loadPosts";
import { InfiniteFeed } from "../../components/InfiniteFeed";

export default async function Page() {
  await logInIsRequiredServer();
  const session = await getServerSession(authConfig);
  const feed = await loadPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="font-geist-mono text-center mb-6">
        <h1 className="text-3xl font-bold">Feed</h1>
        <h3 className="text-lg text-gray-600">
          Welcome, {session?.user?.name || "Guest"}!
        </h3>
      </div>

      <InfiniteFeed initialFeed={feed} />
    </div>
  );
}
