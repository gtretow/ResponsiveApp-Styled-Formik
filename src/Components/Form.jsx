import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import {
  DivComponent,
  InputForm,
  StyledInlineErrorMessage,
} from "../Styled/base";
import schema from "../schema";

function TestForm() {
  const onSubmit = (values, actions) => {
    console.log("submit", values);
  };
  return (
    <DivComponent
      className="formComponent"
      justifyContent="center"
      alignItems="center"
      marginBottom="50px"
      marginTop="30px"
      display="flex"
      background="#11101B"
      width="38.5%"
      height="400px"
    >
      <Formik
        onSubmit={onSubmit}
        validationSchema={schema}
        initialValues={{
          name: "",
          email: "",
          number: "",
          city: "",
        }}
      >
        {({ className, valid, errors, touched, ...props }) => (
          <Form>
            <DivComponent color="#fff" display="flex" flexDirection="column">
              <label>Name</label>
              <InputForm
                autoComplete="off"
                placeholder="Seu nome"
                valid={touched.name && !errors.name}
                error={touched.name && errors.name}
                name="name"
                type="text"
              />
              <ErrorMessage name="name">
                {(msg) => (
                  <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                )}
              </ErrorMessage>
            </DivComponent>
            <DivComponent color="#fff" display="flex" flexDirection="column">
              <label>Email</label>
              <InputForm
                autoComplete="off"
                placeholder="Seu email"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
                name="email"
                type="email"
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
                )}
              </ErrorMessage>
            </DivComponent>
            <DivComponent color="#fff" display="flex" flexDirection="column">
              <label>City</label>
              <InputForm name="city" type="text" />
              <ErrorMessage name="city" />
            </DivComponent>
            <DivComponent
              marginBottom="10px"
              color="#fff"
              display="flex"
              flexDirection="column"
            >
              <label>Number</label>
              <InputForm name="number" type="text" />
              <ErrorMessage name="number" />
            </DivComponent>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </DivComponent>
  );
}

export default TestForm;
