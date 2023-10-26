import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Home/Shared/Footer/Footer";

const Main = () => {
	return (
		<div className="">
			<p>Navbar</p>
			<Outlet></Outlet>
			<Footer />
		</div>
	);
};

export default Main;
