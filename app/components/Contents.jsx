import React from "react";
import Links from "./Links";
import Link from "next/link";

const Contents = () => {
	const link = "https://www.figma.com/file/";

	return (
		<div className="w-full 2xl:w-2/3 xl:w-5/6 m-auto mt-2 mb-10 sm:mt-32 xl:mt-28 sm:mb-28 px-2 sm:px-[53px]">
			<div className="text-[16px] mb-6 sm:mb-8 xl:mb-12">
				<Link href={"#links"}>
					<p className="font-semibold sm:font-bold sm:pt-3 lg:pt-6 xl:pt-0 pb-3 sm:pb-4 xl:pb-8 font2">
						MorxUIUX Portfolio (Links Below)
					</p>
				</Link>
				<p className="font-light sm:font-normal pb-3 sm:pb-4 xl:pb-8 text-sm xs:text-[16px]">
					Hello! I am Adesewa, a UI/UX Designer who helps clients bring their
					ideas to reality (Interactive design) via my UI/UX design skills such
					as empathy, UX research, Prototyping, User research, Figma, Adobe
					illustrator etc with the sole aim of creating enticing user-centered
					designs.
				</p>
				<p className="font-light sm:font-normal pb-3 sm:pb-4 xl:pb-8 text-sm xs:text-[16px]">
					The subsequent pages would show various deigned where I displayed
					unique expertise in user interface and user experience design.
				</p>
				<p className="font-light sm:font-normal text-sm xs:text-[16px]">
					Thank you.
				</p>
			</div>

			<div className="mt-0 sm:mt-2 text-[16px] mb-4 sm:mb-12">
				<h3 className="pb-4 sm:pb-5 font-semibold">Morx UIUX Services</h3>
				<h4 className="font-medium pb-4">My services include:</h4>
				<ul className="font-light sm:font-normal list-disc pl-6">
					<li className="pb-2 text-sm xs:text-[16px]">
						Static and Dynamic website design
					</li>
					<li className="pb-2 text-sm xs:text-[16px]">Landing Page design</li>
					<li className="pb-2 text-sm xs:text-[16px]">Wireframing</li>
					<li className="pb-2 text-sm xs:text-[16px]">
						Mobile first and responsive design
					</li>
					<li className="pb-2 text-sm xs:text-[16px]">Application design</li>
					<li className="pb-2 text-sm xs:text-[16px]">
						High fidelity wireframing
					</li>
				</ul>
			</div>
			<div className="text-base mb-9" id="links">
				<h3 className="font-medium">Portfolio Links Below</h3>
				<p className="text-[#1E1E1E] font-light sm:font-normal py-2 sm:py-4">
					Kindly click on the links below to have a look at my portfolio design
				</p>
				<div className="my-2">
					<Links
						href={`${link}xz4PbRk5GuxyTfWpkghLaj/Food-App?node-id=0%3A1&mode=dev`}
						text="The Food App"
					/>
					<Links
						href={`${link}FcVy4Hlji4ta4VY3wWMf9c/LANDING-PAGE-THE-GALLERY?node-id=0%3A1&mode=dev`}
						text="The Art Gallery Landing Page"
					/>
					<Links
						href={`${link}D1cqCpIf1P6TNmDaGL6GBL/ECOMMERCE-WEBSITE-PORTFOLIO?node-id=0%3A1&mode=dev`}
						text="ECOMMERCE PORTFOLIO WEBSITE"
					/>
					<Links
						href={`${link}xJtIQmtVyxHL7e9ckDYuPd/Finance-case-study?node-id=0%3A1&mode=dev`}
						text="Finance App"
					/>
					<Links
						href={`${link}aRIm7dV4lQfEm8xfJLV57e/Neubrutalism-Landing-Page?node-id=0%3A1&mode=dev`}
						text="School Library Website"
					/>
					<Links
						href={`${link}X9HGafIAicfLPBQYmQoyJf/Fundz-Project?node-id=0%3A1&mode=dev`}
						text="Fundz Investment App"
					/>
					<Links
						href={`${link}CH2d4d1WgJgRQHA0w9ws8n/LANDING-PAGE?node-id=0%3A1&mode=dev`}
						text="DOG'S Company Landing Page"
					/>
					<Links
						href={`${link}07VO2JsHfZKu6OYWDjzjmb/GADGETS?node-id=0%3A1&mode=dev`}
						text="Gadgets Landing Page"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contents;
