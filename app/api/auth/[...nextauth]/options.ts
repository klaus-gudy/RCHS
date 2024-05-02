// This is where we aetup providers like github provoders or credentials provoders
import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { Account, User as AuthUser } from "next-auth";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "Enter Email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
      // async authorize(credentials) {
      //   // This is where you need to retrieve user data
      //   // to verify with credentials
      //   // Docs: https://next-auth.js.org/configuration/providers/credentials
      //   const user = { id: "42", email: "gabe@hospital.com", password: "gabe" };

      //   if (
      //     credentials?.email === user.email &&
      //     credentials?.password === user.password
      //   ) {
      //     return user;
      //   } else {
      //     return null;
      //   }

      //   // const dbUser = await prisma.user.findFirst({
      //   //     where: { email: credentials.email },
      //   // })

      //   //Verify Password here
      //   //We are going to use a simple === operator
      //   //In production DB, passwords should be encrypted using something like bcrypt...

      //   // if (dbUser && dbUser.password === credentials.password) {
      //   //   const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
      //   //   return dbUserWithoutPassword as User;
      //   // }
      //   // return null;
      // },
    }),
  ],
  pages: {
      signIn: '/Login',
      // signOut: '/auth/signout',
      // error: '/auth/error',
      // verifyRequest: '/auth/verify-request',
      // newUser: '/auth/new-user'
    },
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(options);
    if (!session) return redirect("/");
  }
  
  export function loginIsRequiredClient() {
    if (typeof window !== "undefined") {
      const session = useSession();
      const router = useRouter();
      if (!session) router.push("/");
    }
  }