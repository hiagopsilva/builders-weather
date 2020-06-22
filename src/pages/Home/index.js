import React, {useState, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import GetLocation from 'react-native-get-location';
import api from '../../services/api';

import HeaderComponent from '../../components/Header';
import PrevisionComponent from '../../components/Prevision';
import Loading from '../../components/Loading';
import ButtonComponent from '../../components/Button';

import Background from '../../assets/night.jpg';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [DataPrevisionWeather, setDataPrevisionWeather] = useState({
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
    weather: [
      {
        description: '',
      },
    ],
    name: '',
    sys: {
      coutry: '',
    },
  });

  useEffect(() => {
    getDataPrevison();
  }, []);

  async function getDataPrevison() {
    setLoading(true);
    const {latitude, longitude} = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    });

    const response = await api.get(
      `weather?lat=${latitude}&lon=${longitude}&&units=metric&lang=pt&APPID=13fe761107ed465fe627448321516f2f`,
    );

    setDataPrevisionWeather(response.data);
    setLoading(false);
  }

  return (
    <ImageBackground source={Background} style={{flex: 1}}>
      <HeaderComponent />

      {loading == true ? (
        <Loading />
      ) : (
        <PrevisionComponent DataPrevision={DataPrevisionWeather} />
      )}
      <ButtonComponent getDataPrevision={() => getDataPrevison()} />
    </ImageBackground>
  );
};

export default Home;
