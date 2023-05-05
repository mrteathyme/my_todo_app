interface Props {
	stat: string;
	value: string;
}

function StatCard({ stat, value }: Props) {
	return (
		<div className="stat-card">
			<h3>{stat}</h3>
			<p>{value}</p>
		</div>
	);
}

export default StatCard;
