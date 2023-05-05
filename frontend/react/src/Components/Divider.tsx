interface Props {
	color: string;
	length: string;
	planar_alignment: PlanarAlignment;
	width: string | null;
}

enum PlanarAlignment {
	Vertical,
	Horizontal,
	}

function Divider({ color, length, planar_alignment, width }: Props) {
	const margin = planar_alignment === PlanarAlignment.Vertical ? `mx-auto` : `my-auto`;
	const size = planar_alignment === PlanarAlignment.Vertical ? `h-${length}` : `w-${length}`;
	const border_width = width === null ? `border` : `border-${width}`
	return (
	<div className={`${margin} ${border_width} border-${color} ${size}`}/>
	);
}

export default Divider;
export { PlanarAlignment };
