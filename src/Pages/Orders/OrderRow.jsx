import PropTypes from "prop-types";

const OrderRow = ({ order, handleDelete, handleConfirm }) => {
	const {
		_id,
		customerEmail,
		date,
		serviceName,
		img,
		ServiceID,
		Price,
		status,
	} = order || {};

	console.log(order);

	// console.log(Object.keys(order).join(","));

	return (
		<tr>
			<th>
				<button
					onClick={() => handleDelete(_id)}
					className="btn btn-circle btn-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={img} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div>
						<div className="font-bold">{serviceName}</div>
						<p>{date}</p>
						<div className="text-sm opacity-50">{ServiceID}</div>
					</div>
				</div>
			</td>
			<td>
				<span className="badge badge-ghost badge-sm">{customerEmail}</span>
			</td>
			<td>{Price}</td>
			<th>
				{status === "Confirm" ? (
					<span className="font-medium text-lg px-2 py-2 rounded-md border border-green-500">
						Confirmed
					</span>
				) : (
					<button
						onClick={() => handleConfirm(_id)}
						className="btn btn-error btn-sm btn-outline"
					>
						Pending
					</button>
				)}
			</th>
		</tr>
	);
};

OrderRow.propTypes = {
	order: PropTypes.object,
	handleDelete: PropTypes.func,
	handleConfirm: PropTypes.func,
};

export default OrderRow;
