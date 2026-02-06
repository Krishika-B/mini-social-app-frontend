import { useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button } from 'react-bootstrap';

function Signup({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('https://mini-social-app-backend-f96z.onrender.com/', {
        email,
        password
      });
      alert(res.data);
      onSignup(); // move to login
    } catch (err) {
      alert(err.response?.data || 'Signup failed');
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4">
        <h3 className="text-center">Signup</h3>

        <Form.Control
          className="mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Form.Control
          className="mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSignup}>Signup</Button>
      </Card>
    </Container>
  );
}

export default Signup;