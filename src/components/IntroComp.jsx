import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props} style={{ display: "none" }} />
  );
};
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
  const staffDetailsRetrieved = useSelector((state) => state.staff.staffDetails);
  console.log(staffDetailsRetrieved);
  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    const staffInfo = staffDetailsRetrieved.staffDetails
      ? staffDetailsRetrieved.staffDetails.map((single) => ({
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
  return (
    <div>
      <Select
        components={{ DropdownIndicator }}
        className="w-full rounded-lg px-4 py-2 mb-4"
        placeholder="Search..."
        styles={customStyles}
      />
    </div>
  );
};

export default IntroComp;
