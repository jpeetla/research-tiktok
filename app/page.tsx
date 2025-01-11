"use client";

import { getServerSession } from "next-auth";
import { GoogleSignIn } from "../components/GoogleSignIn";
import { authConfig } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  if (session) return redirect("/feed");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
          Welcome to ResearchTikTok
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Sign in to explore groundbreaking research!
        </p>
        <GoogleSignIn />
      </div>
    </div>
  );
}
