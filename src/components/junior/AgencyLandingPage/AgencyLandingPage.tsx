import logo from "./images/logo.svg";
import orangeSliceHeaderImage from "./images/desktop/image-header.jpg";
import eggRow1Image from "./images/desktop/image-transform.jpg";
import chaliceRow2Image from "./images/desktop/image-stand-out.jpg";
import cherryRow3Image from "./images/desktop/image-graphic-design.jpg";
import orangeRow3Image from "./images/desktop/image-photography.jpg";
import milkRow5Image from "./images/desktop/image-gallery-milkbottles.jpg";
import orangeSliceRow5Image from "./images/desktop/image-gallery-orange.jpg";
import coneRow5Image from "./images/desktop/image-gallery-cone.jpg";
import sugarCubesRow5Image from "./images/desktop/image-gallery-sugarcubes.jpg";

import facebookIcon from "./images/icon-facebook.svg";
import instagramIcon from "./images/icon-instagram.svg";
import twitterIcon from "./images/icon-twitter.svg";
import pintrestIcon from "./images/icon-pinterest.svg";
import arrow from "./images/icon-arrow-down.svg";

import hamburger from "./images/icon-hamburger.svg";

import emilyHeadshot from "./images/image-emily.jpg";
import jennieHeadshot from "./images/image-jennie.jpg";
import thomasHeadshot from "./images/image-thomas.jpg";

import classes from "./AgencyLandingPage.module.css";

const AgencyLandingPage = () => {
	return (
		<div className={classes.main}>
			<div className={classes.hero}>
				<div className={`${classes["nav-container"]}`}>
					<div className={classes.nav}>
						<img src={logo} className={classes.logo} alt="logo" />
						<ul className={`${classes["nav-links"]}`}>
							<li>About</li>
							<li>Services</li>
							<li>Projects</li>
							<li className={classes.active}>Contacts</li>
						</ul>
						<img src={hamburger} className={classes.hamburger} alt="hamburger icon" />
					</div>
					{/* mobile nav */}
					<div className={`${classes["mobile-nav-container"]}`}>
						<ul>
							<li>About</li>
							<li>Services</li>
							<li>Projects</li>
							<li className={classes.active}>Contacts</li>
						</ul>
					</div>
					<div className={classes.title}>We are creatives</div>
				</div>
				<img className={classes.arrow} src={arrow} alt="arrow icon" />
				<img src={orangeSliceHeaderImage} alt="orange" />
			</div>
			<div className={classes["grid-container"]}>
				{/* <!-- Item 1 --> */}
				<div className={`${classes["text-box-container"]} ${classes["item"]}`}>
					<div className={classes.title}>Transform your brand</div>
					<div className={classes.copy}>
						We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
						compelling visuals that do most of the marketing for you.
					</div>
					<div className={`${classes.link} ${classes.yellow}`}> Learn more</div>
				</div>
				{/* <!-- Item 2 --> */}
				<div className={classes.item}>
					<img src={eggRow1Image} className={classes["item-image"]} alt="egg" />
				</div>

				{/* <!-- Item 3 --> */}
				<div className={classes.item}>
					<img src={chaliceRow2Image} className={classes["item-image"]} alt="chalice" />
				</div>
				{/* <!-- Item 4 --> */}
				<div className={`${classes["text-box-container"]} ${classes["item"]}`}>
					<div className={classes.title}>Stand out to the right audience</div>
					<div className={classes.copy}>
						Using a collaborative formula of designers, researchers, photographers videographers, and copywriters, we'll build
						and extend your brand in digital places.
					</div>
					<div className={`${classes.link} ${classes.red}`}> Learn more</div>
				</div>

				{/* <!-- Item 5 --> */}
				<div className={`${classes["image-with-text-container"]} ${classes["item"]}`}>
					<img src={cherryRow3Image} className={`${classes["image-with-text"]}`} alt="cherry" />
					<div className={classes["text-container"]}>
						<div className={classes.title}>Graphic design</div>
						<div className={classes.copy}>
							Great design makes you memorable. We deliver artwork that underscores your brand message and captures
							potential clients' attention.
						</div>
					</div>
				</div>
				{/* <!-- Item 6 --> */}
				<div className={`${classes["image-with-text-container"]} ${classes["item"]}`}>
					<img src={orangeRow3Image} className={classes["image-with-text"]} alt="orange" />
					<div className={classes["text-container"]}>
						<div className={classes.title}>Photography</div>
						<div className={classes.copy}>
							Increase your credibility by getting the most stunning, high-quality photos that improve your business
							image.
						</div>
					</div>
				</div>

				{/* <!-- Item 7 --> */}
				<div className={`${classes["profile-row"]} ${classes["item"]}`}>
					<div className={classes.title}>CLIENT TESTIMONIALS</div>
					<div className={classes["testimonial-container"]}>
						<div className={`${classes["profile"]} ${classes["item"]}`}>
							<img src={emilyHeadshot} className={classes.image} alt="profile image" />
							<div className={classes.text}>
								We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were
								always hit.
							</div>
							<div className={classes.author}>
								<div className={classes.name}>Emily R.</div>
								<div className={classes["job-title"]}>Marketing Director</div>
							</div>
						</div>
						<div className={`${classes["profile"]} ${classes["item"]}`}>
							<img src={thomasHeadshot} className={classes.image} alt="profile image" />
							<div className={classes.text}>
								Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying
								and enjoyable experience.
							</div>
							<div className={classes.author}>
								<div className={classes.name}>Thomas S.</div>
								<div className={classes["job-title"]}>Chief Operating Officer</div>
							</div>
						</div>
						<div className={`${classes["profile"]} ${classes["item"]}`}>
							<img src={jennieHeadshot} className={classes.image} alt="profile image" />
							<div className={classes.text}>
								Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
								recommended!
							</div>
							<div className={classes.author}>
								<div className={classes.name}>Jennie F.</div>
								<div className={classes["job-title"]}>Business Owner</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`${classes["image-gallery"]} ${classes["item"]}`}>
					{/* <!-- Item 8 --> */}
					<div className={`${classes["gallery-image"]} ${classes["item"]}`}>
						<img src={milkRow5Image} alt="milk" />
					</div>
					{/* <!-- Item 9 --> */}
					<div className={`${classes["gallery-image"]} ${classes["item"]}`}>
						<img src={orangeSliceRow5Image} alt="orange slice" />
					</div>
					{/* <!-- Item 10 --> */}
					<div className={`${classes["gallery-image"]} ${classes["item"]}`}>
						<img src={coneRow5Image} alt="cone" />
					</div>
					{/* <!-- Item 11 --> */}
					<div className={`${classes["gallery-image"]} ${classes["item"]}`}>
						<img src={sugarCubesRow5Image} alt="sugarCubes" />
					</div>
				</div>
			</div>
			<div className={classes.footer}>
				<div className={classes.logo}></div>
				<ul className={classes["footer-nav-list"]}>
					<li>About</li>
					<li>Services</li>
					<li>Projects</li>
				</ul>
				<ul className={classes["socials-list"]}>
					<li>
						<img src={facebookIcon} className={classes["social-icon"]} alt="facebook" />
					</li>
					<li>
						<img src={instagramIcon} className={classes["social-icon"]} alt="instagram" />
					</li>
					<li>
						<img src={twitterIcon} className={classes["social-icon"]} alt="twitter" />
					</li>
					<li>
						<img src={pintrestIcon} className={classes["social-icon"]} alt="pinterest" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AgencyLandingPage;
