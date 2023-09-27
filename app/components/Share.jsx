import Image from "next/image";
import React from "react";

const Share = ({ src, text }) => {
	return (
		<div className="px-0 xfold:px-2 mb-10 flex items-center w-[230px] xfold:w-[300px] xs:w-[350px] justify-between">
			<div className="flex text-center items-center">
				<Image
					src={src}
					height={24}
					width={24}
					alt="share-icon"
					className="w-auto h-auto"
				/>

				<p className="pl-2 xfold:pl-4 text-base font-medium">Share {text}</p>
			</div>
			<div className="pr-2 xfold:pr-0">
				<Image
					src={"/arrow.svg"}
					height={14}
					width={7}
					alt="click-arrow-icon"
					className="w-auto h-auto"
				/>
			</div>
		</div>
	);
};

export default Share;
