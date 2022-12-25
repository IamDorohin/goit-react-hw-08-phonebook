import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { AppContainer, AppSection } from 'components/App.styled';
// import { fetchContacts } from 'redux/operations';
// import { Filter } from 'components/Filter/Filter';

import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { selectIsRefreshing } from 'redux/auth/selectors';

export default function App() {
  // const contactsArray = useSelector(state => state.contacts.items);
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/contacts" component={<HomePage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LogInPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );

  // <AppContainer>
  //   <AppSection>
  //     <h1 style={{ marginTop: '0px' }}>Phonebook</h1>
  //     <ContactForm />
  //     <h2 style={{ marginTop: '0px' }}>Contacts</h2>
  //     <Filter />
  //     {contactsArray.length >= 1 ? (
  //       <ContactList />
  //     ) : (
  //       <p>Oooops, You have not added any contact yet</p>
  //     )}
  //   </AppSection>
  // </AppContainer>
}
