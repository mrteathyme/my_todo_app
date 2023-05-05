interface Props {
	title: string;
	description: string;
	state: State;
	}

enum State {
  InProgress,
  Open,
  Completed,
  Canceled,
}

const state_accent_colors: { [key in State] : string } = {
    [State.InProgress]: "border-l-blue-500",
    [State.Completed]: "border-l-green-500",
    [State.Open]: "border-l-yellow-500",
    [State.Canceled]: "border-l-red-500"

}

const state_titles: { [key in State] : JSX.Element } = {
	[State.InProgress]: <div><h3 className="text-blue-500">In Progress</h3></div>,
	[State.Completed]: <div><h3 className="text-green-500">Completed</h3></div>,
	[State.Open]: <div><h3 className="text-yellow-500">Open</h3></div>,
	[State.Canceled]: <div><h3 className="text-red-500">Canceled</h3></div>
}

const a = <li></li>;

function TaskCard({ title, description, state }: Props) {
	return (
		<div className={`
		pl-5 
		hover:pl-4 
		w-full 
		bg-slate-600 
		min-h-24 
		border-l-4 
		rounded-xl 
		hover:border-l-8 
		mb-5 
		${state_accent_colors[state]}
		shadow-md
		shadow-black
		pr-5
		pb-5
		`}>
			{state_titles[state]}	
			<div className="p-1 shadow-inner shadow-black rounded bg-slate-500 divide-y">
				<h3 className="text-neutral-300">{title}</h3>
				<p className="text-neutral-300 truncate">{description}</p>
			</div>
		</div>
	);
}

export default TaskCard;

export { State };
