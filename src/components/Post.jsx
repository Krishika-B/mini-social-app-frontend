import React from 'react';
import Post from './Post';

export default function Feed({ posts, onLike, onComment }) {
  return (
    <div>
      {posts.map(post => (
        <Post key={post._id} post={post} onLike={onLike} onComment={onComment} />
      ))}
    </div>
  );
}