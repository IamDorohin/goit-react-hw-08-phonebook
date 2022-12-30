import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { PageName } from 'components/PagesName/PagesName.styled';
import {
  ButtonContainer,
  BlueButton,
  GreenButton,
} from 'components/CommonFormButtons/CommonFormButtons.styled';
import { ErrorText } from 'components/ErrorMessage/ErrorMessage.styled';
import {
  LogInMain,
  LogInSection,
  LogInContainer,
  LogInForm,
  LogInLabel,
  LogInLabelName,
  LogInInput,
} from 'components/LogInComponent/LogInComponent.styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(30).required(),
});

const initialValues = {
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

export const LogInComponent = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const enteredData = values;
    dispatch(
      logIn({
        email: enteredData.email,
        password: enteredData.password,
      })
    );
    resetForm();
  };

  return (
    <LogInMain>
      <LogInSection>
        <LogInContainer>
          <PageName>Log in</PageName>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <LogInForm>
              <LogInLabel htmlFor="email">
                <LogInLabelName>Email</LogInLabelName>

                <LogInInput type="email" name="email" />
                <FormError name="email" />
              </LogInLabel>
              <LogInLabel htmlFor="password">
                <LogInLabelName> Password</LogInLabelName>
                <LogInInput type="password" name="password" />
                <FormError name="password" />
              </LogInLabel>
              <ButtonContainer>
                <BlueButton to="/">Home</BlueButton>
                <GreenButton type="submit">Log in</GreenButton>
              </ButtonContainer>
            </LogInForm>
          </Formik>
        </LogInContainer>
      </LogInSection>
    </LogInMain>
  );
};
