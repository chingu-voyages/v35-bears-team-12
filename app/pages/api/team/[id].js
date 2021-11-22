import prisma from "../../../lib/prisma";

/**
 * Fetch a team by the id
 * Function name really mean nothing in Next.js sense
 * TODO: Switch based on req.method
 */
export default async function teamHandler(req, res) {
  // const data = req.body;
  if (req.method === "GET") {
    // console.log(req);
    const id = req.query.id;

    try {
      const team = await prisma.team.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(team);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
    // res.json({ id: req.query.id, message: "Here is team id" });
  }
}
