import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  //if the user is logged in, render the Outlet component, else redirect to the sign-in page
  //outlet is used to render the child routes of the private route
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
