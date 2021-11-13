import React from "react";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import { Heading } from "@chakra-ui/react";

export default function Test() {
  return (
    <Container title="Blog | Test Page">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          Since we aren't using storybook it would be hard to be consistent with
          all the styles
        </Heading>
        <Heading as="h3" textAlign="center" variant="h3">
          this page will be added to git-ignore in the future, so forget about
          it's existence and I'll delete this eventually
        </Heading>
      </ContentWrapper>
    </Container>
  );
}
