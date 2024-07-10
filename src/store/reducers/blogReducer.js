const initialState = {
  posts: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {...state, posts: [...state.posts, action.payload] };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default blogReducer;
