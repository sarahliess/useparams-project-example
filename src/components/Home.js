import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homecontainer">
      <p className="hometext">
        This is a simple blog with some mock-data that uses the react hooks
        useParams, useEffect & useState. Unfortunately, there is really not more
        to it.
        <br />
        <br />
        If you came here to see exciting articles, I'm sorry to disappoint you.
        But{" "}
        <a
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlaC6XAwdWHsrVlcAXeiDbdRwAUrXptX8JA&usqp=CAU"
          target="_blank"
          rel="noreferrer"
        >
          here's
        </a>{" "}
        a photo of a cute dog. You're welcome.
      </p>
      <Link to="/posts">
        <button>View all articles</button>
      </Link>
    </div>
  );
}

export default Home;
