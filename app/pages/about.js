import React from "react";
import { Container } from "../layouts/container";
import { Heading, SimpleGrid, Text, Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import screenCode from "../components/image/code.jpeg";

export default function About() {
  return (
    <Container title="About | Chingu Board">
      <SimpleGrid columns={2} spacing={3}>
        <Box m={10}>
          <Heading as="h2" textAlign="center" variant="h3">
            About Us
          </Heading>
          <Text fontSize={20}>
            Chingu board serves as a place for Chingu alumni to show off their
            projects. Potential employers or non-profits looking for technical
            talent can browse repositories, and deployed projects to find
            software developers with the skills they need.{" "}
          </Text>
        </Box>
        <Box>
          <Center m={10}>
            <Image src={screenCode} alt="Chingu Logo" />
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
