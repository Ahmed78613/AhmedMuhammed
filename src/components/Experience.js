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
						Key modules included Cyber Security, Animation (2D and 3D),
						Networking, Project Management, Multimedia, E-commerce, Website
						Production, Animation and Programming and more.
					</p>
				</div>
				<div className={styles.item}>
					<h2>University</h2>
					<p>
						<strong>Year 1:</strong> Information Systems Modelling and Design,
						Software Development, Web Technologies, Maths for Computing,
						Computer Systems and Networks, Mental Wealth; Professional Life 1.
						<br /> <br />
						<strong>Year 2:</strong> Database Systems (SQL), Mental Wealth;
						Business Intelligence Analysis, Web and Mobile App Development,
						Mental Wealth; Professional Life 2 (Computing in Practice), Cyber
						Security and Information Systems, Strategy and Management.
						<br /> <br />
						<strong>Year 3:</strong> Business Continuity, Project Management,
						Enterprise Architecture and Cloud Computing, Advance Topics in
						Business Computing and Mental Wealth; Professional Life 3
						(Dissertation).
					</p>
				</div>
				<div className={styles.bottomDiv}>
					<div className={` ${styles.bottomItem} ${styles.internship}`}>
						<h2>Internship</h2>
						<p>
							2-month internship as a front-end web developer, utilising
							WordPress. Designed, created and delivered a website alongside my
							team for a financially based business.
						</p>
					</div>
					<div className={styles.bottomItem}>
						<h2>Self Development</h2>
						<p>
							Personal Development as a Front-End Developer. Learning/Developing
							my skills and experience in frontend development, UI/UX design,
							ReactJS, JavaScript CSS/Sass and HTML.
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
