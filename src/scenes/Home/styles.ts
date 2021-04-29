import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { Header, Prevision, Loading, Button } from '~/components';
import BackgroundImage from '~/assets/night.jpg';

export const Wrapper = styled(ImageBackground).attrs({
  source: BackgroundImage,
})`
  flex: 1;
`;

export const HeaderStyled = styled(Header)``;

export const PrevisionStyled = styled(Prevision)``;

export const LoadingStyled = styled(Loading)``;

export const ButtonStyled = styled(Button)``;
