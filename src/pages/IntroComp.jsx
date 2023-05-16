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
    first_name: single.first_name,
    last_name: single.last_name,
    email: single.email,
    gender: single.gender,
    location: single.location,
    department: single.department,
  }))
);

  const options = staffDetailsSelector.map((person) => ({
    value: person.id,
    label: person.first_name + " " + person.last_name,
    first_name: person.first_name,
    last_name: person.last_name,
    id: person.id,
    gender: person.gender,
    email: person.email,
    department: person.department,
    location: person.location,
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
