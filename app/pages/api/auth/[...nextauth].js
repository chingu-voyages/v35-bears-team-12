import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { client } from "../../../utils/api-client";

// TODO add secrets
const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Custom provider option
    Providers.Credentials({
      name: "ChinguBoard",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "me@chingu.io",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          const user = await client("login", {
            data: {
              username,
              password,
            },
          });
          if (user && !user.errors) {
            console.log(user.data);
            return user.data;
          } else {
            // probably a bad way to return
            return user.errors;
          }
        } catch (error) {
          throw new Error(`Error occured: ${error.message}`);
        }
      },
    }),
    // Providers.Email({
    //   server: {
    //     host: "",
    //     port: "",
    //     auth: {
    //       user: "",
    //       pass: "",
    //     },
    //   },
    //   from: "",
    // }),
  ],
  session: {
    jwt: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
