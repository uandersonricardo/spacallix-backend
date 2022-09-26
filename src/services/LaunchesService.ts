import SpaceXApi from "../external/SpaceXApi";
import { LaunchSummary } from "../types/dto";

class LaunchesService {
  private readonly spaceXApi;

  constructor(spaceXApi: SpaceXApi) {
    this.spaceXApi = spaceXApi;
  }

  public async past(perPage: number, page: number) {
    const pastSpaceXLaunches = await this.spaceXApi.past(perPage, page);

    const launches: LaunchSummary[] = pastSpaceXLaunches.docs.map(launch => ({
      id: launch.id,
      name: launch.name,
      flightNumber: launch.flight_number,
      date: launch.date_utc
    }));

    return {
      items: launches,
      perPage: pastSpaceXLaunches.limit,
      page: pastSpaceXLaunches.page,
      pageCount: pastSpaceXLaunches.totalPages,
      total: pastSpaceXLaunches.totalDocs
    };
  }

  public async upcoming(perPage: number, page: number) {
    const upcomingSpaceXLaunches = await this.spaceXApi.upcoming(perPage, page);

    const launches: LaunchSummary[] = upcomingSpaceXLaunches.docs.map(
      launch => ({
        id: launch.id,
        name: launch.name,
        flightNumber: launch.flight_number,
        date: launch.date_utc
      })
    );

    return {
      items: launches,
      perPage: upcomingSpaceXLaunches.limit,
      page: upcomingSpaceXLaunches.page,
      pageCount: upcomingSpaceXLaunches.totalPages,
      total: upcomingSpaceXLaunches.totalDocs
    };
  }
}

export default LaunchesService;
