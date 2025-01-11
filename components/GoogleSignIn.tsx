"use client";

import Image from "next/image";
import googleLogo from "../public/google-logo.webp";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function GoogleSignIn() {
  const router = useRouter();

  const handleClick = async () => {
    const response = await signIn("google", { callbackUrl: "/feed" });

    if (response?.url) {
      router.push(response.url);
    }
  };

  return (
    <button
      className="flex items-center justify-center w-full h-14 px-6 text-lg font-medium bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg shadow-md transition-all duration-300"
      onClick={handleClick}
    >
      <Image src={googleLogo} alt="Google logo" width={24} height={24} />
      <span className="ml-4 text-gray-800">Sign in with Google</span>
    </button>
  );
}
