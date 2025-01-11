import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
};

export async function logInIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

// export async function logInIsRequiredClient() {
//   if (typeof window === "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push("/");
//   }
// }
