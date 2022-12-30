import styled from 'styled-components';

export const HomeMain = styled.main``;
export const HomeSection = styled.section``;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[6]}px;
  width: 380px;

  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    width: 568px;
  }
`;

export const HomeWelcomeText = styled.p`
  text-align: start;
  width: fit-content;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const HomeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;

  text-decoration: none;
  list-style: none;

  @media screen and (min-width: 768px) {
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }
`;
export const HomeItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  width: 100px;
  height: 50px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  background-color: transparent;
  color: ${p => p.theme.colors.greenMain};

  :hover,
  :focus {
    color: ${p => p.theme.colors.greenHovered};
  }
  :nth-child(2n + 1) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  :nth-child(-n + 2) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  :nth-child(2) {
    background-color: transparent;
    color: ${p => p.theme.colors.yellowMain};

    :hover,
    :focus {
      color: ${p => p.theme.colors.yellowHovered};
    }
  }
  :nth-child(3) {
    background-color: transparent;
    color: ${p => p.theme.colors.blueMain};

    :hover,
    :focus {
      color: ${p => p.theme.colors.blueHovered};
    }
  }
  :nth-child(4) {
    background-color: transparent;
    color: ${p => p.theme.colors.redMain};

    :hover,
    :focus {
      color: ${p => p.theme.colors.redHovered};
    }
  }

  @media screen and (min-width: 768px) {
    :nth-child(-n + 2) {
      margin-bottom: ${p => p.theme.space[0]}px;
    }

    :nth-child(-n + 4) {
      margin-right: ${p => p.theme.space[3]}px;
    }

    :nth-child(2n + 1) {
      margin-right: ${p => p.theme.space[0]}px;
    }
  }
`;
