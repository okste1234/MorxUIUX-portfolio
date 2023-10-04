import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<div className="">
			<div className="bg-white">
				<Link
					href={"/"}
					className="font1 inline-flex items-center py-3 ml-2 sm:py-5 sm:ml-9"
				>
					<Image
						src={"/img.png"}
						height={18}
						width={18}
						alt="img"
						className="mr-2"
					/>
					<p className="text-xs sm:text-sm">MorxUIUX Portfolio</p>
				</Link>
			</div>
			<div className="relative bg-[#B67DB8] h-72 sm:h-96 max-w-full m-auto text-white">
				<div className="overflow-hidden absolute w-full h-full">
					<span className="absolute -top-1/3 -left-24 shadow-xl border-[52px] border-[#D6BBD7] rounded-full p-24"></span>
					<span className="absolute -top-1/3 right-1/3 shadow-xl border-[52px] border-[#D6BBD7] rounded-full p-[280px]"></span>
					<span className="absolute -bottom-72 -right-28 shadow-xl border-[52px] border-[#D6BBD7] rounded-full p-52"></span>
				</div>

				<div className="relative text-center pt-2 sm:pt-4">
					<h1 className="text-[40px] font-normal">Design</h1>
				</div>
				<div className="relative text-xl xs:text-2xl ml-8 font-medium pt-6 pb-0 sm:pt-36 sm:pb-20 font2">
					<ol className="gap-4 flex flex-col sm:flex-row justify-around list-disc">
						<li>Mobile Design</li>
						<li>Website Design</li>
						<li>Product Design</li>
					</ol>

					<div className="absolute top-3.5 xfold:top-2.5 sm:top-2/3 xl:top-1/2 right-2 sm:left-0 sm:ml-12 lg:ml-14 xl:ml-40 2xl:ml-80 -z-0">
						<Image
							src={"/img2.png"}
							height={231}
							width={228}
							alt="img"
							style={{ width: "auto", height: "auto" }}
							className="pt-5 sm:pt-8 lg:pt-12 rounded-2xl w-[100px] xfold:w-[130px] sm:w-[228px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
