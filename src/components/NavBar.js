import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavBar() {

    return(
        <Nav variant='tabs' defaultActiveKey='/'>
      <Nav.Item>
        <Nav.Link eventKey='home' href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='cats' href="/cats">Available Cats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='dogs' href="/dogs">Available Dogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='adopted-animals' href="/adopted-animals">Adopted Animals</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='contact' href="/contact">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
    )
}

export default NavBar;

