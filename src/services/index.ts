import { spaceXApi } from "../external";
import LaunchesService from "./LaunchesService";

export const launchesService = new LaunchesService(spaceXApi);
