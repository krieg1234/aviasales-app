import React from 'react';
import { connect } from 'react-redux';
import { buildTicketsList, updateTicketsList } from '../Actions/index';
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
    dispatch(buildTicketsList());
  }

  render() {
    const { tickets } = this.props;
    return (
      <div>
        {tickets.buildedTicketsList.map((ticket) => {
          return (
            <TicketCard key={ticket} data={tickets.byId[ticket]} />
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(TicketsList);