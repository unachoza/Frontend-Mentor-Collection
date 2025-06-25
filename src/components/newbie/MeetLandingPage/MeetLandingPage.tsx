import logo from "./assets/logo.svg";
import heroLeft from "./assets/images/desktop/image-hero-left.png";
import heroRight from "./assets/images/desktop/image-hero-right.png";
import number1 from "./assets/images/number-1.png";
import number2 from "./assets/images/number-2.png";
import manTexting from "./assets/images/desktop/image-man-texting.jpg";
import menInMeeting from "./assets/images/desktop/image-men-in-meeting.jpg";
import womanInVideocall from "./assets/images/desktop/image-woman-in-videocall.jpg";
import womenVideochatting from "./assets/images/desktop/image-women-videochatting.jpg";
import "./MeetLandingPage.css";

const MeetingLandingPage = () => {
	return (
		<div className="root">
			<div className="nav">
				<img src={logo} alt="company logo" />
			</div>
			<div className="hero section">
				<div className="hero-left">
					<img src={heroLeft} alt="a collection of faces in circles" />
				</div>
				<div className="text-content">
					<div className="title">Group Chat for Everyone</div>
					<div className="sub-title">
						Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
					</div>
					<div className="buttons-container">
						<button className="cyan">
							Download <span>v1.3</span>
						</button>
						<button className="purple">What is it?</button>
					</div>
				</div>
				<div className="hero-right">
					<img src={heroRight} alt="a collection of faces in circles" />
				</div>
			</div>
			<div className="main section">
				<div className="main-content">
					<div className="number">
						<img src={number1} alt="number 1" />
					</div>
					<div className="image-collage">
						<img src={womenVideochatting} alt=" women video chatting" />
						<img src={womanInVideocall} alt="woman in videocall" />
						<img src={menInMeeting} alt="men in a meeting" />
						<img src={manTexting} alt="man texting" />
					</div>
					<div className="text-content">
						<div className="title">Built for modern use</div>
						<div className="sub-title">Smarter meetings, all in one place</div>
						<div className="content">
							{" "}
							Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with
							invite-only team access, data encryption, and data export.
						</div>
					</div>
				</div>
			</div>
			<div className="footer section">
				<div className="number">
					<img src={number2} alt="number 2" />
				</div>
				<div className="text-content">
					<div className="title">Experience more together</div>
					<div className="sub-title">Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</div>
					<button className="purple">
						Download <span> v1.3</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default MeetingLandingPage;
