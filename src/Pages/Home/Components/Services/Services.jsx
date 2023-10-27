import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("/services.json")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);

	return (
		<div className=" container mx-auto py-20">
			{/* Section title */}
			<div className=" text-center space-y-4">
				<p className=" text-red-500 font-semibold">Our Service</p>
				<h1 className="text-5xl text-[#151515] font-semibold w-full">
					Our Service Area
				</h1>
				<p className=" w-1/2 mx-auto text-gray-600">
					The majority have suffered alteration in some form, by injected
					humour, or randomised words which don&apos;t look even slightly
					believable.
				</p>
			</div>

			{/* Cards */}
			<div className=" grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{services?.map(service => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>

			<div className=" w-full flex justify-center items-center mt-5">
				<button
					type="button"
					className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
				>
					More Services
				</button>
			</div>
		</div>
	);
};

export default Services;
