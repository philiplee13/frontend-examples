import { Link } from "react-router";

function Info() {
  return (
    <>
      <h1>Info Page</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <ShowList data={data} />
    </>
  );
}

// render lists example

const data = [
  { name: "jane", age: 5 },
  { name: "john", age: 10 },
  { name: "bob", age: 20 },
  { name: "dylan", age: 30 },
];

interface ApiData {
  data: any[];
}

function ShowList({ data }: ApiData) {
  const listUsers = data.map((user) => (
    <>
      <p>user name is {user.name}</p>
      <p>user age is {user.age}</p>
    </>
  ));
  return (
    <>
      <ul>{listUsers}</ul>
    </>
  );
}

// useEffect example

export default Info;
