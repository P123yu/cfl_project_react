import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useStore from "./ZustandStore";
function PrivateRoutes() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated } = useStore();
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>;
}
export default PrivateRoutes;
