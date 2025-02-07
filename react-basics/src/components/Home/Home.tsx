import { useState } from "react";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/info">
        <button>Info Page</button>
      </Link>
      {/* usually this isn't hard coded but data from an api */}
      {/* api call outside of this render and load the data that way */}
      <Greeting firstName="jane" lastName="doe" age={5} />
      {/* these two buttons states should not be shared */}
      <Button name="Button 1" />
      <Button name="Button 2" />
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

// useState example
// two button components that inc the count and displays it
// have components - state should not be mixing each other

interface ButtonProps {
  name: string;
}
function Button({ name }: ButtonProps) {
  const [count, setCount] = useState<number>(0);
  // https://react.dev/learn/typescript#typing-usestate

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Click the button to increment the count {count}</p>
      <button onClick={increment}>{name}</button>
    </>
  );
}
export default Home;
