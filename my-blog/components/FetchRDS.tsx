// components/FetchRDS.tsx

import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  category: string;
  dateTime: string;
  title: string;
  tags?: string[];
}

const FetchRDS: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/RDS/rds');
        if (!response.ok) {
          throw new Error('Failed to fetch data from server');
        }
        const postData: Post[] = await response.json();
        setPosts(postData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts from RDS:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>ID: {post.id}</div>
            <div>Category: {post.category}</div>
            <div>Date Time: {post.dateTime}</div>
            <div>Title: {post.title}</div>
            {post.tags && <div>Tags: {post.tags.join(', ')}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchRDS;
