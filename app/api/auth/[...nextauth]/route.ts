import axiosInstance from "@/lib/axios.config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          // Realiza una solicitud a tu backend con las credenciales
          const res = await axiosInstance.post("Auth/Login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data.user; // Aquí obtienes los datos del usuario
          const token = res.data.token; // Aquí obtienes el token

          if (user && token) {
            // Retorna el usuario con el token
            return { ...user, token };
          } else {
            return null;
          }
        } catch (error) {
          console.log(error)
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Callback para manejar el token JWT
    async jwt({ token, user }) {
      // Si es la primera vez que se crea el token, agrega el token del usuario
      if (user?.token) {
        token.accessToken = user.token;
      }
      return token;
    },
    // Callback para incluir el token en la sesión
    async session({ session, token }) {
      // Agrega el token JWT a la sesión
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login", // Ruta personalizada de inicio de sesión
  },
});

export { handler as GET, handler as POST };

