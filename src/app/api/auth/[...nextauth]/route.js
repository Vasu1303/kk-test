import NextAuth from "next-auth/next";
import authOptions from "@/utils/auth";


const handler = NextAuth(authOptions)

