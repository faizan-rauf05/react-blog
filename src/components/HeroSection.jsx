import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  let id = "blog13";

  return (
    <>
      <NavLink to={`/SingleBlog/${id}`}>
        <div className="hero-section">
          <div className="hero-section-details">
            <span className="category-info">
              <h3>Social Media</h3>
            </span>
            <h2>
              The Evolution of Social Media: From Connecting to Influencing
            </h2>
            <div className="author-date">
              <h3>Sophia Robinson</h3>
              <h3>2024-04-27</h3>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default HeroSection;
