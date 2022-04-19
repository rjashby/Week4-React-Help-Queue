import React from "react";
import ticketsImage from "./../img/tickets.png"

function Header(){
  return (
    <React.Fragment>
      <div class="flex items-center justify-center">
        <img class="h-52 w-64" src={ticketsImage} alt="An image of tickets" />
      </div>
      <hr />
      <h1 class="text-center font-medium leading-tight text-4xl mt-2 mb-2">Help Queue</h1>
      <hr />
    </React.Fragment>
  );
}

export default Header;