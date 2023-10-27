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
		</div>
	);
};

export default Services;
