import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import { Search } from "../../components/Search/Search";
import { Menu } from "../../components/Menu/Menu";
import { MenuList } from "../../components/MenuList/MenuList";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <AppBar position="static" className="boxshadow-none">
        <Toolbar className="sidebar-toolbar">
          <Menu />
          <Search />
        </Toolbar>
      </AppBar>
      <MenuList />
    </>
  );
};

export { Sidebar };
