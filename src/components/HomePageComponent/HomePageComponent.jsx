import {
  HomeMain,
  HomeSection,
  HomeContainer,
  HomeWelcomeText,
  HomeList,
  HomeItem,
} from './HomePageComponent.styled';

export const HomePageComponent = () => {
  return (
    <HomeMain>
      <HomeSection>
        <HomeContainer>
          <HomeWelcomeText>Hi there!</HomeWelcomeText>
          <HomeWelcomeText>This is your personal phone book.</HomeWelcomeText>
          <HomeWelcomeText>
            I can help you work with your contacts.
          </HomeWelcomeText>
          <HomeList>
            <HomeItem>Add</HomeItem>
            <HomeItem>Sort</HomeItem>
            <HomeItem>Count</HomeItem>
            <HomeItem>Delete</HomeItem>
          </HomeList>
          <HomeWelcomeText>
            But first you must sign up and login!
          </HomeWelcomeText>
        </HomeContainer>
      </HomeSection>
    </HomeMain>
  );
};
