import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>TASKIFY</h1>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/About">ABOUT</Link>
        <Link to="/ToDo">TO-DO</Link>
      </div>
    </header>
  );
};

const headerStyle = {
    color: "rgb(242, 97, 53)",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  
  const titleStyle = {
    fontSize: "2.5rem",
    margin: "0",
    letterSpacing: "3px",
  };


export default Header;