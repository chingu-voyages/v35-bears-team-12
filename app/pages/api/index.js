import prisma from "../../lib/prisma";
/*
  Home Page Base Route
  Only GET is allowed here
*/
export default async function homeHandler(req, res) {
  const {
    // query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const projects = await prisma.project.findMany({
          orderBy: {
            createdAt: "desc",
          },
          include: {
            keywords: {
              select: {
                keyword: true,
              },
            },
            team: {
              include: {
                members: {
                  select: {
                    // id: true,
                    name: true,
                    image: true,
                    github: true,
                  },
                },
              },
            },
          },
        });
        // JSON.stringify(projects);

        res.status(200).json(projects);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
