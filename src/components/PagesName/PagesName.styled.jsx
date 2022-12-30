import styled from 'styled-components';

export const PageName = styled.div`
  position: absolute;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);

  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;

  border-right: ${p => p.theme.borders.normal};
  border-left: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.white};

  color: ${p => p.theme.colors.blueHovered};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (min-width: 480px) {
    top: -33px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
    padding-right: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1200px) {
    top: -35px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
