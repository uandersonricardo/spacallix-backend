import axios from "axios";

import { SpaceXLaunchSelectedQuery } from "../types/spacex";

class SpaceXApi {
  private readonly api;

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.spacexdata.com/v5"
    });
  }

  public async past(perPage: number, page: number) {
    const body = {
      query: {
        upcoming: false
      },
      options: {
        limit: perPage,
        page,
        select: ["_id", "name", "flight_number", "date_utc"]
      }
    };

    const { data } = await this.api.post<
      SpaceXLaunchSelectedQuery<"id" | "name" | "flight_number" | "date_utc">
    >("/launches/query", body);

    return data;
  }

  public async upcoming(perPage: number, page: number) {
    const body = {
      query: {
        upcoming: true
      },
      options: {
        limit: perPage,
        page,
        select: ["_id", "name", "flight_number", "date_utc"]
      }
    };

    const { data } = await this.api.post<
      SpaceXLaunchSelectedQuery<"id" | "name" | "flight_number" | "date_utc">
    >("/launches/query", body);

    return data;
  }
}

export default SpaceXApi;
