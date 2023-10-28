import PropTypes from "prop-types";

const OrderRow = ({ order }) => {
	const { customerEmail, date, serviceName, img, ServiceID, Price } =
		order || {};

	return (
		<tr>
			<th>
				<label>
					<input type="checkbox" className="checkbox" />
				</label>
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
				<button className="btn btn-ghost">details</button>
			</th>
		</tr>
	);
};

OrderRow.propTypes = {
	order: PropTypes.object,
};

export default OrderRow;
