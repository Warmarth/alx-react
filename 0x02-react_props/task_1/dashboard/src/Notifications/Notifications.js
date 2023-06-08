import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          float: "right",
          bottom: "55px",
          border: "none",
          background: "transparent",
          cursor: "Pointer",
        }}
        arial-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="Close" width="8px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
