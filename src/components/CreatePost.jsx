import React, { useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button } from 'react-bootstrap';

function CreatePost() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const username = 'testuser'; // temporary username

  const handleSubmit = async () => {
    if (!text && !image) {
      alert('Please add text or image');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('text', text);
    if (image) formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/posts', formData);
      alert('Post created');
      setText('');
      setImage(null);
    } catch (err) {
      alert('Error creating post');
      console.error(err);
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Create Post</Card.Title>

          <Form.Control
            as="textarea"
            rows={3}
            placeholder="What's on your mind?"
            className="mb-3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Form.Control
            type="file"
            className="mb-3"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <Button onClick={handleSubmit}>Post</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CreatePost;