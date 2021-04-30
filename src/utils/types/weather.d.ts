declare type ValuesDataPrevision = {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  name: string;
  sys: {
    country: string;
  };
};

declare type ValuesPrevision = {
  DataPrevision: {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: [
      {
        description: string;
      },
    ];
    name: string;
    sys: {
      country: string;
    };
  };
};

declare type ValuesLocation = {
  latitude: number;
  longitude: number;
};
