import React from "react";
import PropTypes from "prop-types";
import reactLogo from "./../img/reactLogo.png";

function Ticket(props){
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2 ml-2 mr-2">
          <div className="px-6 py-4">
            <div onClick = {() => props.whenTicketClicked(props.id)}>
              <div className="flex items-center justify-center">
                <img className="h-12 w-21" src={reactLogo} alt="React Logo" />
              </div>
              <div className="text-center text-gray-700 text-base">
                <h3>{props.location} - {props.names}</h3>
                <p><em>{props.issue}</em></p>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;