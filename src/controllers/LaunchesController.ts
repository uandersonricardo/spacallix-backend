import { Request, Response } from "express";

import LaunchesService from "../services/LaunchesService";

class LaunchesController {
  private readonly launchesService;

  constructor(launchesService: LaunchesService) {
    this.launchesService = launchesService;
  }

  public async upcoming(req: Request, res: Response) {
    const upcomingLaunches = await this.launchesService.upcoming();

    res.status(200).json(upcomingLaunches);
  }
}

export default LaunchesController;
