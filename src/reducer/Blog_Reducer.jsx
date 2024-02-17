const BlogReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_ALL_BLOGS":
      const featuredBlogs = action.payload.filter((currElem) => {
        return currElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        blogs: action.payload,
        featuredBlogs,
      };
    case "SET_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default BlogReducer;
