const express = require("express");
const Contact = require("../models/Contact");

module.exports = {
  /**
   * @route   POST /api/contacts
   * @access  Public
   */
  createContact: async (req, res) => {
    const { name, phoneNumber } = req.body;

    if (!name || !phoneNumber) {
      return res.status(400).json({
        message: "Name or Phone number cannot be empty"
      });
    }
    const newContact = new Contact({ name, phoneNumber });
    const contact = await newContact.save();
    res.status(201).json({
      message: "success",
      data: contact
    });
  },

  /**
   * @route   GET /api/contacts
   * @access  Public
   */
  findContacts: async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({
      message: "success",
      data: contacts
    });
  },

  /**
   * @route   GET /api/contacts/:contactId
   * @access  Public
   */
  findContact: async (req, res) => {
    const { contactId } = req.params;

    try {
      const contact = await Contact.findOne({ _id: contactId });
      res.status(200).json({
        message: "success",
        data: contact
      });
    } catch (err) {
      res.status(404).json({
        message: `Cannot find a contact with the id ${contactId}`
      });
    }
  },

  /**
   * @route   PUT /api/contacts/:contactId
   * @access  Public
   */
  updateContact: async (req, res) => {
    const { contactId } = req.params;
    const { name, phoneNumber } = req.body;

    if (!name || !phoneNumber) {
      return res.status(400).json({
        message: "Name or Phone number cannot be empty"
      });
    }

    try {
      const contact = await Contact.findOneAndUpdate(
        { _id: contactId },
        { name, phoneNumber },
        { new: true }
      );

      res.status(200).json({
        message: "Contact successfully updated",
        data: contact
      });
    } catch (err) {
      res.status(404).json({
        message: `Cannot update a contact with the id ${contactId}`
      });
    }
  },

  /**
   * @route   DELETE /api/contacts/:contactId
   * @access  Public
   */
  removeContact: async (req, res) => {
    const { contactId } = req.params;

    try {
      await Contact.findOneAndDelete({ _id: contactId });
      res.status(200).json({
        message: "Contact successfully deleted"
      });
    } catch (err) {
      res.status(404).json({
        message: `Contact with the id ${contactId} doesn't exist`
      });
    }
  }
};
