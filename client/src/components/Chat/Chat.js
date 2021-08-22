import React from "react";

import { AppBar, Toolbar, InputBase, Avatar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat-inner">
      <AppBar position="static" className="chat-header">
        <Toolbar className="chat-toolbar">
          <Avatar className="avatar">TB</Avatar>
          <div className="item-inner">
            <div className="item-title">
              <strong>Hirh</strong>
            </div>
            <span>1 minute ago</span>
          </div>
        </Toolbar>
      </AppBar>
      <div className="chat-main">
        <div className="chat-wrapper">
          <div className="chat-message-container">
            <div className="chat-message">
              <div className="left-message">
                <p>
                  smohsigd
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
            <div className="chat-message reverse">
              <div className="right-message">
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                  <span>14:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-form-wrapper">
          <div className="chat-form-container">
            <form className="chat-form">
              <InputBase
                className="chat-input"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <button className="icon-wrapper">
                <SendIcon className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Chat };
