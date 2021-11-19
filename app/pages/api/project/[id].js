export default function projectHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      try {
        const team = await prisma.project.findUnique({
          where: {
            id: id,
          },
        });
        res.status(200).json(team);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;
    // case "PUT":
    //   // Update or create data in your database
    //   res.status(200).json({ id, name: name || `User ${id}` });
    //   break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
