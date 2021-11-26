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
export default function About() {
  return (
    <Container title="Contact Us | Chingu Board">
      <Flex w="full" align="center" justifyContent="center">
        <Box w="60%" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading fontSize={25}>Contact Us</Heading>
          </Box>
          <Box m={4} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>First Name</FormLabel>
                <Input type="name" placeholder="-" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Last Name</FormLabel>
                <Input type="name" placeholder="-" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Your Message</FormLabel>
                <Textarea placeholder="Let us know how we can help!" />
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
