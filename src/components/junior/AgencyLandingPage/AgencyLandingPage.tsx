import headerImage from "./images/desktop/image-header.jpg";
import "./AgencyLandingPage.module.css";

const AgencyLandingPage = () => {
	return (
		<div>
			<div className="hero">
				<img src={headerImage} alt="orange" />
			</div>
			<div className="grid-container">
				{/* <!-- Row 1 --> */}
				<div className="item">1a</div>
				<div className="item">1b</div>

				{/* <!-- Row 2 --> */}
				<div className="item">2a</div>
				<div className="item">2b</div>

				{/* <!-- Row 3 --> */}
				<div className="item">3a</div>
				<div className="item">3b</div>

				{/* <!-- Row 4 --> */}
				<div className="item">4a</div>
				<div className="item">4b</div>
				<div className="item">4c</div>

				{/* <!-- Row 5 --> */}
				<div className="item">5a</div>
				<div className="item">5b</div>
				<div className="item">5c</div>
				<div className="item">5d</div>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default AgencyLandingPage;
