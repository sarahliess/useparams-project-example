import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

function OnePost({ articles }) {
  const { id } = useParams();
  //IMPORTANT: The id of useParams is a string, not an integer. So either use == or turn it into an integer with parseInt(id, 10) >>  10 = decimal
  //https://www.w3schools.com/jsref/jsref_parseint.asp

  const thisArticle =
    articles && articles.find((e) => e.id === parseInt(id, 10));
  console.log("this article", thisArticle);

  return (
    <div className="postcontainer">
      <div className="post-detail">
        <p className="texttransform">
          <b>{thisArticle.title}</b>
        </p>
        <p>This article has the id {thisArticle.id}</p>
        <Link to="/">
          <button>Back home</button>
        </Link>
        <Link to="/posts">
          <button className="buttonmargin">Back to all posts</button>
        </Link>
        <Link to={`/posts/${thisArticle.id}/${thisArticle.title}`}>
          {/* Here we are giving a value to the :xyz placeholder! */}
          <button>More details</button>
        </Link>
      </div>
    </div>
  );
}

export default OnePost;
