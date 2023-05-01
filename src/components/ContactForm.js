import React, {useState} from 'react';
import {Form, Alert, Button} from 'react-bootstrap'

function ContactForm() {
    const [showMessage, setShowMessage] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [values, setValues] = useState({
        email: "",
        message: ""
    })
    const [formErrors, setFormErrors] = useState({})

    function handleChange(e) {

        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }))
    }

    
    const validate = () => {
            
            let errors = {};
            
            if (!values.email) {
                errors.email = 'Email address is required'
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = "Email address is invalid";
            }

            if (!values.message) {
                errors.message = 'Message is required'
            }

         setFormErrors(errors)

         if (Object.keys(errors).length === 0) {
            return true;
         } else {
            return false;
         }
    }


    function handleSubmit(e) {
        if (e) e.preventDefault();

        if (validate(values)) {
        setShowMessage(true);
        } else {
        setShowMessage(false);
        }

        if (showAlert === false) {
        setShowAlert(true);
        }

        fetch('http://localhost:4000/formResponses', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
                message: values.message
            })
        })
            .then (resp => resp.json())
            .then (message => message)
  }
    


    return(
        <>
        <Form onSubmit={handleSubmit} className='w-50' id="enquiryForm">
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={values.email} onChange={handleChange} className="form-control" placeholder="name@example.com" required/>
                {formErrors.email && (<p className='text-danger'>{formErrors.email}</p>)}
            </Form.Group>
            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" value={values.message} onChange={handleChange} rows={3} placeholder="Leave a comment here" required></Form.Control>
                {formErrors.message && (<p className='text-danger'>{formErrors.message}</p>)}
            </Form.Group>{<br/>}
            <Button type="submit" variant="primary">Send Enquiry</Button>
            <Alert show={showAlert} variant='secondary' onClose={() => setShowAlert(false)} dismissible >Thank you for your enquiry!</Alert>
        </Form>
        </>
    )
}

export default ContactForm;
