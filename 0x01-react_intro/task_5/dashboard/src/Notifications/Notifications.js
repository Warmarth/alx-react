import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

const styles = {
  position: "relative",
  float: "right",
  bottom: "55px",
  border: "none",
  opacity: "0.7",
  background: "transparent",
  cursor: "Pointer",
};

function printOnClick() {
  console.log("Close button has been clicked");
}

const notification = getLatestNotification();

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={styles} arial-label="Close" onClick={printOnClick}>
        <img src={closeIcon} alt="Close" width="8px" />
      </button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: notification }}
        ></li>
      </ul>
    </div>
  );
}