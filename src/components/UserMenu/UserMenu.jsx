import { useDispatch, useSelector } from 'react-redux';
import { IoIosLogOut } from 'react-icons/io';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {
  UserHeaderMenu,
  UserHeaderTitle,
  UserHeaderButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserHeaderMenu>
      <UserHeaderTitle>{user.name}</UserHeaderTitle>
      <UserHeaderButton type="button" onClick={() => dispatch(logOut())}>
        <IoIosLogOut color="inherit" size={20} />
      </UserHeaderButton>
    </UserHeaderMenu>
  );
};
