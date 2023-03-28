import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
    console.log(contact);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Router>
        <Header />
        <div className="ui container">
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <ContactList
                  contacts={contacts}
                  getContactId={removeContactHandler}
                />
              )}
            />
            <Route
              path="/add"
              component={() => (
                <AddContact addContactHandler={addContactHandler} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
