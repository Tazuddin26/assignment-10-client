import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Register from "../Account/Register/Register";
import Login from "../Account/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllReview from "../ReviewLayout/AllReview";
import AddReview from "../ReviewLayout/AddReview";
import ReviewDetails from "../ReviewLayout/ReviewDetails";
import UpdateReview from "../ReviewLayout/UpdateReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/allReview",
        element: (
          <PrivateRoute>
            <AllReview />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/allReviews"),
      },
      {
        path: "/addReview",
        element: <AddReview />,
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allReviews/${params.id}`),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allReviews${params.id}`),
      },
    ],
  },
]);

export default router;
