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
import Users from "../Account/Users";
import MyReviews from "../ReviewLayout/WatchList/MyReviews";
import WatchReviewData from "../ReviewLayout/WatchList/WatchReviewData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://assignment-10-server-beta-steel.vercel.app/allReviews"
          ),
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
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://assignment-10-server-beta-steel.vercel.app/users`),
      },

      {
        path: "/allReview",

        element: (
          <PrivateRoute>
            <AllReview />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://assignment-10-server-beta-steel.vercel.app/allReviews"
          ),
      },
      {
        path: "/myReviews/:email",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://assignment-10-server-beta-steel.vercel.app/allReviews`
          ),
      },
      {
        path: "/watchList/:email",
        element: (
          <PrivateRoute>
            <WatchReviewData />
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/reviewDetails/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-beta-steel.vercel.app/allReviews/${params.id}`
          ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-beta-steel.vercel.app/allReviews/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
