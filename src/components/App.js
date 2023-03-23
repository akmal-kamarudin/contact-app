import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Akmal",
  //     email: "akmal@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Amirah",
  //     email: "amirah@gmail.com",
  //   },
  // ];

  return (
    <>
      <Header />
      <div className="ui container">
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
