import React from "react";

import { MenuItem as Item, Avatar } from "@material-ui/core";

import "./MenuItem.css";

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <Item className="sidebar-item">
      <Avatar className="avatar">TB</Avatar>
      <div className="item-inner">
        <div className="item-title">
          <strong>sdagasdgdasg</strong>
          <span>Wed</span>
        </div>
        <span>hello hey </span>
      </div>
    </Item>
  );
};

export { MenuItem };
