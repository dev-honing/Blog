"use client"
// app/posts/page.tsx
import { ToHome } from '@/components/Links/Links';
import FetchRDS from '../../../components/FetchRDS';
import Hello from '../../../components/Hello';

const Posts = () => {
  return <div className="posts">
    <ToHome />
    <h3>포스트 메인</h3>
    <FetchRDS />
    <Hello />
  </div>
}
export default Posts;