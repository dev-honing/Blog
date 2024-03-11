'use client'
// app/posts/page.tsx
import { useEffect, useState } from 'react';
import postsData from '../../../data/posts.json';

interface Post {
  id: number;
  category: string;
  dateTime: string;
  title: string;
  tags?: string[];
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Category: {post.category}</p>
          <p>Date: {new Date(post.dateTime).toLocaleString()}</p>
          {post.tags && <p>Tags: {post.tags.join(', ')}</p>}
        </div>
      ))}
    </div>
  );
};

export default Posts;