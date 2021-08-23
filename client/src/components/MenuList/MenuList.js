import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { fetchAllConversations } from "../../api";

import Alert from "@material-ui/lab/Alert";
import { MenuList as List } from "@material-ui/core";
import { MenuItem } from "../MenuItem";

import "./MenuList.css";

const MenuList = () => {
  const [conversations, setConversations] = useState([1, 2]);
  const token = useSelector((state) => state.userAuth.token);

  useEffect(() => {
    const fetchConversations = () => {
      fetchAllConversations(token)
        .then((response) => setConversations(response))
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchConversations();
  }, [token]);

  return (
    <List className="sidebar-list">
      {conversations.length !== 0 ? (
        conversations.map((item, i) => {
          return <MenuItem key={i} item={item} />;
        })
      ) : (
        <Alert severity="info">
          No conversation just browse friends search...
        </Alert>
      )}
    </List>
  );
};

export { MenuList };
