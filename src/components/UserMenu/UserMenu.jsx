import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {
  UserHeaderLogo,
  UserHeaderMenu,
  UserHeaderTitle,
  UserHeaderButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <UserHeaderLogo to="/">Phonebook</UserHeaderLogo>
      <UserHeaderMenu>
        <UserHeaderTitle>
          Welcome, {user.name}
          <UserHeaderButton type="button" onClick={() => dispatch(logOut())}>
            Logout
          </UserHeaderButton>
        </UserHeaderTitle>
      </UserHeaderMenu>
    </>
  );
};
