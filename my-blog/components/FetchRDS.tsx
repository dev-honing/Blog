// components/FetchRDS.tsx
import { useEffect, useState } from "react";

interface Post {
  id: number;
  category: string;
  dateTime: string;
  title: string;
  tags?: string[];
}

function FetchRDS() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/RDS/rds')
      .then(response => response.json())
      .then(data => setPosts(data.results));
}, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.category}</p>
          <p>{post.dateTime}</p>
          <p>{post.tags}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchRDS;