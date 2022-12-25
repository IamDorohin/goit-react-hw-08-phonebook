import {
  HomeMain,
  HomeSection,
  HomeContainer,
  HomeTitle,
  HomeList,
  HomeItem,
  HomeLink,
} from './HomePageComponent.styled';

export const HomePageComponent = () => {
  return (
    <HomeMain>
      <HomeSection>
        <HomeContainer>
          <HomeTitle>
            Hi there! This is your personal phone book! In order to use all
            Phonebook advantages, register in the system or log in if you have a
            registered account!
          </HomeTitle>
          <HomeList>
            <HomeItem>
              <HomeLink to="/register">Register</HomeLink>
            </HomeItem>
            <HomeItem>
              <HomeLink to="/login">LogIn</HomeLink>
            </HomeItem>
          </HomeList>
        </HomeContainer>
      </HomeSection>
    </HomeMain>
  );
};
