import React from "react";
// import "../css/footer.css";
import { NavLink } from "react-router-dom";
import { AppProductContext } from "../context/Blog_Context";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const { blogs, isLoading } = AppProductContext();
  const uniqueCategory = (data) => {
    let categories = data.map((currElem) => {
      return currElem.category;
    });
    return categories;
  };

  let categoryData = uniqueCategory(blogs);
  let firstFiveCategory = categoryData.slice(0, 5);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <footer className="footer">
        <div className="body-container">
          <div className="footer-section">
            <div className="about-details">
              <h3>About</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis autem officia velit recusandae!
              </p>
              <div className="contact-details-section">
                <h3>
                  Email :
                  <span className="footer-contact">
                    faizanrauf2134@gmail.com
                  </span>
                </h3>
                <h3>
                  Phone :
                  <span className="footer-contact"> +92 352 6573412</span>
                </h3>
              </div>
            </div>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/blog">
                  <li>Blog</li>
                </NavLink>
                <NavLink to="/contact">
                  <li>Contact</li>
                </NavLink>
              </ul>
            </div>
            <div className="category-links">
              <h3>Categories</h3>
              {firstFiveCategory.map((currCategory, i) => {
                return <li key={i}>{currCategory}</li>;
              })}
            </div>
            <div className="newsletter-form">
              <div className="newsletter-form-box">
                <h3>Weekly Newsletter</h3>
                <p>Get blog articles and offers via email</p>
                <div className="input-field">
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="Your Email"
                  />
                  <MdOutlineEmail className="form-icon" />
                  <button className="form-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
