import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
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

	return <Navigate to={"/register"}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
