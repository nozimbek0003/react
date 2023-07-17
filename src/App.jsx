import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePost from "./components/Single";
import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/a/:id",
      element: <SinglePost />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
