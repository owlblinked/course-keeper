import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
