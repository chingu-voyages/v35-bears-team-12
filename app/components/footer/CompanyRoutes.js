import React from "react";
import { NavLink } from "../styled-link/nav-link";
import { HStack, VStack } from "@chakra-ui/layout";
import { Text, Divider } from "@chakra-ui/react";

function CompanyRoutes() {
  return (
    <VStack align="center" h="100%">
      <Text variant="subtitle">Chingu Board</Text>
      <Divider />
      <HStack align="start" justify="space-around">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </HStack>
    </VStack>
  );
}

export default CompanyRoutes;
