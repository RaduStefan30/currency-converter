import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Converted from "./pages/Converted/Converted";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      { path: "*", element: <Home /> },
      {
        path: "currency/:id",
        element: <Converted />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
