import React from 'react';
import { Form } from 'react-bootstrap';
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

  updateFilterHandler = (value, typeOfFilter) => (e) => {
    const { dispatch } = this.props;
    const payload = {
      filterType: typeOfFilter,
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
          <Form.Check type='checkbox' label='Все' onInput={this.updateFilterHandler(Infinity, 'byStops')} />
          <Form.Check type='checkbox' label='Без пересадок' onInput={this.updateFilterHandler(0, 'byStops')} />
          <Form.Check type='checkbox' label='1 пересадка' onInput={this.updateFilterHandler(1, 'byStops')} />
          <Form.Check type='checkbox' label='2 пересадки' onInput={this.updateFilterHandler(2, 'byStops')} />
          <Form.Check type='checkbox' label='3 пересадки' onInput={this.updateFilterHandler(3, 'byStops')} />
        </Form.Group>
        <Form.Label>Найдено: {this.props.ticketsCount} билетов</Form.Label>
      </Form>
    )
  }
}

export default connect(mapStateToProps)(FilterBar);