import React from "react";
import { HStack } from "@chakra-ui/layout";
import { SocialLink } from "../styled-link/social-link";
import { github, discord } from "../../content/socials";

// TODO: Add social links
function Socials({ variant }) {
  return (
    <HStack as="ul" h="100%" spacing={1.25}>
      <SocialLink
        color={github.color}
        // href={github.href}
        icon={github.icon}
        name={github.name}
      >
        {variant === "condensed" ? null : "Github"}
      </SocialLink>
      <SocialLink
        color={discord.color}
        // href={discord.href}
        icon={discord.icon}
        name={discord.name}
      >
        {variant === "condensed" ? null : "Discord"}
      </SocialLink>
    </HStack>
  );
}

export { Socials };
