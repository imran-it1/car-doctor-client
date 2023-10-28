import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import OrderRow from "./OrderRow";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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

	const handleDelete = id => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				axios
					.delete(`http://localhost:5000/orders/${id}`)
					.then(data => {
						console.log(data.data);
						if (data.data.deletedCount) {
							toast.success("Delete Successfull!✅");
						}
						const remainingOrders = orders?.filter(order => order._id !== id);
						setOrders(remainingOrders);
					})
					.catch(() => {
						toast.error("Something went wrong!😥");
					});
			}
		});
	};

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
							<th>Delete</th>
							<th>Service Details</th>
							<th>Email</th>
							<th>Price</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{orders?.map(order => (
							<OrderRow
								key={order._id}
								order={order}
								handleDelete={handleDelete}
							></OrderRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
