// This is where we aetup providers like github provoders or credentials provoders
import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
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

      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        console.log(`paass-${password}`);
        try {
          const res = await fetch(`http://127.0.0.1:8000/login/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });

          const user = await res.json();
          console.log(user);
          console.log(`status - ${user.status}`);

          if (res.ok && user.status == true) {
            return user;
          } else if (res.ok && user.status == false) {
            throw new Error(`${user.message}`);
          } else return null;
        } catch (error) {
          console.log(error);
          throw new Error("Unauthorised user");
        }
      },
      // async authorize(credentials: any) {
      //   await connect();
      //   try {
      //     const user = await User.findOne({ email: credentials.email });
      //     if (user) {
      //       const isPasswordCorrect = await bcrypt.compare(
      //         credentials.password,
      //         user.password
      //       );
      //       if (isPasswordCorrect) {
      //         return user;
      //       }
      //     }
      //   } catch (err: any) {
      //     throw new Error(err);
      //   }
      // },

    }),
  ],
  pages: {
      signIn: '/Login',
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