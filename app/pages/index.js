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
} from "@chakra-ui/react";
import { useColorModeSwitcher } from "../hooks/useColorModeSwitcher";
import { useUserStore } from "../context/useUserStore";
import { useAsync } from "../hooks/useAsync";
import { client } from "../utils/api-client";
import prisma from "../../lib/prisma";
// try {
//   const data = await client("projects");
//   if (data) {
//     console.log(data);
//     res.status(200).json(data);
//   }
// } catch (e) {
//   throw new Error(`Error occured: ${e.message}`);
// }

export default function Home({ allProjects }) {
  const projects = JSON.parse(allProjects);
  // const [session, loading] = useSession();
  // const { session } = useUserStore();
  // const { data, error, run, isLoading, isError, isSuccess } = useAsync();

  // TODO: put initial fetch into getServerSideProps() call.
  // React.useEffect(() => {
  //   run(client("d/projects"));
  // }, [run]);
  return (
    <Container title="Home Page | Chingu Board">
      <ContentWrapper>
        {/* {!session && (
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
        ) : null} */}
        {projects ? (
          <Box>
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </Box>
        ) : (
          <Text>No records were found</Text>
        )}
      </ContentWrapper>
    </Container>
  );
}
export const getStaticProps = async () => {
  const projects = await prisma.project.findMany();
  const allProjects = await JSON.stringify(projects);
  // console.log(allProjects);
  return { props: { allProjects } };
};

const ProjectCard = ({ project }) => {
  const { colorGrey } = useColorModeSwitcher();

  const {
    id,
    createdAt,
    updatedAt,
    projectName,
    catchPhrase,
    description,
    startDate,
    positionTitles,
    keywords,
    timeZone,
    githubLink,
    discordId,
    isChinguVoyage,
    teamId,
  } = project;

  return (
    <VStack spacing="4rem" w="100%" mx="auto">
      <Box
        mx="auto"
        mb="0.5rem"
        p="2rem"
        bgColor="#FFFFFF"
        boxShadow="md"
        borderRadius="7px"
        borderColor={colorGrey}
        w={{ base: "21em", lg: "57.5rem" }}
      >
        <Heading textTransform="capitalize" as="h4" variant="h4" mb="0.5rem">
          {projectName} <br />
        </Heading>
        <Text variant="body" mb="2rem">
          {catchPhrase}
        </Text>
        <Text variant="body" mb="2rem">
          {description}
        </Text>
      </Box>
    </VStack>
  );
};
