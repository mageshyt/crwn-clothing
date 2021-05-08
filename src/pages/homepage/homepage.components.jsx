import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./homepage.scss";
import Directory from "../../components/directory/directory.compnents";
const HomePage = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
