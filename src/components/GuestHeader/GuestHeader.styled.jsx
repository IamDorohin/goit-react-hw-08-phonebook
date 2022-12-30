import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GuestHeaderList = styled.ul`
  display: flex;
  align-items: center;

  margin: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[0]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  list-style: none;
`;

export const GuestHeaderItem = styled.li`
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xs};

  :not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const GuestHeaderLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.white};

  &.active {
    border-top: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.blueHovered};
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.blueHovered};
  }
`;
