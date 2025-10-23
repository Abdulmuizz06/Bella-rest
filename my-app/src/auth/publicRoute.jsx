import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { user } = useContext(UserContext);

  return <>{user == null ? <Outlet /> : <Navigate to="/admin/dashboard" />}</>;
};

export default PublicRoute;