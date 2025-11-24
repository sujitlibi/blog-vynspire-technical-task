import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../../../components/features/posts/PostForm';
import { usePost } from '../../../api/posts/hooks/usePost';
import { useUpdatePost } from '../../../api/posts/hooks/useUpdatePost';
// import { useIsMounted } from '../../../lib/hooks/useIsMounted'

/**
 * EditPost:
 * - Loads existing post using usePost.
 * - Uses useUpdatePost mutation; navigate back to detail on success.
 * - Uses useIsMounted to avoid state updates on unmounted components.
 */
const EditPostPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data: post, isLoading } = usePost(id);
  const updateMutation = useUpdatePost();
  const navigate = useNavigate();
  // const isMounted = useIsMounted()

  if (isLoading) return <div>Loading post...</div>;
  if (!post) return <div>Post not found</div>;

  const handleSubmit = async (data: { title: string; body: string }) => {
    try {
      await updateMutation.mutateAsync({ id, data });
      // if (isMounted.current) navigate(`/app/posts/${id}`)
      navigate(`/admin/posts/${id}`);
    } catch {
      alert('Update failed');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl text-gray-900 dark:text-white">Edit Posts</h2>
      </div>
      <PostForm
        initial={{ title: post.title, body: post.body }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditPostPage;
