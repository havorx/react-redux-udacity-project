import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FC, useEffect } from "react";
import { RootState } from "../rootReducer";

interface Props {
  component: FC;
}

function ProtectedRoute({ component: Component }: Props): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/login?url=${location.pathname}`);
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
