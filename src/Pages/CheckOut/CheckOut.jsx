import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const CheckOut = () => {
	const { user } = useContext(AuthContext);
	const userName = user?.displayName;
	const userEmail = user?.email;

	const loadedService = useLoaderData();
	console.log(loadedService);
	const { title, price, description, service_id, img } = loadedService || {};

	const handleBookOrder = e => {
		e.preventDefault();

		const form = e.target;

		const name = form.name.value || "Not given";
		const date = form.date.value || "Not given";
		const email = userEmail || "Not given";
		const payable = form.payable.value || "Not given";
		const message = form.message.value || "Not given";

		const orderData = {
			customerName: userName,
			customerEmail: email,
			serviceName: name,
			ServiceID: service_id,
			date,
			Price: payable,
			message,
			img,
		};

		// AXIOS
		axios
			.post("http://localhost:5000/orders", orderData)
			.then(data => {
				console.log(data.data);
				if (data.data.acknowledged) {
					toast.success("Oder save to the database😎");
				}
			})
			.catch(err => [console.error(err)]);
	};

	return (
		<div className=" container mx-auto">
			{/* heading */}
			<div className="text-center py-5 space-y-1">
				<h1 className=" text-5xl font-bold text-red-500 ">CheckOut</h1>
				<p className="  font-medium text-red-500">Service: {title} </p>
			</div>
			<form onSubmit={handleBookOrder} className=" space-y-5 mt-5">
				{/* First Row */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="form-control w-full">
						<input
							type="text"
							name="name"
							placeholder="Service Name"
							defaultValue={title}
							className="input input-bordered w-full"
						/>
					</div>
					<div className="form-control w-full ">
						<input
							type="date"
							name="date"
							className="input input-bordered w-full"
						/>
					</div>
				</div>
				{/* Second Row */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="form-control w-full">
						<input
							type="email"
							name="email"
							placeholder="Customer Email"
							defaultValue={userEmail}
							className="input input-bordered w-full"
							disabled
						/>
					</div>
					<div className="form-control w-full ">
						<input
							type="text"
							name="payable"
							placeholder="Payable"
							defaultValue={`$${price}`}
							className="input input-bordered w-full"
						/>
					</div>
				</div>

				{/* Textarea */}
				<div>
					<textarea
						name="message"
						className="textarea text-base text-gray-700 textarea-bordered textarea-lg w-full"
						placeholder="Custom instraction"
						rows={4}
						defaultValue={description}
					></textarea>
				</div>
				<div className=" w-full mt-5">
					<input
						className=" w-full  focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-full transition-all ease-linear duration-500 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 tracking-wider hover:cursor-pointer"
						type="submit"
						value="Order Confirm"
					/>
				</div>
			</form>
		</div>
	);
};

export default CheckOut;
