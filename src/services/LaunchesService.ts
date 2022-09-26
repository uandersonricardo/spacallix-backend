import SpaceXApi from "../external/SpaceXApi";
import { LaunchSummary } from "../types/dto";

class LaunchesService {
  private readonly spaceXApi;

  constructor(spaceXApi: SpaceXApi) {
    this.spaceXApi = spaceXApi;
  }

  public async upcoming() {
    const upcomingSpaceXLaunches = await this.spaceXApi.upcoming();

    const launches: LaunchSummary[] = upcomingSpaceXLaunches.map(launch => ({
      id: launch.id,
      name: launch.name,
      flightNumber: launch.flight_number,
      date: launch.date_utc
    }));

    return launches;
  }
}

export default LaunchesService;
