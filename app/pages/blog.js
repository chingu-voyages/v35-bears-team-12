import React from "react";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import { Heading } from "@chakra-ui/react";

export default function Blog({ posts }) {
  return (
    <Container title="Blog | Chingu Board">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          Blog
        </Heading>
      </ContentWrapper>
    </Container>
  );
}
