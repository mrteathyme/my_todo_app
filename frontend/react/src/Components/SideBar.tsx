import { useState } from "react";


interface Props {
	buttons: { title: string, onClick: () => void }[];
	open: boolean;
}


//const width = "w-1/6";


function SideBar({ buttons }: Props) {
	const [open, setOpen] = useState(false);
	let width = open ? "w-52" :"w-1/2";
	let hamburger_class = open ? "py-2 px-4" : "py-2 px-4";
	let button_class = open ? "bg-slate-500 hover:bg-slate-400 text-neutral-300 text-lg font-bold py-2 px-4 rounded" : "hidden";
	return (
		<div>
		<div className={`bg-slate-600 ${width} h-screen shadow-md shadow-black sticky top-0 overflow-clip mr-5`}>
			<button onClick={() => setOpen(!open)} className={`bg-slate-200 ${hamburger_class} rounded text-neutral-300 text-lg font-bold`}/>
			<ul className="flex flex-col">
				{buttons.map((button, index) => (
					<li key={index} className={`${open && "p-5"}`}>
						<button onClick={button.onClick} className={button_class}>
							<p className={`${!open && "hidden"}`}> {button.title} </p>
						</button>
					</li>
				))}
			</ul>
		</div>
		</div>
	);

}

export default SideBar;
