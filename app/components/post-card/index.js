/**
 * TODO:
 * 	1) fetching team data from database
 *  2) mobile design for the project card
 *  3) make it expand on action click
 *  4) fetch real keywords from database
 *  5) pagination in index page by 8 projects per page
 */
import React from "react";
// format is kinda ads a huge chunk of js on load, maybe use native date api
import { format } from "date-fns";
import {
  Box,
  Badge,
  Button,
  Heading,
  SimpleGrid,
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
import logo from "../../public/misc-projectLogo.png";

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
      as="section"
      w={{ base: "100%", md: "90%", lg: "80%" }}
      p={{ base: "0.5rem", "2xl": "0.2rem" }}
      mx={{ base: "0rem", md: "auto", "2xl": "auto" }}
      spacing="0rem"
      mb="2rem"
    >
      <HStack
        spacing="1rem"
        w={{
          base: "360px",
          sm: "520px",
          md: "680px",
          lg: "780px",
          xl: "880px",
        }}
        h={{
          base: "200px",
        }}
        mb="0.2rem"
        p={{ base: "1rem", "2xl": "2rem" }}
        bgColor="accent.simpleWhite"
        boxShadow="md"
        // borderColor={colorGrey}
        borderColor="complimentary.600"
        borderRadius="4px"
        borderLeftWidth={3}
        onClick={setExpanded.toggle}
      >
        <ProjectCardLeftElement
          logo={logo}
          discordId={discordId}
          githubLink={githubLink}
        />

        <ProjectCardCenterElement
          logo={logo}
          projectName={projectName}
          teamName={team.teamName}
          githubUrl={githubLink}
          discordId={discordId}
          keywords={keywords}
        />

        <ProjectCardRightElement
          description={description}
          setExpanded={setExpanded}
        />
      </HStack>

      <ExpandableWrapper
        bgColor="accent.simpleWhite"
        // borderColor={colorGrey}
        borderColor="primary.600"
        borderRadius="4px"
        borderBottomWidth={3}
        boxShadow="xl"
        data={team}
        isVisible={isExpanded}
      >
        <GridItem>
          <Text variant="body">Team Name: {team.teamName}</Text>
        </GridItem>

        <GridItem>
          <Text variant="body">
            Start Date: {format(new Date(startDate), "MMM d y")}
          </Text>
          <Text variant="body">Timezone: {timeZone}</Text>
        </GridItem>

        <GridItem>
          <Text>
            Team description: <br /> {team.description}
          </Text>
        </GridItem>

        <GridItem>
          <Text variant="body">{catchPhrase}</Text>
        </GridItem>

        <GridItem>
          Members: {team.members.map((member) => member.name)}
        </GridItem>

        <GridItem>
          <Text variant="body">{description}</Text>
        </GridItem>

        <GridItem>
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

const ProjectCardLeftElement = ({ logo, discordId, githubLink }) => {
  return (
    <VStack alignSelf="flex-start" spacing={{ base: "0.5rem" }}>
      <Box position="relative" w="40px" h="40px">
        <Image src={logo} objectFit="cover" layout="fill" alt="team logo" />
      </Box>
      <Box>
        <SocialLink
          color={discord.color}
          icon={discord.icon}
          href={discordId}
          name={discord.name}
        />
        <SocialLink
          color={github.color}
          icon={github.icon}
          href={githubLink}
          name={github.name}
        />
      </Box>
    </VStack>
  );
};

const ProjectCardCenterElement = ({ projectName, teamName, keywords }) => {
  return (
    <VStack alignSelf="flex-start" w="30%" h="inherit" verticalAlign="top">
      <Heading as="h4" alignSelf="flex-start" variant="h3">
        {projectName}
      </Heading>
      <Text alignSelf="flex-start" variant="body">
        {teamName}
      </Text>

      <HStack justifyContent="flex-start" flexWrap="wrap" p={1}>
        {keywords.data.map((keyword) => (
          <Badge key={keyword} variant="primary" mt="0.5rem" mb="0.5rem">
            {keyword}
          </Badge>
        ))}
      </HStack>
    </VStack>
  );
};

const ProjectCardRightElement = ({ description, setExpanded }) => {
  return (
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
        Learn More
      </Button>
    </VStack>
  );
};

const ExpandableWrapper = ({ children, isVisible, data, ...other }) => {
  return (
    <SimpleGrid
      as="section"
      display={isVisible ? "grid" : "none"}
      columns={{ base: 1, md: 2 }}
      w={{
        base: "360px",
        sm: "520px",
        md: "680px",
        lg: "780px",
        xl: "880px",
      }}
      p={{ base: "1rem", "2xl": "2rem" }}
      gap="0.5rem"
      {...other}
    >
      {/* This Is Expandable Section */}
      {children}
    </SimpleGrid>
  );
};

export default ProjectCard;
