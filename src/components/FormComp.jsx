import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../components/Input";
import {
  address_validation,
  category_validation,
  cell_validation,
  cell_validation2,
  cug_validation,
  date_validation,
  department_validation,
  division_validation,
  email_validation,
  employmentDateValidation,
  employment_status_validation,
  firstNameValidation,
  gender_validation,
  geo_location_validation,
  lastNameValidation,
  marital_status_validation,
  middleNameValidation,
  nationality_validation,
  role_validation,
  salary_validation,
  state_validation,
} from "../utils/InputValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../components/Select";
import SelectDate from "../components/Date";
import { useDispatch, useSelector } from "react-redux";
import PhoneInputField from "./PhoneNumber";
import { validationSchema } from "../utils/ValidationSchema";
import { setSelectedStaff, updateStaff } from "../app/staff";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";


const FormComp = () => {
  const dispatch = useDispatch();
  // const validationSchema = useSelector((state) => state.validate.validation);
  const formOptions = { resolver: yupResolver(validationSchema) };
  const methods = useForm(formOptions);
  const { control, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const success = useSelector((state) => state.staff.updated);
  const divStyle1 = {
    // fontFamily: "Anton, sans-serif",
    // fontFamily: 'Bebas Neue, cursive'
    fontFamily: "Barlow, sans-serif",
  };
  const selectedStaff = useSelector((state) => state.staff.selectedStaff);
  const selectedGeoLocation = useSelector(
    (state) => state.geolocation.selectedGeoLocation
  );
  const selectedDepartment = useSelector(
    (state) => state.department.selectedDepartment
  );
  const selectedDivision = useSelector(
    (state) => state.division.selectedDivision
  );
  const submitForm = ({ data }) => {
    const {
      id,
      firstName,
      lastName,
      middleName,
      email,
      gender,
      dob,
      phone1,
      phone2,
      address,
      nationality,
      employmentDate,
      state,
      category,
      workLocationId,
      maritalStatus,
      CUGLine
    } = data || {};
    // console.log('this is' +phone1);
    const cleanedNumber = phone1.replace(/^0?\s*|\s*/g, "");
    const phoneNumber = phone1.startsWith("+234")
      ? phone1
      : "+234" + cleanedNumber;
    const editedNumber = phoneNumber.replace(/^(\+234)|\s*/g, "");
    editedNumber ? editedNumber : null;
    let textableNumber = null;
    if (editedNumber) {
      return (textableNumber = "0" + editedNumber);
    }

    const cleanedNumber2 = phone2.replace(/^0?\s*|\s*/g, "");
    const phoneNumber2 = phone2.startsWith("+234")
      ? phone1
      : "+234" + cleanedNumber2;
    const editedNumber2 = phoneNumber2.replace(/^(\+234)|\s*/g, "");
    editedNumber2 ? editedNumber2 : null;
    let textableNumber2 = null;
    if (editedNumber2) {
      return (textableNumber2 = "0" + editedNumber2);
    }

    //when you get the selectedGEoLocationId
    const parsedDob = dob ? new Date(dob) : null;
    const updatedData = {
      id: id || null,
      firstName: firstName || null,
      lastName: lastName || null,
      middleName: middleName || null,
      email: email || null,
      gender: gender || null,
      departmentId: selectedDepartment.id || null,
      geoLocationId: selectedGeoLocation.id || null,
      workLocationId: workLocationId || null,
      dob: parsedDob || null,
      phone1: textableNumber || null,
      phone2: textableNumber2 || null,
      address: address || null,
      CUGLine: CUGLine || null,
      nationality: nationality || null,
      employmentDate: employmentDate || null,
      state: state || null,
      category: category || null,
      maritalStatus: maritalStatus || null,
    };
    console.log("Form data:", updatedData);
    dispatch(updateStaff(updatedData))
    .then(() => {
      toast.success("Update successful");
      reset(); // Reset the form values
    })
    .catch(() => {
      toast.error("Update failed"); // Display an error toast message
    });
  };

  

  const deptList = useSelector((state) => state.department.departmentList);
  const divisionList = useSelector((state) => state.division.divisionList);
  const geoLocationList = useSelector(
    (state) => state.geolocation.locationList
    );
  let selectedGeoLocationObject;
  let selectedDepartmentObject
  let selectedDivisionObject
  
  if (selectedStaff) {
    selectedStaff.geoLocationId;
    selectedGeoLocationObject = geoLocationList.find(
      (location) => location.id === selectedStaff.geoLocationId 
    );
    // console.log(selectedGeoLocationObject);
  }
  if (selectedStaff) {
    selectedStaff.departmentId;
    selectedDepartmentObject = deptList.find(
      (location) => location.id === selectedStaff.departmentId 
    );
    // console.log(selectedDepartmentObject);
  }
  if (selectedStaff) {
    // selectedStaff.department.divisionId[0];
    selectedDivisionObject = divisionList.find(
      (division) => division.id === selectedStaff?.department?.divisionId[0] 
    );
    // console.log(selectedDivisionObject);
  }
  const transformedGeoLocationList = geoLocationList.map((location) => ({
    label: location.name,
    value: location.name,
  }));
  const transformedDivisionList = divisionList.map((location) => ({
    label: location.name,
    value: location.name,
  }));
  let transformedDepartmentList;

  if (selectedDivision && selectedDivision.id) {
    transformedDepartmentList = deptList
      .filter((department) => department.divisionId[0] === selectedDivision.id)
      .map((department) => ({
        label: department.name,
        value: department.name,
      }));
  } else {
    transformedDepartmentList = ['you have to choose a division first'];
  }

  useEffect(() => {
    if (success) {
      reset();
      dispatch(setSelectedStaff({}))
    }
  }, [success]);
  return (
    <div className="w-[800px]">
      <span className="font-bold text-lg">NB: Please kindly modify any necessary elements while retaining the overall content.</span>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => submitForm({ data }))}
          noValidate
          autoComplete="off"
          className="container"
        >
          <div
            style={divStyle1}
            className="rounded-md flex mt-5 flex-col gap-y-5 lg:gap-y-2 shadow-sm -space-y-px"
          >
            <div className="flex gap-3">
              <Input {...firstNameValidation} value={selectedStaff.firstName} />
              <Input
                {...middleNameValidation}
                value={selectedStaff.middleName}
              />
              <Input {...lastNameValidation} value={selectedStaff.lastName} />
            </div>
            <Input {...email_validation} value={selectedStaff.email} />
            <Input {...address_validation} value={selectedStaff.address} />
            <SelectDate {...date_validation} value={selectedStaff.dob} />
            <Input
              {...nationality_validation}
              value={selectedStaff.nationality}
            />
            <Select {...state_validation} value={selectedStaff.state} />
            <PhoneInputField
              {...cell_validation}
              control={control}
              value={selectedStaff.phone1}
              validation={validationSchema}
            />
            <PhoneInputField
              {...cell_validation2}
              control={control}
              value={selectedStaff.phone2}
              validation={validationSchema}
            />
            <Select {...gender_validation} value={selectedStaff.gender} />
            <Select {...marital_status_validation} value={selectedStaff.maritalStatus} />
            <SelectDate
              {...employmentDateValidation}
              value={selectedStaff.employmentDate}
            />
            <Select {...category_validation} value={selectedStaff.category} />
            {/* <Select
              {...employment_status_validation}
              value={selectedStaff.employmentStatus}
            /> */}
            <Select
              {...geo_location_validation}
              options={transformedGeoLocationList}
              value={selectedGeoLocationObject ? selectedGeoLocationObject.name : selectedStaff.geolocation }
            />
            <Select
              {...division_validation}
              options={transformedDivisionList}
              value={selectedDivisionObject ? selectedDivisionObject.name : selectedStaff?.department?.division[0]?.name }
            />
            <Select
              {...department_validation}
              options={transformedDepartmentList}
              value={selectedDepartmentObject ? selectedDepartmentObject.name : selectedStaff.department }
            /> 
            <PhoneInputField
              {...cug_validation}
              control={control}
              value={selectedStaff.CUGLine}
              validation={validationSchema}
            />
          </div>
          <div className="w-52 mt-10">
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
