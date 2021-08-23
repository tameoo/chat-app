import React from "react";

import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "./Search.css";

const Search = () => {
  return (
    <form className="sidebar-search">
      <SearchIcon className="search-icon" />
      <InputBase
        className="sidebar-input"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      ></InputBase>
      <div className="search-dropdown">
        <div className="search-scroll">
          <ul className="search-list">
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
            <li className="search-item">Nirh</li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export { Search };
