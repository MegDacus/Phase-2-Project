import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function PageNotFound() {
    return (
    <Container fluid className='content-container d-flex justify-content-center error'>
        <Row>
            <Col>
                <h1>404</h1>
                <h3>Oops! You seem to be lost.</h3>
                <p>Here are some helpful links:</p>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/contact'>Contact Us</Link>
                <br/>
                <p>Or use any of the navigation buttons at the top of your screen.</p>
            </Col>
        </Row>
    </Container>
)}

export default PageNotFound;
