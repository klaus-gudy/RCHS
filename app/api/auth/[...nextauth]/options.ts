// This is where we aetup providers like github provoders or credentials provoders
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter Password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "gabe", password: "gabe" } // this is just a hardcoded user

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    // pages: {
    //     signIn: '/Login',
    //     // signOut: '/auth/signout',
    //     // error: '/auth/error',
    //     // verifyRequest: '/auth/verify-request',
    //     // newUser: '/auth/new-user'
    //   },
    //   events: {
    //     async signIn(message) { /* on successful sign in */ },
    //     // async signOut(message) { /* on signout */ },
    //     // async createUser(message) { /* user created */ },
    //     // async updateUser(message) { /* user updated - e.g. their email was verified */ },
    //     // async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
    //     // async session(message) { /* session is active */ },
    //   }
}
