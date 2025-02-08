import { Link } from "react-router";
import { useState, useEffect } from "react";

function Info() {
  return (
    <>
      <h1>Info Page</h1>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <ShowList data={data} />
      <ShowText />
    </>
  );
}

// render lists example

const data = [
  { id: 1, name: "jane", age: 5 },
  { id: 2, name: "john", age: 10 },
  { id: 3, name: "bob", age: 20 },
  { id: 4, name: "dylan", age: 30 },
];

interface ApiData {
  data: any[];
}

function ShowList({ data }: ApiData) {
  const listUsers = data.map((user) => (
    <li key={user.id}>
      <p>user name is {user.name}</p>
      <p>user age is {user.age}</p>
    </li>
  ));
  return (
    <>
      <ul>{listUsers}</ul>
    </>
  );
}

// useEffect example
// show inital text, wait 3 seconds, then show updated text
// a real example would be calling an api and updating the component (like a table)
// useEffect should be used to sync with outside sources
function ShowText() {
  const [text, setText] = useState<string>("nothing");

  useEffect(() => {
    setTimeout(() => {
      console.log("inside timeout"); // why does this render twice
      // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
      // seems like something specific to development - but in real applications be careful
      setText("updated text after 3 seconds");
    }, 3000);
  }, [text]);
  return (
    <>
      <p>Text was {text}</p>
    </>
  );
}

export default Info;
