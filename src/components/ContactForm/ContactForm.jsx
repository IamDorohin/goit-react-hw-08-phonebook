import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/operations';
import { PageName } from 'components/PagesName/PagesName.styled';
import {
  ButtonContainer,
  BlueButton,
  GreenButton,
} from 'components/CommonFormButtons/CommonFormButtons.styled';
import { ErrorText } from 'components/ErrorMessage/ErrorMessage.styled';
import {
  FormSection,
  FormContainer,
  AddContactForm,
  FormLabel,
  FormLabelName,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

const phoneNumberValidationPattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .min(13)
    .matches(phoneNumberValidationPattern, 'Phone number is not valid')
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = () => {
  const contactsArray = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const pushContactNameHandler = (values, { resetForm }) => {
    const enteredData = values;

    if (contactsArray.find(contact => contact.name === enteredData.name)) {
      alert('There is already a subscriber with this name in the phone book!');
      return;
    }
    dispatch(
      addContact({ name: enteredData.name, number: enteredData.number })
    );
    resetForm();
  };

  return (
    <FormSection>
      <FormContainer>
        <PageName>Add contact</PageName>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={pushContactNameHandler}
        >
          <AddContactForm>
            <FormLabel htmlFor="name">
              <FormLabelName>Contact name</FormLabelName>
              <FormError name="name" />
              <FormInput type="text" name="name" />
            </FormLabel>
            <FormLabel htmlFor="number">
              <FormLabelName>Contact phone number</FormLabelName>
              <FormError name="number" />

              <FormInput type="tel" name="number" />
            </FormLabel>
            <ButtonContainer>
              <BlueButton type="button" to="/contacts">
                Contacts list
              </BlueButton>
              <GreenButton type="submit">Add contact</GreenButton>
            </ButtonContainer>
          </AddContactForm>
        </Formik>
      </FormContainer>
    </FormSection>
  );
};
