/**
 * TODO:
 * 	1) fetching team data from database
 *  2) mobile design for the project card
 *  3) make it expand on action click
 *  4) fetch real keywords from database
 *  5) pagination in index page by 8 projects per page
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
// format is kinda ads a huge chunk of js on load, maybe use native date api
import { format } from "date-fns";
import {
  Box,
  Badge,
  Button,
  Heading,
  Flex,
  Grid,
  GridItem,
  VStack,
  HStack,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { SocialLink } from "../styled-link/social-link";
import { useColorModeSwitcher } from "../../hooks/useColorModeSwitcher";
import { github, discord } from "../../content/socials";
import Image from "next/image";
import miscLogo from "../../public/misc-projectLogo.png";

// async function getTeam() {
//   const team = await axios.get("/api/team");
//   return team.data;
// }

// TODO: fetch project team name from database
const ProjectCard = ({ project }) => {
  // temp static data
  const keywords = {
    data: ["js", "django", "react", "nextjs", "figma"],
  };
  // const [teamData, setTeamData] = useState();
  const [isExpanded, setExpanded] = useBoolean();
  const { colorGrey, secondaryThemed } = useColorModeSwitcher();

  const {
    id,
    createdAt,
    updatedAt,
    projectName,
    catchPhrase,
    description,
    startDate,
    positionTitles,
    // keywords,
    timeZone,
    githubLink,
    discordId,
    isChinguVoyage,
    teamId,
    team,
  } = project;

  return (
    <VStack
      mx="auto"
      w="80%"
      spacing="0rem"
      mb="2rem"
      pb={0}
      onClick={setExpanded.toggle}
    >
      <HStack
        spacing="4rem"
        w="inherit"
        h="200px"
        // mx="auto"
        mb="0.2rem"
        p="1rem"
        bgColor="accent.simpleWhite"
        boxShadow="md"
        borderRadius="7px"
        borderColor={colorGrey}
        // w={{ base: "30em", lg: "57.5rem" }}
      >
        <VStack w="30%" h="90%" alignSelf="flex-start">
          <HStack>
            <Box alignSelf="flex-start" position="relative" w="40px" h="40px">
              <Image
                src={miscLogo}
                objectFit="cover"
                layout="fill"
                alt="team logo"
              />
            </Box>
            <Box mt="-3.0rem" mb="2rem">
              <Heading textTransform="capitalize" as="h4" variant="h4">
                {projectName}
              </Heading>
              <Text variant="subTitle" mb="0.2rem" p="0.1rem">
                Team name placeholder
              </Text>
            </Box>
          </HStack>

          <HStack
            w="200px"
            // alignContent="flex-end"
            justifyContent="center"
            flexWrap="wrap"
            mt="3.5rem"
          >
            {keywords.data.map((keyword) => (
              <Badge key={keyword} variant="primary" mt="0.5rem" mb="0.5rem">
                {keyword}
              </Badge>
            ))}
          </HStack>

          <HStack w="70%" spacing={{ base: "1px" }}>
            <SocialLink
              color={discord.color}
              icon={discord.icon}
              href="/broken_link_fetch_fethc_this_info"
              name={discord.name}
            />
            <SocialLink
              color={github.color}
              icon={github.icon}
              href="/broken_link_fetch_fethc_this_info"
              name={github.name}
            />
          </HStack>
        </VStack>

        <VStack w="70%" h="inherit" alignSelf="flex-start" verticalAlign="top">
          <Text variant="body" mb="2rem">
            {description}
          </Text>
          <Button
            pt="0.3rem"
            pr="2rem"
            alignSelf="flex-end"
            // justifySelf="flex-end"
            size="xs"
            variant="link"
            onClick={setExpanded.toggle}
          >
            Tap on card to expand
          </Button>
        </VStack>
      </HStack>

      <ExpandableWrapper
        isVisible={isExpanded}
        data={team}
        w="inherit"
        bgColor="accent.simpleWhite"
        boxShadow="lg"
        borderRadius="7px"
      >
        <GridItem colSpan={2} p={4}>
          <Text variant="body">Team Name: {team.teamName}</Text>
        </GridItem>

        <GridItem colStart={3} colEnd={6} p={4}>
          <Text variant="body">
            Start Date: {format(new Date(startDate), "MMM d y")}
          </Text>
          <Text variant="body">Timezone: {timeZone}</Text>
        </GridItem>

        <GridItem colSpan={2} p={4}>
          <Text>
            Team description: <br /> {team.description}
          </Text>
        </GridItem>

        <GridItem colStart={3} colEnd={6} p={4}>
          <Text variant="body">{catchPhrase}</Text>
        </GridItem>

        <GridItem colSpan={2} p={4}>
          Members: {team.members.map((member) => member.username)}
        </GridItem>

        <GridItem colStart={3} colEnd={6} p={4}>
          <Text variant="body">{description}</Text>
        </GridItem>

        <GridItem colSpan={2} p={4}>
          <Box alignSelf="flex-start">
            <SocialLink
              color={github.color}
              icon={github.icon}
              href={team.githubLink}
              name={github.name}
            />
          </Box>
        </GridItem>
      </ExpandableWrapper>
    </VStack>
  );
};

const ExpandableWrapper = ({ children, isVisible, data, ...other }) => {
  return (
    <Grid
      display={isVisible ? "grid" : "none"}
      templateColumns="repeat(5, 1fr)"
      gap="1rem"
      {...other}
    >
      {/* This Is Expandable Section */}
      {children}
    </Grid>
  );
};

export default ProjectCard;
