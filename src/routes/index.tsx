import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";

const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
