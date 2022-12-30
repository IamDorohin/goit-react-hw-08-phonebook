import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { GuestHeader } from 'components/GuestHeader/GuestHeader';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header, HeaderContainer } from './AppBar.styled';
import { AppLogo } from 'components/AppLogo/AppLogo';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <HeaderContainer>
        <AppLogo />
        {isLoggedIn ? <UserMenu /> : <GuestHeader />}
      </HeaderContainer>
    </Header>
  );
};
