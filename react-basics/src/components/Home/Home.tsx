import { Link } from "react-router";

function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link to="/info">
          <button>Info Page</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
