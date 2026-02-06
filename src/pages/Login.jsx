import { useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button } from 'react-bootstrap';

function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      alert(res.data);
      onLogin({ email }); // move to Home
    } catch (err) {
      alert(err.response?.data || 'Login failed');
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4">
        <h3 className="text-center">Login</h3>

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

        <Button onClick={handleLogin}>Login</Button>

        <p
          style={{ cursor: 'pointer', marginTop: '10px', color: 'blue' }}
          onClick={onSwitch}
        >
          Go to Signup
        </p>
      </Card>
    </Container>
  );
}

export default Login;