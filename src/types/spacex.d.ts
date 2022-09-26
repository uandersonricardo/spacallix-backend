export interface SpaceXLaunch {
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: "half" | "quarter" | "year" | "month" | "day" | "hour";
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  tdb: boolean;
  net: boolean;
  window: number | null;
  rocket: string | null;
  success: boolean | null;
  failures?: [
    {
      time: number;
      altitude: number;
      reason: string;
    }
  ];
  upcoming: boolean;
  details: string | null;
  fairings: {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: [string];
  } | null;
  crew?: [
    {
      crew: string | null;
      role: string | null;
    }
  ];
  ships: [string];
  capsules: [string];
  payloads: [string];
  launchpad: string | null;
  cores: [
    {
      core: string | null;
      flight: number | null;
      gridfins: boolean | null;
      legs: boolean | null;
      reused: boolean | null;
      landing_attempt: boolean | null;
      landing_success: boolean | null;
      landing_type: string | null;
      landpad: string | null;
    }
  ];
  links: {
    patch: {
      small: string | null;
      large: string | null;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: [string];
      original: [string];
    };
    presskit: string | null;
    webcast: string | null;
    youtube_id: string | null;
    article: string | null;
    wikipedia: string | null;
  };
  auto_update: boolean;
  id: string;
}

interface SpaceXQuery {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface SpaceXLaunchQuery extends SpaceXQuery {
  docs: SpaceXLaunch[];
}

export interface SpaceXLaunchSelectedQuery<T> extends SpaceXQuery {
  docs: Array<Pick<SpaceXLaunch, T>>;
}
