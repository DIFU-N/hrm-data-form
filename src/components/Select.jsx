import React, { useEffect, useState } from "react";
import { IsFormInvalid } from "../utils/IsFormInvalid";
import { findInputError } from "../utils/FindInputError";
import { useFormContext } from "react-hook-form";
import InputError from "./InputError";
import { AnimatePresence } from "framer-motion";


const Select = React.memo(
  ({ options, name, label, id, validation, value, ...rest }) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    const inputError = findInputError(errors, name);
    const isInvalid = IsFormInvalid(inputError);
    const disabledOption = document.getElementById("disabledOption");
    //   console.log(value);
    const [fieldValue, setFieldValue] = useState("");
    //   useEffect(() => {
    //     if (value) {
    //       setFieldValue(value);
    //     } else {
    //       setFieldValue('');
    //     }
    //   }, [value]);
    useEffect(() => {
      setFieldValue(value || "");
      console.log(value);
    }, [value]);
  
    const handleSelectChange = (event) => {
      setFieldValue(event.target.value);
    };
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
        {/* <input
                id={id}
                type={type}
                className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                placeholder={placeholder}
                {...register(name, validation)}
            /> */}
        <select
          {...register(name, validation)}
          // onClick={makeDisabled}
          className="w-full p-5 lg:p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          value={fieldValue}
          {...rest}
          onChange={handleSelectChange}
        >
          <option value="" id="disabledOption" disabled>
            -- Please Select One --
          </option>
          {options.map((optionValue) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
