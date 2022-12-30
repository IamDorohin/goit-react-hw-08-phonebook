import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  @media screen and (min-width: 480px) {
    width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const BlueButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  width: 60px;
  height: 20px;
  cursor: pointer;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.blueMain};
  color: ${p => p.theme.colors.blueMain};

  background-color: transparent;
  font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 480px) {
    width: 80px;
    height: 25px;
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 30px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1200px) {
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blueHovered};
    border-color: ${p => p.theme.colors.blueHovered};
  }
`;

export const GreenButton = styled.button`
  width: 60px;
  height: 20px;
  cursor: pointer;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.greenMain};

  color: ${p => p.theme.colors.greenMain};
  background-color: transparent;

  font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 480px) {
    width: 80px;
    height: 25px;

    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 30px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1200px) {
  }

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.greenHovered};
    color: ${p => p.theme.colors.greenHovered};
  }
`;
