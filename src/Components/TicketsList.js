import React from 'react';
import { connect } from 'react-redux';
import { updateTicketsList } from '../Actions/index';
import TicketCard from './TicketCard';

const mapStateToProps = (state) => {
  const props = {
    tickets: state.tickets,
  }
  return props;
}

class TicketsList extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(updateTicketsList);
  }

  render() {
    const { tickets } = this.props;
    return (
      <div>
        {tickets.allTickets.map((ticket) => {
          return (
            <TicketCard key={ticket} data={tickets.byId[ticket]} />
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(TicketsList);