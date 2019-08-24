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
  }
});

module.exports = mongoose.model("Contact", contactSchema);
