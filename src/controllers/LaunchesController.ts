import { Request, Response } from "express";

import LaunchesService from "../services/LaunchesService";

class LaunchesController {
  private readonly launchesService;

  constructor(launchesService: LaunchesService) {
    this.launchesService = launchesService;
  }

  public async past(req: Request, res: Response) {
    const perPage = req.query.perPage ? Number(req.query.perPage) : 10;
    const page = req.query.page ? Number(req.query.page) : 1;

    const pastLaunches = await this.launchesService.past(perPage, page);

    res.status(200).json(pastLaunches);
  }

  public async upcoming(req: Request, res: Response) {
    const perPage = req.query.perPage ? Number(req.query.perPage) : 10;
    const page = req.query.page ? Number(req.query.page) : 1;

    const upcomingLaunches = await this.launchesService.upcoming(perPage, page);

    res.status(200).json(upcomingLaunches);
  }
}

export default LaunchesController;
