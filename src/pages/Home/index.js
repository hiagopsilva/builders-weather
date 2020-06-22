import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import GetLocation from 'react-native-get-location';
import api from '../../services/api';

import {
  Prevision,
  Header,
  HeaderTitle,
  MainPrevision,
  TitleMain,
  FooterPrevision,
  TitlePrevision,
  ValuePrevision,
  LocationPrevision,
  TitleInfo,
  TitleLocation,
  ButtonUpdate,
  ContainerLoading,
  TextLoading,
} from './styles';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentHour, setCurrentHour] = useState();
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
    getHour();
  }, []);

  function getHour() {
    const dataHours = new Date();
    const now = dataHours.getHours();

    setCurrentHour(now);
  }

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
    <ImageBackground
      source={require('../../assets/morning.jpg')}
      style={{flex: 1}}>
      <Header>
        <HeaderTitle>
          Challenge Builders <Icon name="sun" size={20} color="#fff" />
        </HeaderTitle>
      </Header>

      {loading == true ? (
        <ContainerLoading>
          <ActivityIndicator color="#FFF" size="large" />
          <TextLoading>Carregando...</TextLoading>
        </ContainerLoading>
      ) : (
        <Prevision>
          <MainPrevision>
            {DataPrevisionWeather.weather[0].description == 'céu limpo' &&
            currentHour <= 18 &&
            currentHour >= 5 ? (
              <Icon name="sun" size={60} color="#fff" />
            ) : (
              <></>
            )}
            {DataPrevisionWeather.weather[0].description == 'nublado' ||
            DataPrevisionWeather.weather[0].description ==
              'céu pouco nublado' ||
            DataPrevisionWeather.weather[0].description ==
              'nuvens dispersas' ? (
              <>
                <Icon name="cloud" size={60} color="#fff" />
              </>
            ) : (
              <></>
            )}
            {DataPrevisionWeather.weather[0].description == 'chuva fraca' ||
            DataPrevisionWeather.weather[0].description == 'chuva forte' ? (
              <Icon name="cloud-rain" size={60} color="#fff" />
            ) : (
              <></>
            )}
            {(DataPrevisionWeather.weather[0].description == 'céu limpo' &&
              currentHour >= 18) ||
            currentHour <= 5 ? (
              <Icon name="moon" size={60} color="#fff" />
            ) : (
              <></>
            )}
            <TitleMain>{DataPrevisionWeather.main.temp ^ 0}º</TitleMain>
          </MainPrevision>

          <FooterPrevision>
            <View style={{alignItems: 'center'}}>
              <ValuePrevision>
                {DataPrevisionWeather.main.temp_min ^ 0}º
              </ValuePrevision>
              <TitlePrevision>min</TitlePrevision>
            </View>
            <View style={{alignItems: 'center'}}>
              <ValuePrevision>
                {DataPrevisionWeather.main.temp_max ^ 0}º
              </ValuePrevision>
              <TitlePrevision>max</TitlePrevision>
            </View>
          </FooterPrevision>

          <LocationPrevision>
            <TitleInfo>{DataPrevisionWeather.weather[0].description}</TitleInfo>
            <TitleLocation>
              {DataPrevisionWeather.name}, {DataPrevisionWeather.sys.country}
            </TitleLocation>
          </LocationPrevision>
        </Prevision>
      )}
      <ButtonUpdate onPress={() => getDataPrevison()}>
        <Text>Atualizar</Text>
      </ButtonUpdate>
    </ImageBackground>
  );
};

export default Home;
