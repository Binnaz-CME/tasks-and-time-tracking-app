import React from "react";

function Header(props) {
  return (
    <header>
      <div className="header sticky top-0 bg-white shadow-md flex justify-center px-8 py-3 text-3xl">
        <h1>{props.title}</h1>
      </div>
      {props.buttonName1 || props.buttonName2 ? (
        <nav id="tabs" className="flex justify-between">
          <button className="w-full border-solid border-2 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-3 pb-1 text-2xl">
            {props.buttonName1}
          </button>
          <button className="w-full border-solid border-2 focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-3 pb-1 text-2xl">
            {props.buttonName2}
          </button>
        </nav>
      ) : null}
    </header>
  );
}

export default Header;
