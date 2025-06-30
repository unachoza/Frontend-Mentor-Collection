import { useState, type MouseEvent } from "react";
import { type Faq } from "./data/faq.ts";
import classes from "./FaqAccordion.module.css";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";

interface FaqItemProps {
	faq: Faq;
}

const FaqItem = ({ faq }: FaqItemProps) => {
	const { id, question, answer } = faq;
	const [open, setOpen] = useState<boolean>(false);

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setOpen((prevState) => !prevState);
	};
	return (
		<div key={id}>
			<div key={id} className={classes["faq-question-container"]}>
				<div className={classes["faq-question"]}>{question}</div>
				<div className={classes["faq-icon"]} onClick={handleClick}>
					{!open ? <img src={minus} alt="close" /> : <img src={plus} alt="open" />}
				</div>
			</div>
			{open && <div className={classes["faq-answer"]}>{answer}</div>}
		</div>
	);
};
export default FaqItem;
