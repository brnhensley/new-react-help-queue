import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Ticket(props) {

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

  const ticketInformation =
    <div>
      <style jsx>{`
        .color-toggle {
          background-color: grey;
          padding-left: 10%;
          padding-right: 10%;
          padding-top: 1%;
        }
        .color-toggle:hover {
          background-color: lightgrey;
        }
      `}
      </style>
      <div className="color-toggle">
        <h3>{props.location}: {props.names}</h3>
        <h4>{props.formattedWaitTime} ago</h4>
        <br />
      </div>
      <hr />
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { handleSavingSelectedTicket(props.ticketId); }}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }

}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  issue: PropTypes.string,
  currentRouterPath: PropTypes.isRequired,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);