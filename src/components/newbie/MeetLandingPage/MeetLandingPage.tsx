import logo from "./assets/logo.svg";
import "./MeetLandingPage.css";

const MeetingLandingPage = () => {
	return( 
    <div className="main">
        <div className="nav">
            <img src={logo} alt="company logo" />
        </div>
        <div className="hero"></div>
        <div className="main"></div>
        <div className="footer"></div>

    </div>);
};

export default MeetingLandingPage;
