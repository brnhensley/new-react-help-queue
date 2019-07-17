import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import {connect} from 'react-redux';

function Admin(props) {
  let optionalSelectedTicketDetails = null;
  if (props.selectedTicket.length > 0) {
    optionalSelectedTicketDetails = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }

  return (
    <div>
      <h2>ADMIN</h2>
      {optionalSelectedTicketDetails}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
        onChangeSelectedTicket={props.onChangeSelectedTicket}
      />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onChangeSelectedTicket: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);