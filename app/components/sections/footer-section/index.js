import React from "react";
import { Link, VStack } from "@chakra-ui/layout";
// import { useMediaQuery } from "@chakra-ui/media-query";
import { github } from "../../../content/socials";
import { Condensed, Full } from "../../footer";

function FooterSection({ isLarge }) {
  return (
    <VStack
      as="footer"
      // backgroundColor={customBgColor}
      borderColor="neutral.300"
      borderTop="1px solid"
      py="32px"
      spacing={{ base: "16px", lg: "64px" }}
      w="100%"
    >
      {isLarge ? <Full /> : <Condensed />}
      <Link align="center" href={github.href} variant="noStyle" isExternal>
        © 2021 All rights are reserved Chingu.io
      </Link>
    </VStack>
  );
}

export { FooterSection };
