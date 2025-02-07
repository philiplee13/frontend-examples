import { Link } from "react-router";

function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link to="/info">
          <button>Info Page</button>
        </Link>
        {/* usually this isn't hard coded but data from an api */}
        {/* api call outside of this render and load the data that way */}
        <Greeting firstName="jane" lastName="doe" age={5} />
      </div>
    </>
  );
}
// props example with typescript

interface GreetingProps {
  firstName: string;
  lastName: string;
  age: number;
}
function Greeting({ firstName, lastName, age }: GreetingProps) {
  return (
    <>
      <p>Welcome {firstName}</p>
      <p>Last name is {lastName}</p>
      <p>Age is {age}</p>
    </>
  );
}

export default Home;
