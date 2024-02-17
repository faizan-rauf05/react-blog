import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppProductContext } from "../context/Blog_Context";
import { PiUserCircleLight } from "react-icons/pi";

const SingleBlog = () => {
  const id = useParams();
  const { blogs } = AppProductContext();
  let singleBlog = blogs.filter((currElem) => {
    return currElem.id === id.id;
  });
  const { title, category, image, author, date, article, tags } = singleBlog[0];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="body-container">
        <div className="single-blog-data">
          <h3 className="category-info-single">{category}</h3>
          <h2>{title}</h2>
          <div className="author-details-single">
            <div className="author-icon">
              <PiUserCircleLight style={{ fontSize: "1.3rem" }} />
              <h3>{author}</h3>
            </div>
            <h3>{date}</h3>
          </div>
          <img src={image} alt="single_post_image" />
          <p>
            {article}
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            eaque delectus porro aut eligendi voluptatum placeat. Rerum, maxime
            similique incidunt vel minima nam dicta officia cum molestiae? Sed
            odio amet voluptatem consequatur eius deleniti officia earum maiores
            hic, nostrum porro numquam incidunt culpa soluta tempora, iusto
            voluptas est fuga dolorem dignissimos perferendis iste odit
            consectetur? Nihil ipsam itaque deleniti rerum nostrum nisi
            praesentium quibusdam quasi nam consequatur accusamus tenetur eaque
            deserunt saepe facere optio consequuntur, maxime ab odio nesciunt
            excepturi.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            eaque delectus porro aut eligendi voluptatum placeat. Rerum, maxime
            similique incidunt vel minima nam dicta officia cum molestiae? Sed
            odio amet voluptatem consequatur eius deleniti officia earum maiores
            hic, nostrum porro numquam incidunt culpa soluta tempora, iusto
            voluptas est fuga dolorem dignissimos perferendis iste odit
            consectetur? Nihil ipsam itaque deleniti rerum nostrum nisi
            praesentium quibusdam quasi nam consequatur accusamus tenetur eaque
            deserunt saepe facere optio consequuntur, maxime ab odio nesciunt
            excepturi.
            <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            eaque delectus porro aut eligendi voluptatum placeat. Rerum, maxime
            similique incidunt vel minima nam dicta officia cum molestiae? Sed
            odio amet voluptatem consequatur eius deleniti officia earum maiores
            hic, nostrum porro numquam incidunt culpa soluta tempora, iusto
            voluptas est fuga dolorem dignissimos perferendis iste odit
            consectetur? Nihil ipsam itaque deleniti rerum nostrum nisi
            praesentium quibusdam quasi nam consequatur accusamus tenetur eaque
            deserunt saepe facere optio consequuntur, maxime ab odio nesciunt
            excepturi.
          </p>
          <h2 className="tags-heading">Popular Tags</h2>
          <div className="tags">
            {tags.map((currTag, i) => {
              return <p key={i}>{currTag}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
