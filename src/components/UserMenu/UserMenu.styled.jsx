import styled from 'styled-components';

export const UserHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserHeaderTitle = styled.p`
  margin: 0;
  margin-right: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.ms};
  }
`;
export const UserHeaderButton = styled.button`
  padding: ${p => p.theme.space[0]}px;
  width: 20px;
  height: 20px;
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  background-color: transparent;
  color: white;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blueHovered};
  }
`;
