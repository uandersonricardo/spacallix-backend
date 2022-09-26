export interface Launch {
  id: string;
  name: string;
  flightNumber: number;
  date: string;
  details: string | null;
  success: boolean | null;
  failures?: [
    {
      time: number;
      altitude: number;
      reason: string;
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
    youtubeId: string | null;
    article: string | null;
    wikipedia: string | null;
  };
}

export interface LaunchSummary {
  id: string;
  name: string;
  flightNumber: number;
  date: string;
}
