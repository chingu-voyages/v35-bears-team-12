import React from "react";
import { VStack, HStack } from "@chakra-ui/layout";
import { CompanyRoutes, ResourcesRoutes, LegalRoutes } from "./index";
import { Socials } from "./socials";

function Full() {
  return (
    <VStack align="start" h="100%" spacing="8rem">
      <HStack align="start" spacing="8rem">
        <CompanyRoutes />
        <ResourcesRoutes />
        <LegalRoutes />
      </HStack>
      <Socials />
    </VStack>
  );
}

export { Full };
