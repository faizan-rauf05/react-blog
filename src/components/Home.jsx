import HeroSection from "./HeroSection";
import { AppProductContext } from "../context/Blog_Context";
import { NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import GridLoader from "react-spinners/GridLoader";

const Home = () => {
  const { featuredBlogs } = AppProductContext();
  const BlogCard = lazy(() => import("./BlogCard"));

  return (
    <>
      <main>
        <div className="body-container">
          <div className="hero-section">
            <HeroSection />
          </div>
          <Suspense
            fallback={
              <div className="loader-div">
                <GridLoader
                  color={"#00C1A2"}
                  size={7}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            }
          >
            <div className="featured-section">
              <h2>Latest Posts</h2>
              <div className="featured-blogs">
                {featuredBlogs.map((currElem) => {
                  return <BlogCard key={currElem.id} {...currElem} />;
                })}
              </div>
              <div className="read-more-section">
                <NavLink to="/blog">
                  <button className="read-more-btn">Read More</button>
                </NavLink>
              </div>
            </div>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Home;
