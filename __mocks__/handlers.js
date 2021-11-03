/* TODO: Split Server and Client Handlers */
import { rest } from "msw";
import projects from "./projects";

const delay = process.env.NODE_ENV === "test" ? 0 : 1500;
// fake token
const token = "7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ";

const user = {
  id: "1234433",
  name: "vinclou",
  // email: req.body.username,
  image:
    "https://raw.githubusercontent.com/hashdog/node-identicon-github/master/examples/images/github.png",
};

const handlers = [
  rest.post("https://api.chingu.io/api/login", async (req, res, ctx) => {
    if (!req.body.password) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({ message: "password required" })
      );
    }
    if (!req.body.username) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({ message: "username required" })
      );
    }
    // Return Error
    // return res(
    //   ctx.delay(delay),
    //   ctx.json({
    //     data: null,
    //     errors: { message: "Something Went Wrong..." },
    //   })
    // );

    return res(
      ctx.delay(delay),
      ctx.json({
        data: {
          id: "1234433",
          name: "vinclou",
          email: req.body.username,
          image:
            "https://raw.githubusercontent.com/hashdog/node-identicon-github/master/examples/images/github.png",
        },
        errors: null,
      })
    );
  }),
  rest.post("https://api.chingu.io/api/register", async (req, res, ctx) => {
    if (!req.body.password) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({ message: "password required" })
      );
    }
    if (!req.body.username) {
      return res(
        ctx.delay(delay),
        ctx.status(400),
        ctx.json({ message: "username required" })
      );
    }
    return res(
      ctx.delay(delay),
      ctx.json({ token: token, username: req.body.username })
    );
  }),
  rest.get("https://api.chingu.io/api/d/projects", async (req, res, ctx) => {
    return res(ctx.delay(delay), ctx.json(projects));
  }),
];

export { handlers };
