import React from "react";
import PropTypes from "prop-types";
import reactLogo from "./../img/reactLogo.png";

function TicketDetail(props){
  const { ticket, onClickingDelete } = props;
  return (
    <React.Fragment>
      <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mb-2">
          <div className="flex items-center justify-center">
            <img className="h-12 w-21" src={reactLogo} alt="React Logo" />
            <br/>
          </div>
          <div className="px-6 py-4">
            <p className="text-center text-gray-700 text-base"></p>
            <h1 className="text-center text-gray-700 text-base">Ticket Detail</h1>
            <h3 className="text-center text-gray-700 text-base">{ticket.location} - {ticket.names}</h3>
            <p className="text-center text-gray-700 text-base"><em>{ticket.issue}</em></p>
            <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" onClick={ props.onClickingEdit }>Update Ticket</button>
            <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={()=> onClickingDelete(ticket.id) }>Close Ticket</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;