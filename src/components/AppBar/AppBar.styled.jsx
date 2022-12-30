import styled from 'styled-components';

export const Header = styled.header``;
export const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;

  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.white};

  @media screen and (min-width: 480px) {
    width: 380px;
    padding-right: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
  }

  @media screen and (min-width: 768px) {
    width: 568px;
    padding-right: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;
