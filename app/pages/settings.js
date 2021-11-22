import React from "react";
import { Container } from "../layouts/container";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Heading } from "@chakra-ui/react";

export default function Settings() {
  return (
    <Container title="Settings | Chingu Board">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          Settings
        </Heading>
      </ContentWrapper>
    </Container>
  );
}
