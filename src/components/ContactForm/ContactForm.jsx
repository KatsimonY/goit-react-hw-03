import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The length of the name must be at least 3 symbols!')
    .max(50, 'The length of the name must not exceed 50 symbols!')
    .required('This is a required field!'),
  number: Yup.string()
    .min(3, 'The length of the number must be at least 3 symbols!')
    .max(50, 'The length of the number must not exceed 50 symbols!')
    .required('This is a required field!'),
});

export const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: 'id-' + nanoid() });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={numberId}>Number</label>
          <Field type="tel" name="number" id={numberId}></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
