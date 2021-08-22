import React from "react";

import { Chat } from "../../components/Chat/Chat";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="container-wrapper">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chat">
        <Chat />
      </div>
    </div>
  );
};

export { MainPage };
