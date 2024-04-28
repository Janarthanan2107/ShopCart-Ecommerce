import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root/Root";
import NotFound from "./routes/NotFound/NotFound.jsx";
import Home from "./routes/Home/Home.jsx";
import Shop from "./routes/Shop/Shop.jsx";

import "./App.css";
import ProductDetails from "./components/product/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "categories",
        element: <h1>categories</h1>,
      },
      {
        path: "aboutUs",
        element: <h1>about Us</h1>,
      },
      {
        path: "contactUs",
        element: <h1>contact Us</h1>,
      },
      {
        path: "cart",
        element: <h1>cart</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
