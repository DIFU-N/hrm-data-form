import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { findInputError } from "../utils/FindInputError";
import { IsFormInvalid } from "../utils/IsFormInvalid";
import InputError from "./InputError";
import { useSelector } from "react-redux";

const SelectDate = ({ label, name, id, validation, value }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setFormattedDate(date.toISOString().split("T")[0]);
    }
  }, [value]);
  const updated = useSelector((state) => state.staff.updated)
  useEffect(() => {
    if (updated) {
      setFormattedDate("")
    }
  }, [updated])
  const handleInputChange = (event) => {
    const selectedDate = event.target.value;
    setFormattedDate(selectedDate);
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
      <div className="relative">
        <input
          className="w-full p-5 lg:p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          type="date"
          id="birthday"
          name="birthday"
          value={formattedDate}
          onInput={handleInputChange}
          {...register(name, validation)}
        />
      </div>
    </div>
  );
};

export default SelectDate;
