import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { AddContactPage } from 'pages/AddContactPage/AddContactPage';
import { selectIsRefreshing } from 'redux/auth/selectors';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<HomePage />}
              />
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
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<AddContactPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
