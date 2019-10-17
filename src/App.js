import React, { useEffect, useState } from "react";
import api from "./api";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    api.get("?results=50").then(res => {
      setContacts(res.data.results);
    });
  };

  const renderContacts = v => {
    return (
      <div key={v.login.uuid} className="contact">
        <img src={v.picture.thumbnail} alt="" />
        <p>
          {v.name.first} {v.name.last}{" "}
        </p>
      </div>
    );
  };

  return (
    <div className="root">
      <div className="list">
        <div className="header">
          <div>
            <h3>Lista de Contatos</h3>
          </div>
        </div>
        <div className="contacts">{contacts.map(renderContacts)}</div>
      </div>
    </div>
  );
}

export default App;
