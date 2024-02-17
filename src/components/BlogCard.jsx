import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard = ({ id, title, image, date, author, category }) => {
  return (
    <>
      <NavLink to={`SingleBlog/${id}`}>
        <div className="blog-card">
          <div className="card-img">
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div className="blog-details">
            <span className="category-info-card">
              <h4>{category}</h4>
            </span>
            <h3>{title}</h3>
            <div className="author-details-card">
              <h3>{author}</h3>
              <h3>{date}</h3>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default BlogCard;
