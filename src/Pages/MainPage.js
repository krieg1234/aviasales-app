import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FilterBar from '../Components/FilterBar';
import TicketsList from '../Components/TicketsList';

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FilterBar />
        <Tabs defaultActiveKey='cheapest' id='tickets-sort-tab'>
          <Tab eventKey='cheapest' title='Самый дешёвый'>
            <p>билетики по цене</p>
            <TicketsList />
          </Tab>
          <Tab eventKey='fastest' title='Самый быстрый'>
            <p>билетики по времени</p>
            <TicketsList />
          </Tab>
        </Tabs>
      </React.Fragment>

    )
  }
}

export default MainPage;