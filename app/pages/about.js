import React from "react";
import { Container } from "../layouts/container";
import { Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Container title="About | Chingu Board">
      <Heading as="h2" textAlign="center" variant="h2">
        About Us
      </Heading>
      <Text>
        Turn what you've learned online, in bootcamps, and in school into the
        experience you need to land a software developer job. Level up your
        technical and soft skills sought after by employers.
      </Text>
    </Container>
  );
}
