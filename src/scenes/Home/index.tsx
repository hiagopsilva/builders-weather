import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import {WeatherStore} from '../../stores';

type Props = {
  weather: WeatherStore;
};

const HomeContainer: React.FC<Props> = ({weather}) => {
  const [loading, setLoading] = useState(false);

  const getDataPrevision = async () => {
    setLoading(true);
    await weather.getDataPrevision();

    setLoading(false);
  };
  useEffect(() => {
    getDataPrevision();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Home
      loading={loading}
      DataPrevisionWeather={weather.dataPrevision}
      getDataPrevision={weather.getDataPrevision}
    />
  );
};

export default inject('weather')(observer(HomeContainer));
