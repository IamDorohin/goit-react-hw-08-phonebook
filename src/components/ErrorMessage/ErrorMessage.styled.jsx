import styled from 'styled-components';

export const ErrorText = styled.p`
  position: absolute;
  display: flex;
  bottom: -15px;
  right: 0;
  margin: 0;
  width: 200px;
  height: 13px;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.xxs};
  background-color: ${p => p.theme.colors.redMain};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 480px) {
    bottom: -17px;
    width: 250px;
    height: 15px;
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 768px) {
    bottom: -22px;
    width: 350px;
    height: 20px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
