import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLocation();
	console.log("From Private Route", location);

	if (user) {
		return children;
	}

	if (loading) {
		return (
			<div className=" h-screen flex justify-center items-center">
				<progress className="progress w-56"></progress>
			</div>
		);
	}

	return <Navigate to={"/login"} state={location.pathname} replace></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
