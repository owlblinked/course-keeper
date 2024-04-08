import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Statistics } from "./pages/Statistics/Statistics";
import { Layout } from "./components/layout/Layout";
import { Courses } from "./pages/Courses/Courses";
import { Error } from "./pages/Error/Error";
import { NewCourse } from "./pages/NewCourse/NewCourse";
import { Home } from "./pages/Home/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/courses",
        children: [
          { index: true, element: <Courses /> },
          { path: "/courses/new", element: <NewCourse /> },
          // { path: "/courses/:id", element: <Course /> },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
