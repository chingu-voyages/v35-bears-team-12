import React from "react";
import { SearchBar } from "../search-bar";
import { Box, Flex, HStack, VStack, Center, Heading } from "@chakra-ui/layout";
import { Button, Divider } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { useToggle } from "../../hooks/useToggle";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import { useColorMode } from "@chakra-ui/color-mode";
import { VerticalLink } from "../styled-link/vertical-link";
import { StyledLink } from "../styled-link/styled-link";
import { useUserStore } from "../../context/useUserStore";
import chinguLogo from "../image/chingu-logo-small.png";
import menuIcon from "../image/Vector.png";
import Image from "next/image";
import ChinguLogo from "../../components/image/chingu-logo-small.png";

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
      p="0.4rem"
      mb={isOpen ? { base: "1rem" } : { base: "2.5rem", lg: ".3rem" }}
    >
      <Flex
        justify="space-between"
        mb={isOpen ? { base: "1rem" } : { base: "2.5rem", lg: ".3rem" }}
        p="4"
      >
        <Heading>
          <Image
            src={chinguLogo}
            alt="Chingu Logo"
            width="175px"
            height="59.35px"
          />
        </Heading>

        <MenuButton toggleIsOpen={toggleIsOpen} />

        <HStack spacing={{ base: 0, md: 8 }}>
          <Flex align="center" as="ul" display={{ base: "none", lg: "flex" }}>
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
                onClick={logoutHandler}
                type="auth"
                variant="authThemed"
                w="100%"
                fontSize={18}
                mb={3}
              >
                +Log Out+
              </Button>
            ) : (
              <Button
                type="auth"
                variant="authThemed"
                w="100%"
                onClick={loginHandler}
                fontSize={18}
                mb={3}
              >
                +Log In+
              </Button>
            )}
          </Flex>
          <HStack display={{ lg: "none" }} _hover={{ cursor: "pointer" }}>
            <Image
              src={menuIcon}
              alt="Menu"
              width="39px"
              height="26px"
              onClick={toggleIsOpen}
            />
          </HStack>
        </HStack>
      </Flex>
      {context.session && (
        <HStack spacing={{ base: "50px", lg: "90px" }} mb="0.1rem" ml="2rem">
          <SubMenu />
        </HStack>
      )}
      <Center p={2}>
        <SearchBar />
        <Button
          type="auth"
          m={2}
          p={4}
          variant="solid"
          colorScheme="green"
          w="5rem"
          onClick={loginHandler}
          fontSize={15}
        >
          + Labels
        </Button>
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
      <HStack spacing={{ base: 0, md: 8 }} fontSize={22}>
        <Flex align="center" display={{ base: "flex", lg: "flex" }} as="ul">
          <StyledLink variant="noStyle" href="/:user/activity">
            Activity
          </StyledLink>
          <StyledLink variant="noStyle" href="/:user/profile">
            Profile
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
      icon
    />
  );
}

export { Navbar, MobileNavMenu };
