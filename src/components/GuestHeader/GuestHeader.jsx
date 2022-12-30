import {
  GuestHeaderList,
  GuestHeaderItem,
  GuestHeaderLink,
} from './GuestHeader.styled';

export const GuestHeader = () => {
  return (
    <GuestHeaderList>
      <GuestHeaderItem>
        <GuestHeaderLink to="/register">Sign up</GuestHeaderLink>
      </GuestHeaderItem>
      <GuestHeaderItem>
        <GuestHeaderLink to="/login">Log in</GuestHeaderLink>
      </GuestHeaderItem>
    </GuestHeaderList>
  );
};
