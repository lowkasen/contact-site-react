import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function RequireAuth() {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== "authenticated") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
