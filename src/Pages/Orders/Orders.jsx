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
		axios(url, { withCredentials: true })
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
							const updateState = orders?.filter(order => order._id !== id);
							setOrders(updateState);
						}
					})
					.catch(() => {
						toast.error("Something went wrong!😥");
					});
			}
		});
	};

	const handleConfirm = id => {
		axios
			.patch(`http://localhost:5000/orders/${id}`, { status: "Confirm" })
			.then(data => {
				console.log(data.data);
				if (data.data.modifiedCount) {
					// Jei gulote kono chage hobe na seigulo pete
					const notChanged = orders?.filter(order => order._id !== id);
					// Jetake update korlam setake pete
					const updatedStatus = orders?.find(order => order._id === id);
					// Status jehetu hardcoded dici seta set kore dilam
					updatedStatus.status = "Confirm";
					// Ekhon update kora object soho baki object gulo niye nibo and state a set kore dibo
					const updatedOrderWithStatus = [updatedStatus, ...notChanged];
					setOrders(updatedOrderWithStatus);

					toast.success("Status update successfull!😍");
				}
			})
			.catch(() => {
				toast.error("Something went wrong!😥");
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
								handleConfirm={handleConfirm}
							></OrderRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
