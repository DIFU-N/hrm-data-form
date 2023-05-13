import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

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
  const staffDetailsRetrieved = useSelector(
    (state) => state.staff.staffDetails
  );
  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    const staffInfo = staffDetailsRetrieved
      ? staffDetailsRetrieved.map((single) => ({
          first_name: single.first_name,
          last_name: single.last_name,
          email: single.email,
          gender: single.gender,
          location: single.location,
          department: single.department,
        }))
      : [];
    setStaffData(staffInfo);
  }, [staffDetailsRetrieved]);

  const options = staffData.map((person) => ({
    value: person.id,
    label: person.first_name + " " + person.last_name,
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
  return (
    <div>
      <select name="" id="">
        <option value=""></option>
      </select>
      <Select
        options={filteredOptions ? filteredOptions : options}
        className="w-full rounded-lg px-4 py-2 mb-4"
        placeholder="Search..."
        // value={selectedOption}
        onInputChange={handleInputChange}
        styles={customStyles}
      />
    </div>
  );
};

export default IntroComp;
