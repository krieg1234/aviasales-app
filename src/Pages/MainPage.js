import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FilterBar from '../Components/FilterBar';
import TicketsList from '../Components/TicketsList';


import { connect } from 'react-redux';
import { sortTicketsList } from '../Actions/index';

const mapStateToProps = (state) => {
  const props = {};
  return props;
}

class MainPage extends React.Component {
  sortTicketsListByPriceEvent = (t) => {
    const { dispatch } = this.props;

    dispatch(sortTicketsList(t));
  }

  render() {
    return (
      <React.Fragment>
        <FilterBar />
        <Tabs defaultActiveKey='cheapest' id='tickets-sort-tab' onSelect={this.sortTicketsListByPriceEvent}>
          <Tab eventKey='cheapest' title='Самый дешёвый' >
            <p>билетики по цене</p>
          </Tab>
          <Tab eventKey='fastest' title='Самый быстрый'>
            <p>билетики по времени</p>
          </Tab>
        </Tabs>
        <TicketsList />
      </React.Fragment>

    )
  }
}

export default connect(mapStateToProps)(MainPage);