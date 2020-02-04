import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} />
      <div>
        <div className="name"> {props.name} </div>
        <div className="status">
          <div className={"status-" + props.status}></div>
          <div className="status-text">{props.status}</div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
