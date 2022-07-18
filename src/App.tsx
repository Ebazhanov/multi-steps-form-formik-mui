import React from "react";
import "./App.css";
import { Formik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ marginTop: 15 }}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
