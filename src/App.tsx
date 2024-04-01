import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Layout } from "./components/layout/Layout";
import { Courses } from "./pages/Courses/Courses";
import { Error } from "./pages/Error/Error";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/courses",
        children: [
          { index: true, element: <Courses /> },
          // { path: "/courses/:id", element: <Course /> },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
