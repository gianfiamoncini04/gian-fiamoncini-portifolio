export type AlertProps = {
	color?: string,
	describe?: string,
}

export default function Alert(props: AlertProps) {
	return (
		<>
			<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
				<div
					role="alert"
					className="relative block w-full text-base font-regular px-4 py-4 rounded-lg bg-gray-900 text-white">
					<div className=" mr-12">
						<p className={`font-bold ${props.color}`}>{props.describe}</p>
					</div>
				</div>
			</div>
		</>
	);
}
