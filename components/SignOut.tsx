"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-white text-red-600 font-semibold rounded-md shadow transition"
    >
      Sign Out
    </button>
  );
}
