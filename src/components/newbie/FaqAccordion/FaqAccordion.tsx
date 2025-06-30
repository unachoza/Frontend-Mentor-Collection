import classes from "./FaqAccordion.module.css";
import star from "./assets/images/icon-star.svg";
import { type Faq, faqs } from "./data/faq.ts";
import FaqItem from "./FaqItem.tsx";

const FaqAccordion = () => {
	return (
		<div className={classes.main}>
			<div className={classes.card}>
				<h1 className={classes.title}>
					<img src={star} alt="" />
					FAQs
				</h1>
				<div className={classes["faq-list"]}>
					{faqs.map((faq: Faq) => (
						<FaqItem key={faq.id} faq={faq} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FaqAccordion;
