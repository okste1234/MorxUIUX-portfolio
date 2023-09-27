import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<div className="">
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
			<div className="bg-[#B67DB8] h-72 sm:h-96 max-w-full m-auto text-white">
				<div className="text-center pt-2 sm:pt-4">
					<h1 className="text-[40px] font-normal">Design</h1>
				</div>
				<div className="xfold:text-xl sm:text-2xl ml-8 font-normal pt-6 pb-0 sm:pt-36 sm:pb-20 font2">
					<ol className="gap-4 flex flex-col sm:flex-row justify-around list-disc">
						<li>Mobile Design</li>
						<li>Website Design</li>
						<li>Product Design</li>
					</ol>
				</div>
			</div>
			<div className="absolute right-2 sm:left-0 top-[14%] sm:top-[27%] sm:ml-12 md2:top-[22%] lg:top-[45%] xl:top-1/3 2xl:ml-80 lg:ml-14 xl:ml-40 -z-0">
				<Image
					src={"/img2.png"}
					height={231}
					width={228}
					alt="img"
					className="pt-12 xfold:pt-6 sm:pt-8 lg:pt-12 rounded-2xl w-[100px] xfold:w-[130px] sm:w-[228px]"
				/>
			</div>
		</div>
	);
};

export default Header;
