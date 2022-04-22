import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import reactLogo from "./../img/reactLogo.png"

function TicketList(props){
  
  return (
    <React.Fragment>
      <hr/>
      {props.ticketList.map((ticket) =>
        <div className="flex items-center justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
            <div className="flex items-center justify-center">
              <img className="h-12 w-21" src={reactLogo} alt="React Logo" />
              <br/>
            </div>
            <div className="px-6 py-4">
              <Ticket 
                whenTicketClicked = { props.onTicketSelection }
                names={ticket.names}
                location={ticket.location}
                issue={ticket.issue}
                id={ticket.id}
                key={ticket.id}/>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;