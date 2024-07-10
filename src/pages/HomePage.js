import React from 'react';
import { useSelector } from 'react-redux';
import Blog from '../components/Blog';
import { Grid, Container } from '@mui/material';

const HomePage = () => {
  const posts = useSelector(state => state.blogs.posts);

  return (
    <>
      <h1>ADD YOUR BLOGS</h1>
      <Container>
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Blog post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
