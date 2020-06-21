import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
  return (
    <ImageBackground
      source={require('../../assets/night.jpg')}
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
