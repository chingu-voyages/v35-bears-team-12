import React from "react";
import VisuallyHidden from "@chakra-ui/visually-hidden";
import { Icon } from "@chakra-ui/icons";
import { useToggle } from "../../hooks/useToggle";
import { Link, Center } from "@chakra-ui/layout";

function SocialLink({ children, color, icon, href, _name }) {
  const [hover, toggleHover] = useToggle();
  return (
    <Center
      as="li"
      listStyleType="none"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Link
        alignItems="center"
        display="flex"
        href={href}
        isExternal
        p={2}
        variant="subtle"
      >
        <Icon
          aria-hidden
          as={icon}
          boxSize={{ base: "1rem", lg: "1rem" }}
          // fill="roseRed.900"
          fill={hover && color}
          mr={{ lg: "0.25rem" }}
          transform={hover ? "translateY(-4px)" : "none"}
          transitionDuration="500ms"
        />
        {children}
      </Link>
    </Center>
  );
}

export { SocialLink };
