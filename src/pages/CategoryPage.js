import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Blog from '../components/Blog';
import { Grid, Container, Typography } from '@mui/material';

const CategoryPage = () => {
  const { category } = useParams();
  const posts = useSelector(state => state.blogs.posts.filter(post => post.category === category));

  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>{category} Blogs</Typography>
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Blog post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
