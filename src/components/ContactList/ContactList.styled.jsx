import styled from 'styled-components';

export const ContactsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${p => p.theme.space[5]}px;
  padding-left: 10px;
  padding-right: 10px;
  width: 340px;

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

export const ContactsEmptyList = styled.p`
  text-align: center;
  margin: 0;
  margin-top: ${p => p.theme.space[6]}px;
  padding: 0;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.ms};
`;

export const ContactsList = styled.ul`
  list-style: none;

  width: 320px;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.white};

  @media screen and (min-width: 480px) {
    width: 328px;
  }

  @media screen and (min-width: 768px) {
    width: 428px;
  }

  @media screen and (min-width: 1200px) {
    width: 580px;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: start;
  width: 320px;

  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  border-bottom: ${p => p.theme.borders.normal};
  border-color: #3b3838;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 480px) {
    width: 328px;
  }

  @media screen and (min-width: 768px) {
    width: 428px;
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1200px) {
    width: 580px;
    padding-bottom: ${p => p.theme.space[4]}px;
  }

  &:hover,
  &:focus {
    transition-property: transform;
    transform: scale(1.05);
    transition-duration: 500ms;
  }
`;

export const ContactDetails = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  margin-right: 25px;

  :nth-child(1) {
    width: 145px;
    margin-right: 25px;
  }

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
    :nth-child(1) {
      width: 225px;
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 1200px) {
    margin-right: 35px;
    font-size: ${p => p.theme.fontSizes.m};

    :nth-child(1) {
      width: 320px;
      margin-right: 25px;
    }
  }
`;

export const ContactButton = styled.button`
-webkit-appearance: button;
  border-radius: ${p => p.theme.radii.normal};
  border-color: transparent;
  background-color: transparent;
  color: ${p => p.theme.colors.redMain};
  cursor: pointer;
  width: 40px;
  height: 15px;
  font-size: ${p => p.theme.fontSizes.xs};

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 0;
    font-size: ${p => p.theme.fontSizes.m};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.redHovered};
  }
`;
