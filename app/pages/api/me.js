import prisma from "../../lib/prisma";
/*
  Fetch the current user's profile
  Only GET is allowed here -> ?
*/
export default async function meHandler(req, res) {
  const {
    query: { token },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const me = await prisma.session.findUnique({
          where: {
            accessToken: token,
          },
          select: {
            user: {
              include: {
                creatorOf: true,
                memberOf: true,
              },
            },
          },
        });
        // JSON.stringify(me);

        res.status(200).json(me);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
