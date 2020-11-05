import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { uniqueId } from 'lodash';
/*
const ticketExample = {
  // Цена в рублях
  price: 666,
  // Код авиакомпании (iata)
  carrier: 'Код авиакомпании',
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: 'Код города вылета',
      // Код города (iata)
      destination: 'Код города прилёта',
      // Дата и время вылета туда
      date: '01/01/2020 00:00',
      // Массив кодов (iata) городов с пересадками
      stops: ['Код города 1', 'Код города 2', 'Код города 3'],
      // Общее время перелёта в минутах
      duration: 666
    },
    {
      // Код города (iata)
      origin: 'Код города вылета 2',
      // Код города (iata)
      destination: 'Код города прилёта 2',
      // Дата и время вылета туда
      date: '01/01/2020 00:00',
      // Массив кодов (iata) городов с пересадками
      stops: ['Код города 21', 'Код города 22', 'Код города 23'],
      // Общее время перелёта в минутах
        : 666
    }
  ]
}
*/
const mapStateToProps = (state) => {
  const props = {
    //tickets: state.tickets,
  }
  return props;
}

class TickedCard extends React.Component {
  render() {
    //const ticket = this.props.tickets[this.props.key]
    const { price, carrier, segments } = this.props.data;

    return (
      <Card>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{price} р</p>
          <p>{carrier}</p>

        </Row>
        {segments.map(({ origin, destination, date, stops, duration }) => {
          return (
            <div key={uniqueId()}>
              <Row>
                <Col>
                  <p>{origin}-{destination}</p>
                  <p>{date}+{duration}</p>
                </Col>
                <Col>
                  <p>Время в пути</p>
                  <p>{duration} мин.</p>
                </Col>
                <Col>
                  <p>{stops.length} пересадок</p>
                  <p>{stops.join(', ')}</p>
                </Col>
              </Row>
            </div>
          )
        })}
      </Card>
    )
  }
}

export default connect(mapStateToProps)(TickedCard);