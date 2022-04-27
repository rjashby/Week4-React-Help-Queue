import React from "react";
import tickets from "./../img/tickets.png"

function Header(){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <img className="h-52 w-64" src={tickets} alt="Tickets" />
      </div>
      <hr />
      <h1 className="text-center font-medium leading-tight text-4xl mt-2 mb-2">Help Queue</h1>
      <hr />
    </React.Fragment>
  );
}

export default Header;