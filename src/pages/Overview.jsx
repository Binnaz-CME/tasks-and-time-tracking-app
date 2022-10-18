import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Overview() {
  return (
    <div>
      <Header title='Overview' buttonName1='Projects' buttonName2='Tasks'/>
      <Nav />
    </div>
  );
}

export default Overview;
