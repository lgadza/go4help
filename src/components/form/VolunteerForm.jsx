import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    occupation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data, e.g., send to an API or server
    console.log(formData);
  };

  return (
    <Form className="volunteer-form" onSubmit={handleSubmit}>
      <h2>Zostań Wolontariuszem!</h2>
      <Form.Group>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
      </Form.Group>
      {/* Repeat for other fields */}
      <Button variant="primary" type="submit">
        Dołącz Do Nas Teraz
      </Button>
    </Form>
  );
};

export default VolunteerForm;
