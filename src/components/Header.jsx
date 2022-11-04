import React from "react";

function Header({ title }) {
  return (
    <header>
      <div className="header sticky top-0 bg-white shadow-md flex justify-center px-8 py-4 text-3xl">
        <h1>{title.toUpperCase()}</h1>
      </div>
    </header>
  );
}

export default Header;
