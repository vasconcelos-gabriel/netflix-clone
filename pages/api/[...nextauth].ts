import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    Credentials({
      id: 'credentials',
      name: 'credentials'
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
      password: {
        label: 'Senha'
      }  
      }
    })
  ]
})