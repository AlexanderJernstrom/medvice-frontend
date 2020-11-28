import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Field, Form } from "formik";
import "./App.css";

const App = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { resetForm }) => {
          console.log("submitted", data);
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <Field type="input" name="firstName" as={TextField} />
            <Field type="input" name="lastName" as={TextField} />
            <Field type="input" name="email" as={TextField} />
            <Field type="input" name="password" as={TextField} />
            <Button type="submit">Submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
