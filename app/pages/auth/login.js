import React from "react";
import NoSsr from "../../utils/NoSsr";
import { LoginForm } from "../../components/login-form";
import { ContentWrapper } from "../../layouts/content-wrapper";
import { Container } from "../../layouts/container";

/* Refactor or delete this page, custom styles for next auth need to implemented */
export default function Login() {
  return (
    <NoSsr>
      <Container title="Login Page | Project Init">
        <ContentWrapper>
          <LoginForm />
        </ContentWrapper>
      </Container>
    </NoSsr>
  );
}
