import React from "react";
import "./App.css";
import * as yup from "yup";
import InputField from "./components/InputField";
import MultiStepForm, { FormStep } from "./components/MultiStepForm";

const validationSchemaStep1 = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("").required("Email is required"),
});

const validationSchemaStep2 = yup.object({
  name: yup.string().required("Street is required"),
  email: yup.string().required("Country is required"),
});

function App() {
  return (
    <div className="App">
      <MultiStepForm
        initialValues={{ name: "", email: "", street: "", country: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep
          stepName="Person"
          onSumbit={() => console.log("Step1 submit")}
          validationSchema={validationSchemaStep1}
        >
          <InputField name="name" label="Name" variant={"standard" as any} />
          <InputField name="email" label="Email" variant={"standard" as any} />
        </FormStep>
        <FormStep
          stepName="Address"
          onSumbit={() => console.log("Step2 submit")}
          validationSchema={validationSchemaStep2}
        >
          <InputField
            name="street"
            label="Street"
            variant={"standard" as any}
          />
          <InputField
            name="country"
            label="Country"
            variant={"standard" as any}
          />
        </FormStep>
      </MultiStepForm>
    </div>
  );
}

export default App;
