import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';

function PostsFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts')
      .then((res) => setPosts(res.data))
      .catch(() => alert('Error fetching posts'));
  }, []);

  return (
    <Container className="mt-4">
      {posts.map((post) => (
        <Card key={post._id} className="mb-3 p-3">
          <h5>{post.title}</h5>
          <p>{post.content}</p>
        </Card>
      ))}
    </Container>
  );
}

export default PostsFeed;