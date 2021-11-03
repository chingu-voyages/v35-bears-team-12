import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/layout";

function NavLink({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <Link variant="subtle">{children}</Link>
    </NextLink>
  );
}

export { NavLink };
