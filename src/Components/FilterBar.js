import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addFilter, removeFilter, buildTicketsList } from '../Actions';

const mapStateToProps = (state) => {
  const props = {
    ticketsCount: state.tickets.buildedTicketsList.length,
    filters: state.tickets.filters,
  };
  return props;
}

class FilterBar extends React.Component {
  filterTasksListHandler = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(buildTicketsList());
  }

  updateStopsFilterListHandler = (value) => (e) => {
    const { dispatch } = this.props;
    const stopsFilter = this.props.filters.byStops;
    const payload = {
      filterType: 'byStops',
      value
    }
    if (e.target.checked) dispatch(addFilter(payload));
    else dispatch(removeFilter(payload));
    dispatch(buildTicketsList());
  }


  render() {
    return (
      <Form onSubmit={this.filterTasksListHandler}>
        <Form.Group>
          <Form.Label>Количество пересадок</Form.Label>
          <Form.Check type='checkbox' label='Все' onInput={this.updateStopsFilterListHandler(Infinity)} />
          <Form.Check type='checkbox' label='Без пересадок' onInput={this.updateStopsFilterListHandler(0)} />
          <Form.Check type='checkbox' label='1 пересадка' onInput={this.updateStopsFilterListHandler(1)} />
          <Form.Check type='checkbox' label='2 пересадки' onInput={this.updateStopsFilterListHandler(2)} />
          <Form.Check type='checkbox' label='3 пересадки' onInput={this.updateStopsFilterListHandler(3)} />
        </Form.Group>
        <Form.Label>Найдено: {this.props.ticketsCount} билетов</Form.Label>
      </Form>
    )
  }
}

export default connect(mapStateToProps)(FilterBar);