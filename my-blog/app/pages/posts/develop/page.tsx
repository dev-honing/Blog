'use client'
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Post from '../../../interfaces/Post';

const PostPage: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/RDS/rds');
        if (!res.ok) {
          throw new Error('API 요청 실패');
        }
        const data = await res.json();
        setPosts(data); // 모든 포스트를 상태로 설정
      } catch (error) {
        console.error('API 요청 오류:', error);
      }
    };

    fetchData();
  }, []);

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>Category: {post.category}</p>
          <p>Date: {post.dateTime}</p>
          {post.tags && (
            <ul>
              {post.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostPage;
