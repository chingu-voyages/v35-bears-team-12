/* eslint-disable react/no-multi-comp */
import React from "react";
import Head from "next/head";
import { useToggle } from "../hooks/useToggle";
import { useMediaQuerySSR } from "../hooks/useMediaQuerySsr";
import { Box, VStack } from "@chakra-ui/react";
import { MobileNavMenu, Navbar } from "../components/navbar";
import { FooterSection } from "../components/sections/footer-section/index";

function Container({ children, ...customMeta }) {
  const [isOpen, toggleIsOpen] = useToggle();
  const [isLarge] = useMediaQuerySSR("(min-width: 992px)");

  return (
    <Box>
      <Seo {...customMeta} />
      <Box
        m="auto"
        minH="100vh"
        w={{ base: "100vw", "2xl": "80vw", "3xl": "72vw" }}
      >
        <Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
        <VStack as="main" id="skip" spacing={{ base: "2rem", lg: "6rem" }}>
          {isOpen ? <MobileNavMenu /> : children}
          <FooterSection isLarge={isLarge} />
        </VStack>
      </Box>
    </Box>
  );
}
// TODO: Improve SEO
function Seo({ ...customMeta }) {
  const meta = {
    title: "Chingu Board",
    description:
      "Turn what you've learned online, in bootcamps, & in schools into the experience needed to land a Software Developer job.",
    // image: 'https://site.com/static/images/banner.png', TODO ADD BANNER
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
}

export { Container };
