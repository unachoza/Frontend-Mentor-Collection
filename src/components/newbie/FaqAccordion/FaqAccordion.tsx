import classes from "./FaqAccordion.module.css";

const FaqAccordion = () => {
	return (
		<div className={classes.main}>
			<div className="card">
				<div className="title"></div>
				<div className="faq-list"></div>
			</div>
		</div>
	);
};

export default FaqAccordion;
