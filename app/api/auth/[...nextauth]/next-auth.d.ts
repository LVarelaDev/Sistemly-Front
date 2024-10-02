// types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extiende el tipo de `User` para incluir el token
declare module "next-auth" {
  interface User extends DefaultUser {
    token?: string;  // Agrega el token al tipo de User
  }

  interface Session extends DefaultSession {
    accessToken?: string;  // Agrega el accessToken al tipo de Session
  }
}

// Extiende el tipo de `JWT` para incluir el accessToken
declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
