import React, { useState } from "react";
import Projects from "../components/Projects";
import Tasks from "../components/Tasks";
import { Link } from "react-router-dom";

function Header({title }) {

  return (
    <header>
      <div className="header sticky top-0 bg-white shadow-md flex justify-center px-8 py-3 text-3xl">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default Header;
