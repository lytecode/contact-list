import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

class Contacts extends Component {
  onRemoveContact = contact => {
    this.props.removeContact(contact);
  };

  render() {
    const { contacts } = this.props;

    const contactsList = contacts.map(contact => (
      <ListGroupItem key={contact.id} className="float-left">
        <h6>
          {contact.name} - {contact.phoneNumber}{" "}
        </h6>
        <br />
        Email: {contact.email} <br />
        Address: {contact.address} <br />
        {contact.city} - {contact.state} - {contact.zip}
        <Button
          color="danger"
          className="float-right"
          onClick={() => this.onRemoveContact(contact)}
        >
          &times;
        </Button>
      </ListGroupItem>
    ));

    return (
      <div>
        <ListGroup>{contactsList}</ListGroup>
      </div>
    );
  }
}

export default Contacts;
