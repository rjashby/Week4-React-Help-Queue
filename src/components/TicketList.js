import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function TicketList(props){
  
  useFirestoreConnect([
    { collection: 'tickets' }
  ]);

  const tickets = useSelector(state => state.firestore.ordered.tickets);

  if(isLoaded(tickets)) {
    return (
      <React.Fragment>
        <div className="grid grid-cols-5">
          {tickets.map((ticket) => {
            return <Ticket 
            whenTicketClicked = { props.onTicketSelection }
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            id={ticket.id}
            key={ticket.id}/>
        })}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="flex justify-center"> 
          <h3>Loading...</h3>
        </div>
      </React.Fragment>
    )
  }
}

TicketList.propTypes = {
  onTicketSelection: PropTypes.func
};

export default TicketList;