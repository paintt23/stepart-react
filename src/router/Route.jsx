import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Workshop from "../pages/Workshop";
import DetailsWorkshop from "../pages/DetailsWorkshop";
import Order from "../pages/Order";
import Advert from "../pages/Advert";
import OrderHistory from "../pages/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/workshop", element: <Workshop /> },
      { path: "/detailsWorkshop/:id", element: <DetailsWorkshop /> },
      { path: "/order/:id", element: <Order /> },
      { path: "/advert", element: <Advert /> },
      { path: "/orderHistory", element: <OrderHistory /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
