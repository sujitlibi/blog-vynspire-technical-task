import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../../../components/features/posts/PostForm';
import { useCreatePost } from '../../../api/posts/hooks/useCreatePost';

/**
 * CreatePost:
 * - Uses useCreatePost mutation to create a post.
 * - After success navigates to the created post detail.
 * - Mutation invalidates the posts list via useCreatePost onSuccess.
 */
const CreatePostPage: React.FC = () => {
  const createMutation = useCreatePost();
  const navigate = useNavigate();

  const handleSubmit = async (data: { title: string; body: string }) => {
    if (createMutation.isLoading) return;
    try {
      const post = await createMutation.mutateAsync({
        title: data.title,
        body: data.body,
      });
      navigate(`/admin/posts/${post.id}`);
    } catch {
      alert('Create failed');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Create Post</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePostPage;
