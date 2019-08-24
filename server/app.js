const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = config.PORT;

//mongo setup
mongoose
  .connect(config.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("DB connected successfully..."))
  .catch(err => console.log(`DB connection error => ${err}`));

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
