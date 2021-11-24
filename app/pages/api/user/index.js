import { github } from "@content/socials";
import { image } from "faker";
import prisma from "../../../lib/prisma";

export default async function userHandler(req, res) {

    const {
        query: method,
    } = req;

    switch (method) {
        case "GET":
            try {

                const users = await prisma.user.findMany();
                res.status(200).json('all users');
            } catch (e) {
                res.status(500).json({ message: e.message });
            }
            break;
        case "POST":
            const user = await prisma.user.create({
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
              })

    }
}