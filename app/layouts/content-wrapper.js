import React from "react";
import { VStack } from "@chakra-ui/layout";
// TODO should I change the width ? -->
function ContentWrapper(props) {
  return (
    <VStack spacing={{ base: "3rem", lg: "6rem" }} width="100%" {...props} />
  );
}

export { ContentWrapper };
