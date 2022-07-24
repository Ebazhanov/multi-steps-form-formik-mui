import React, { FC, useState } from "react";
import { Formik, FormikConfig, FormikHelpers, FormikValues } from "formik";
import FormNavigation from "./FormNavigation";

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

const MultiStepForm: FC<Props> = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;

  const isLastStep = stepNumber === totalSteps - 1;

  const nextStep = (values: FormikValues) => {
    setSnapshot(values);
    console.log(snapshot);
    console.log(values);
    setStepNumber(stepNumber + 1);
  };

  const previousStep = (values: FormikValues) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit;
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      nextStep(values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {step}

            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previousStep(formik.values)}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
export const FormStep = ({ stepName = "", children }: any) => children;
