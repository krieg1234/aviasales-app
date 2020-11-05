import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';

const mapStateToProps = (state) => {
  const props = {}
  return props;
}

class TickedCard extends React.Component {
  render() {
    const { price, carrier, segments } = this.props.data;

    return (
      <Card>
        <Row>
          <Col>{price} р</Col>
          <Col>{carrier}</Col>
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