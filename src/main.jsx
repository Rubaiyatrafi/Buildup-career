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
import ReviewJobs from "./Components/ReviewJobs/ReviewJobs";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
        loader: () => fetch("/fakeData2.json"),
      },
      {
        path: "/review/:Id",
        element: <ReviewJobs></ReviewJobs>,
        loader: ({ params }) =>
          fetch(`/http://127.0.0.1:5173/fakeData.json/${params.Id}`),
      },
      // {
      //   path: "/review/:Id",
      //   element: <ReviewJobs></ReviewJobs>,
      //   loader: ({ params }) => fetch(`/fakeData.json`),
      // },
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
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
