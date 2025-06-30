import { useState, KeyboardEvent, MouseEvent } from "react";
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

	const toggleOpen = () => {
		setOpen((prevState) => !prevState);
	};

	const handleClick = () => toggleOpen();

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleOpen();
		}
	};

	const handleIconClick = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation(); // make icon click independent
		toggleOpen();
	};

	return (
		<div key={id}>
			<div
				key={id}
				className={classes["faq-question-container"]}
				role="button"
				tabIndex={0}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				aria-expanded={open}
				aria-controls={`faq-answer-${id}`}
			>
				<div className={classes["faq-question"]}>{question}</div>
				<div className={classes["faq-icon"]} onClick={handleIconClick}>
					{open ? <img src={minus} alt="close" /> : <img src={plus} alt="open" />}
				</div>
			</div>
			<div id={`faq-answer-${id}`} className={`${classes["faq-answer"]} ${open ? classes.open : ""}`}>
				{answer}
			</div>
		</div>
	);
};
export default FaqItem;
