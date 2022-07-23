import React from "react";
import "./App.css";
import * as yup from "yup";
import { Button } from "@mui/material";
import { Formik } from "formik";
import InputField from "./components/InputField";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("").required("Email is required"),
});

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputField name="name" label="Name" variant={"standard" as any} />
            <InputField
              name="email"
              label="Email"
              variant={"standard" as any}
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              style={{ marginTop: 15 }}
            >
              Submit
            </Button>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
