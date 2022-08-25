import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

const PublicRoute = ({ redirectTo="/" }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        isLoggedIn ? <Navigate to={redirectTo} replace/> : <Outlet/>
    );
};

export default PublicRoute;




