import Share from "./Share";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";

const Shares = () => {
	let host = location.hostname;
	const url = `https://${host}`;
	const quote = "Hi, I'm Adesewa, @MorxUIUX. See Portfolio here";
	const hashtag = "#MorxUIUX portfolio";
	const title = "Sharing Content";
	return (
		<div>
			<FacebookShareButton
				url={url}
				quote={quote}
				hashtag={hashtag}
				title={title}
			>
				<Share src={"/facebook.svg"} text={"on Facebook"} />
			</FacebookShareButton>

			<LinkedinShareButton
				url={url}
				quote={quote}
				hashtag={hashtag}
				title={title}
			>
				<Share src={"/linkedin.svg"} text={"on LinkedIn"} />
			</LinkedinShareButton>

			<TwitterShareButton
				url={url}
				quote={quote}
				hashtag={hashtag}
				title={title}
			>
				<Share src={"/twitter.svg"} text={"on Twitter"} />
			</TwitterShareButton>

			<WhatsappShareButton
				url={url}
				quote={quote}
				hashtag={hashtag}
				title={title}
			>
				<Share src={"/whatsapp.svg"} text={"on WhatsApp"} />
			</WhatsappShareButton>

			<EmailShareButton url={url} quote={quote} hashtag={hashtag} title={title}>
				<Share src={"/mail.svg"} text={"via Email"} />
			</EmailShareButton>
		</div>
	);
};

export default Shares;
