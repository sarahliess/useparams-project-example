import "./styles.css";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import OnePostDetail from "./components/OnePostDetail";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [articles, setArticles] = useState("");
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setArticles(res.data);
        console.log(articles);
      })
      .catch((err) => console.log("Something went wrong: " + err));
  }, []);

  return (
    <div id="start" className="App">
      <h1>A simple blog</h1>
      <h3>Using useParams, useEffect & useState</h3>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<AllPosts articles={articles} />} />
        <Route
          path="/posts/:id"
          element={<OnePost key={articles.id} articles={articles} />}
        />
        <Route
          element={<OnePostDetail articles={articles} />}
          path="/posts/:id/:placeholder"
        />
        {/* We are defining a placeholder route "/:xyz/:zzz" will assign its value later. It actually doesn't matter how we name this*/}
      </Routes>
    </div>
  );
}
