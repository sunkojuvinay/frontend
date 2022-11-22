import React from "react";
import { render } from "react-dom";
//import "./index.css";

const Footer = () => (
  <footer className="footer">
    <p>Clota Technology- For The Better World!</p>
  </footer>
);

const App = () => (
  <div className="content">
    <h1>Clota Technology!</h1>
  </div>
);

render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));

export default Footer;
