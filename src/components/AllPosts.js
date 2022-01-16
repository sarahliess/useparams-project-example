import { Link } from "react-router-dom";
import { useState } from "react";

function AllPosts({ articles }) {
  // console.log(articles);

  const [selectedPosts, setSelectedPosts] = useState([]);

  const handleClick = (e) => {
    const addedPost = articles.some((a) => a === e.target.value)
      ? articles.filter((a) => a !== e.target.value)
      : [...articles, e.target.value];
    setSelectedPosts(addedPost);
  };

  console.log("selectedPosts", selectedPosts);

  return (
    <div>
      <Link to="/">
        <button>Back home</button>
      </Link>
      <div className="container">
        {articles &&
          articles.map((article) => {
            return (
              <div key={article.id} className="allpostspreview item">
                <h5 className="texttransform">{article.title}</h5>
                <Link to={`/posts/${article.id}`}>
                  <button>see more</button>
                </Link>
              </div>
            );
          })}
      </div>
      <a href="#start">
        <button>Scroll back to top</button>
      </a>
    </div>
  );
}

export default AllPosts;
