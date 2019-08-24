import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./components/Navbar";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <Contacts />
    </div>
  );
}

export default App;
