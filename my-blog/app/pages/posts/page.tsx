"use client"
// app/posts/page.tsx
import { ToHome } from '@/components/Links/Links';
import FetchRDS from '../../../components/FetchRDS';

const Posts = () => {
  return <div className="posts">
    <ToHome />
    <h3>포스트 메인</h3>
    <FetchRDS />
  </div>
}
export default Posts;