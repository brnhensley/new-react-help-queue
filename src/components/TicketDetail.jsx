import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props) {
  return (
    <div>
      <h1>{props.selectedTicket.location}: {props.selectedTicket.names}</h1>
      <h2>{props.selectedTicket.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTicket.issue}</em></h4>
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;