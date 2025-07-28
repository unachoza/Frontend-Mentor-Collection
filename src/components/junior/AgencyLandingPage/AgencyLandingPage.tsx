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

import emilyHeadshot from "./images/image-emily.jpg";
import jennieHeadshot from "./images/image-jennie.jpg";
import thomasHeadshot from "./images/image-thomas.jpg";

import classes from "./AgencyLandingPage.module.css";

const AgencyLandingPage = () => {
	return (
		<div className={classes.main}>
			<div className={classes.hero}>
				{" "}
				hero
				<img src={orangeSliceHeaderImage} alt="orange" />
			</div>
			<div className={`${classes["grid-container"]}`}>
				{/* <!-- Row 1 --> */}
				<div className={`${classes["text-box"]} ${classes["item"]}`}>
					<div className={classes.title}></div>
					<div className={classes.copy}></div>
					<div className={classes.link}></div>
				</div>
				<div className={classes.item}>
					<img src={eggRow1Image} alt="egg" />
				</div>

				{/* <!-- Row 2 --> */}
				<div className={classes.item}>
					<img src={chaliceRow2Image} alt="chalice" />
				</div>
				<div className={`${classes["text-box"]} ${classes["item"]}`}>
					<div className={classes.title}></div>
					<div className={classes.copy}></div>
					<div className={classes.link}></div>
				</div>

				{/* <!-- Row 3 --> */}
				<div className={classes.item}>
					<img src={cherryRow3Image} alt="cherry" />
				</div>
				<div className={classes.item}>
					<img src={orangeRow3Image} alt="orange" />
				</div>

				{/* <!-- Row 4 --> */}
				<div className={classes.item}>
					4a
					<div className="text"></div>
				</div>
				<div className={classes.item}>
					4b
					<div className="text"></div>
				</div>
				<div className={classes.item}>
					4c
					<div className="text"></div>
				</div>

				{/* <!-- Row 5 --> */}
				<div className={classes.item}>
					<img src={milkRow5Image} alt="milk" />
				</div>
				<div className={classes.item}>
					<img src={orangeSliceRow5Image} alt="orange slice" />
				</div>
				<div className={classes.item}>
					<img src={coneRow5Image} alt="cone" />
				</div>
				<div className={classes.item}>
					<img src={sugarCubesRow5Image} alt="sugarCubes" />
				</div>
			</div>
			<div className={classes.footer}></div>
		</div>
	);
};

export default AgencyLandingPage;
