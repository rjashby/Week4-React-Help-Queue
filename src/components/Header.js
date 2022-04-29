import React from "react";
import tickets from "./../img/tickets.png";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <img className="h-52 w-64" src={tickets} alt="Tickets" />
      </div>
      <hr />
      <div className="text-center">
        <Link className="mr-2 underline text-xl" to="/">Home </Link>
        <Link className="ml-2 underline text-xl" to="/signin"> Sign In</Link>
      </div>
      <h1 className="text-center font-medium leading-tight text-4xl mt-2 mb-2">Help Queue</h1>
      <hr />
    </React.Fragment>
  );
}

export default Header;