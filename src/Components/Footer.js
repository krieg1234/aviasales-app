import React from 'react';
import { Container } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <p>created by KRiEG1234</p>
        </Container>
      </Container>
    )
  }
}

export default Footer;