import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import { Search } from "../../components/Search";
import { MenuHeader } from "../../components/MenuHeader";
import { MenuList } from "../../components/MenuList";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <AppBar position="static" className="boxshadow-none">
        <Toolbar className="sidebar-toolbar">
          <MenuHeader />
          <Search />
        </Toolbar>
      </AppBar>
      <MenuList />
    </>
  );
};

export { Sidebar };
