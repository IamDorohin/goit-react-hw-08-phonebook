import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  ButtonContainer,
  BlueButton,
  GreenButton,
} from 'components/CommonFormButtons/CommonFormButtons.styled';
import { ErrorText } from 'components/ErrorMessage/ErrorMessage.styled';
import { PageName } from 'components/PagesName/PagesName.styled';
import {
  RegistrationMain,
  RegistrationSection,
  RegistrationContainer,
  RegistrationForm,
  RegistrationLabel,
  RegistrationLabelName,
  RegistrationInput,
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

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const RegistrationComponent = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const enteredData = values;

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
          <PageName>Sign up</PageName>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <RegistrationForm>
              <RegistrationLabel htmlFor="nickname">
                <RegistrationLabelName>Nickname</RegistrationLabelName>
                <FormError name="nickname" />

                <RegistrationInput type="text" name="nickname" />
              </RegistrationLabel>
              <RegistrationLabel htmlFor="email">
                <FormError name="email" />

                <RegistrationLabelName>Email</RegistrationLabelName>
                <RegistrationInput type="email" name="email" />
              </RegistrationLabel>
              <RegistrationLabel htmlFor="password">
                <FormError name="password" />

                <RegistrationLabelName>Password</RegistrationLabelName>
                <RegistrationInput type="password" name="password" />
              </RegistrationLabel>
              <ButtonContainer>
                <BlueButton to="/">Home</BlueButton>
                <GreenButton type="submit">Sign up</GreenButton>
              </ButtonContainer>
            </RegistrationForm>
          </Formik>
        </RegistrationContainer>
      </RegistrationSection>
    </RegistrationMain>
  );
};
