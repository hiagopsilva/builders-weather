/* eslint-disable no-bitwise */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  PrevisionContainer,
  MainPrevision,
  TitleMain,
  WrapperPrevision,
  Title,
  Value,
  WrapperLocation,
  TitleInfo,
  TitleLocation,
  WrapperDataPrevision,
} from './styles';

const Prevision = (dataPrevision: ValuesPrevision): React.ReactElement => {
  const { DataPrevision } = dataPrevision;

  return (
    <PrevisionContainer>
      <MainPrevision>
        <Icon name="cloud" size={60} color="#fff" />
        <TitleMain>
          {DataPrevision.main.temp ^ 0}
          º
        </TitleMain>
      </MainPrevision>

      <WrapperDataPrevision>
        <WrapperPrevision>
          <Value>
            {DataPrevision.main.temp_min ^ 0}
            º
          </Value>
          <Title>min</Title>
        </WrapperPrevision>

        <WrapperPrevision>
          <Value>
            {DataPrevision.main.temp_max ^ 0}
            º
          </Value>
          <Title>max</Title>
        </WrapperPrevision>
      </WrapperDataPrevision>

      <WrapperLocation>
        <TitleInfo>{DataPrevision.weather[0].description}</TitleInfo>
        <TitleLocation>
          {DataPrevision.name}
          ,
          {' '}
          {DataPrevision.sys.country}
        </TitleLocation>
      </WrapperLocation>
    </PrevisionContainer>
  );
};

export default Prevision;
