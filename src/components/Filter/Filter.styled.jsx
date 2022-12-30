import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 340px;

  margin-top: ${p => p.theme.space[3]}px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: ${p => p.theme.colors.black};

  @media screen and (min-width: 480px) {
    width: 348px;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`;

export const FilterInput = styled.input`
  margin-right: 23px;

  width: 255px;
  height: 25px;

  background-color: transparent;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.white};

  font-size: ${p => p.theme.fontSizes.xs};
  padding-left: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 480px) {
    width: 255px;

    margin-right: 37px;
  }

  @media screen and (min-width: 768px) {
    width: 335px;
    height: 30px;
    margin-right: 35px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1200px) {
    width: 480px;
    height: 35px;
    margin-right: 45px;
    padding-left: ${p => p.theme.space[4]}px;
  }

  &:hover,
  &:focus {
    outline: none;

    border-color: ${p => p.theme.colors.blueHovered};
  }
`;

export const FilterIcon = styled.div`
  position: absolute;
  right: 80px;
  top: 5px;

  @media screen and (min-width: 480px) {
    right: 90px;
  }

  @media screen and (min-width: 768px) {
    top: 8px;
    right: 110px;
  }

  @media screen and (min-width: 1200px) {
    top: 11px;
    right: 115px;
  }
`;

export const FilterAddLink = styled(NavLink)`
  color: ${p => p.theme.colors.greenMain};

  /* width: 35px;
  height: 25px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
  border-color: ${p => p.theme.colors.greenMain}; */
  text-decoration: none;
  /* background-color: ${p => p.theme.colors.greenMain};
  color: ${p => p.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 480px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    border: ${p => p.theme.borders.bold};
  }

  @media screen and (min-width: 1200px) {
    width: 39px;
    height: 39px;
  } */
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.greenHovered};
  }
`;

export const FilterStats = styled.p`
  position: absolute;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.blueHovered};
  top: 25px;
  left: 18px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1200px) {
    top: 28px;
    left: 25px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
