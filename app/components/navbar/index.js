/* eslint-disable react/no-multi-comp */
/**
 * TODO:
 *  1) Refactor into smaller components
 *  2) Authentication Display Logic
 *  3) Fix routes
 */
import React from "react";
import { SearchBar } from "../search-bar";
import { Box, Flex, HStack, VStack, Center, Heading } from "@chakra-ui/layout";
import { Button, Divider } from "@chakra-ui/react";
import { MoonIcon as IoMoon } from "../icons/moon-icon";
import { SunIcon as IoSunnyOutline } from "../icons/sun-icon";
import { IconButton } from "@chakra-ui/button";
import { useToggle } from "../../hooks/useToggle";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import { useColorMode } from "@chakra-ui/color-mode";
import { VerticalLink } from "../styled-link/vertical-link";
import { StyledLink } from "../styled-link/styled-link";

import { useUserStore } from "../../context/useUserStore";

// test hover menu
import { HoverDropDown } from "../hover-dropdown";

function Navbar({ isOpen, toggleIsOpen }) {
  const context = useUserStore();

  const { colorMode, toggleColorMode } = useColorMode();
  const { colorDark } = useColorModeSwitcher();

  const logoutHandler = (event) => {
    event.preventDefault();
    context.signOut();
  };
  const loginHandler = (event) => {
    event.preventDefault();
    context.signIn();
  };

  return (
    <Box
      as="nav"
      p="0.2rem"
      mb={isOpen ? { base: "1rem" } : { base: "2.5rem", lg: "3rem" }}
    >
      <Flex
        justify="space-between"
        mb={isOpen ? { base: "1rem" } : { base: "4.5rem", lg: "3rem" }}
        p="4"
      >
        <MenuButton toggleIsOpen={toggleIsOpen} />
        <Heading size="lg" fontSize="40px">
          Chingu
        </Heading>

        <HStack spacing={{ base: 0, md: 8 }}>
          <Flex align="center" as="ul" display={{ base: "none", lg: "flex" }}>
            {/* Discover Our Product Routes */}
            <HoverDropDown href="/discover" title="Discover" variant="noStyle">
              <VerticalLink href="/teams" variant="noStyle">
                Teams
              </VerticalLink>
              <VerticalLink href="/about" variant="noStyle">
                About
              </VerticalLink>
            </HoverDropDown>
            {/* Resources Routes */}
            <HoverDropDown
              href="/resources"
              title="Resources"
              variant="noStyle"
            >
              <VerticalLink href="/contact" variant="noStyle">
                Contact Us
              </VerticalLink>
              <VerticalLink href="init/support" variant="noStyle">
                Support
              </VerticalLink>
            </HoverDropDown>
            {/* Display Log In / Log Out based on authentication */}
            {context.session ? (
              <Button
                // href="/"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={logoutHandler}
                type="auth"
                variant="authThemed"
                w="100%"
              >
                Log Out
              </Button>
            ) : (
              <Button
                // href="auth/login"
                type="auth"
                variant="authThemed"
                w="100%"
                onClick={loginHandler}
              >
                Log In
              </Button>
            )}
          </Flex>
          <IconButton
            aria-label={
              colorMode === "light" ? "Toggle dark mode" : "Toggle light Mode"
            }
            borderRadius="sm"
            icon={
              colorMode === "light" ? (
                <IoMoon size="1.25rem" />
              ) : (
                <IoSunnyOutline size="1.25rem" />
              )
            }
            id="toggleTheme"
            onClick={toggleColorMode}
            variant="icon"
          />
        </HStack>
      </Flex>
      {/* TODO: Improve Styles */}
      {context.session && (
        <HStack spacing={{ base: "50px", lg: "90px" }} mb="0.1rem" ml="2rem">
          <SubMenu />
        </HStack>
      )}
      <Center p={2}>
        <SearchBar />
      </Center>
      <Divider bg="neutral.700" />
    </Box>
  );
}

function MobileNavMenu() {
  return (
    <VStack spacing={4} w="100%">
      <VStack as="ul" my={8} p={4} spacing={8} w="100%">
        <VerticalLink href="/" spacing={4} variant="large">
          Home
        </VerticalLink>
        <VerticalLink href="/about" spacing={4} variant="large">
          About
        </VerticalLink>
        <VerticalLink href="/teams" spacing={4} variant="large">
          Teams
        </VerticalLink>
        <VerticalLink href="/projects" spacing={4} variant="large">
          Projects
        </VerticalLink>
        <VerticalLink href="/contact" spacing={4} variant="large">
          Contact us
        </VerticalLink>
        <VerticalLink href="/support" spacing={4} variant="large">
          Support
        </VerticalLink>
      </VStack>
    </VStack>
  );
}

function SubMenu() {
  return (
    <>
      <HStack spacing={{ base: 0, md: 8 }} fontSize={18}>
        <Flex align="center" display={{ base: "none", lg: "flex" }} as="ul">
          {/*!!!!!! All these routes will be dynamic !!!!!!*/}
          <StyledLink variant="noStyle" href="/:user/activity">
            Activity
          </StyledLink>
          <StyledLink variant="noStyle" href="/:user/profile">
            Profile{" "}
          </StyledLink>
          <StyledLink variant="noStyle" href="/settings">
            Settings
          </StyledLink>
        </Flex>
      </HStack>
    </>
  );
}

function MenuButton({ toggleIsOpen, ...props }) {
  const [clicked, toggleClicked] = useToggle();

  const handleClick = () => {
    toggleIsOpen();
    toggleClicked();
  };
  return (
    <IconButton
      {...props}
      _hover={{ variant: "ghost" }}
      borderRadius="sm"
      display={{ base: "block", lg: "none" }}
      h="48px"
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleClick}
      variant="ghost"
      w="48px"
      icon={<MenuIcon clicked={clicked} />}
    />
  );
}

function MenuIcon({ clicked }) {
  const { colorDark } = useColorModeSwitcher();
  return (
    <Box
      h="100%"
      position="relative"
      w="100%"
      // transform={"rotate(0deg)"}
      // transition={"all 0.5s ease-in-out"}
    >
      <Line
        bg={colorDark}
        left={clicked ? "8px" : "4px"}
        top={clicked ? "22px" : "16px"}
        transform={clicked ? "rotate(45deg)" : "none"}
        width={clicked ? "32px" : "40px"}
      />
      <Line
        bg={colorDark}
        bottom={clicked ? "22px" : "16px"}
        left={clicked ? "8px" : "4px"}
        transform={clicked ? "rotate(-45deg)" : "none"}
        width={clicked ? "32px" : "40px"}
      />
    </Box>
  );
}

function Line({ ...props }) {
  return (
    <Box
      {...props}
      as="span"
      borderRadius="13px"
      height="2px"
      position="absolute"
      transition="all 0.3s ease-in-out"
    />
  );
}

export { Navbar, MobileNavMenu };
