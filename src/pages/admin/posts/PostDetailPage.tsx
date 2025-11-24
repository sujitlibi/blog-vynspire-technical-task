import React from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '../../../api/posts/hooks/usePost';

/**
 * PostDetail displays full content of a single post.
 * - The body may contain sanitized HTML (from React-Quill); do not dangerouslySetInnerHTML unless sanitized.
 */
const PostDetail: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data: post, isLoading } = usePost(id);

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h2 className="text-2xl mb-2">{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default PostDetail;
