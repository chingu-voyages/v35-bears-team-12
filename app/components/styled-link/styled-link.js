/**
 * Probably gonna be used only in NAvBar component
 */
import React from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/layout";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";

export function StyledLink({ children, href, type, ...props }) {
  const { themed, secondaryThemed, authThemed } = useColorModeSwitcher();

  function colorSwitch(type) {
    switch (type) {
      case "secondary":
        return { color: secondaryThemed, spanColor: "inherit" };
      case "auth":
        return { color: authThemed, spanColor: authThemed };
      // else return primary default themed color
      default:
        return { color: themed, spanColor: themed };
    }
  }
  const { color, spanColor } = colorSwitch(type);
  // const spanColor = type === "secondary" ? "inherit" : themed;
  return (
    <NextLink href={href} passHref>
      <Link
        {...props}
        aria-labelledby={children}
        mr="1rem"
        position="relative"
        sx={{
          _before: {
            content: '""',
            transformOrigin: "50% 100%",
            transition:
              "clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)",
            clipPath:
              "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
            position: "absolute",
            width: "100%",
            height: "1px",
            bg: color,
            top: "100%",
            left: 0,
            pointerEvents: "none",
          },
          _after: {
            position: "absolute",
            width: "100%",
            height: "1px",
            bg: color,
            top: "100%",
            left: 0,
            pointerEvents: "none",
          },
          _hover: {
            _before: {
              transform: "translate3d(0, 2px, 0) scale3d(1.08, 3, 1)",
              clipPath:
                "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)",
              bg: color,
            },
            span: {
              color: spanColor,
              transform: "translate3d(0, -2px, 0)",
            },
          },
          span: {
            display: "inline-block",
            transition: "transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)",
          },
        }}
      >
        <Box as="span">{children}</Box>
      </Link>
    </NextLink>
  );
}
