'use client'
// app/pages/posts/page.tsx
import FetchRDS from '../../../components/FetchRDS';

const PostPage = () => {
  return (
    <div>
      <h1>RDS 확인</h1>
      <FetchRDS />
    </div>
  );
}

export default PostPage;