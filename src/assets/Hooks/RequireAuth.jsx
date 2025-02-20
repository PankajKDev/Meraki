import { useAuth } from "@clerk/clerk-react";
import PropTypes from "prop-types";
import { Navigate } from "react-router";

const RequireAuth = ({ children }) => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};
export default RequireAuth;
RequireAuth.propTypes = {
  children: PropTypes.node,
};
