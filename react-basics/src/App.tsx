import "./App.css";
import { routes } from "./components/Routes/Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
export default App;
