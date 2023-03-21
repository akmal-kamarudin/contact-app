import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  return (
    <>
      <Header />
      <div className="ui container">
        <AddContact />
        <ContactList />
      </div>
    </>
  );
}

export default App;
