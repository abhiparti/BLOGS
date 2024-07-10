import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editBlog } from '../store/blogSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, TextField } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { addPost, editPost } from '../store/actions/blogActions';
// import RichTextEditor from './RichTextEditor';

const BlogForm = ({ post, onClose }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: post ? post.id : Date.now(), title, content, excerpt: content.substring(0, 100) };
    if (post) {
      dispatch(editPost(newPost));
    } else {
      dispatch(addPost(newPost));
    }
    navigate('/');
  };
  // const { id } = useParams();
  // const blog = useSelector((state) => state.blogs.find((b) => b.id === id));
  // const [title, setTitle] = useState(blog.title);
  // const [content, setContent] = useState(blog.content);
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(editBlog({ id, updatedBlog: { title, content } }));
  //   navigate('/');
  // };


  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        margin="normal"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      {/* <RichTextEditor /> */}
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Save</Button>
    </form>
  );
};

export default BlogForm;




// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { editBlog } from '../store/blogSlice';
// import { TextField, Button, Container } from '@mui/material';

// const BlogForm = () => {
//   const { id } = useParams();
//   const blog = useSelector((state) => state.blogs.find((b) => b.id === id));
//   const [title, setTitle] = useState(blog.title);
//   const [content, setContent] = useState(blog.content);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(editBlog({ id, updatedBlog: { title, content } }));
//     navigate('/');
//   };

//   return (
//     <Container>
//       <h2>Edit Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           fullWidth
//           multiline
//           rows={4}
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Save
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default BlogForm;
