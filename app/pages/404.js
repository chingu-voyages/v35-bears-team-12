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
        <Image src="/404.svg" />
      </Box>

      <Box marginY={4}>
        <Box marginTop={4} textAlign="center">
          <Text mb={4}>It's Okay!</Text>
          <Link href="/" passHref>
            <Button bg="primary.700" variant="secondary">
              Let's Head Back
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Page404;
