import React from "react";

import "../styles/globals.css";
/* Fonts */
import "@fontsource/laila";
import "@fontsource/crimson-text";
import "@fontsource/ibm-plex-sans";

/* Providers */
import queryClient from "../lib/react-query";
import customTheme from "../styles/theme";
import { UserProvider } from "../context/useUserStore";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as NextAuthProvider } from "next-auth/client";
import { Hydrate } from "react-query/hydration";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Uncomment these lines to turn on MSW testing
// if (process.env.NODE_ENV === "development") {
//   if (typeof window === "undefined") {
//     const { server } = require("../../__mocks__/server");
//     server.listen({
//       warnOnUncaptured: false,
//     });
//   } else {
//     const { worker } = require("../../__mocks__/browser");
//     worker.start({
//       warnOnUncaptured: false,
//     });
//   }
// }

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <NextAuthProvider session={pageProps.session}>
          <UserProvider>
            <ChakraProvider theme={customTheme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </UserProvider>
        </NextAuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
