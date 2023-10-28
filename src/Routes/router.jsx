import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
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
				path: "/checkout/:id",
				element: <CheckOut />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
		],
	},
]);

export default router;
