import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledButton,
  StyledError,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations/contacts-operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.number().min(999, 'Too Short!').required('Required'),
});

export const ContactsForm = () => {
  const contacts = useSelector(state => state.contacts.contact);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        for (const el of contacts) {
          if (el.name === values.name) {
            return alert(`${el.name} is already in contacts.`);
          }
        }
        dispatch(
          addContact({
            name: values.name,
            number: values.number,
          })
        );
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>
          <StyledField name="name" placeholder="Name..." />
          <StyledError name="name" component="p" />
        </StyledLabel>

        <StyledLabel>
          <StyledField name="number" type="tel" placeholder="Number..." />
          <StyledError name="number" component="p" />
        </StyledLabel>

        <StyledButton type="submit">Add</StyledButton>
      </StyledForm>
    </Formik>
  );
};
