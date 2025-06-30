import classes from "./FaqAccordion.module.css";

const FaqAccordion = () => {
	return (
		<div className={classes.main}>
			<div className={classes.card}>
				<div className={classes.title}></div>
				<div className={classes["faq-list"]}></div>
			</div>
		</div>
	);
};

export default FaqAccordion;
