import axios from "axios";

import { SpaceXLaunch } from "../types/spacex";

class SpaceXApi {
  private readonly api;

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.spacexdata.com/v5"
    });
  }

  public async upcoming() {
    const { data } = await this.api.get<SpaceXLaunch[]>("/launches/upcoming");

    return data;
  }
}

export default SpaceXApi;
