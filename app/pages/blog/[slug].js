import React from "react";
import { ContentWrapper } from "../../layouts/content-wrapper";
// import { Container } from "../layouts/container";
import { Heading } from "@chakra-ui/react";

export default function BlogPage() {
  return (
    <ContentWrapper>
      <Heading>Our Blog</Heading>
      <div className="blog-page">Blog Page Content</div>
    </ContentWrapper>
  );
}
