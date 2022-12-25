import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  LogInMain,
  LogInSection,
  LogInContainer,
  LogInForm,
  LogInLabel,
  LogInInput,
  LogInButton,
} from 'components/LogInComponent/LogInComponent.styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(30).required(),
});

const initialValues = {
  email: '',
  password: '',
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <LogInForm>
              <LogInLabel htmlFor="email">
                Email
                <LogInInput type="email" name="email" />
                <ErrorMessage name="email" />
              </LogInLabel>
              <LogInLabel htmlFor="password">
                Password
                <LogInInput type="password" name="password" />
                <ErrorMessage name="password" />
              </LogInLabel>
              <LogInButton type="submit">Submit</LogInButton>
            </LogInForm>
          </Formik>
        </LogInContainer>
      </LogInSection>
    </LogInMain>

    // <LogInMain>
    //   <LogInSection>
    //     <LogInContainer>
    //       <LogInForm>
    //         <LogInLabel>
    //           <LogInInput />
    //         </LogInLabel>
    //         <LogInLabel>
    //           <LogInInput />
    //         </LogInLabel>
    //         <LogInButton>Log in</LogInButton>
    //       </LogInForm>
    //     </LogInContainer>
    //   </LogInSection>
    // </LogInMain>
  );
};
