import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { routes } from "./constants/routes";
import { getUserById } from "@/data/user";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  ...authConfig,
  pages: {
    signIn: routes.login,
  },
  session: { strategy: "jwt" },

  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      return token;
    },
  },
});
