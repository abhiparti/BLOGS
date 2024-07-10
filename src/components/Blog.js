import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { deletePost } from '../store/actions/blogActions';

const Blog = () => {
  const blogs = useSelector((state) => state.blogs.posts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
            </Link>
            <Button onClick={() => handleDelete} variant="contained" color="secondary" style={{ margin: '10px' }}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
