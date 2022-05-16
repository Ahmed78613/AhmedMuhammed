import React from "react";
import styles from "../sass/pages/experience.module.scss";

function Experience() {
	return (
		<main className={styles.experience}>
			<h1>Experience / Skills</h1>

			<section className={styles.details}>
				<div className={styles.item}>
					<h2>College</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
						mattis, tellus in dignissim scelerisque, tellus elit rutrum libero,
						at suscipit magna leo eget lorem. Donec eu blandit nunc.
						Pellentesque quis metus sed elit auctor consectetur nec sit amet
						dolor.
					</p>
				</div>
				<div className={styles.item}>
					<h2>University</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
						mattis, tellus in dignissim scelerisque, tellus elit rutrum libero,
						at suscipit magna leo eget lorem. Donec eu blandit nunc.
						Pellentesque quis metus sed elit auctor consectetur nec sit amet
						dolor.
					</p>
				</div>
				<div className={styles.bottomDiv}>
					<div className={` ${styles.bottomItem} ${styles.internship}`}>
						<h2>Internship</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							mattis, tellus in dignissim scelerisque, tellus elit rutrum
							libero, at suscipit magna leo eget lorem. Donec eu blandit nunc.
							Pellentesque quis metus sed elit auctor consectetur nec sit amet
							dolor.
						</p>
					</div>
					<div className={styles.bottomItem}>
						<h2>Self Development</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							mattis, tellus in dignissim scelerisque, tellus elit rutrum
							libero, at suscipit magna leo eget lorem. Donec eu blandit nunc.
							Pellentesque quis metus sed elit auctor consectetur nec sit amet
							dolor.
						</p>
					</div>
				</div>
				<div className={styles.skills}>
					<h3>
						<span>&#60;</span> Frontend | ReactJS | Javascript | CSS/Sass | HTML
						| UI/UX Design
						<span>/&#62;</span>
					</h3>
				</div>
			</section>
		</main>
	);
}

export default Experience;
