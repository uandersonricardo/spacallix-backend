import axios from "axios";

import { SpaceXLaunch, SpaceXLaunchSelectedQuery } from "../types/spacex";

class SpaceXApi {
  private readonly api;

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.spacexdata.com/v5"
    });
  }

  public async query(
    filter: { [key: string]: unknown },
    perPage: number,
    page: number
  ) {
    const body = {
      query: filter,
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

  public async latest() {
    const { data } = await this.api
      .get<SpaceXLaunch>("/launches/latest")
      .catch(err => {
        if (err.response.status === 404) {
          return { data: null };
        }

        throw err;
      });

    return data;
  }

  public async next() {
    const { data } = await this.api
      .get<SpaceXLaunch>("/launches/next")
      .catch(err => {
        if (err.response.status === 404) {
          return { data: null };
        }

        throw err;
      });

    return data;
  }

  public async one(id: string) {
    const { data } = await this.api
      .get<SpaceXLaunch>(`/launches/${id}`)
      .catch(err => {
        if (err.response.status === 404) {
          return { data: null };
        }

        throw err;
      });

    return data;
  }
}

export default SpaceXApi;
