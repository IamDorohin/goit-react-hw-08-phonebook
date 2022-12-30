import {
  AppLogoContainer,
  AppLogoEL,
  AppLogoLink,
  AppLogoPrimaryText,
  AppLogoSecondaryText,
} from './AppLogo.styled';

export const AppLogo = () => {
  return (
    <AppLogoContainer>
      <AppLogoLink to="/">
        <AppLogoEL />
        <AppLogoPrimaryText>Phone</AppLogoPrimaryText>
        <AppLogoSecondaryText>book</AppLogoSecondaryText>
      </AppLogoLink>
    </AppLogoContainer>
  );
};
