import { useLocation } from 'react-router-dom';
import {
  NotFoundSection,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundDescription,
  NotFoundLinkContainer,
  NotFoundLink,
} from 'pages/NotFoundPage/NotFoundPage.styled';

const NotFoundPage = () => {
  const location = useLocation();
  const data = location.state?.from ?? '/';

  return (
    <main>
      <NotFoundSection>
        <NotFoundContainer>
          <NotFoundTitle>OOoops!</NotFoundTitle>
          <NotFoundDescription>
            It seems that such a page does not exist.
          </NotFoundDescription>
          <NotFoundDescription>
            But it's never too late to go back and try again!
          </NotFoundDescription>
          <NotFoundLinkContainer>
            <NotFoundLink to={data}>It's ok</NotFoundLink>
          </NotFoundLinkContainer>
        </NotFoundContainer>
      </NotFoundSection>
    </main>
  );
};

export default NotFoundPage;
