const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const path = require("path");

const app = express();
const PORT = config.PORT || 5000;

//mongo setup
mongoose
  .connect(config.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("DB connected successfully..."))
  .catch(err => console.log(`DB connection error => ${err}`));

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/contacts", contactRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
