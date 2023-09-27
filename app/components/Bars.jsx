import Link from "next/link";

const Bars = ({ text, href }) => {
	return (
		<Link
			href={href}
			target={"_blank"}
			className="rounded-xl navbar bg-[#AD76AE]/50 xs:w-[490px] sm:w-[576px] h-[63px] justify-center mb-4"
		>
			<div className="flex-auto justify-center">
				<div className="text-center font-medium">{text}</div>
			</div>
			<div className="hidden xfold:block">
				<div className="justify-center flex items-center rounded-full p-2 btn-ghost border-[#DAD9D9] bg-[#ccc]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg>
				</div>
			</div>
		</Link>
	);
};

export default Bars;
