import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-2">
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8" onSubmit={handleNewTicketFormSubmission}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='names'
              placeholder='Pair Names' />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='location'
              placeholder='Location' />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline"
              name='issue'
              placeholder='Describe your issue.' />
            <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" type='submit'>Help!</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;