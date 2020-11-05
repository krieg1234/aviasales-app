import React from 'react';
import { Form } from 'react-bootstrap';

class FilterBar extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Количество пересадок</Form.Label>
          <Form.Check type='checkbox' label='Все' />
          <Form.Check type='checkbox' label='Без пересадок' />
          <Form.Check type='checkbox' label='1 пересадка' />
          <Form.Check type='checkbox' label='2 пересадки' />
          <Form.Check type='checkbox' label='3 пересадки' />
        </Form.Group>


      </Form>
    )
  }
}

export default FilterBar;