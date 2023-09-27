import Image from "next/image";
import Link from "next/link";

const Links = ({ href, text }) => {
	return (
		<Link
			href={href}
			target="_blank"
			className="pt-4 flex gap-6 text-[#5C65B4]"
		>
			<Image src={"/docx.svg"} height={14} width={14} alt="link" />

			<p className="font-medium text-sm xs:text-[16px] border-b border-[#5c65b4]">
				{text}
			</p>
		</Link>
	);
};

export default Links;
