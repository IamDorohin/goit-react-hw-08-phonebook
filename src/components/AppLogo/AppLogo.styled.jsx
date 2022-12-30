import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppLogoContainer = styled.div`
  position: relative;
  display: flex;
`;
export const AppLogoEL = styled.div`
  position: absolute;
  top: 14px;
  width: 38px;
  height: 15px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.blueHovered};
  z-index: 1;

  @media screen and (min-width: 480px) {
    width: 45px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 55px;
    height: 22px;
  }
`;

export const AppLogoLink = styled(NavLink)`
  display: flex;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;

  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const AppLogoPrimaryText = styled.div`
  z-index: 2;
  margin-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.xs};

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const AppLogoSecondaryText = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
