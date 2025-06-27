import logo from "./assets/logo.svg";
import heroLeft from "./assets/images/desktop/image-hero-left.png";
import heroRight from "./assets/images/desktop/image-hero-right.png";
import manTexting from "./assets/images/desktop/image-man-texting.jpg";
import menInMeeting from "./assets/images/desktop/image-men-in-meeting.jpg";
import womanInVideocall from "./assets/images/desktop/image-woman-in-videocall.jpg";
import womenVideochatting from "./assets/images/desktop/image-women-videochatting.jpg";
import classes from "./MeetLandingPage.module.css";
import heroTablet from "./assets/images/tablet/image-hero.png";

const MeetingLandingPage = () => {
	return (
		<div className={classes.root}>
			<div className={classes.nav}>
				<img src={logo} alt="company logo" />
			</div>
			<div className={`${classes.hero} ${classes.section}`}>
				<img id={classes.tablet} className={`${classes.hero} ${classes.tablet}`} src={heroTablet} alt="a collection of faces in circles" />
				<div className={classes["hero-left"]}>
					<img src={heroLeft} alt="a collection of faces in circles" />
				</div>
				<div className={classes["text-content"]}>
					<div className={classes.title}>Group Chat for Everyone</div>
					<div className={classes["sub-title"]}>
						Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
					</div>
					<div className={classes["buttons-container"]}>
						<button className={classes.cyan}>
							Download <span>v1.3</span>
						</button>
						<button className={`${classes.purple}`}>What is it?</button>
					</div>
				</div>
				<div className={classes["hero-right"]}>
					<img src={heroRight} alt="a collection of faces in circles" />
				</div>
			</div>
			<div className={`${classes.main} ${classes.section}`}>
				<div className={classes["main-content"]}>
					<div className={classes.number}>
						<div className={classes.rectangle}></div>
						<div className={classes.circle}>01</div>
					</div>
					<div className={classes["image-collage"]}>
						<img src={womenVideochatting} alt=" women video chatting" />
						<img src={womanInVideocall} alt="woman in videocall" />
						<img src={menInMeeting} alt="men in a meeting" />
						<img src={manTexting} alt="man texting" />
					</div>
					<div className={classes["text-content"]}>
						<div className={classes.title}>Built for modern use</div>
						<div className={classes["sub-title"]}>Smarter meetings, all in one place</div>
						<div className={classes.content}>
							Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with
							invite-only team access, data encryption, and data export.
						</div>
					</div>
				</div>
			</div>
			<div className={classes.number}>
				<div className={classes.rectangle}></div>
				<div className={classes.circle}>02</div>
			</div>
			<div className={`${classes.footer} ${classes.section}`}>
				<div className={`${classes.footer} ${classes.content}`}>
					<div className={classes["text-content"]}>
						<div className={classes.title}>Experience more together</div>
						<div className={classes["sub-title"]}>
							Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
						</div>
						<button className={classes.purple}>
							Download <span> v1.3</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeetingLandingPage;
