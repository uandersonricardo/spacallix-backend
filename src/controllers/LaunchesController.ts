import { Request, Response } from "express";

import LaunchesService from "../services/LaunchesService";
import { parseBoolean } from "../utils/boolean";

class LaunchesController {
  private readonly launchesService;

  constructor(launchesService: LaunchesService) {
    this.launchesService = launchesService;
  }

  public async paginate(req: Request, res: Response) {
    const perPage = req.query.perPage ? Number(req.query.perPage) : 10;
    const page = req.query.page ? Number(req.query.page) : 1;
    const filter = {
      upcoming: parseBoolean(req.query.upcoming) ?? undefined
    };

    const launches = await this.launchesService.getPaginated(
      filter,
      perPage,
      page
    );

    res.status(200).json(launches);
  }
}

export default LaunchesController;
