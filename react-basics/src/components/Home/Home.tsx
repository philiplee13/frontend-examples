import { useState } from "react";
import { Link } from "react-router";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

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
      <ShowTable />
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

function ShowTable() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      sortable: false,
    },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    // materialUI
    //https://mui.com/material-ui/react-table/
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
export default Home;
