import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./App.css";

import AppNavbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    axios.get("http://localhost:3500/api/contacts").then(res => {
      this.setState({ contacts: res.data.data });
    });
  }

  addContact = contact => {
    //send new contact to the backend database via BE api
    axios.post("http://localhost:3500/api/contacts", contact).then(res => {
      if (res.status === 201) {
        this.componentDidMount();
      }
    });
  };

  removeContact = contact => {
    axios
      .delete(`http://localhost:3500/api/contacts/${contact._id}`)
      .then(res => {
        if (res.status === 200) {
          this.componentDidMount();
        }
      });
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
