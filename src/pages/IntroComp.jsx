import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import FormComp from "../components/FormComp";
import { setSelectedStaff, setUpdated } from "../app/staff";

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
      workLocationId: single.workLocationId,
      geoLocationId: single.geoLocationId,
      department: single.department,
      departmentId: single.departmentId,
      dob: single.dob,
      phone1: single.phone1,
      phone2: single.phone2,
      address: single.address,
      nationality: single.nationality,
      employmentDate: single.employmentDate,
      state: single.state,
      category: single.category,
      // employmentStatus: single.employmentStatus,
      CUGLine: single.CUGLine,
      positionId: single.positionId,
      maritalStatus: single.maritalStatus,
      // isConfirmed: single.isConfirmed,
      createdAt: single.createdAt,
      // staffId: single.staffId,
      justification: single.justification,
      updatedAt: single.updatedAt,
      // salary: parseFloat(single.salary.toString()),
      // paygrade: single.paygrade,
      username: single.username,
      picture: single.picture,
      probationPeriod: single.probationPeriod,
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
    department: person.department,
    departmentId: person.departmentId,
    workLocationId: person.workLocationId,
    geoLocationId: person.geoLocationId,
    dob: person.dob,
    phone1: person.phone1,
    phone2: person.phone2,
    address: person.address,
    nationality: person.nationality,
    // role: person.role,
    employmentDate: person.employmentDate,
    state: person.state,
    category: person.category,
    // employmentStatus: person.employmentStatus,
    CUGLine: person.CUGLine,
    positionId: person.positionId,
    maritalStatus: person.maritalStatus,
    // isConfirmed: person.isConfirmed,
    createdAt: person.createdAt,
    // staffId: person.staffId,
    justification: person.justification,
    updatedAt: person.updatedAt,
    // salary: parseFloat(person.salary.toString()),
    paygrade: person.paygrade,
    username: person.username,
    picture: person.picture,
    probationPeriod: person.probationPeriod,
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
    dispatch(setUpdated(false))
  }
  const updated = useSelector((state) => state.staff.updated);
  useEffect(() => {
    if (updated) {
      dispatch(setSelectedStaff({
        value: '',
        label: '',
      }))
    }
  }, [updated])
  return (
    <div className="w-full border-2 border-black items-center justify-center flex flex-col my-10">
      <div className="flex items-center">
        <span className="mb-2 font-bold text-md">
          Choose Staff:
        </span>
        <Select
          options={filteredOptions ? filteredOptions : options}
          className="w-[400px] rounded-lg px-4 py-2 mb-4"
          placeholder="Search..."
          // value={selectedStaff}
          onChange={handleSelectChange}
          onInputChange={handleInputChange}
          styles={customStyles}
        />
      </div>
      {<FormComp />}  
    </div>
  );
};

export default IntroComp;
