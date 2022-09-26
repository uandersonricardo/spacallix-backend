import { Router } from "express";
import asyncHandler from "express-async-handler";

import { launchesController } from "../controllers";

const routes = Router();

routes.get(
  "/launches/past",
  asyncHandler(async (req, res) => await launchesController.past(req, res))
);

routes.get(
  "/launches/upcoming",
  asyncHandler(async (req, res) => await launchesController.upcoming(req, res))
);

export default routes;
