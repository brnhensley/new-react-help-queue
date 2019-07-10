import React from 'react'
import PropTypes from 'prop-types';
import TicketList from './TicketList';

function Admin(props) {
    return (
        <div>
            <h2>ADMIN</h2>
            <TicketList ticketList={props.ticketList} />
        </div>
    );
}

Admin.PropTypes = {
    ticketList: PropTypes.array
}

export default Admin;