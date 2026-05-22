import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UpdateCar from "./pages/UpdateCar";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider from "./provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import ExploreCars from "./pages/ExploreCars";
import CarDetails from "./pages/CarDetails";

import AddCar from "./pages/AddCar";
import MyBookings from "./pages/MyBookings";
import MyAddedCars from "./pages/MyAddedCars";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [

      // HOME
      {
        path: "/",
        element: <Home />
      },

      // EXPLORE CARS
      {
        path: "/cars",
        element: <ExploreCars />
      },

      // SINGLE CAR DETAILS
      {
        path: "/cars/:id",
        element: <CarDetails />
      },

      // 🔒 PRIVATE ROUTES

      {
        path: "/add-car",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        )
      },

      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        )
      },

      {
        path: "/my-cars",
        element: (
          <PrivateRoute>
            <MyAddedCars />
          </PrivateRoute>
        )
      },

      {
  path: "/update-car/:id",
  element: (
    <PrivateRoute>
      <UpdateCar />
    </PrivateRoute>
  )
},

      // AUTH

      {
        path: "/login",
        element: <Login />
      },

      {
        path: "/register",
        element: <Register />
      },

      // 404
      {
        path: "*",
        element: <NotFound />
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);