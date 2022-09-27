import axios from "axios";

import cache from "../config/cache";
import { SpaceXLaunch, SpaceXLaunchSelectedQuery } from "../types/spacex";
import { getCacheKey } from "../utils/cache";

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
    page: number,
    sort?: { [key: string]: number }
  ) {
    const cacheKey = getCacheKey(
      "spacex",
      "query",
      filter,
      perPage,
      page,
      sort
    );

    if (cache.has(cacheKey)) {
      return (
        cache.get<
          SpaceXLaunchSelectedQuery<
            "id" | "name" | "flight_number" | "date_utc"
          >
        >(cacheKey) ?? {
          docs: [],
          hasNextPage: false,
          hasPrevPage: false,
          limit: 0,
          nextPage: 0,
          page: 0,
          pagingCounter: 0,
          prevPage: 0,
          totalDocs: 0,
          totalPages: 0
        }
      );
    }

    const body = {
      query: filter,
      options: {
        limit: perPage,
        page,
        select: ["_id", "name", "flight_number", "date_utc"],
        sort
      }
    };

    const { data } = await this.api.post<
      SpaceXLaunchSelectedQuery<"id" | "name" | "flight_number" | "date_utc">
    >("/launches/query", body);

    cache.set(cacheKey, data);

    return data;
  }

  public async latest() {
    const cacheKey = getCacheKey("spacex", "latest");

    if (cache.has(cacheKey)) {
      return cache.get<SpaceXLaunch | null>(cacheKey) ?? null;
    }

    const { data } = await this.api
      .get<SpaceXLaunch>("/launches/latest")
      .catch(err => {
        if (err.response.status === 404) {
          return { data: null };
        }

        throw err;
      });

    cache.set(cacheKey, data);

    return data;
  }

  public async next() {
    const cacheKey = getCacheKey("spacex", "next");

    if (cache.has(cacheKey)) {
      return cache.get<SpaceXLaunch | null>(cacheKey) ?? null;
    }

    const { data } = await this.api
      .get<SpaceXLaunch>("/launches/next")
      .catch(err => {
        if (err.response.status === 404) {
          return { data: null };
        }

        throw err;
      });

    cache.set(cacheKey, data);

    return data;
  }

  public async one(id: string) {
    const cacheKey = getCacheKey("spacex", "one", id);

    if (cache.has(cacheKey)) {
      return cache.get<SpaceXLaunch | null>(cacheKey) ?? null;
    }

    const { data } = await this.api
      .get<SpaceXLaunch>(`/launches/${id}`)
      .catch(err => {
        if (err.response.status === 404) {
          return { data: null };
        }

        throw err;
      });

    cache.set(cacheKey, data);

    return data;
  }
}

export default SpaceXApi;
