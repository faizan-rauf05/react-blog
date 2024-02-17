import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Blog_Reducer";
import axios from "axios";
export const BlogContext = createContext();
const API = `https://faizan-rauf05.github.io/api_data/blog_api.json`;
const initialState = {
  isLoading: !1,
  isError: !1,
  blogs: [],
  singleBlog: {},
  featuredBlogs: [],
  isSingleLoading: !1,
};
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getBlogs = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const blogs = res.data;
      dispatch({ type: "SET_ALL_BLOGS", payload: blogs });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };
  useEffect(() => {
    getBlogs(API);
  }, []);
  return (
    <BlogContext.Provider value={{ ...state }}>{children}</BlogContext.Provider>
  );
};
export const AppProductContext = () => {
  return useContext(BlogContext);
};
