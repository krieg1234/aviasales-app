import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import styled from 'styled-components';
import { convertMinToHours } from '../Functions/convertTime'

const Styles = styled.div`
.card:hover {
  border: solid;
  border-color: #2196F3;
}
`


const mapStateToProps = (state) => {
  const props = {}
  return props;
}

class TickedCard extends React.Component {
  render() {
    const { price, carrier, segments } = this.props.data;

    return (
      <Styles>
        <Card className='rounded-lg my-2 p-2 shadow-lg text-uppercase'>
          <Row>
            <Col md='8' className='price' style={{ fontWeight: '600', fontSize: '24px', color: '#2196F3' }}>{price} р</Col>
            <Col>
              <Image src={`//pics.avs.io/99/36/${carrier}.png`} />
            </Col>
          </Row>
          {segments.map(({ origin, destination, date, stops, duration }) => {
            const originDateParsed = new Date(Date.parse(date));
            const durationParsed = convertMinToHours(duration);
            const distDateParsed = new Date(Date.parse(date) + duration * 60000);

            const originTime = originDateParsed.toLocaleTimeString();
            const distTime = distDateParsed.toLocaleTimeString();

            return (
              <div key={uniqueId()}>
                <Row>
                  <Col>
                    <p>{origin}-{destination}</p>
                    <p className='font-weight-bold'>{originTime} - {distTime}</p>
                  </Col>
                  <Col>
                    <p>Время в пути</p>
                    <p className='font-weight-bold'>{durationParsed}</p>
                  </Col>
                  <Col>
                    <p>{stops.length} пересадок</p>
                    <p className='font-weight-bold'>{stops.join(', ')}</p>
                  </Col>
                </Row>
              </div>
            )
          })}
        </Card>
      </Styles>



    )
  }
}

export default connect(mapStateToProps)(TickedCard);