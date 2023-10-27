import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Home/Shared/Footer/Footer";
import Navbar from "../../Pages/Home/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet></Outlet>
			<Footer />
			<Toaster />
		</div>
	);
};

export default Main;
