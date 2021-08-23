import React from "react";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="menu">
      <IconButton edge="start" color="inherit" aria-label="open drawer">
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export { MenuHeader };
