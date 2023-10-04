"use client";

import Image from "next/image";
import Bars from "./Bars";
import Shares from "./Shares";
import useClipboard from "react-use-clipboard";
import React, { useState, useEffect } from "react";

const Onboarding = () => {
	const [host, setHost] = useState("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHost(window.location.host);
		}
	}, []);

	const mailHandler = (e) => {
		e.preventDefault();
		window.location.href = `mailto:kolawolesewa60@gmail?body=Hi Adesewa @MorxUIUX. My name is ...`;
	};

	const [copy, setCopy] = useClipboard(null);

	return (
		<div>
			<div className="relative overflow-y-hidden">
				<div className="-z-20">
					<div className="absolute -left-20 xfold:-left-8 md:left-0 -top-4 md:top-48">
						<div>
							<span className="shadow-xl border-8 border-[#D6BBD7] rounded-[100%] p-24"></span>
						</div>
						<div className="">
							<span className="bg-white absolute -left-28 shadow-2xl border-8 border-[#D6BBD7] rounded-[100%] p-24"></span>
						</div>
					</div>
					<div className="absolute -right-20 xfold:-right-16 xs:right-8 bottom-10 lg:bottom-16">
						<div>
							<span className="shadow-2xl border-8 border-[#D6BBD7] rounded-[100%] p-24"></span>
						</div>
						<div className="">
							<span className="bg-white absolute -left-32 shadow-2xl border-8 border-[#D6BBD7] rounded-[100%] p-24"></span>
						</div>
					</div>
				</div>
				<div className="w-5/6 m-auto flex flex-col">
					<div className="pt-4">
						<button
							className="btn btn-circle float-right"
							onClick={() => document.getElementById("my_modal_3").showModal()}
						>
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
						</button>
						<dialog id="my_modal_3" className="modal">
							<div className="modal-box w-[255px] xfold:w-[350px] xs:w-[390px] overflow-x-hidden">
								<form
									method="dialog"
									className="flex justify-center items-center mb-14"
								>
									{/* if there is a button in form, it will close the modal */}
									<h3 className="text-center font-medium text-lg">
										Share this link
									</h3>
									<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
										✕
									</button>
								</form>

								<Shares link={host} />

								<div className="mt-6 flex text-center items-center border py-6 border-[#D9D9D9]">
									<p className="xfold:px-4 sm:px-8 text-base font-medium">
										{"morxuiux-portfolio.vrrcrl.app"}
									</p>

									<button
										onClick={() => {
											setCopy(host);
										}}
										className="text-base font-medium"
									>
										Copy
									</button>
								</div>

								{copy && <p>Copied!</p>}
							</div>
						</dialog>
					</div>

					<div className="my-4 z-20">
						<div className="text-center flex-col flex items-center mb-3">
							<Image
								src="/img.png"
								alt="my-image"
								width={167}
								height={167}
								priority
								style={{ width: "auto", height: "auto" }}
								className="object-cover object-center border rounded-full items-center"
							/>
							<h3 className="text-center text-xl mt-4 font-bold">@Morxuiux</h3>
							<p className="text-center text-xl font-semibold p-2 my-2">
								Bringing your ideas to life via design
							</p>
						</div>

						<div className="mt-2 flex-col flex items-center">
							<Bars text={"Check Out My Portfolio"} href={"/design"} />

							<Bars
								text={"Check Me Out on Linkedin"}
								href={"https://www.linkedin.com/in/adesewa-kolawole"}
							/>
							<Bars
								text={"Check Out My CV"}
								href={"/AdesewaCV.pdf"}
								download={true}
							/>
							<Bars
								text={"Check Me Out on Twitter"}
								href={"https://twitter.com/AdesewaKolawol5"}
							/>
							<div className="text-base rounded-xl navbar bg-[#AD76AE]/50 xs:w-[490px] sm:w-[576px] h-[63px] justify-center mb-4 cursor-pointer">
								<button
									onClick={(e) => mailHandler(e)}
									className="flex-auto justify-center font-medium"
								>
									Shoot me a Mail
								</button>
								<button
									className=""
									onClick={() =>
										document.getElementById("my_modal_3").showModal()
									}
								>
									<div className="hidden xfold:block justify-center items-center rounded-full p-2 btn-ghost border-[#DAD9D9] bg-[#ccc]">
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
								</button>
							</div>
							<div>
								<button
									onClick={(e) => mailHandler(e)}
									id="mail"
									className="mt-8"
								>
									<Image
										src={"/Email.svg"}
										width={34}
										height={25}
										className="w-auto h-auto"
										alt="mail"
									/>
								</button>
							</div>
						</div>
						<div className="mb-20"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Onboarding;
