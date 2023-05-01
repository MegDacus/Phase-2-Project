import React from 'react';
import ContactForm from './ContactForm'
import {Container} from 'react-bootstrap'

function ContactPage() {
    return(
        <Container className='content-container'>
            <div id="enquireDiv" className='text-center header'>
                <h1 className="heading">Ready to Adopt?</h1>
                <h3 className="heading">Send us an email!</h3>
                <p className="heading pHeading">We will get a response to you within 5 business days.</p>
            </div>
            <div className='d-flex justify-content-center adoptionDiv' id="inquiryDiv">
                    <ContactForm/>
            </div>
        </Container>
    )
}

export default ContactPage;

