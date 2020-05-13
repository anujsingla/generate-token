import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import { object, string, bool } from 'yup';
import map from 'lodash/map';

const formSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  username: string().required(),
  city: string().required(),
  state: string().required(),
  zip: string().required(),
  terms: bool().required(),
  email: string().email('Email is not valid').required('email is required'),
  phoneNumber: string()
    .max(10, 'Phone number must be 10 number')
    .matches(/^\d{10}$/, { message: 'Please enter valid number.', excludeEmptyString: false }),
});

const initialValues = {
  firstName: 'Mark',
  lastName: 'Otto',
};

const formDatas = [
  {
    type: 'text',
    className: '',
    label: 'First Name',
    id: 'firstName',
    name: 'firstName',
    isInline: false,
    isDisabled: false,
    defaultValue: '',
    placeholder: 'firstName',
  },
  {
    type: 'text',
    className: '',
    label: 'Last Name',
    id: 'lastName',
    name: 'lastName',
    isInline: false,
    isDisabled: false,
    defaultValue: '',
    placeholder: 'lastName',
  },
  {
    type: 'email',
    className: '',
    label: 'email',
    id: 'email',
    name: 'email',
    isInline: false,
    isDisabled: false,
    defaultValue: 'a@gmail.com',
    placeholder: 'email placeholder',
  },
  {
    type: 'number',
    className: '',
    label: 'Phone Number',
    id: 'phoneNumber',
    name: 'phoneNumber',
    isInline: false,
    isDisabled: false,
    placeholder: 'phone number placeholder',
  },
];

export function GenerateToken() {
  const renderForms = (formik: any) => {
    const { touched, errors, handleSubmit, handleChange, values } = formik;
    return (
      <form noValidate onSubmit={handleSubmit}>
        {map(formDatas, (formData, index) => {
          return (
            <Form.Group controlId={formData.id} key={index}>
              <Form.Label>{formData.label}</Form.Label>
              <Form.Control
                onChange={handleChange}
                name={formData.name}
                isInvalid={touched[formData.name] && !!errors[formData.name]}
                type={formData.type}
                placeholder={formData.placeholder}
                value={values[formData.name]}
              />
              <Form.Control.Feedback type="invalid">{errors[formData.name]}</Form.Control.Feedback>
            </Form.Group>
          );
        })}
        <Button type="submit">Submit form</Button>
      </form>
    );
  };
  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Formik validationSchema={formSchema} onSubmit={console.log} initialValues={initialValues}>
            {(formik) => renderForms(formik)}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}
