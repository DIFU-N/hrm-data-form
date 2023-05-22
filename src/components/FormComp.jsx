import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../components/Input";
import {
  cell_validation,
  date_validation,
  email_validation,
  firstNameValidation,
  gender_validation,
  lastNameValidation,
  middleNameValidation,
} from "../utils/InputValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../components/Select";
import SelectDate from "../components/Date";
import { useDispatch, useSelector } from "react-redux";
import PhoneInputField from "./PhoneNumber";
import { validationSchema } from "../utils/ValidationSchema";

const FormComp = () => {
  const dispatch = useDispatch();
  // const validationSchema = useSelector((state) => state.validate.validation);
  const formOptions = { resolver: yupResolver(validationSchema) };
  const methods = useForm(formOptions);
  const { control } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const divStyle1 = {
    // fontFamily: "Anton, sans-serif",
    // fontFamily: 'Bebas Neue, cursive'
    fontFamily: "Barlow, sans-serif",
  };
  const handleSubmit = (event, data) => {
    event.preventDefault();
    console.log(data);
  };
  const onSubmit = methods.handleSubmit(handleSubmit);
  const selectedStaff = useSelector((state) => state.staff.selectedStaff);
  console.log(selectedStaff);
  return (
    <div className="w-[400px]">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div
            style={divStyle1}
            className="rounded-md flex lg:h-[400px] flex-col gap-y-5 lg:gap-y-2 shadow-sm -space-y-px"
          >
            <div className="flex gap-3">
              <Input {...firstNameValidation} value={selectedStaff.firstName} />
              <Input {...middleNameValidation} value={selectedStaff.lastName} />
              <Input {...lastNameValidation} value={selectedStaff.lastName} />
            </div>
            <Input {...email_validation} value={selectedStaff.email} />
            <PhoneInputField
              {...cell_validation}
              control={control}
              validation={validationSchema}
            />
            <Select {...gender_validation} value={selectedStaff.gender} />
            <SelectDate {...date_validation} />
          </div>
          <div>
            <button
              type="button"
              onClick={onSubmit}
              className="group relative w-full flex justify-center my-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white
                     bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true" /> */}
              </span>
              Update
            </button>
            {/* <button onClick={deleteAllUsers}>delete all</button> */}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormComp;
