// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Textfield = () => (
  <div>
    
    <Formik
      initialValues={{ Name:'', email: '', gender:'', age: '',checkbox:'false', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" label="Name" name="Name"/>
          <ErrorMessage name="Name" component="div" />
          <Field type="email" label="Email" name="email"/>
          <ErrorMessage name="email" component="div" />
          <Field type="radio" label="Gender" name="gender"/>
          <ErrorMessage name="gender" component="div" />
          <Field type="number" label="Age" name="age"/>
          <ErrorMessage name="age" component="div" />
          <Field type="checkbox" label="Agree" name="agree"/>
          <ErrorMessage name="agree" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Textfield;