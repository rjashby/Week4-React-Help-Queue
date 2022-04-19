import React from "react";
import Ticket from "./Ticket";
import reactLogo from "./../img/reactLogo.png"

const mainTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

function TicketList(){
  return (
    <React.Fragment>
      <hr/>
      {mainTicketList.map((ticket, index) =>
        <div class="flex items-center justify-center">
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
            <div class="flex items-center justify-center">
              <img class="h-12 w-21" src={reactLogo} alt="React Logo" />
              <br/>
            </div>
            <div class="px-6 py-4">
              <p class="text-center text-gray-700 text-base">
                <Ticket names={ticket.names}
                  location={ticket.location}
                  issue={ticket.issue}
                  key={index}/>
              </p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default TicketList;