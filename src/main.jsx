import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Layout/Home";
import Body from "./Components/Body/Body";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
        loader: () => fetch("fakeData2.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
