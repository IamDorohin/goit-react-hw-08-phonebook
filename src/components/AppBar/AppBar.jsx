import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { GuestHeader } from 'components/GuestHeader/GuestHeader';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header, HeaderSection } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <HeaderSection>
        {isLoggedIn ? <UserMenu /> : <GuestHeader />}
      </HeaderSection>
    </Header>
  );
};
