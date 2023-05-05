import StatCard from "./StatCard.tsx";
import Divider, { PlanarAlignment } from "./Divider.tsx";

function Stats() {
	return (
		<div className="justify-around p-5 m-5 flex overflow-x-auto no-scrollbar bg-slate-600 h-24 rounded-xl shadow-xl items-center">
			<StatCard stat="Total Cases" value="1,000,000" />
			<Divider color="slate-500" length="full" planar_alignment={PlanarAlignment.Vertical} width={null} />
			<StatCard stat="Total Deaths" value="1,000,000" />
		</div>
	)
}

export default Stats;
