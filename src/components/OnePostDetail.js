import { useParams, Link } from "react-router-dom";

function OnePostDetail({ articles }) {
  const { id } = useParams();
  const postDetails = articles && articles.find((e) => e.id == id);
  console.log(postDetails);

  return (
    <div className="postcontainer">
      <div className="post-detail">
        <h2 className="texttransform">{postDetails.title}</h2>
        <h4>{postDetails.body}</h4>
        The ID for this post is {postDetails.id} <br />
        The UserId for this post is {postDetails.userId}
        <Link to={`/posts/${postDetails.id}`}>
          <br />
          <button>Back to the article </button>
        </Link>
        <Link to="/posts">
          <button>Back to all posts </button>
        </Link>
        <Link to="/">
          <button>Back home</button>
        </Link>
      </div>
    </div>
  );
}

export default OnePostDetail;
