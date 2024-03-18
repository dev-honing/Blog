// app/interfaces/Post.tsx

interface Post {
  id: number;
  title: string;
  category: string;
  dateTime: string;
  tags?: string[];
}

export default Post;