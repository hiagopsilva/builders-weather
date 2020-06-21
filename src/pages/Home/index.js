import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import GetLocation from 'react-native-get-location';

import {
  Prevision,
  Header,
  HeaderTitle,
  MainPrevision,
  TitleMain,
  FooterPrevision,
  MinPrevision,
  TitlePrevision,
  ValuePrevision,
  MaxPrevision,
  TitleMax,
  TitleMaxValue,
  LocationPrevision,
  TitleInfo,
  TitleLocation,
  ButtonUpdate,
  TextButton,
} from './styles';

const Home = () => {
  const [location, setLocation] = useState();

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then((currentLocation) => {
      setLocation(currentLocation);
    })
    .catch((error) => {
      const {code, message} = error;
      console.warn(code, message);
    });

  return (
    <ImageBackground
      source={require('../../assets/morning.jpg')}
      style={{flex: 1}}>
      <Header>
        <HeaderTitle>Builders Weather</HeaderTitle>
      </Header>

      <Prevision>
        <MainPrevision>
          <Icon name="sun" size={60} color="#fff" />
          <TitleMain>20º</TitleMain>
        </MainPrevision>

        <FooterPrevision>
          <View>
            <ValuePrevision>20º</ValuePrevision>
            <TitlePrevision>min</TitlePrevision>
          </View>
          <View>
            <ValuePrevision>24º</ValuePrevision>
            <TitlePrevision>max</TitlePrevision>
          </View>
        </FooterPrevision>

        <LocationPrevision>
          <TitleInfo>Chuvoso</TitleInfo>
          <TitleLocation>Taboão da Serra</TitleLocation>
        </LocationPrevision>

        <ButtonUpdate>
          <TextButton>Atualizar</TextButton>
        </ButtonUpdate>

        {/* <Icon name="cloud" size={60} color="#fff" />
        <Icon name="cloud-rain" size={60} color="#fff" />
        <Icon name="moon" size={60} color="#fff" /> */}
      </Prevision>
    </ImageBackground>
  );
};

export default Home;
