import { Router } from "express";
import asyncHandler from "express-async-handler";

import { launchesController } from "../controllers";

const routes = Router();

routes.get(
  "/launches",
  asyncHandler(async (req, res) => await launchesController.paginate(req, res))
);

export default routes;
