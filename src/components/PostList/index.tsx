import { Post } from "shared/models/Post";


export interface  PostListProps {
  posts: Post[];
}

export default function PostList ({posts}:  PostListProps) {
  

  return (
    <ul>
      {
        posts.map((item: Post) => (
          <li key={item.id}>{item.title}</li>
        ))
      }
    </ul>
  );
}
