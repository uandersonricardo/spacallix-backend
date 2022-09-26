import SpaceXApi from "../external/SpaceXApi";
import { LaunchSummary } from "../types/dto";

class LaunchesService {
  private readonly spaceXApi;

  constructor(spaceXApi: SpaceXApi) {
    this.spaceXApi = spaceXApi;
  }

  public async getPaginated(
    filter: { [key: string]: unknown },
    perPage: number,
    page: number
  ) {
    const spaceXLaunches = await this.spaceXApi.query(filter, perPage, page);

    const launches: LaunchSummary[] = spaceXLaunches.docs.map(launch => ({
      id: launch.id,
      name: launch.name,
      flightNumber: launch.flight_number,
      date: launch.date_utc
    }));

    return {
      items: launches,
      perPage: spaceXLaunches.limit,
      page: spaceXLaunches.page,
      pageCount: spaceXLaunches.totalPages,
      total: spaceXLaunches.totalDocs
    };
  }
}

export default LaunchesService;
