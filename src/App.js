import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogForm from './components/BlogForm';

const App = () => {
  const theme = useSelector(state => state.theme);
  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/new" element={<BlogForm />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
