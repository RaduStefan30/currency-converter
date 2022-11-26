import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Converter from "./components/Converter/Converter";
import CurrencyRates from "./pages/CurrencyRates/CurrencyRates";
import Currencies from "./pages/Currencies/Currencies";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      { path: "*", element: <Currencies /> },
      {
        path: "currency/:id",
        element: <CurrencyRates />,
      },
      {
        path: "converter",
        element: <Converter />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
