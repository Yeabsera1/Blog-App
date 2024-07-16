import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";


import "./App.css";

import HomePage from "../src/Pages//HomePage";
import BlogsPage from "./Pages/Blogs";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  // {
  //   path: "/categories",
  //   element: <CategoriesPage />,
  // },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
  // {
  //   path: "/blog/:blogId",
  //   element: <BlogPage />,
  // },
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
  
}

export default App;