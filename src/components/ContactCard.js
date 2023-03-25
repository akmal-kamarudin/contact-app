import React from "react";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img
        className="ui mini avatar image"
        src={user}
        alt="user"
        style={{ marginBlock: "6px" }}
      />
      <div className="content" style={{ marginBlock: "6px" }}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="large right floated trash alternate outline icon"
        style={{ color: "red", marginTop: "12px", cursor: "pointer" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
