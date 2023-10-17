import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Workshop from "../pages/Workshop";
import DetailsWorkshop from "../pages/DetailsWorkshop";
import Order from "../pages/Order";
import Advert from "../pages/Advert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/workshop", element: <Workshop /> },
      { path: "/detailsWorkshop", element: <DetailsWorkshop /> },
      { path: "/order", element: <Order /> },
      { path: "/advert", element: <Advert /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
