import React from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import FilterBar from '../Components/FilterBar';
import TicketsList from '../Components/TicketsList';


import { connect } from 'react-redux';
import { sortTicketsList, buildTicketsList } from '../Actions/index';

const mapStateToProps = (state) => {
  const props = {};
  return props;
}

class MainPage extends React.Component {
  sortTicketsListByPriceEvent = (t) => {
    const { dispatch } = this.props;

    dispatch(sortTicketsList(t));
    dispatch(buildTicketsList());
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md='3'>
            <FilterBar />
          </Col>
          <Col md='9'>
            <Tabs defaultActiveKey='cheapest' id='tickets-sort-tab' onSelect={this.sortTicketsListByPriceEvent}>
              <Tab eventKey='cheapest' title='Самый дешёвый'></Tab>
              <Tab eventKey='fastest' title='Самый быстрый'></Tab>
            </Tabs>
            <TicketsList />
          </Col>

        </Row>

      </Container>

    )
  }
}

export default connect(mapStateToProps)(MainPage);