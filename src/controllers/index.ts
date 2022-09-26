import { launchesService } from "../services";
import LaunchesController from "./LaunchesController";

export const launchesController = new LaunchesController(launchesService);
