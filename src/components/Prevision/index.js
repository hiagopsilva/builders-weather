import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  PrevisionContainer,
  MainPrevision,
  TitleMain,
  FooterPrevision,
  TitlePrevision,
  ValuePrevision,
  LocationPrevision,
  TitleInfo,
  TitleLocation,
} from './styles';

const Prevision = ({DataPrevision}) => {
  return (
    <PrevisionContainer>
      <MainPrevision>
        <Icon name="cloud" size={60} color="#fff" />
        <TitleMain>{DataPrevision.main.temp ^ 0}º</TitleMain>
      </MainPrevision>

      <FooterPrevision>
        <View style={{alignItems: 'center'}}>
          <ValuePrevision>{DataPrevision.main.temp_min ^ 0}º</ValuePrevision>
          <TitlePrevision>min</TitlePrevision>
        </View>
        <View style={{alignItems: 'center'}}>
          <ValuePrevision>{DataPrevision.main.temp_max ^ 0}º</ValuePrevision>
          <TitlePrevision>max</TitlePrevision>
        </View>
      </FooterPrevision>

      <LocationPrevision>
        <TitleInfo>{DataPrevision.weather[0].description}</TitleInfo>
        <TitleLocation>
          {DataPrevision.name}, {DataPrevision.sys.country}
        </TitleLocation>
      </LocationPrevision>
    </PrevisionContainer>
  );
};

export default Prevision;
