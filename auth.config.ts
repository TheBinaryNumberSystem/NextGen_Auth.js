import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },

      //ADDED FOR DEBUGGING
      // async authorize(credentials) {
      //   const validatedFields = LoginSchema.safeParse(credentials);

      //   if (!validatedFields.success) {
      //     console.log(
      //       "❌ Zod validation failed:",
      //       validatedFields.error.flatten()
      //     );
      //     return null;
      //   }

      //   const { email, password } = validatedFields.data;
      //   console.log("🔍 Attempting login for:", email);

      //   const user = await getUserByEmail(email);
      //   if (!user) {
      //     console.log("❌ No user found with email:", email);
      //     return null;
      //   }

      //   if (!user.password) {
      //     console.log("❌ User found but password is missing in DB:", user);
      //     return null;
      //   }

      //   const passwordsMatch = await bcrypt.compare(password, user.password);
      //   if (!passwordsMatch) {
      //     console.log("❌ Incorrect password for:", email);
      //     return null;
      //   }

      //   console.log("✅ Login successful for:", email);
      //   return user;
      // },
    }),
  ],
} satisfies NextAuthConfig;
