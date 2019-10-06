import { useState, ChangeEvent } from "react";

type FormState = { [key: string]: any };

export const useForm = (validation: { [key: string]: any }) => {
  const [formState, setFormState] = useState<FormState>({});
  const [errors, setErrors] = useState({});

  const setFormItem = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.name) {
      console.warn("name property is required!");
      return;
    }
    const name = e.target.name;
    const value = e.target.value;

    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: !(validation[name] || RegExp('.*')).test(value)
    }));

  };

  return {
    formState,
    setFormItem,
    errors,
    setErrors
  };
};
