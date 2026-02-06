import { useEffect, useState } from "react";

export default function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const loadPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const createPost = async () => {
    if (!text) return alert("Post cannot be empty");

    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        text
      }),
    });

    setText("");
    loadPosts();
  };

  const likePost = async (id) => {
    await fetch(`http://localhost:5000/api/posts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user.username }),
    });
    loadPosts();
  };

  return (
    <div>
      <h2>Feed</h2>

      <input
        placeholder="Write a post..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={createPost}>Post</button>

      {posts.map(post => (
        <div key={post._id} style={{ border: "1px solid gray", margin: 10 }}>
          <p><b>{post.username}</b>: {post.text}</p>
          <p>Likes: {post.likes.length}</p>
          <button onClick={() => likePost(post._id)}>Like</button>
        </div>
      ))}
    </div>
  );
}