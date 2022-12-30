import styled from 'styled-components';

export const ContactsPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;

  margin-left: auto;
  margin-right: auto;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.black};

  @media screen and (min-width: 480px) {
    width: 380px;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
  }

  @media screen and (min-width: 1200px) {
    width: 900px;
  } ;
`;
