import React from "react";
import { Container } from "../layouts/container";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
export default function Teams() {
  return (
    <Container title="Contact Us | Chingu Board">
      <Flex w="full" align="center" justifyContent="center">
        <Box textAlign="center">
          <Heading fontSize={25}>Teams</Heading>
        </Box>
      </Flex>
    </Container>
  );
}
