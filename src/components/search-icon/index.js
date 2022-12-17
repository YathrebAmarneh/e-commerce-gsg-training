import style from "./style.module.css";
import { Autocomplete } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useRef } from "react";
const SearchBar = ({ data }) => {
  // const [search, setSearch] = useState("");
  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  //   console.log("search", search);
  // };

  // const inputRef = useRef(null);
  // console.log(inputRef);
  return (
    <div>
      <Autocomplete
        className={style.searchInput}
        id="custom-input-demo"
        options={data}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <div className={style.Input} ref={params.InputProps.ref}>
            <input
              type="text"
              {...params.inputProps}
              placeholder="search here ..."
              autoFocus="true"
              // onChange={handleSearchChange}
              // ref={inputRef}
            />
            <FiSearch cursor="pointer" size="3rem" color="white" />
          </div>
        )}
      ></Autocomplete>
    </div>
  );
};

export default SearchBar;
