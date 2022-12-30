import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section``;

export const NotFoundContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 300px;
  height: 400px;
  /* border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal}; */

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const NotFoundTitle = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.white};
`;
export const NotFoundDescription = styled.p`
  margin-bottom: 30px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const NotFoundLinkContainer = styled.div`
  padding-left: ${p => p.theme.space[5]}px;
`;

export const NotFoundLink = styled(Link)`
  width: 60px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-right: auto;

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
