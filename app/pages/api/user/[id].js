import prisma from "../../../lib/prisma";

export default async function userByIDHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      // Get user data by id
      try {
        const user = await prisma.user.findUnique({
          where: {
            id: id,
          },
        });
        res.status(200).json(user);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;
    case "PATCH":
      //update user info
      try {
        const updateUser = await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            name: name,
            email: email,
            emailVerified: null,
            image: image,
            accounts: 0,
            sessions: 0,
            github: github,
            discordid: discordid,
            settings: null,
            role: role,
            voyageStatus: voyageStatus,
            creatorOf: creatorOf,
            memberOf: memberOf
          },
        });
        res.status(200).json(updateUser);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
      break;

    case 'DELETE':
      try {
        const deleteUser = await prisma.user.delete({
          where: {
            id: id,
          },
        });
        res.status(200).json(deleteUser);
      } catch (e) {
        res.status(500).json({ message: e.message });
      }

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};