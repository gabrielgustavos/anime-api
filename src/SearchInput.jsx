import React, { useState } from "react";
import useDebounce from "./hooks/useDebounce";

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  const handleChange = (event) => {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  };
  return <input type="search" value={displayValue} onChange={handleChange} />;
};

export default SearchInput;
