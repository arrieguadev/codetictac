import { Router } from "express";

import WakatimeController from "./app/controllers/WakatimeController";
import AuthController from "./app/controllers/AuthController";

const routes = Router();

routes.post("/wakatime", WakatimeController.store);
routes.post("/register", AuthController.register);
routes.post("/login", AuthController.login);

export default routes;
