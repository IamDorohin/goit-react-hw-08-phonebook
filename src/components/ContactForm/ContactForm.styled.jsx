import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormSection = styled.section``;
export const FormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.black};

  @media screen and (min-width: 480px) {
    width: 380px;
  }

  @media screen and (min-width: 768px) {
    width: 568px;
  }

  @media screen and (min-width: 1200px) {
    width: 900px;
  }
`;
export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormLabel = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.white};

  margin-bottom: ${p => p.theme.space[4]}px;

  &:nth-child(2) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 480px) {
    margin-bottom: 23px;

    &:nth-child(2) {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const FormLabelName = styled.span`
  font-size: ${p => p.theme.fontSizes.xxs};
  margin-bottom: ${p => p.theme.space[1]}px;

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const FormInput = styled(Field)`
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.xxs};

  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 15px;

  @media screen and (min-width: 480px) {
    width: 250px;
    height: 20px;
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 30px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1200px) {
  }

  &:hover,
  &:focus {
    outline: none;
  }
`;
