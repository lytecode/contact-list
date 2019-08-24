import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class ContactForm extends Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zip: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="contact-name">Name</Label>
              <Input
                type="text"
                name="name"
                id="contact-name"
                placeholder="John Doe"
                onChange={this.onChange}
                value={this.state.name}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phone-number">Phone Number</Label>
              <Input
                type="number"
                name="phoneNumber"
                id="phone-number"
                placeholder="080xxxxxxxx"
                onChange={this.onChange}
                value={this.state.phoneNumber}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="Email"
            placeholder="johndoe@gmail.com"
            onChange={this.onChange}
            value={this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Address">Address</Label>
          <Input
            type="text"
            name="address"
            id="Address"
            placeholder="1234 Main St"
            onChange={this.onChange}
            value={this.state.address}
            required
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="City">City</Label>
              <Input
                type="text"
                name="city"
                id="City"
                onChange={this.onChange}
                value={this.state.city}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="State">State</Label>
              <Input
                type="text"
                name="state"
                id="State"
                onChange={this.onChange}
                value={this.state.state}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="Zip">Zip</Label>
              <Input
                type="text"
                name="zip"
                id="Zip"
                onChange={this.onChange}
                value={this.state.zip}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default ContactForm;
