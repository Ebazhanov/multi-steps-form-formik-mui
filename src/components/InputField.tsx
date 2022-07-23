import React, { FC } from "react";
import { useField } from "formik";
import { OutlinedTextFieldProps, TextField } from "@mui/material";

interface TextInputProps extends OutlinedTextFieldProps {
  readonly label: string;
  readonly name: string;
}

const InputField: FC<TextInputProps> = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      fullWidth
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default InputField;
