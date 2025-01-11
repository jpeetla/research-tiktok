import { getServerSession } from "next-auth";
import { authConfig, logInIsRequiredServer } from "../../utils/auth";
import { loadPosts } from "../../utils/loadPosts";
import { InfiniteFeed } from "../../components/InfiniteFeed";
import { SignOutButton } from "../../components/SignOut";

export default async function Page() {
  await logInIsRequiredServer();
  const session = await getServerSession(authConfig);
  const feed = await loadPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-6 px-8 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold font-geist-mono">Feed</h1>
          <h1 className="text-4xl font-bold font-geist-mono">
            Research TikTok
          </h1>
          {session && <SignOutButton />}
        </div>
        <div className="flex justify-center items-center mt-4 pr-5">
          Welcome, {session?.user?.name || "Guest"}!
        </div>
      </header>

      <InfiniteFeed initialFeed={feed} />
    </div>
  );
}
