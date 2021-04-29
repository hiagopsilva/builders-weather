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
  DataPrevisionWeather?: Partial<ValuesDataPrevision>;
  getDataPrevision: () => void;
};

const Home: React.FC<Props> = ({
  loading,
  DataPrevisionWeather,
  getDataPrevision,
}) => {
  return (
    <Wrapper>
      <HeaderStyled />

      {console.log(loading)}
      {loading ? (
        <LoadingStyled />
      ) : (
        <>
          <PrevisionStyled DataPrevision={DataPrevisionWeather} />
          <ButtonStyled onPress={getDataPrevision} />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
