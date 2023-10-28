import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import OrderRow from "./OrderRow";

const Orders = () => {
	// State to save orders data
	const [orders, setOrders] = useState([]);
	// User info for query seacrh based on email to the database
	const { user } = useContext(AuthContext);

	const url = `http://localhost:5000/orders?email=${user?.email}`;
	useEffect(() => {
		axios(url)
			.then(data => {
				setOrders(data.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, [url]);

	console.log(orders);

	return (
		<div className=" container mx-auto py-5">
			{/* heading */}
			<div className="text-center py-5 space-y-1">
				<h1 className=" text-5xl font-bold text-red-500 ">All Orders</h1>
				<p className="  text-2xl font-semibold "> Total: {orders.length} </p>
			</div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Service Details</th>
							<th>Email</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{orders?.map(order => (
							<OrderRow key={order._id} order={order}></OrderRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
