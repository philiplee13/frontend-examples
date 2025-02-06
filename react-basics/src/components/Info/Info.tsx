import { Link } from "react-router";

function Info() {
  return (
    <>
      <h1>Info Page</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </>
  );
}

export default Info;
