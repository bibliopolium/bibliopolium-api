import { Router } from "express";
import { SessionsController } from "../controllers/SessionsController";

export const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.get("/", (req, res) => {
  res.json({ message: "teste sem controller" });
});
sessionsRouter.post("/", sessionsController.create);
