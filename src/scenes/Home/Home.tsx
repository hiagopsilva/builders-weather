import React from 'react';

import {
  Wrapper,
  HeaderStyled,
  LoadingStyled,
  PrevisionStyled,
  ButtonStyled,
} from './styles';

type Props = {
  loading: boolean;
  dataPrevisionWeather: Partial<ValuesDataPrevision>;
  getDataPrevision: () => void;
};

const Home: React.FC<Props> = ({
  loading,
  dataPrevisionWeather,
  getDataPrevision,
}) => {
  return (
    <Wrapper>
      <HeaderStyled />

      {loading ? (
        <LoadingStyled />
      ) : (
        <>
          <PrevisionStyled DataPrevision={dataPrevisionWeather} />
          <ButtonStyled onPress={getDataPrevision} />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
