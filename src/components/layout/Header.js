import React, { useState } from "react";
import { Link } from "react-router-dom";
import NowyPrzycisk from "../nowy-przycisk/nowy-przycisk.component";

function Header() {
  const [text, setText] = useState("TodoList");

  const changeText = () => {
    setText("Nowy Tekst");
  };

  return (
    <header style={headerStyle}>
      <h1>{text}</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        {" "}
        About
      </Link>
      <NowyPrzycisk changeText={changeText} />
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
