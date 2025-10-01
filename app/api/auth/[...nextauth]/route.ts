import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name:"Credenciais",
      credentials:{ email:{}, password:{} },
      async authorize(c){
        if(c?.email===process.env.ADMIN_EMAIL && c?.password===process.env.ADMIN_PASSWORD)
          return { id:"1", email:c.email }
        return null
      }
    })
  ],
  pages:{ signIn:"/admin/login" }
})
export { handler as GET, handler as POST }
