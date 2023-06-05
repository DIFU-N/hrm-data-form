import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import FormComp from "../components/FormComp";
import { setSelectedStaff } from "../app/staff";

const IntroComp = () => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#F3F4F6",
      border: "none",
      borderRadius: "0.5rem",
      boxShadow: "none",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: 0,
    }),
  };
  const dispatch = useDispatch();
  const staffDetailsSelector = useSelector((state) =>
    state.staff.staffDetails.map((single) => ({
      id: single.id,
      firstName: single.firstName,
      lastName: single.lastName,
      middleName: single.middleName,
      email: single.email,
      gender: single.gender,
      workLocation: single.workLocation,
      geoLocationId: single.geoLocationId,
      departmentId: single.departmentId,
      dob: single.dob,
      phone1: single.phone1,
      phone2: single.phone2,
      address: single.address,
      cugLine: single.cugLine,
      nationality: single.nationality,
      role: single.role,
      employmentDate: single.employmentDate,
      state: single.state,
      category: single.category,
      employmentStatus: single.employmentStatus,
      CUGLine: single.CUGLine,
      postionId: single.postionId,
      maritalStatus: single.maritalStatus,
      isConfirmed: single.isConfirmed,
      createdAt: single.createdAt,
      staffId: single.staffId,
      justification: single.justification,
      updatedAt: single.updatedAt,
    }))
  );

  const options = staffDetailsSelector.map((person) => ({
    value: person.id,
    label: person.firstName + " " + person.lastName,
    firstName: person.firstName,
    lastName: person.lastName,
    middleName: person.middleName,
    id: person.id,
    gender: person.gender,
    email: person.email,
    departmentId: person.departmentId,
    workLocation: person.workLocation,
    geoLocationId: person.geoLocationId,
    dob: person.dob,
    phone1: person.phone1,
    phone2: person.phone2,
    address: person.address,
    cugLine: person.cugLine,
    nationality: person.nationality,
    role: person.role,
    employmentDate: person.employmentDate,
    state: person.state,
    category: person.category,
    employmentStatus: person.employmentStatus,
    CUGLine: person.CUGLine,
    postionId: person.postionId,
    maritalStatus: person.maritalStatus,
    isConfirmed: person.isConfirmed,
    createdAt: person.createdAt,
    staffId: person.staffId,
    justification: person.justification,
    updatedAt: person.updatedAt,
  }));
  const [inputValue, setInputValue] = useState("");

  const [filteredOptions, setFilteredOptions] = useState(null);

  const handleInputChange = (input) => {
    setInputValue(input);
    const filtered = options.filter((option) =>
      option.label.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredOptions(filtered);
  };
  const selectedStaff = useSelector((state) => state.staff.selectedStaff)
  const handleSelectChange = (selected) => {
    dispatch(setSelectedStaff(selected))
    console.log(selectedStaff)
  }
  return (
    <div className="w-full items-center justify-center flex flex-col my-10">
      <Select
        options={filteredOptions ? filteredOptions : options}
        className="w-[400px] rounded-lg px-4 py-2 mb-4"
        placeholder="Search..."
        // value={selectedStaff}
        onChange={handleSelectChange}
        onInputChange={handleInputChange}
        styles={customStyles}
      />
      {<FormComp />}  
    </div>
  );
};

export default IntroComp;
