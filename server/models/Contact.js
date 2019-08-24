const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    default: ""
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    default: ""
  },
  email: {
    type: String,
    trim: true,
    default: ""
  },
  address: {
    type: String,
    required: true,
    trim: true,
    default: ""
  },
  state: {
    type: String,
    trim: true,
    default: ""
  },
  city: {
    type: String,
    trim: true,
    default: ""
  },
  zip: {
    type: String,
    trim: true,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contact", contactSchema);
