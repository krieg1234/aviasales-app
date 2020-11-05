import React from 'react';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <h1>Aviasales.ru by KRiEG1234</h1>
        </Container>
      </Container>

    )
  }
};

export default Header;