/* eslint-disable react/no-multi-comp */
/**
 * TODO: Make routes file in content(data folder) and import them instead,
 * so it will be easier to manage them across the app. You can even map the
 * results in case of a file like this. Make a single route layout comp.
 * I reapeat logic here, thus I didn't split them into separate files.
 */
import React from "react";
import { NavLink } from "../styled-link/nav-link";
import { VStack } from "@chakra-ui/layout";
import { Text, Divider } from "@chakra-ui/react";

function CompanyRoutes() {
  return (
    <VStack align="start" h="100%">
      <Text variant="subtitle">Company</Text>
      <Divider />
      <VStack align="start">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/careers">Careers</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/partners">Partners</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </VStack>
    </VStack>
  );
}

function ResourcesRoutes() {
  return (
    <VStack align="start" h="100%">
      <Text variant="subtitle">Resources</Text>
      <Divider />
      <VStack align="start">
        <NavLink href="/init/uses">Uses</NavLink>
        <NavLink href="/init/guides">Guides</NavLink>
        <NavLink href="/init/community">Community</NavLink>
        <NavLink href="/init/newsletter">Newsletter</NavLink>
        <NavLink href="/init/support">Support</NavLink>
      </VStack>
    </VStack>
  );
}

function LegalRoutes() {
  return (
    <VStack align="start" h="100%">
      <Text variant="subtitle">Legal</Text>
      <Divider />
      <VStack align="start">
        <NavLink href="/legal/privacy">Privacy Policy</NavLink>
        <NavLink href="/legal/terms_of_service">Terms Of Service</NavLink>
        <NavLink href="/legal/trademark">Trademark Policy</NavLink>
        <NavLink href="/legal/inactivity_policy">Inactivity Policy</NavLink>
        <NavLink href="/legal/dmca">DMCA</NavLink>
        <NavLink href="/legal/dpa">DPA</NavLink>
        <NavLink href="/legal/sla">SLA</NavLink>
      </VStack>
    </VStack>
  );
}

export { CompanyRoutes, ResourcesRoutes, LegalRoutes };
