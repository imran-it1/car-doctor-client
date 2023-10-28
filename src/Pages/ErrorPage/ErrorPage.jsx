import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.svg";

const ErrorPage = () => {
	return (
		<div className=" h-screen flex flex-col gap-10 justify-center items-center ">
			<img src={errorImg} alt="errorSVG" />
			<div>
				<Link to={"/"} className=" btn btn-info">
					Go To Home
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
