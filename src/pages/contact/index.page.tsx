// pages/contact.page.tsx

import { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });

    alert('Form submitted successfully!');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>Contact Us</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            id="message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;
