import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";

import uuid from "uuid";
import ContactForm from "./ContactForm";

class Contacts extends Component {
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

  render() {
    const { contacts } = this.state;

    const contactsList = contacts.map(contact => (
      <ListGroupItem key={contact.id}>
        {contact.name} - {contact.phoneNumber}
        <Button
          color="danger"
          className="float-right"
          onClick={() => {
            this.setState(state => ({
              contacts: state.contacts.filter(item => item.id !== contact.id)
            }));
          }}
        >
          &times;
        </Button>
      </ListGroupItem>
    ));

    return (
      <Container className="container">
        <ContactForm addContact={this.addContact} />
        <br />
        <hr />
        <ListGroup>{contactsList}</ListGroup>
      </Container>
    );
  }
}

export default Contacts;
