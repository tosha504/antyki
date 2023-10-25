import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://fredommaster.pl/shop/wp-json/jwt-auth/v1/token",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        if (user.token) {
          // Any object returned will be saved in `user` property of the JWT
          const loggeinUser = {
            name: user.user_display_name,
            email: user.user_email,
            token: user.token,
          };
          return loggeinUser;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        session.user.accessToken = token.accessToken;
      }

      return session;
    },
  },
  session: {
    // The maximum age of the NextAuth.js issued JWT in seconds.

    maxAge: 4 * 60 * 60,
  },
  // pages: {
  //   signIn: "/signin",
  // },
};
