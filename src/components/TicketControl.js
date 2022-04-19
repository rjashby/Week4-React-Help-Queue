import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return To Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div class="flex justify-center">  
          <button class="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }

}

export default TicketControl;