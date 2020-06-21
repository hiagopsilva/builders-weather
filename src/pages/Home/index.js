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
  const [position, setPosition] = useState();
  const [DataPrevisionWeather, setDataPrevisionWeather] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
    })
      .then((currentLocation) => {
        setPosition(currentLocation);
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  useEffect(() => {
    getDataApi();
  }, []);

  async function getDataApi() {
    setLoading(true);
    const {latitude, longitude} = position;
    // const response = await api.get(
    //   `weather?lat=${latitude}&lon=${longitude}&&units=metric&lang=pt&APPID=13fe761107ed465fe627448321516f2f`,
    // );
    const response = await api.get(
      'weather?lat=-23.6260084&lon=-46.7768741&&units=metric&lang=pt&APPID=13fe761107ed465fe627448321516f2f',
    );

    setDataPrevisionWeather(response.data);
    setLoading(false);
  }

  return (
    <ImageBackground
      source={require('../../assets/morning.jpg')}
      style={{flex: 1}}>
      <Header>
        <HeaderTitle>Builders Weather</HeaderTitle>
      </Header>

      {loading == true ? (
        <ContainerLoading>
          <ActivityIndicator color="#FFF" />
          <TextLoading>Carregando...</TextLoading>
        </ContainerLoading>
      ) : (
        <Prevision>
          <MainPrevision>
            <Icon name="moon" size={60} color="#fff" />
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

          {/* <Icon name="sun" size={60} color="#fff" />
              <Icon name="cloud" size={60} color="#fff" />
              <Icon name="cloud-rain" size={60} color="#fff" />
              <Icon name="moon" size={60} color="#fff" /> */}
        </Prevision>
      )}
      <ButtonUpdate onPress={() => getDataApi()}>
        <Text>Atualizar</Text>
      </ButtonUpdate>
    </ImageBackground>
  );
};

export default Home;
