import React, { useEffect } from "react";
import NextLink from "next/link";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Container } from "../layouts/container";
import {
  Box,
  Link,
  Heading,
  Flex,
  VStack,
  Text,
  Spinner,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useColorModeSwitcher } from "../hooks/useColorModeSwitcher";
import { useUserStore } from "../context/useUserStore";
import { useAsync } from "../hooks/useAsync";
import { client } from "../utils/api-client";
// try {
//   const data = await client("projects");
//   if (data) {
//     console.log(data);
//     res.status(200).json(data);
//   }
// } catch (e) {
//   throw new Error(`Error occured: ${e.message}`);
// }

export default function Home() {
  // const [session, loading] = useSession();
  const { session } = useUserStore();
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();

  // TODO: put initial fetch into getServerSideProps() call.
  React.useEffect(() => {
    run(client("d/projects"));
  }, [run]);

  return (
    <Container title="Home Page | Chingu Board">
      <ContentWrapper>
        {!session && (
          <>
            Not signed in
            <br />
          </>
        )}

        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <Text color="roseRed.900">{error.message}</Text>
        ) : null}

        {isSuccess ? (
          data ? (
            <Box>
              {data.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </Box>
          ) : (
            <Text>No records were found</Text>
          )
        ) : null}
      </ContentWrapper>
    </Container>
  );
}

const ProjectCard = ({ project }) => {
  const { colorGrey } = useColorModeSwitcher();

  const {
    _,
    positionTitle,
    github,
    discordLink,
    appName,
    appLogo,
    teamName,
    timeCommitment,
    catchPhrase,
    teamCount,
    description,
  } = project;

  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <Box
        mx="auto"
        mb="0.5rem"
        p="2rem"
        bgColor="#FFFFFF"
        border="1px solid"
        borderRadius="3px"
        borderColor={colorGrey}
        w={{ base: "21em", lg: "57.5rem" }}
      >
        <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
          <SimpleGrid columns={2}>
            {appName} <br />
            <Text variant="body" mb="2rem">
              <Link href={github}>Github</Link> -{" "}
              <Link href={discordLink}>Discord</Link>
            </Text>
            <Text></Text>
          </SimpleGrid>
        </Heading>
        <SimpleGrid columns={2} spacingX="200x">
          {teamName} <br />
          {positionTitle} <br />
          <Text variant="body" mb="2rem">
            <strong>Description:</strong> {description} <br />
            <strong> Catch Phrase:</strong> {catchPhrase} <br />
            <strong>Team Count:</strong> {teamCount}
          </Text>
        </SimpleGrid>
        <Center>
          <Text variant="body" mb="2rem">
            <img src={appLogo} />
          </Text>
        </Center>
      </Box>
    </VStack>
  );
};
