import React from 'react';
import { connect } from 'react-redux';
import TicketCard from './TicketCard';

const ticketsListExample = [1, 2, 3, 4, 5];

const mapStateToProps = (state) => {
  const props = {
    tickets: ticketsListExample,
  }
  return props;
}



class TicketsList extends React.Component {
  render() {
    const { tickets } = this.props;
    return (
      <div>
        {tickets.map((ticket) => {
          return (
            <TicketCard />
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps)(TicketsList);