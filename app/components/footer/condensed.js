import React from "react";
import { HStack } from "@chakra-ui/layout";
import { Socials } from "./socials";

function Condensed() {
  return (
    <HStack as="ul">
      <Socials variant="condensed" />
    </HStack>
  );
}

export { Condensed };
