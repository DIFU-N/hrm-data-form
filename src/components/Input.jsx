import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../utils/FindInputError";
import { IsFormInvalid } from "../utils/IsFormInvalid";
import InputError from "./InputError";

const Input = ({ label, type, id, placeholder, validation, name, value }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [fieldValue, setFieldValue] = useState("");
  useEffect(() => {
    setFieldValue(value || "");
    console.log(value);
  }, [value]);

  const handleInputChange = (event) => {
    setFieldValue(event.target.value);
  };
  const inputError = findInputError(errors, name);
  const isInvalid = IsFormInvalid(inputError);
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        name={name}
        id={id}
        type={type}
        className="w-full lg:p-2 p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        {...register(name, validation)}
        value={fieldValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
