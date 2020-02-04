import React from "react";
import Contact from "./Contact";
import "./Contact.css";

/// An array of objects
const contact = [
  {
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",

    name: "Linda Johnston",
    status: "online"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",

    name: "Sofia Ferguson",
    status: "online"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",

    name: "Evan Vargas",
    status: "offline"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",

    name: "Jackson Barrett",
    status: "online"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/93.jpg",

    name: "Dawn Pearson",
    status: "offline"
  }
];

const ContactList = () => (
  <div>
    {contact.map(item => (
      <Contact name={item.name} avatar={item.avatar} status={item.status} />
    ))}
  </div>
);

export default ContactList;
