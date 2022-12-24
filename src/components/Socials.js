import React from "react";
import styles from "../sass/pages/socials.module.scss";

const Socials = () => {
	return (
		<div className={styles.socials}>
			<a
				href="https://www.linkedin.com/in/ahmed-muhammed-/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="fa-brands fa-linkedin"></i>
			</a>
			<a href="https://github.com/Ahmed78613" target="_blank" rel="noreferrer">
				<i className="fa-brands fa-github-square"></i>
			</a>
		</div>
	);
};

export default Socials;
