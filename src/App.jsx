// src/App.jsx
import React from "react";
import "./App.css";
import "./LandingPage.css";

import ChiSiamo from "./components/ChiSiamo";
import Contatti from "./components/Contatti";
import Jumbo from "./components/Jumbo";
import NegozioFilatelico from "./components/NegozioFilatelico";
import Servizi from "./components/Servizi";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <Jumbo />
        <ChiSiamo />
        <Servizi />
        <NegozioFilatelico />
        <Contatti />
      </div>
    </div>
  );
}

export default App;
