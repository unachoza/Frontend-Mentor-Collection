import "./FourCardFeatureSections.css";
import supervisor from "./assets/images/icon-supervisor.svg";
import teamBuilder from "./assets/images/icon-team-builder.svg";
import karma from "./assets/images/icon-karma.svg";
import calculator from "./assets/images/icon-calculator.svg";
const FourCardFeatureSections = () => {
	return (
		<div className="root">
			<div className="title-container">
				<div className="top-title">Reliable, efficient delivery</div>
				<div className="bottom-title">Powered by Technology</div>
				<div className="description">
					Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
				</div>
			</div>
			<div className="sections-container">
				<div id="cell-1" className="section">
					<div className="title">Supervisor</div>
					<div className="description"> Monitors activity to identify project roadblocks</div>
					<div className="image">
						<img src={supervisor} alt="magnifying glass icon" />
					</div>
				</div>
				<div id="cell-2" className="section">
					<div className="title">Team Builder</div>
					<div className="description"> Scans our talent network to create the optimal team for your project</div>
					<div className="image">
						<img src={teamBuilder} alt="home icon" />
					</div>
				</div>
				<div id="cell-3" className="section">
					<div className="title">Karma</div>
					<div className="description"> Regularly evaluates our talent to ensure quality</div>
					<div className="image">
						<img src={karma} alt="lightbulb icon" />
					</div>
				</div>
				<div id="cell-4" className="section">
					<div className="title">Calculator</div>
					<div className="description"> Uses data from past projects to provide better delivery estimates</div>
					<div className="image">
						<img src={calculator} alt="calculator icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FourCardFeatureSections;
