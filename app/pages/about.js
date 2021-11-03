import React from "react";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import { Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Container title="About | Chingu Board">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          About Us
        </Heading>
      </ContentWrapper>
    </Container>
  );
}
