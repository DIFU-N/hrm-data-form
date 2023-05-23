import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../components/Input";
import {
  address_validation,
  category_validation,
  cell_validation,
  cug_validation,
  date_validation,
  department_validation,
  email_validation,
  employmentDateValidation,
  employment_status_validation,
  firstNameValidation,
  gender_validation,
  lastNameValidation,
  middleNameValidation,
  nationality_validation,
  role_validation,
  state_validation,
} from "../utils/InputValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../components/Select";
import SelectDate from "../components/Date";
import { useDispatch, useSelector } from "react-redux";
import PhoneInputField from "./PhoneNumber";
import { validationSchema } from "../utils/ValidationSchema";
import { updateStaff } from "../app/staff";

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
  const selectedStaff = useSelector((state) => state.staff.selectedStaff);
  const submitForm = async (data) => {
    console.log('asdas');
    console.log(data);
    dispatch(updateStaff(selectedStaff, data))
  };
  // const onSubmit = () => methods.handleSubmit(submitForm);
  const deptList = useSelector((state) => state.department.departmentList);
  return (
    <div className="w-[400px]">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitForm)}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div
            style={divStyle1}
            className="rounded-md flex flex-col gap-y-5 lg:gap-y-2 shadow-sm -space-y-px"
          >
            <div className="flex gap-3">
              <Input {...firstNameValidation} value={selectedStaff.firstName} />
              <Input {...middleNameValidation} value={selectedStaff.lastName} />
              <Input {...lastNameValidation} value={selectedStaff.lastName} />
            </div>
            <Input {...email_validation} value={selectedStaff.email} />
            <Input {...address_validation} value={selectedStaff.address} />
            <SelectDate {...date_validation} value={selectedStaff.dob} />
            <Input {...nationality_validation} value={selectedStaff.nationality} />
            <Input {...state_validation} value={selectedStaff.stateOfOrigin} />
            <PhoneInputField
              {...cell_validation}
              control={control}
              value={selectedStaff.phone1}
              validation={validationSchema}
            />
            {/* <PhoneInputField
              {...cell_validation}
              control={control}
              value={selectedStaff.phone2}
              validation={validationSchema}
            /> */}
            <Select {...gender_validation} value={selectedStaff.gender} />
            <SelectDate {...employmentDateValidation} value={selectedStaff.employmentDate} />
            <Select {...category_validation} value={selectedStaff.category} />
            <Select {...employment_status_validation} value={selectedStaff.employmentStatus}/>
            <Select {...department_validation} options={deptList} value={selectedStaff.department} />
            <Input {...role_validation} value={selectedStaff.role} />
            {/* <PhoneInputField
              {...cug_validation}
              control={control}
              value={selectedStaff.cugLine}
              validation={validationSchema}
            /> */}
          </div>
          <div>
            <button
              type="submit"
              // onClick={onSubmit}
              className="group bottom-0 relative w-full flex justify-center my-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white
                     bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true" />
              </span> */}
              Update
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormComp;
