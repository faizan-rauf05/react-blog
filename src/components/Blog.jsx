import { useEffect, useState } from "react";
import { AppProductContext } from "../context/Blog_Context";
import { lazy, Suspense } from "react";
import GridLoader from "react-spinners/GridLoader";

const HeroSection = lazy(() => import("../components/HeroSection"));
const BlogCard = lazy(() => import("../components/BlogCard"));

const Blog = () => {
  const { blogs } = AppProductContext();
  const [currPage, setCurrPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = recordsPerPage * currPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blogs.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(blogs.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);
  //scroll page up
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const prevPage = () => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
    }
  };
  const nextPage = () => {
    if (currPage !== nPages) {
      setCurrPage(currPage + 1);
    }
  };
  const changePage = (id) => {
    setCurrPage(id);
  };

  return (
    <>
      <div className="body-container">
        <h2 className="blog-page-heading">All Posts</h2>
        <Suspense
          fallback={
            <div>
              <GridLoader
                color={"#00C1A2"}
                size={7}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          }
        >
          <HeroSection />
        </Suspense>
        <Suspense>
          <div className="featured-blogs blog-page-comps ">
            {records.map((currElem) => {
              return <BlogCard key={currElem.id} {...currElem} />;
            })}
          </div>
        </Suspense>
      </div>
      <div className="pagination">
        <button className="pagination-btn" onClick={prevPage}>
          prev
        </button>
        {numbers.map((n, i) => {
          return (
            <button
              className={
                n === currPage
                  ? "pagination-list-btn active-pagination"
                  : "pagination-list-btn"
              }
              key={i}
              onClick={() => changePage(n)}
            >
              {n}
            </button>
          );
        })}
        <button className="pagination-btn" onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Blog;
