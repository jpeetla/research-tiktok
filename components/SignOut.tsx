"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
    >
      Sign Out
    </button>
  );
}
