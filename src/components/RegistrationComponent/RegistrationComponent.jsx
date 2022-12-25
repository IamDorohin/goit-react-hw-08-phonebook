import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegistrationMain,
  RegistrationSection,
  RegistrationContainer,
  RegistrationForm,
  RegistrationLabel,
  // RegistrationLabelName,
  RegistrationInput,
  RegistrationButton,
} from './RegistrationComponent.styled';

const validationSchema = yup.object().shape({
  nickname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).max(30).required(),
});

const initialValues = {
  nickname: '',
  email: '',
  password: '',
};

export const RegistrationComponent = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const enteredData = values;
    // console.log(enteredData.nickname);
    // console.log(enteredData.email);
    // console.log(enteredData.password);

    dispatch(
      register({
        name: enteredData.nickname,
        email: enteredData.email,
        password: enteredData.password,
      })
    );
    resetForm();
  };

  return (
    <RegistrationMain>
      <RegistrationSection>
        <RegistrationContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <RegistrationForm>
              <RegistrationLabel htmlFor="email">
                Nickname
                <RegistrationInput type="text" name="nickname" />
                <ErrorMessage name="nickname" />
              </RegistrationLabel>
              <RegistrationLabel htmlFor="email">
                Email
                <RegistrationInput type="email" name="email" />
                <ErrorMessage name="email" />
              </RegistrationLabel>
              <RegistrationLabel htmlFor="password">
                Password
                <RegistrationInput type="password" name="password" />
                <ErrorMessage name="password" />
              </RegistrationLabel>
              <RegistrationButton type="submit">
                I want to register
              </RegistrationButton>
            </RegistrationForm>
          </Formik>
        </RegistrationContainer>
      </RegistrationSection>
    </RegistrationMain>
  );
};
