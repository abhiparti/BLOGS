import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.blogs.posts.find(post => post.id === parseInt(id)));

  if (!post) return <p>Blog not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Publication Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogDetailPage;
