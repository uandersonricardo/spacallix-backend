import { Router } from "express";
import asyncHandler from "express-async-handler";

import { launchesController } from "../controllers";

const routes = Router();

routes.get(
  "/launches",
  asyncHandler(async (req, res) => await launchesController.paginate(req, res))
);

routes.get(
  "/launches/latest",
  asyncHandler(async (req, res) => await launchesController.latest(req, res))
);

routes.get(
  "/launches/next",
  asyncHandler(async (req, res) => await launchesController.next(req, res))
);

routes.get(
  "/launches/:id",
  asyncHandler(async (req, res) => await launchesController.find(req, res))
);

export default routes;
