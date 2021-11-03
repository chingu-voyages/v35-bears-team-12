import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

function Page404() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box margin="0 auto" width={["100%", "70%", "60%", "60%"]}>
        <Image src="/404 Error-pana.svg" />
      </Box>
      <Text fontSize="xs" textAlign="center">
        <ChakraLink href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>

        <Box marginTop={4} textAlign="center">
          <Text>It's Okay!</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              Let's Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Page404;
