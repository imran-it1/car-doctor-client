import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { _id, title, img, price } = service || {};

	return (
		<div className=" max-w-md p-4 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
			<img
				src={img}
				alt="service image"
				className="bg-cover object-center w-full rounded-md h-60 dark:bg-gray-500"
			/>
			<div className="mt-6 mb-2">
				<h2 className="text-xl font-semibold tracki">{title}</h2>
			</div>
			<div className=" flex justify-between">
				<p className=" text-red-500 font-bold"> Price:${price} </p>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
							stroke="#FF3811"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</a>
			</div>
			<div>
				<Link to={`/checkout/${_id}`}>
					<button className=" btn btn-block bg-red-500 hover:bg-red-600 mt-5 text-white">
						CheckOut
					</button>
				</Link>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.object,
};

export default ServiceCard;
