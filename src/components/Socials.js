import React from "react";
import styles from "../sass/pages/socials.module.scss";

const Socials = () => {
	return (
		<div className={styles.socials}>
			<a href="https://www.linkedin.com/in/ahmed-muhammed-/">
				<i class="fa-brands fa-linkedin"></i>
			</a>
			<a href="https://github.com/Ahmed78613">
				<i class="fa-brands fa-github-square"></i>
			</a>
		</div>
	);
};

export default Socials;
