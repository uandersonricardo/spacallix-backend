import SpaceXApi from "../external/SpaceXApi";
import { Launch, LaunchSummary } from "../types/dto";

class LaunchesService {
  private readonly spaceXApi;

  constructor(spaceXApi: SpaceXApi) {
    this.spaceXApi = spaceXApi;
  }

  public async getPaginated(
    filter: { [key: string]: unknown },
    perPage: number,
    page: number,
    sort?: { [key: string]: number }
  ) {
    const spaceXLaunches = await this.spaceXApi.query(
      filter,
      perPage,
      page,
      sort
    );

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

  public async findLatest() {
    const spaceXLaunch = await this.spaceXApi.latest();

    if (!spaceXLaunch) {
      return null;
    }

    const launch: Launch = {
      id: spaceXLaunch.id,
      name: spaceXLaunch.name,
      flightNumber: spaceXLaunch.flight_number,
      date: spaceXLaunch.date_utc,
      details: spaceXLaunch.details,
      success: spaceXLaunch.success,
      failures: spaceXLaunch.failures,
      links: {
        patch: {
          small: spaceXLaunch.links.patch.small,
          large: spaceXLaunch.links.patch.large
        },
        reddit: {
          campaign: spaceXLaunch.links.reddit.campaign,
          launch: spaceXLaunch.links.reddit.launch,
          media: spaceXLaunch.links.reddit.media,
          recovery: spaceXLaunch.links.reddit.recovery
        },
        flickr: {
          small: spaceXLaunch.links.flickr.small,
          original: spaceXLaunch.links.flickr.original
        },
        presskit: spaceXLaunch.links.presskit,
        webcast: spaceXLaunch.links.webcast,
        youtubeId: spaceXLaunch.links.youtube_id,
        article: spaceXLaunch.links.article,
        wikipedia: spaceXLaunch.links.wikipedia
      }
    };

    return launch;
  }

  public async findNext() {
    const spaceXLaunch = await this.spaceXApi.next();

    if (!spaceXLaunch) {
      return null;
    }

    const launch: Launch = {
      id: spaceXLaunch.id,
      name: spaceXLaunch.name,
      flightNumber: spaceXLaunch.flight_number,
      date: spaceXLaunch.date_utc,
      details: spaceXLaunch.details,
      success: spaceXLaunch.success,
      failures: spaceXLaunch.failures,
      links: {
        patch: {
          small: spaceXLaunch.links.patch.small,
          large: spaceXLaunch.links.patch.large
        },
        reddit: {
          campaign: spaceXLaunch.links.reddit.campaign,
          launch: spaceXLaunch.links.reddit.launch,
          media: spaceXLaunch.links.reddit.media,
          recovery: spaceXLaunch.links.reddit.recovery
        },
        flickr: {
          small: spaceXLaunch.links.flickr.small,
          original: spaceXLaunch.links.flickr.original
        },
        presskit: spaceXLaunch.links.presskit,
        webcast: spaceXLaunch.links.webcast,
        youtubeId: spaceXLaunch.links.youtube_id,
        article: spaceXLaunch.links.article,
        wikipedia: spaceXLaunch.links.wikipedia
      }
    };

    return launch;
  }

  public async findById(id: string) {
    const spaceXLaunch = await this.spaceXApi.one(id);

    if (!spaceXLaunch) {
      return null;
    }

    const launch: Launch = {
      id: spaceXLaunch.id,
      name: spaceXLaunch.name,
      flightNumber: spaceXLaunch.flight_number,
      date: spaceXLaunch.date_utc,
      details: spaceXLaunch.details,
      success: spaceXLaunch.success,
      failures: spaceXLaunch.failures,
      links: {
        patch: {
          small: spaceXLaunch.links.patch.small,
          large: spaceXLaunch.links.patch.large
        },
        reddit: {
          campaign: spaceXLaunch.links.reddit.campaign,
          launch: spaceXLaunch.links.reddit.launch,
          media: spaceXLaunch.links.reddit.media,
          recovery: spaceXLaunch.links.reddit.recovery
        },
        flickr: {
          small: spaceXLaunch.links.flickr.small,
          original: spaceXLaunch.links.flickr.original
        },
        presskit: spaceXLaunch.links.presskit,
        webcast: spaceXLaunch.links.webcast,
        youtubeId: spaceXLaunch.links.youtube_id,
        article: spaceXLaunch.links.article,
        wikipedia: spaceXLaunch.links.wikipedia
      }
    };

    return launch;
  }
}

export default LaunchesService;
