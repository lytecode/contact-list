import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./App.css";

import uuid from "uuid";
import AppNavbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: uuid(), name: "Emmanuel", phoneNumber: "08123457733" },
      { id: uuid(), name: "John", phoneNumber: "08023755991" },
      { id: uuid(), name: "James", phoneNumber: "08673457777" },
      { id: uuid(), name: "Fish", phoneNumber: "08099577330" }
    ]
  };

  addContact = contact => {
    contact.id = uuid();
    const newState = [...this.state.contacts, contact];
    this.setState({ contacts: newState });
  };

  removeContact = contact => {
    const currentState = [...this.state.contacts];
    const newState = currentState.filter(item => item.id !== contact.id);
    this.setState({ contacts: newState });
  };

  render() {
    return (
      <div className="App">
        <AppNavbar />

        <Container className="container">
          <ContactForm addContact={this.addContact} />
          <br />
          <hr />
          <Contacts
            contacts={this.state.contacts}
            removeContact={this.removeContact}
          />
        </Container>
      </div>
    );
  }
}

export default App;
