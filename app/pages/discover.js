import React from "react";
import { Container } from "../layouts/container";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Heading } from "@chakra-ui/react";

export default function Discover() {
  return (
    <Container title="Discover | Chingu Board">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          Discover
        </Heading>
      </ContentWrapper>
    </Container>
  );
}
