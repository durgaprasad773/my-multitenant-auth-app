

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    // Your authentication providers
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      // JWT token configuration
    },
    async session(session, token) {
      // Session configuration
    },
  },
  // Set the domain to make cookies available to all subdomains
  cookies: {
    domain: ".yourdomain.com", // Replace with your domain
  },
});
